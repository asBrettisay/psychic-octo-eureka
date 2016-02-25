angular.module('quizApp')
.controller('quizCtrl', function($scope, $stateParams, quizService, questions) {

  $scope.questions = questions;


  $scope.currentQuestion = questions[0];
  $scope.multiple = $scope.currentQuestion.qtype === 'multiple' ? true : false;


  $scope.answers = {};
  $scope.results = {};
  $scope.finished = false;

  $scope.save = function(answer) {
    $scope.answers[$scope.currentQuestion.id] = answer;
    $scope.choice = null;
    var last = !$scope.nextQuestion();
    if (last) {
      $scope.checkAnswers();
    }

  }
  $scope.nextQuestion = function() {
    var index = $scope.questions.indexOf($scope.currentQuestion)
    if ($scope.questions[index + 1])
    $scope.currentQuestion = $scope.questions[index + 1];
    $scope.multiple = $scope.currentQuestion.qtype === 'multiple' ? true : false;
    return $scope.questions[index + 1] ? true : false;
  }

  $scope.setCurrentQuestion = function(question) {
    $scope.currentQuestion = question;
    $scope.multiple = $scope.currentQuestion.qtype === 'multiple' ? true : false;

  }

  $scope.checkAnswers = function() {
    quizService.checkAnswers($scope.questions, $scope.answers).then(function(response) {
      $scope.finished = true;
      $scope.results = response;
    })
  }

  $scope.reset = function() {
    $scope.answers = {};
    $scope.finished = false;
    $scope.selected = null;
    $scope.questions.forEach(function(question) {
      question.choice = null;
    })
    $scope.currentQuestion = $scope.questions[0];
  }

  $scope.update = function() {
    $scope.selected = $scope.choice;
  }

})
