define([

    'angular',
    './common/common',

    './components/components',
    './app.component',
    '$$',
], (angular, Common, Components, AppComponent, $$) => {
    "use strict";

    angular
        .module('app', [ Common, Components ])
        .component('app', AppComponent)

    angular.bootstrap($$('body'), [ 'app' ], null)
})
