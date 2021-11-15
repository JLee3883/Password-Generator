// Pseudo Code
// // put user input vairables:
// put password variable values like:special characters,numeric characters,alphabetical characters,lower and upper JUST PUT ALL OF THE VARIABLES THAT YOU KNOW THAT YOU WILL NEED.
//need choices declared outside the if statemnt so they can be concatenated upon condition.
//convert letter to uppercase
//create a variable for uppercase conversion
//start functions to the generate button that asks for user input. validation??? then continuation once user input is validated.
//vars, functions, ifs, else ifs, else 
//if
//confirm character
//confirm upper
//confirm lower
//want to conpile the results - if user confirms upper and numbers, results would be combined array of upper and numbers. if true, creat me a password starting point that is combined upper array with the numbers array.
//create combined array variable (whatever the user selects)
//loop over combined array the number of times = to password length
//each time we loop over, we are adding the random character to that "results"
//return the results from this generate function to line 40 (var password=)


// Assignment Code
var generateBtn = document.querySelector("#generate");

//All possible characters that would be availalbe.//
var special = ["~","!","@","#","$","%","^","&","*","_","+","=","<",">","?",];
var numbers = ["1","2","3","4","5","6","7","8","9","0",];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//Variables that I will call later
var confirmSpecial;
var confirmNum;
var confirmUpper;
var confirmLower;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // if(!password) return
  passwordText.value = password;

}
function generatePassword() {

var charLength = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128")
// console.log(passLength);






var confirmNum = window.confirm("Do you want to include numbers?")
console.log(confirmNum);


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


