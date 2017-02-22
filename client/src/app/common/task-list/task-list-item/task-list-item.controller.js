define([

], () => {
    "use strict";

    function Controller() {

    }

    Controller.prototype.getId = function(index) {

        return `${ this.params.prefix }${ index }`
    }

    return [ Controller ]
})
