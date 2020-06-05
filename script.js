// Assignment Code
var generateBtn = document.querySelector("#generate");

// write generatePassword function here 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// PASSWORD-GENERATOR LOGIC

// "alert" the user to click the button on the screen to generate a new secure password 

// "prompt" the user to state desired password length 
// if the user inputs a value other than int, "alert" the user to input correct value 
// if user enters a number less than 8 characters, "alert" them that the Password length must be at least 8 characters 
// if user enters a number more than 128 characters, "alert" them that the Password length must be no more than 128 characters 

// user goes through four other password options:
// Click OK to confirm including special characters 
// Click OK to confirm including numerical characters 
// Click OK to confirm including lowercase characters 
// Click OK to confirm including upercase characters 

// for every type of character accepted by the user, concatenate previously defined variables into one array
// then perform random generation of Password base on user length chosen
// if the user does not hit OK to one of the following "alert" the user they must select one of the following characters to generate a password: special, numerical, lowercase, or upercase. 

// display generated password as an alert or write it to the page 


