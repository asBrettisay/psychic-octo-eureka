angular.module('quizApp')
.controller('quizCtrl', function($scope, $stateParams, quizService, $rootScope) {

  quizService.getQuestions($stateParams.quizName).then(function(questions) {
    $scope.questions = questions.questions;
    if (!$scope.currentQuestion) {
      $scope.currentQuestion = $scope.questions[0];
      if ($scope.currentQuestion.qtype === "multiple") {
        $scope.multiple = true;
      } else {
        $scope.multiple = false;
      }
    }
  });

  $scope.answers = {};


  $scope.nextQuestion = function() {
    $scope.currentIndex++;
    $scope.currentQuestion = $scope.questions[$scope.currentIndex];
  }

  $scope.setCurrentQuestion = function(qId) {
    var questions = $scope.questions;
    for (var prop in questions) {
      if (questions[prop].id === qId) {
        $scope.currentQuestion = questions[prop]
      }
    }
  }

  $scope.resetAnswers = function() {
    $scope.answers = {};
    $scope.selectedAnswer = null;
  }

  $scope.save = function(id, answer) {
    $scope.setCurrentQuestion(($scope.currentQuestion.id) + 1);
    if ($scope.currentQuestion.qtype === 'multiple') {
      $scope.multiple = true;
    } else if ($scope.currentQuestion.qtype === 'blank') {
      $scope.multiple = false;
    }
    $scope.answers[id] = answer;
    if ($scope.answers.length === $scope.questions.length) {
      $scope.finished = true;
    }
  }

  $scope.checkAnswers = function() {
    $scope.displayResults = true;

    $scope.questions.forEach(function(question) {
      if (question.qtype === "multiple")
      question.answer = Number(question.answer)
    })

    $scope.questions.forEach(function(question) {
      if (question.answer === question.correct) {
        question.correctly = "Correct";
      } else {
        question.correctly = "Incorrect";
      }
    })
  }

  $scope.finished = false;
  $scope.displayResults = false;

  $scope.answeredAll = function() {
    var ans = true;
    $scope.questions.forEach(function(question) {
      if (!question.answer) {
        ans = false;
      }
    })
    $scope.finished = ans;
  }

  $scope.reset = function() {
    $scope.questions.forEach(function(question) {
      question.answer = null;
    })
    $scope.finished = false;
    $scope.displayResults = false;
  }

})
