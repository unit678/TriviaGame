//the seconds counted down and variables of the the correct, wrong, and unanswered questions

var count = 60;
var correct = 0;
var wrong = 0;
var unanswered = 0;

$(document).ready(function () {
  //the page goes into a timeout after a Remaining 1 min


  //Intialize the game with hidden divs once the gane satrts
  $('#duringGame').hide();
  $('#endGame').hide();

  //setting scroll position
  //window.scrollTo(0, 500);

  $('#start').on('click', function () {

    //hiding the first screen
    $('#startContainer').hide();

    //showing the game div when it goes to the next screen
    $('#duringGame').show();

    startCount();
    return;

  });



  //counts down and displays the time to the unanswered
  function countdown() {

    //the count down starts
    count--;

    //starts the count to the Document
    $('#timerNumber').html(count + ' Seconds');

    //the user finishes before time is up and clicks done
    $('#submit').on('click', function () {

      count = 0;
      return;

    });


    //when you finish the game and the time hits 0
    if (count == -1) {

      //collecting all the radio inputs
      timeUp();

      //Hide the game div from user
      $('#duringGame').hide();

    }

  }


  //shows the count by 1 seconds
  function startCount() {

    setInterval(countdown, 1000);

  }


  //This function is ran after the timer is up and the game ends
  function timeUp() {

    //the value of the radio buttons and the beginning of the if statements
    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();


    //right and wrong answers with the if,else and else if statements
    if (Q1 == undefined) {
      unanswered++;
    } else if (Q1 == 'Honda') {
      correct++;
    } else {
      wrong++;
    }

    if (Q2 == undefined) {
      unanswered++;
    } else if (Q2 == 'Corvette') {
      correct++;
    } else {
      wrong++;
    }

    if (Q3 == undefined) {
      unanswered++;
    } else if (Q3 == 'i3') {
      correct++;
    } else {
      wrong++;
    }

    if (Q4 == undefined) {
      unanswered++;
    } else if (Q4 == 'S63amg') {
      correct++;
    } else {
      wrong++;
    }

    if (Q5 == undefined) {
      unanswered++;
    } else if (Q5 == 'Corvette') {
      correct++;
    } else {
      wrong++;
    }



    //The score will be listed below for the DOM
    $('#correctAnswers').html(correct);
    $('#wrongAnswers').html(wrong);
    $('#unanswered').html(unanswered);

    //the complete score will be shown here
    $('#endGame').show();
  }

});
