System.register([], function(exports_1) {
    var Countdown;
    return {
        setters:[],
        execute: function() {
            /**
             * Very simple countdown with just a "start" method
             * We could improve it by adding "stop", "pause" and "reset" methods
             */
            Countdown = (function () {
                function Countdown(timeout) {
                    if (timeout === void 0) { timeout = 60; }
                    this._on = false;
                    this._timeout = timeout;
                }
                Countdown.prototype.start = function () {
                    var _this = this;
                    this._on = true;
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            _this._on = false;
                            resolve();
                        }, _this._timeout * 1000);
                    });
                };
                Object.defineProperty(Countdown.prototype, "isOn", {
                    get: function () {
                        return this._on;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Countdown.prototype, "timeout", {
                    get: function () {
                        return this._timeout;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Countdown;
            })();
            exports_1("default", Countdown);
        }
    }
});
