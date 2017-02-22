define([

    'angular',
    './task-list-item.component',
], (angular, Component) => {
    "use strict";

    const module = angular
        .module('common.taskListItem', [  ])
        .component('taskListItem', Component)

    return module.name
})
