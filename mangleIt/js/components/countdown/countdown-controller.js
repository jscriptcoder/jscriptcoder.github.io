System.register([], function(exports_1) {
    var CountdownController;
    return {
        setters:[],
        execute: function() {
            CountdownController = (function () {
                function CountdownController($scope) {
                    this._currTime = 0;
                    this._digits = ['0', '0'];
                    this.$scope = $scope;
                    this._timeout = parseInt($scope.timeout, 10);
                    this._onEnd = $scope.onEnd || angular.noop;
                    this.initTimer();
                }
                Object.defineProperty(CountdownController.prototype, "digits", {
                    get: function () {
                        return this._digits;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Will change the color of the clock depending according to the following
                 *   up to 50% ==> ok
                 *   50% - 90% ==> warning
                 *   +90% ==> danger
                 */
                CountdownController.prototype.getClassByTime = function () {
                    var percentage = this._currTime * 100 / this._timeout;
                    if (percentage <= 50) {
                        return 'ok';
                    }
                    else if (percentage > 50 && percentage <= 90) {
                        return 'warning';
                    }
                    else {
                        return 'danger';
                    }
                };
                CountdownController.prototype.initTimer = function () {
                    var _this = this;
                    var interval = setInterval(function () {
                        if (_this._currTime === _this._timeout) {
                            clearInterval(interval);
                            _this._onEnd();
                        }
                        else {
                            // next tick
                            _this.$scope.$apply(function () {
                                _this._currTime++;
                                _this._digits = _this.makeDigitsFromNumber(_this._currTime);
                            });
                        }
                    }, 1000);
                };
                /**
                 * Turns x or xx into 'xx'
                 */
                CountdownController.prototype.makeDigitsFromNumber = function (val) {
                    var strVal = (val <= 9 ? '0' : '') + ("" + val); // converts to string appending '0' if <= 9
                    return strVal.split(''); // converts to string[]
                };
                CountdownController.$inject = ['$scope'];
                return CountdownController;
            })();
            exports_1("default", CountdownController);
        }
    }
});
