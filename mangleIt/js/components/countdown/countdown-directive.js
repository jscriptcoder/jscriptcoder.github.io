System.register(['./countdown-controller'], function(exports_1) {
    var countdown_controller_1;
    var CountdownDirective;
    return {
        setters:[
            function (countdown_controller_1_1) {
                countdown_controller_1 = countdown_controller_1_1;
            }],
        execute: function() {
            CountdownDirective = (function () {
                function CountdownDirective() {
                    this.controller = countdown_controller_1.default;
                    this.controllerAs = 'countdownCtrl';
                    this.replace = true;
                    this.restrict = 'E';
                    this.templateUrl = 'templates/countdown.html';
                    this.scope = {
                        timeout: '@',
                        onEnd: '&'
                    };
                }
                CountdownDirective.factory = function () {
                    return new CountdownDirective();
                };
                return CountdownDirective;
            })();
            exports_1("default", CountdownDirective);
        }
    }
});
