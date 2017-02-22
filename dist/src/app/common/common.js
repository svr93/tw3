define([

    'angular',
    './task-list/task-list',
], (angular, TaskList) => {
    "use strict";

    const module = angular
        .module('app.common', [

            TaskList,
        ])

    return module.name
})
