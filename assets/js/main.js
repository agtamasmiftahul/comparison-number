var level0a = document.getElementById('level0a');
var level0b = document.getElementById('level0b');
var level1 = document.getElementById('level1');
var level2 = document.getElementById('level2');
var level3 = document.getElementById('level3');

var level0Button = document.getElementById('level0-button');
var level1Button = document.getElementById('level1-button');
var level2Button = document.getElementById('level2-button');
var level3Button = document.getElementById('level3-button');

var messageToast;
var duration;

function showToast(messageToast, duration) {
  Materialize.toast(messageToast, duration);
}

function compare() {
  var number0 = level0a.value;
  var number1 = level0b.value;
  if (isNaN(number0) !== true && isNaN(number1) !== true) {
    if (number0 > number1) {
      showToast(`First number greater than second number`, 1000);
    } else if (number0 == number1) {
      showToast(`First number equal to second number`, 1000);
    } else {
      showToast(`First number less than second number`, 1000);
    }
  } else if (isNaN(number0) !== true && isNaN(number1) === true) {
    showToast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(number0) === true && isNaN(number1) !== true) {
    showToast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    showToast('Please, input a number', 1000);
  }
}

function verify() {
  var number0 = level1.value;
  if (isNaN(number0) !== true) {
    if (number0 >= 70 && number0 < 80) {
      showToast(`Your score is enough`, 1000);
    } else if (number0 >= 80 && number0 < 90) {
      showToast(`Your score is good`, 1000);
    } else if (number0 >= 90 && number0 <= 100) {
      showToast(`Your score is great`, 1000);
    } else if (number0 >= 0 && number0 < 70) {
      showToast(`Your score is not good enough`, 1000);
    } else {
      showToast(`Please, input a valid score`, 1000);
    }
  } else {
    showToast(`Please, input a number`)
  }
}

function ternaryOperator() {
  var number0 = level2.value;
  if (isNaN(number0) !== true) {
    number0 > 0 ? (
      showToast(`Your number is ${number0}. That is a postive.`, 1000)
    ) : (
      showToast(`Your number is ${number0}. That is a negative.`, 1000)
    )
  } else {
    showToast(`
          Please, input a number `)
  }
}

function verifyAge() {
  var age = level3.value;
  if (isNaN(age) !== true) {
    if (age >= 6 && age < 13) {
      showToast(`You are in elementary school`, 1000);
    } else if (age >= 13 && age < 16) {
      showToast(`You are in junior high school`, 1000);
    } else if (age >= 16 && age < 18) {
      showToast(`You are in senior high school`, 1000);
    } else if (age >= 18 && age < 24) {
      showToast(`You are in university`, 1000);
    } else if (age >= 24) {
      showToast(`You are working in somewhere`, 1000);
    } else if (age >= 0 && age < 6) {
      showToast(`You are too young`, 1000);
    } else {
      showToast(`Please, input a valid age`, 1000);
    }
  } else {
    showToast(`Please, input a number`)
  }
}

level0Button.addEventListener(`click`, compare);
level1Button.addEventListener(`click`, verify);
level2Button.addEventListener(`click`, ternaryOperator);
level3Button.addEventListener(`click`, verifyAge)