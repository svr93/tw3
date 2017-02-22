define([

    'angular',
    './main/main',
], (angular, Main) => {
    "use strict";

    const module = angular
        .module('app.components', [

            Main,
        ])

    return module.name
})
