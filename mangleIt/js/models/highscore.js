System.register(['./user'], function(exports_1) {
    var user_1;
    var Highscore;
    return {
        setters:[
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            /**
             * Simple list of users sorted desc by their score
             */
            Highscore = (function () {
                function Highscore(firebase, users) {
                    if (users === void 0) { users = []; }
                    this._firebase = firebase;
                    this._users = users;
                    this._usersPromise = this.requestUsersToFirebase();
                }
                Highscore.factory = function (firebase, users) {
                    if (users === void 0) { users = []; }
                    return new Highscore(firebase, users);
                };
                Highscore.prototype.addUsers = function (users) {
                    this._users = users;
                };
                Highscore.prototype.addUser = function (user) {
                    this._users.push(user);
                };
                Object.defineProperty(Highscore.prototype, "highscore", {
                    /**
                     * Returns the list of users and their scores sorted desc by totalScore
                     */
                    get: function () {
                        if (this.hasUsers) {
                            // let's sort it (I know, this is quite slow, and I could use a binary search
                            // to insert into a sorted array in the "addUser" method, but... I'm lazy today :-P)
                            return this._users.sort(function (user1, user2) {
                                var scoreUser1 = user1.totalScore;
                                var scoreUser2 = user2.totalScore;
                                return scoreUser1 === scoreUser2 ? 0 : (scoreUser1 < scoreUser2 ? 1 : -1);
                            });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Highscore.prototype, "users", {
                    get: function () {
                        return this._users;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Highscore.prototype, "hasUsers", {
                    get: function () {
                        return !!(this._users && this._users.length);
                    },
                    enumerable: true,
                    configurable: true
                });
                Highscore.prototype.onUsers = function () {
                    return this._usersPromise;
                };
                Highscore.prototype.requestUsersToFirebase = function () {
                    var _this = this;
                    var usersRef = this._firebase.child('users');
                    return new Promise(function (resolve, reject) {
                        usersRef.once('value', function (dataSnapshot) {
                            var val = dataSnapshot.val();
                            if (val) {
                                _this._users = _this.processData(val);
                                console.log('Users retrieved from backend:', _this._users);
                                resolve(_this._users);
                            }
                            else {
                                reject();
                            }
                        });
                    });
                };
                Highscore.prototype.processData = function (data) {
                    var users = [];
                    for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
                        var key = _a[_i];
                        users.push(this.makeUserFromObject(JSON.parse(data[key])));
                    }
                    return users;
                };
                /**
                 * Creates an User instance from a plain object
                 */
                Highscore.prototype.makeUserFromObject = function (userObj) {
                    var user = new user_1.default(userObj.name);
                    var result = userObj.result;
                    for (var _i = 0; _i < result.length; _i++) {
                        var res = result[_i];
                        user.addScore({
                            word: res.word,
                            points: res.points,
                            neg: res.neg,
                            score: res.score,
                            time: res.time
                        });
                    }
                    return user;
                };
                return Highscore;
            })();
            exports_1("default", Highscore);
        }
    }
});
