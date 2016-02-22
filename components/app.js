angular.module('quizApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: 'components/home/homeView.html',
      controller: 'homeCtrl',
      url: '/'
    })
})
