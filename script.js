// Pseudo Code

//need choices declared outside the if statemnt so they can be concatenated upon condition.
//start functions to the generate button that asks for user input. validation??? then continuation once user input is validated.
//vars, functions, ifs, else ifs, else 
//want to conpile the results - if user confirms upper and numbers, results would be combined array of upper and numbers. if true, creat me a password starting point that is combined upper array with the numbers array.
//create combined array variable (whatever the user selects)
//loop over combined array the number of times = to password length
//each time we loop over, we are adding the random character to that "results"
//return the results from this generate function to line 40 (var password=)


// Assignment Code
var generateBtn = document.querySelector("#generate");

//All possible characters that would be available
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

var confirmNum = window.confirm("Do you want to include numbers?")
console.log(confirmNum);
}

function getPrompts(){ 
  userChoice = [];
  charLength = parseInt(prompt("How many characters long must your password be? Please input a number between 8 - 128."));
  
  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Character length must be 8 to 128 digits. Please input a number between 8 - 128.");
      return false;
  
  //Validating user inputs
} else {
  confirmSpecial = confirm("Do you want your password to contain Special Characters?");
  confirmNum = confirm("Do you want your password to contain Numbers?");
  confirmUpper = confirm("Do you want your password to contain Uppercase Letters?");
  confirmLower = confirm("Do you want your password to contain Lowercase Letters?");
};
  return true;
}












// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


