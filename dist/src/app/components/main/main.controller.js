define([

], () => {
    "use strict";

    const KEY = 'list'

    function Controller($scope, $localForage) {

        $localForage.bind($scope, { key: KEY, defaultValue: [] })
        $scope.$on('$destroy', () => $localForage.unbind($scope, KEY))
    }

    return [ '$scope', '$localForage', Controller ]
})

