angular.module('quizApp')
.directive('multipleChoice', function() {
  return {
    templateUrl: 'components/quiz/partials/multipleChoiceTmpl.html',
    scope: {
      question: '=',
      save: '&',
      answers: '='
    },
    controller: function($scope) {
      $scope.$watch('question', function() {
        $scope.selected = '';
      });

      $scope.update = function(choice) {
        if (choice) {
          $scope.selected = choice;
        }
      }

      $scope.saveAnswer = function(selected) {
        $scope.save({id: $scope.question.id, answer: selected})
      }
    },
    restrict: 'AE',
    replace: true
  }
})