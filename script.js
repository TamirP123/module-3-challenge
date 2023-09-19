var length = 0;


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
    else {
        
    }
}

generatePassword();
