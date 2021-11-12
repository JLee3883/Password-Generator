// Pseudo Code

// Alert needed to "How many characters would you like your password to contain?
// If I put less than 8, there will be a pop up that says that "Password lenth must be at least 8 characters.
// Then need to have an available button to click "OK" for the user to acknowledge.
// User can hit the "Generate Password" button again to prompt how many characters would your password contain?
// If user puts 1000, and click "OK", the alert should say "Password length must be less than 129 characters.
// Then, when user inputs length no less than 8 and no more than 129, a window alert must pop up to:
//     1.) Click OK to confirm including special characters (user has choice to OK or cancel)
//     2.) Click OK to confirm including numeric characters (user has choice to OK or cancel)
//     3.) Click OK to confirm including lowercase characters. (user has choice to OK or cancel)
//     4.) Click OK to confirm including upperercase characters. (user has choice to OK or cancel)
// Once user clicks OK, a random password containing all the chosen characters will automatically generate in the box.    


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
