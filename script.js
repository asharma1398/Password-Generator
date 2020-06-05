// Assignment Code
var generateBtn = document.querySelector("#generate");

// write generatePassword function here 

function generatePassword() {

  // all possible character options for password
  var special = ['@', '%', '+', '"', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numerical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var possibleChar = [];
  var password = [];
  var charIncluded = []

  // "prompt" the user to state desired password length - this prompt answer is of type 'string'
  var userLength = prompt("How many characters would you like your password to contain?");
  
  // if the user inputs a value other than int (ex: letter, decimal, special character), "alert" the user with an input error message
  if ( Math.round(Number(userLength)) !== Number(userLength) ) {
    alert("Error: Please enter an integer value");
  } 
  // if the user enters a number great than 128 or less than 8, "alert" the user with an input error message
  else {
    if (Number(userLength) < 8) {
      alert("Error: Password length must be at least 8 characters");
    } else if (Number(userLength) > 128) {
      alert("Error: Password length must be no more than 128 characters");
    } 
    // user goes through four other password character options:
    else {
      var usingUpper = confirm("Click OK to confirm including uppercase characters\nClick CANCEL to exclude and continue");
      var usingLower = confirm("Click OK to confirm including lowercase characters\nClick CANCEL to exclude and continue");
      var usingNumerical = confirm("Click OK to confirm including numerical characters\nClick CANCEL to exclude and continue");
      var usingSpecial = confirm("Click OK to confirm including special characters\nClick CANCEL to exclude and continue");

      // if the user doesn't select any of the four character types, "alert" the user with a selection error message
      if (usingUpper == false && usingLower == false && usingNumerical == false && usingSpecial == false) {
        alert("Error: At least one character type must be selected");
      } 
      // concatenate the wanted character type(s) into possibleChar array
      else {
        if (usingUpper) {
          var possibleChar = possibleChar.concat(uppercase);
          var upper = " Uppercase "
          var charIncluded = charIncluded.concat(upper)
        }
        if (usingLower) {
          var possibleChar = possibleChar.concat(lowercase);
          var lower = " Lowercase "
          var charIncluded = charIncluded.concat(lower)
        }
        if (usingNumerical) {
          var possibleChar = possibleChar.concat(numerical);
          var num = " Numerical "
          var charIncluded = charIncluded.concat(num)
        }
        if (usingSpecial) {
          var possibleChar = possibleChar.concat(special);
          var spec = " Special "
          var charIncluded = charIncluded.concat(spec)
          
        }
      }
    }
  }
  
  // create password by randomly pulling from possibleChar array  
  for (var i = 0; i < Number(userLength); i++) {
      var randomIndex = Math.floor(Math.random() * (possibleChar.length));
      var password = password + possibleChar[randomIndex];
  }

  // alert user of new password and filters used
  alert("Your New Password: " + password + "\n\nPassword Length: " + userLength + "\nIncluded Characters:" + charIncluded)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




