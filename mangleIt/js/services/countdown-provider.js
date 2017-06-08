System.register(['../models/countdown'], function(exports_1) {
    var countdown_1;
    var CountdownProvider;
    return {
        setters:[
            function (countdown_1_1) {
                countdown_1 = countdown_1_1;
            }],
        execute: function() {
            /**
             * Service provider of Countdown
             */
            CountdownProvider = (function () {
                function CountdownProvider() {
                    var _this = this;
                    this.$get = function () {
                        return new countdown_1.default(_this._timeout);
                    };
                }
                Object.defineProperty(CountdownProvider.prototype, "timeout", {
                    set: function (timeout) {
                        this._timeout = timeout;
                    },
                    enumerable: true,
                    configurable: true
                });
                return CountdownProvider;
            })();
            exports_1("default", CountdownProvider);
        }
    }
});
