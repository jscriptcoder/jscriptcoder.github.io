System.register(['./mangle-it-controller'], function(exports_1) {
    var mangle_it_controller_1;
    var MangleItDirective;
    return {
        setters:[
            function (mangle_it_controller_1_1) {
                mangle_it_controller_1 = mangle_it_controller_1_1;
            }],
        execute: function() {
            MangleItDirective = (function () {
                function MangleItDirective() {
                    this.controller = mangle_it_controller_1.default;
                    this.controllerAs = 'mangleItCtrl';
                    this.replace = true;
                    this.restrict = 'E';
                    this.templateUrl = 'templates/mangle-it.html';
                }
                MangleItDirective.factory = function () {
                    return new MangleItDirective();
                };
                return MangleItDirective;
            })();
            exports_1("default", MangleItDirective);
        }
    }
});
