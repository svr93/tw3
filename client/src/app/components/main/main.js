define([

    'angular',
    'angular-ui-router',
    'angular-local-forage',
    './main.component',
], (angular, uiRouter, localForage, Component) => {
    "use strict";

    const module = angular
        .module('main', [ uiRouter, localForage ])
        .config([ '$stateProvider', ($sP) => {

            $sP.state('main', {

                url: '/main',
                template: Component.template,
                controller: Component.controller,
                controllerAs: '$ctrl',
            })
        } ])
        .config([ '$urlRouterProvider', ($uRP) => $uRP.otherwise('/main') ])

    return module.name
})
