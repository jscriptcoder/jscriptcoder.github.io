System.register([], function(exports_1) {
    var APP_NAME, FB_URL, COUNT_TIMEOUT;
    return {
        setters:[],
        execute: function() {
            exports_1("APP_NAME", APP_NAME = 'mangleIt');
            exports_1("FB_URL", FB_URL = 'https://mangleit.firebaseio.com/');
            exports_1("COUNT_TIMEOUT", COUNT_TIMEOUT = 40);
        }
    }
});
