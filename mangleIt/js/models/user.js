System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            /**
             * Basic model to store info about the user and his/her score.
             * This will be store as it is in firebase.
             */
            User = (function () {
                function User(name) {
                    if (name === void 0) { name = ''; }
                    this.name = name;
                    this.result = [];
                }
                User.prototype.addScore = function (wordScore) {
                    this.result.push(wordScore);
                };
                Object.defineProperty(User.prototype, "totalScore", {
                    get: function () {
                        var total = 0;
                        for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                            var wordScore = _a[_i];
                            total += wordScore.score;
                        }
                        return total;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(User.prototype, "totalTime", {
                    get: function () {
                        var total = 0;
                        for (var _i = 0, _a = this.result; _i < _a.length; _i++) {
                            var wordScore = _a[_i];
                            total += wordScore.time;
                        }
                        return total;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * In here we accumulate all the negative points
                 */
                User.prototype.decreaseOnePoint = function (pos) {
                    if (this.result.length) {
                        if (typeof pos === 'string') {
                            switch (pos) {
                                case 'first':
                                    this.decreaseOnePoint(0);
                                    break;
                                case 'last':
                                    this.decreaseOnePoint(this.result.length - 1);
                                    break;
                            }
                        }
                        else if (typeof pos === 'number' && pos >= 0 && pos < this.result.length) {
                            this.result[pos].neg++;
                        }
                    }
                };
                /**
                 * score = points - neg ==> >= 0
                 */
                User.prototype.addPoints = function (pos) {
                    if (this.result.length) {
                        if (typeof pos === 'string') {
                            switch (pos) {
                                case 'first':
                                    this.addPoints(0);
                                    break;
                                case 'last':
                                    this.addPoints(this.result.length - 1);
                                    break;
                            }
                        }
                        else if (typeof pos === 'number' && pos >= 0 && pos < this.result.length) {
                            this.result[pos].score = this.result[pos].points - this.result[pos].neg;
                            if (this.result[pos].score < 0)
                                this.result[pos].score = 0;
                        }
                    }
                };
                return User;
            })();
            exports_1("default", User);
        }
    }
});
