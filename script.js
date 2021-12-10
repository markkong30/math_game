$(document).ready (function () {

  var leftNum;
  var rightNum;
  var question;
  var score = 0;
  
  
  var questionGenerator = function () {
    leftNum = Math.floor(Math.random() * 10);
    rightNum = Math.floor(Math.random() * 10);
    var questionDisplay = leftNum + ' + ' + rightNum;
    $('#question').html(questionDisplay);
  
    question = leftNum + rightNum;
    
  };
  
  var currentScoreCount = function () {
      score++;
      $('#currentScore').html(score);
  }
  
  $('#answer').on('keyup', function () {
    if ($(this).val() == question) {
      $(this).val('');
      currentScoreCount();
      questionGenerator();
      stopTimer();
    }
  });
  
  var timeLeft = 10;
  var timer = null;
  var timeDisplay = $('#timer');
  
  var startTimer = function () {
    if (!timer) {
      timer = setInterval(function () {
        timeLeft--;
        timeDisplay.html(timeLeft);
      }, 1000);
      }
  };
  
  var stopTimer = function () {
    window.clearInterval(timer);
    timer = null;
  };
  
  $('#answer').on('keydown', function () {
    startTimer();
  })
  
  
  
  
  questionGenerator();
  

  
  });