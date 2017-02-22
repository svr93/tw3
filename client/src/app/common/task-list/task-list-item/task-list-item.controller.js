define([

], () => {
    "use strict";

    function Controller($scope) {

        this._$scope = $scope
    }

    Controller.prototype.getId = function(index) {

        return `${ this.params.prefix }${ index }`
    }

    Controller.prototype.enableEditMode = function() {

        this.editMode = true
    }

    Controller.prototype.disableEditMode = function() {

        this.editMode = false
        this._$scope.$emit('resort')
    }

    Controller.prototype.removeTask = function(index) {

        this._$scope.$emit('remove', index)
    }

    return [ '$scope', Controller ]
})
