/*
    eslint-disable
    requirejs/no-multiple-define,
    requirejs/no-named-define,
    requirejs/no-invalid-define
 */

requirejs.config({

    deps: [

        'global/web-api',
        '_ui-router-extras',
        '_local-forage',
    ],
    callback: function() {
        "use strict";

        define('angular-ui-router', 'ct.ui.router.extras.dsr')
        define('angular-local-forage', 'LocalForageModule')

        requirejs([ 'app/app' ])
    },
})
