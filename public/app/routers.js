angular.module('appModule')
    .config(['$stateProvider','$urlRouterProvider',configuration]);

function configuration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state( {
            name: 'home',
            abstract: false,
            url: '/home',
            templateUrl: './app/views/home.view.html',
            controller: 'HomeController',
        })
        .state( {
            name: 'home.tarefas',
            url: '/tarefas',
            templateUrl: './app/views/list.view.html',
            controller: 'ListController',
        })
        .state( {
            name: 'login',
            url: '/login',
            templateUrl: './app/views/login.view.html',
            controller: 'LoginController',
        })
};