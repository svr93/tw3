define([

], () => {
    "use strict";

    function Controller() {

    }

    Controller.prototype.addTask = function() {

        this.list.unshift({

            title: '...new task',
        })
    }

    return [ Controller ]
})
