/***************
 * ENTRY POINT *
 ***************/
System.register(['./config', './models/user', './services/firebase-provider', './services/countdown-provider', './components/mangle-it/mangle-it-directive', './components/countdown/countdown-directive', './components/highscore/highscore-directive'], function(exports_1) {
    var config, user_1, firebase_provider_1, countdown_provider_1, mangle_it_directive_1, countdown_directive_1, highscore_directive_1;
    var mangleItApp;
    return {
        setters:[
            function (config_1) {
                config = config_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (firebase_provider_1_1) {
                firebase_provider_1 = firebase_provider_1_1;
            },
            function (countdown_provider_1_1) {
                countdown_provider_1 = countdown_provider_1_1;
            },
            function (mangle_it_directive_1_1) {
                mangle_it_directive_1 = mangle_it_directive_1_1;
            },
            function (countdown_directive_1_1) {
                countdown_directive_1 = countdown_directive_1_1;
            },
            function (highscore_directive_1_1) {
                highscore_directive_1 = highscore_directive_1_1;
            }],
        execute: function() {
            // creates application
            exports_1("mangleItApp", mangleItApp = angular.module(config.APP_NAME, ['ui.router']));
            // registration of services, components and initial configuration
            mangleItApp
                .provider('firebase', firebase_provider_1.default)
                .provider('countdown', countdown_provider_1.default)
                .value('user', new user_1.default())
                .directive('mangleIt', mangle_it_directive_1.default.factory)
                .directive('countdown', countdown_directive_1.default.factory)
                .directive('highscore', highscore_directive_1.default.factory)
                .config([
                '$stateProvider',
                'firebaseProvider',
                'countdownProvider',
                function ($stateProvider, firebaseProvider, countdownProvider) {
                    // configures routing
                    $stateProvider
                        .state('index', {
                        url: '',
                        template: '<mangle-it></mangle-it>'
                    })
                        .state('highscore', {
                        url: '/highscore',
                        template: '<highscore></highscore>'
                    });
                    // configures firebase url
                    firebaseProvider.url = config.FB_URL;
                    // configures countdown timeout
                    countdownProvider.timeout = config.COUNT_TIMEOUT;
                }]);
            // manual bootstrapping
            angular.bootstrap(document, [config.APP_NAME]);
        }
    }
});
