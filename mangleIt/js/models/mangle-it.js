/// <reference path="../typings/mangle-it.d.ts" />
System.register([], function(exports_1) {
    var MangleIt;
    return {
        setters:[],
        execute: function() {
            MangleIt = (function () {
                function MangleIt(countdown, firebase, user) {
                    this._gameOn = false;
                    this._gameOver = false;
                    this._words = [];
                    this._idxCurrentWord = 0;
                    this._countdown = countdown;
                    this._firebase = firebase;
                    this._user = user; // could be set later on
                    this._wordsPromise = this.requestWordsToFirebase();
                }
                /**
                 * The reason for this static method is to make it easy to monkeypatch and return a mock
                 */
                MangleIt.factory = function (countdown, firebase, user) {
                    return new MangleIt(countdown, firebase, user);
                };
                Object.defineProperty(MangleIt.prototype, "user", {
                    get: function () {
                        return this._user;
                    },
                    set: function (user) {
                        this._user = user;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleIt.prototype, "gameOn", {
                    set: function (isOn) {
                        this._gameOn = isOn;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleIt.prototype, "gameOver", {
                    set: function (isOver) {
                        this._gameOver = isOver;
                    },
                    enumerable: true,
                    configurable: true
                });
                MangleIt.prototype.start = function () {
                    if (this._gameOn && !this._gameOver) {
                        // subscribes to the end of the countdown
                        this._countdown.start().then(this.onCountdownEnd.bind(this));
                        this.getNextMangledWord();
                    }
                };
                Object.defineProperty(MangleIt.prototype, "isGameOn", {
                    get: function () {
                        return this._gameOn;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleIt.prototype, "isGameOver", {
                    get: function () {
                        return this._gameOver;
                    },
                    enumerable: true,
                    configurable: true
                });
                MangleIt.prototype.onWords = function () {
                    return this._wordsPromise;
                };
                Object.defineProperty(MangleIt.prototype, "words", {
                    get: function () {
                        return this._words;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleIt.prototype, "totalScoreParticipant", {
                    get: function () {
                        return this.user.totalScore;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * This method will bring the next word to the game
                 */
                MangleIt.prototype.getNextMangledWord = function () {
                    if (this._gameOver ||
                        !this._gameOn ||
                        !this._countdown.isOn)
                        return; // we cannot play the game
                    if (this._idxCurrentWord < this._words.length) {
                        var nextWord = this._words[this._idxCurrentWord++];
                        var mangledWord = this.mangleWord(nextWord);
                        this.user.addScore({
                            word: nextWord,
                            points: Math.floor(Math.pow(1.95, nextWord.length / 3)),
                            score: 0,
                            neg: 0,
                            time: 0
                        });
                        return this._currMangledWord = [mangledWord, nextWord]; // returns the mangled and original one
                    }
                    else {
                    }
                };
                Object.defineProperty(MangleIt.prototype, "mangledWord", {
                    get: function () {
                        return this._currMangledWord ? this._currMangledWord[0] : ''; // returns the mangled one
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleIt.prototype, "hasMangledWord", {
                    get: function () {
                        return !!this.mangledWord;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleIt.prototype, "unmangledWord", {
                    get: function () {
                        return this._currMangledWord ? this._currMangledWord[1] : ''; // returns the unmangled one
                    },
                    enumerable: true,
                    configurable: true
                });
                MangleIt.prototype.addPointsToParticipant = function () {
                    this.user.addPoints('last');
                };
                MangleIt.prototype.substractOnePointFromParticipant = function () {
                    this.user.decreaseOnePoint('last');
                };
                Object.defineProperty(MangleIt.prototype, "timeout", {
                    get: function () {
                        return this._countdown.timeout;
                    },
                    enumerable: true,
                    configurable: true
                });
                MangleIt.prototype.submitScore = function () {
                    var _this = this;
                    var usersRef = this._firebase.child('users');
                    return new Promise(function (resolve, reject) {
                        console.log('Sending to backend:', _this._user);
                        var serializedUser = JSON.stringify(_this._user);
                        usersRef.push(serializedUser, function (error) {
                            if (error) {
                                reject();
                            }
                            else {
                                resolve(_this._user);
                            }
                        });
                    });
                };
                /**
                 * Magic crappy shuffling algorithm
                 */
                MangleIt.prototype.shuffleWords = function (words) {
                    var shuffleWords = [], wordIndex = 0;
                    while (words.length > 0) {
                        wordIndex = Math.floor(Math.random() * words.length);
                        shuffleWords.push(words[wordIndex]);
                        words.splice(wordIndex, 1);
                    }
                    return shuffleWords;
                };
                /**
                 * More magic crap happnening in here
                 */
                MangleIt.prototype.mangleWord = function (word) {
                    var mangledWord = '', charIndex = 0, arrWord = word.split(''); // converts into string[]
                    while (arrWord.length > 0) {
                        charIndex = Math.floor(Math.random() * arrWord.length);
                        mangledWord += arrWord[charIndex];
                        arrWord.splice(charIndex, 1);
                    }
                    return mangledWord;
                };
                MangleIt.prototype.requestWordsToFirebase = function () {
                    var _this = this;
                    var wordsRef = this._firebase.child('words');
                    return new Promise(function (resolve, reject) {
                        wordsRef.once('value', function (dataSnapshot) {
                            var val = dataSnapshot.val();
                            if (val) {
                                _this._words = _this.shuffleWords(val.split(','));
                                console.log('Words retrieved from backend:', _this._words);
                                resolve(_this._words);
                            }
                            else {
                                reject();
                            }
                        });
                    });
                };
                MangleIt.prototype.onCountdownEnd = function () {
                    // resets values
                    this._idxCurrentWord = 0;
                    this._currMangledWord = [];
                    // the game is over
                    this._gameOver = true;
                };
                return MangleIt;
            })();
            exports_1("default", MangleIt);
        }
    }
});
