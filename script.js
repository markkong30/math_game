$(document).ready (function () {

  var leftNum;
  var rightNum;
  var question;
  var currentScore = 0;
  var scoreArr = [];
  
  var questionGenerator = function () {
    leftNum = Math.floor(Math.random() * 10);
    rightNum = Math.floor(Math.random() * 10);
    var questionDisplay = leftNum + ' + ' + rightNum;
    $('#question').html(questionDisplay);
  
    question = leftNum + rightNum;
  };
  
  var currentScoreCount = function (score) {
      currentScore +=score;
      $('#currentScore').html(currentScore);
  };
  
  var highScoreCount = function () {
    scoreArr.push(currentScore);
    var highScore = Math.max.apply(null, scoreArr);
    $('#highScore').html(highScore);
  };
  
  
  $('#answer').on('keyup', function () {
    if ($(this).val() == question) {
      updateTimeLeft(1);
      $(this).val('');
      currentScoreCount(1);
      questionGenerator();
      
    }
  });
  
  var timeLeft = 10;
  var timer = null;
  var timeDisplay = $('#timer');
  
  var startTimer = function () {
    if (!timer) {
      timer = setInterval(function () {
        if (timeLeft === 0) {
          updateTimeLeft(10);
          highScoreCount();
          currentScoreCount(-currentScore);
          stopTimer();
          return;
        }
        updateTimeLeft(-1);
      }, 1000);
      }
  };
  
  var updateTimeLeft = function (sec) {
    timeLeft += sec;
    timeDisplay.html(timeLeft);
  }
  
  var stopTimer = function () {
    window.clearInterval(timer);
    timer = null;
  };
  
  $('#answer').on('keydown', function () {
    startTimer();
  })
  
  
  
  
  questionGenerator();
  
  });