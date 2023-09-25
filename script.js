// Attributes that alter how the password will be
var length;
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
  var finalPassword = "";

  // Choose length of password, then assign length that user chooses.
    var lengthChoice = prompt("Please pick the length of your password. Must be at least 8 characters and no more than 128 characters");
    console.log(lengthChoice);
    length = lengthChoice;

// Alert if user does not choose appropriate length.

    if(lengthChoice < 8 || lengthChoice > 128 || isNaN(lengthChoice)) {
        alert("Please choose a NUMBER that is at least 8 characters and no more than 128 characters.");
        return;
    }


// Confirmations for user to choose from.
var lowerCaseChoice = confirm("Would you like your password to contain lower case letters?");

var upperCaseChoice = confirm("Would you like your password to contain upper case letters?");

var numbersChoice = confirm("Would you like your password to contain numbers?");

var charactersChoice = confirm("Would you like your password to contain special characters?");

// Alters user password based on confirmations
if (lowerCaseChoice) {
  builtPassword += lowerCase;
}

if (upperCaseChoice) {
  builtPassword += upperCase;
}

if (numbersChoice) {
  builtPassword += numbers;
}


if (charactersChoice) {
  builtPassword += specialCharacters;
}

// If user does not confirm any, alert will be given to choose atleast one.
if (!charactersChoice && !numbersChoice && !upperCaseChoice
  && !lowerCaseChoice) {
    alert("You must confirm atleast ONE option.")
    return;
  }

// For loop to go through the length of password, assign random character to password.
for (var i = 0; i < length; i++) {
  var randomInput = Math.floor(Math.random() * builtPassword.length);
  finalPassword = finalPassword + builtPassword[randomInput];
}
return finalPassword;

}

