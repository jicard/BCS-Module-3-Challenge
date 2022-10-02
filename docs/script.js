//Global variables here
var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lower = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
//Variable and event listener for button
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", askQuestions);

//Function starts here
function askQuestions() {
//User inputs lenght, function checks for input, whether the input is a number, and if the input is an acceptable number of characters
  var length = parseInt(
      prompt ('How long would you like your password to be (8-128 characters)?'),
    );
    if (!length) {
      alert('You must provide desired password length.')
      return null;
    } else if (Number.isNaN(length)) {
      alert('Password length must be provided as a number.');
      return null;
    } else if (length < 8 || length >128) {
      alert('Password length must be between 8 and 128 characters.')
      return null;
    } else {
      var hasUpper = confirm('Should your password contain uppercase letters?');
      var hasLower = confirm('Should your password contain lowercase letters?');
      var hasNumber = confirm('Should your password contain numbers?');
      var hasSpecial = confirm('Should your password contain special characters?');
    };
//Condition check for 4 false choices, 4 true choices, 3 true choices, 2 true choices, and 1 true choice
  if (!hasUpper && !hasLower && !hasNumber && !hasSpecial) {
    alert('You must select at least one criteria.');
  } else if (hasUpper && hasLower && hasNumber && hasSpecial) {
    var choices = upper.concat(lower, numeric, special);
  } else if (hasUpper && hasLower && hasNumber) {
    var choices = upper.concat(lower, numeric);
  } else if (hasUpper && hasLower && hasSpecial) {
    var choices = upper.concat(lower, special);
  } else if (hasUpper && hasNumber && hasSpecial){
    var choices = upper.concat(numeric, special);
  } else if (hasLower && hasNumber && hasSpecial) {
    var choices = lower.concat(numeric, special);
  } else if (hasUpper && hasLower) {
    var choices = upper.concat(lower);
  } else if (hasUpper && hasNumber) {
    var choices = upper.concat(numeric);
  } else if (hasUpper && hasSpecial) {
    var choices = upper.concat(special);
  } else if (hasLower && hasNumber) {
    var choices = lower.concat(numeric);
  } else if (hasLower && hasSpecial) {
    var choices = lower.concat(special);
  } else if (hasNumber && hasSpecial) {
    var choices = numeric.concat(special);
  } else if (hasUpper) {
    var choices = upper;
  } else if (hasLower) {
    var choices = lower;
  } else if (hasNumber) {
    var choices = numeric;
  } else if (hasSpecial) {
    var choices = special;
  }
//Create password variable as empty array to be added to based on choices
  var passwordarray = []
  for (var i = 0; i < length; i++) {
    var options = choices[Math.floor(Math.random() * choices.length)];
    passwordarray.push(options);
  }
//Change password array to password string with .join method
  var passwordstring = passwordarray.join("");
//Write password string to webpage
  document.getElementById("password").textContent = passwordstring;
}

//