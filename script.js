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
//!!!!!!!!!!!!!!!!!!!!!!! Once user clicks OK, a random password containing all the chosen characters will automatically generate in the box.!!!!!!!!!!!!!!!!!!!!!!!!!!    
//see and follow the path!!! creation of this password generator for the most idiotic person in the world. what happens if the user doesn't input the necessary data? how to alert if user doesnt follow the prompt properly. is that validation?
// // put user input vairables:
// put password variable values like:special characters,numeric characters,alphabetical characters,lower and upper JUST PUT ALL OF THE VARIABLES THAT YOU KNOW THAT YOU WILL NEED.
//need choices declared outside the if statemnt so they can be concatenated upon condition.
//convert letter to uppercase
//create a variable for uppercase conversion
//start functions to the generate button that asks for user input. validation??? then continuation once user input is validated.
//vars, functions, ifs, else ifs, else 
//if


// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmSpecial;
var confirmUpper;
var confirmLower;

//All possible characters that would be availalbe.//
var special = ["~","!","@","#","$","%","^","&","*","_","+","=","<",">","?",];
var numbers = ["1","2","3","4","5","6","7","8","9","0",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

var passLength = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128")
// console.log(passLength);
var confirmNum = window.confirm("Do you want to include numbers?")
console.log(confirmNum)

//confirm character
//confirm upper
//confirm lower
//want to conpile the results - if user confirms upper and numbers, results would be combined array of upper and numbers. if true, creat me a password starting point that is combined upper array with the numbers array.
//create combined array variable (whatever the user selects)
//loop over combined array the number of times = to password length
//each time we loop over, we are adding the random character to that "results"
//return the results from this generate function to line 40 (var password=)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
