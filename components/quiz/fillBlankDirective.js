angular.module('quizApp')
.directive('fillBlank', function() {
  return {
    templateUrl: 'components/quiz/partials/fillBlankTmpl.html',
    restrict: 'AE',
    replace: true,
    scope: {
      question: '=',
      save: '&',
      answers: '='
    },
    controller: function($scope) {

      $scope.saveAnswer = function(selected) {
        $scope.save({id: $scope.question.id, answer: selected})
      };

      $scope.handleEnter = function(e, answer) {
        if (e.keycode === 13) {
          $scope.saveAnswer(answer);
        }
      };

      $scope.$watch('question', function() {
        if ($scope.answers[$scope.question.id]) {
          $scope.answer = $scope.answers[$scope.question.id]
        } else {
          $scope.answer = "";
        }
      })
    }
  }
})
