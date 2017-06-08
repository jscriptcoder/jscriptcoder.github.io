System.register(['./highscore-controller'], function(exports_1) {
    var highscore_controller_1;
    var HighscoreDirective;
    return {
        setters:[
            function (highscore_controller_1_1) {
                highscore_controller_1 = highscore_controller_1_1;
            }],
        execute: function() {
            HighscoreDirective = (function () {
                function HighscoreDirective() {
                    this.controller = highscore_controller_1.default;
                    this.controllerAs = 'highscoreCtrl';
                    this.replace = true;
                    this.restrict = 'E';
                    this.templateUrl = 'templates/highscore.html';
                }
                HighscoreDirective.factory = function () {
                    return new HighscoreDirective();
                };
                return HighscoreDirective;
            })();
            exports_1("default", HighscoreDirective);
        }
    }
});
