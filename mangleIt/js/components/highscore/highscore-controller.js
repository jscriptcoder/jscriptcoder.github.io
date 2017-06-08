System.register(['../../models/highscore'], function(exports_1) {
    var highscore_1;
    var HighscoreController;
    return {
        setters:[
            function (highscore_1_1) {
                highscore_1 = highscore_1_1;
            }],
        execute: function() {
            HighscoreController = (function () {
                function HighscoreController($scope, firebase) {
                    this.$scope = $scope;
                    this.model = highscore_1.default.factory(firebase);
                    // subscribes to onUsers event (we have users' scores from backend)
                    this.model.onUsers().then(this.onUsers.bind(this));
                }
                HighscoreController.prototype.onUsers = function (users) {
                    this.$scope.$apply();
                };
                HighscoreController.$inject = ['$scope', 'firebase'];
                return HighscoreController;
            })();
            exports_1("default", HighscoreController);
        }
    }
});
