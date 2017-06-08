/// <reference path="../typings/firebase/firebase.d.ts" />
System.register([], function(exports_1) {
    var FirebaseProvider;
    return {
        setters:[],
        execute: function() {
            /**
             * Service provider of Firebase
             */
            FirebaseProvider = (function () {
                function FirebaseProvider() {
                    var _this = this;
                    this.$get = function () {
                        return new Firebase(_this._url);
                    };
                }
                Object.defineProperty(FirebaseProvider.prototype, "url", {
                    set: function (url) {
                        this._url = url;
                    },
                    enumerable: true,
                    configurable: true
                });
                return FirebaseProvider;
            })();
            exports_1("default", FirebaseProvider);
        }
    }
});
