angular.module('quizApp')
.directive('questionList', function() {
  return {
    scope: {
      questions: '=',
      answers: '=',
      currentQuestion: '=',
      setCurrentQuestion: '&',
    },
    templateUrl: 'components/quiz/partials/quizListView.html'
  }
});
