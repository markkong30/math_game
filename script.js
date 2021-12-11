$(document).ready(function () {

  var leftNum;
  var rightNum;
  var question;
  var currentScore = 0;
  var scoreArr = [];

  var types = ['+'];
  var selected;
  var selectType = function () {
    selected = (_.sample(types, 1)).toString();
    return selected;
  };

  var questionGenerator = function () {
    leftNum = Math.floor(Math.random() * 10);
    rightNum = Math.floor(Math.random() * 10);
    var questionDisplay = leftNum + ' ' + selectType() + ' ' + rightNum;
    $('#question').html(questionDisplay);

    switch (selected) {
      case "+":
        question = leftNum + rightNum;
        break;
      case "-":
        question = leftNum - rightNum;
        break;
      case "*":
        question = leftNum * rightNum;
        break;
      case "/":
        question = leftNum / rightNum;
        break;
    }
  };

  var currentScoreCount = function (score) {
    currentScore += score;
    $('.currentScore').html(currentScore);
  };

  var highScoreCount = function () {
    scoreArr.push(currentScore);
    var highScore = Math.max.apply(null, scoreArr);
    $('.highScore').html(highScore);
  };


  $('#answer').on('keyup', function () {
    if ($(this).val() == question) {

      check();
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
  });




  var check = function () {
    types.length = 0;
    if ($('#plus').prop('checked')) {
      types.push('+');
    };
    if ($('#minus').prop('checked')) {
      types.push('-');
    };
    if ($('#times').prop('checked')) {
      types.push('*');
    };
    if ($('#divide').prop('checked')) {
      types.push('/');
    };
  }


  questionGenerator();

}); 