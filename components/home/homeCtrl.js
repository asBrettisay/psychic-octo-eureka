angular.module('quizApp')
.controller('homeCtrl', function($scope, quizService, quizList) {
  $scope.quizzes = quizList;
  
  $scope.pastQuizzes = [{
    name: 'angular',
    archive: [{
      date: "02016252552"
    }]
  },
  {
    name: 'firebase',
    archive: [{
      date: '20202202'
    },
    {
      date: '202252436'
    }]
  },
  {
    name: 'angular-ui'
  }];

});
