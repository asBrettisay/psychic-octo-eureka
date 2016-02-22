angular.module('quizApp')
.controller('homeCtrl', function($scope) {
  $scope.quizzes = [{
    name: 'html',
  },
  {
    name: 'css',
  },
  {
    name: 'javascript'
  }];

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
