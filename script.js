var length;
var password = "";
var builtPassword = "";
var numbers = "1234567890"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = lowerCase.toUpperCase();
var specialCharacters = "!#$%&*@_"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var lengthChoice = prompt("Please pick the length of your password. Must be at least 8 characters and no more than 128 characters");
    console.log(lengthChoice);
    length = lengthChoice;

    if(lengthChoice < 8 || lengthChoice > 128 || isNaN(lengthChoice)) {
        alert("Please choose a NUMBER that is at least 8 characters and no more than 128 characters.");
    }

var lowerCaseChoice = confirm("Would you like your password to contain lower case letters?");

if (lowerCaseChoice) {
  builtPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

var upperCaseChoice = confirm("Would you like your password to contain upper case letters?");

if (upperCaseChoice) {
  builtPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
}

var numbersChoice = confirm("Would you like your password to contain numbers?");


if (numbersChoice) {
  builtPassword += numbers[Math.floor(Math.random() * numbers.length)];
}

var charactersChoice = confirm("Would you like your password to contain special characters?");


if (charactersChoice) {
  builtPassword += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}

for (var i = 0; i < length; i++) {
  var randomInput = Math.floor(Math.random() * password.length);
  password += builtPassword;
}

alert("Your password is: " + builtPassword);

var newPassword = confirm("DO you want a new password?");
if (newPassword) {
    generatePassword();
}
}

generatePassword();
