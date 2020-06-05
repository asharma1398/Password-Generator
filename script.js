// Assignment Code
var generateBtn = document.querySelector("#generate");

// write generatePassword function here 

function generatePassword() {

  // all possible character options for password
  var special = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numerical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // "prompt" the user to state desired password length - this prompt is of type 'string'
  var userLength = prompt("How many characters would you like your password to contain?");
  
  // if the user inputs a value other than int (ex: letter, decimal, special character), "alert" the user of an input error
  if ( Math.round(Number(userLength)) !== Number(userLength) ) {
    alert("Error: Please enter an integer value");
  } 
  // if the user enters a number great than 128 or less than 8, "alert" the user of an input error 
  else {
    if (Number(userLength) < 8) {
      alert("Error: Password length must be at least 8 characters");
    } else if (Number(userLength) >128) {
      alert("Error: Password length must be no more than 128 characters");
    } 
    // user goes through four other password character options:
    else {
    }
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// PASSWORD-GENERATOR LOGIC

// user goes through four other password options:
// Click OK to confirm including special characters 
// Click OK to confirm including numerical characters 
// Click OK to confirm including lowercase characters 
// Click OK to confirm including upercase characters 

// for every type of character accepted by the user, concatenate previously defined variables into one array
// then perform random generation of Password based on user length chosen
// if the user does not hit OK to one of the following 4 character options, "alert" the user they must select one of the following characters to generate a password: special, numerical, lowercase, or upercase. 

// display generated password as an alert or write it to the page 


