// eslint-disable-next-line requirejs/amd-function-arity
define([

    'text!./main.html',
    './main.controller',
    'css!./main',
], (template, Controller) => {
    "use strict";

    return Object.freeze({ template: template, controller: Controller })
})
