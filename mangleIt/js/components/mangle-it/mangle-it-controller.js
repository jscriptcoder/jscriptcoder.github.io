System.register(['../../models/mangle-it'], function(exports_1) {
    var mangle_it_1;
    var ENTER, BACKSPACE, MangleItController;
    return {
        setters:[
            function (mangle_it_1_1) {
                mangle_it_1 = mangle_it_1_1;
            }],
        execute: function() {
            ENTER = 13;
            BACKSPACE = 8;
            MangleItController = (function () {
                function MangleItController($scope, $timeout, $state, countdown, firebase, user) {
                    this.enteredWord = '';
                    this.wrongWord = false;
                    this.$scope = $scope;
                    this.$timeout = $timeout;
                    this.$state = $state;
                    this.model = mangle_it_1.default.factory(countdown, firebase, user);
                }
                Object.defineProperty(MangleItController.prototype, "isGameOn", {
                    get: function () {
                        return this.model.isGameOn;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleItController.prototype, "isGameOver", {
                    get: function () {
                        return this.model.isGameOver;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MangleItController.prototype, "isLoadingWords", {
                    get: function () {
                        return this.isGameOn && !this.isGameOver && !this.model.mangledWord;
                    },
                    enumerable: true,
                    configurable: true
                });
                MangleItController.prototype.invalidUsername = function () {
                    return !this.enterNameForm.$pristine && this.enterNameForm.$invalid;
                };
                MangleItController.prototype.pristineInput = function () {
                    return this.enterNameForm.$pristine;
                };
                MangleItController.prototype.startClick = function () {
                    if (!this.pristineInput() && !this.invalidUsername()) {
                        this.model.gameOn = true;
                        // subscribes to onWords event (we have words from backend)
                        this.model.onWords().then(this.onWords.bind(this));
                    }
                };
                MangleItController.prototype.onKeydown = function ($event) {
                    switch ($event.keyCode) {
                        case ENTER:
                            if (this.enteredWord === this.model.unmangledWord) {
                                this.scoreAndMoveToNext();
                            }
                            else {
                                this.showWrongWordError(2); // will show error message for 2 seconds
                            }
                            break;
                        case BACKSPACE:
                            if (this.enteredWord.length) {
                                // oops, we remove one point
                                this.model.substractOnePointFromParticipant();
                            }
                            break;
                    }
                };
                MangleItController.prototype.submitClick = function () {
                    this.model.submitScore();
                    this.$state.go('highscore');
                };
                MangleItController.prototype.onCountdownEnd = function () {
                    this.$scope.$apply();
                };
                MangleItController.prototype.onWords = function () {
                    var _this = this;
                    this.$scope.$apply(function () {
                        // if we have words we kick off the game
                        if (!_this.model.mangledWord)
                            _this.model.start();
                    });
                };
                MangleItController.prototype.showWrongWordError = function (seconds) {
                    var _this = this;
                    this.wrongWord = true;
                    this.$timeout(function () { return _this.wrongWord = false; }, seconds * 1000);
                };
                MangleItController.prototype.scoreAndMoveToNext = function () {
                    this.model.addPointsToParticipant();
                    this.enteredWord = '';
                    this.model.getNextMangledWord();
                };
                MangleItController.$inject = [
                    '$scope',
                    '$timeout',
                    '$state',
                    'countdown',
                    'firebase',
                    'user'
                ];
                return MangleItController;
            })();
            exports_1("default", MangleItController);
        }
    }
});
