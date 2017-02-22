define([

    'angular',
    './task-list-item/task-list-item',
    './task-list.component',
], (angular, TaskListItem, Component) => {
    "use strict";

    const module = angular
        .module('common.taskList', [ TaskListItem ])
        .component('taskList', Component)

    return module.name
})
