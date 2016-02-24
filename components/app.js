angular.module('quizApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: 'components/home/homeView.html',
      controller: 'homeCtrl',
      url: '/'
    })
    .state('quiz', {
      url: '/quiz/:quizName',
      controller: 'quizCtrl',
      templateUrl: 'components/quiz/views/quizContainerView2.html'
    })
    // .state('quiz', {
    //   url: '/quiz/:quizName',
    //   controller: 'quizCtrl',
    //   templateUrl: 'components/quiz/views/quizContainerView.html'
    // })
    // .state('quiz.view', {
    //   parent: 'quiz',
    //   views: {
    //     'list': {
    //       templateUrl: 'components/quiz/views/questionListWrapperView.html'
    //     },
    //     'detail': {
    //       templateUrl: 'components/quiz/views/questionDetailView.html'
    //     }
    //   }
    // })
  });
