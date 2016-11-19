(function (angular) {
    'use strict';

    var app = angular.module('bookstore');

    /**
     * Configurating the general routing for bookstore
     * @param $routeProvider
     */
    var routeConfiguration = function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/app/views/home.jade'
            })
            .otherwise({ redirectTo: '/home' });
    };

    app.config(routeConfiguration);
} (angular));