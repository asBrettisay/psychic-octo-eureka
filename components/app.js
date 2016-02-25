angular.module('quizApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: 'components/home/homeView.html',
      controller: 'homeCtrl',
      url: '/',
      resolve: {
        quizList: function(quizService) {
          return quizService.getQuizNames()
        }
      }
    })
    .state('quiz', {
      url: '/quiz/:quizName',
      controller: 'quizCtrl',
      templateUrl: 'components/quiz/views/quizContainerView.html',
      resolve: {
        questions: function(quizService, $stateParams) {
          return quizService.getQuestions($stateParams.quizName)
        }
      }
    })

  });
