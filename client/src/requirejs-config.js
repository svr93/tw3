// eslint-disable-next-line no-undef
window.requirejs = {

    paths: {

        'bluebird': 'vendor/bluebird/js/browser/bluebird.min',

        'angular': 'vendor/angular/angular.min',
        '_angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router.min',
        '_ui-router-extras': 'vendor/ui-router-extras/release/ct-ui-router-extras.min',
        'localforage': 'vendor/localforage/dist/localforage.min',
        '_local-forage': 'vendor/angular-localforage/dist/angular-localForage.min',

        'text': 'vendor/text/text',

        'selector-alias': 'vendor/selector-alias/selector-alias',
        '$$': 'app/util/selector',
    },
    shim: {

        'angular': { exports: 'angular' },
        '_angular-ui-router': {

            deps: [ 'angular' ],
        },
        '_ui-router-extras': {

            deps: [ '_angular-ui-router' ],
        },
        '_local-forage': {

            deps: [ 'angular' ],
        },
        'selector-alias': { exports: 'Selector' },
    },
    map: {

        '*': { 'css': 'vendor/require-css/css' },
    },
};
