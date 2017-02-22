// eslint-disable-next-line requirejs/amd-function-arity
define([

    'text!./task-list-item.html',
    './task-list-item.controller',
    'css!./task-list-item',
], (template, Controller) => {
    "use strict";

    return Object.freeze({

        template: template,
        controller: Controller,
        bindings: { item: '<', params: '<' },
    })
})
