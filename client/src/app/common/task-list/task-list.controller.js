define([

], () => {
    "use strict";

    function Controller($scope, $filter) {

        const filter = $filter('orderBy')
        $scope.$on('resort', () => this.list = filter(this.list, '-title'))
        $scope.$on('remove', (_, index) => this.list.splice(index, 1))
    }

    Controller.prototype.addTask = function() {

        this.list.unshift({

            title: '...new task',
        })
    }

    return [ '$scope', '$filter', Controller ]
})
