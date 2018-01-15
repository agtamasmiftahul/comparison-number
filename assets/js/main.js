var level0a = document.getElementById('level0a');
var level0b = document.getElementById('level0b');
var number0;
var number1;
var messageToast;
var duration;

function showToast(messageToast, duration) {
  Materialize.toast(messageToast, duration);
}

function compareLevel0() {
  number0 = level0a.value;
  number1 = level0b.value;
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