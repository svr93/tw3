define([

    'text!./task-list.html',
    './task-list.controller',
], (template, Controller) => {
    "use strict";

    return Object.freeze({

        template: template,
        controller: Controller,
        bindings: { list: '=', params: '<' },
    })
})
