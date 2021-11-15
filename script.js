var charLength = 10;
var userChoice = [];

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

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
  var Password = generatePassword();
  passwordText.value = Password;
  } else {
    passwordText.value = "";
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {    
  //Generate password based on prompts
  var password = "";
  for(var i = 0; i < charLength; i++) {
      var random = Math.floor(Math.random() * userChoice.length)
      password = password + userChoice[random];
  }
  return password;  
}
  //Get user input
function getPrompts(){ 
  userChoice = [];
  charLength = parseInt(prompt("How many characters long do you want your password be? Please input a number between 8 - 128."));
  
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
  // If no options for the password was chosen
  if (!confirmSpecial && !confirmNum && !confirmUpper && !confirmLower) {
    userChoice = alert("No options were chosen.");
  }
    //Else if combination depending user option selections
    else if (specialCharArr && confirmNum && confirmUpper && confirmLower) {
      userChoice = special.concat(numbers, upper, lower);
    }
    else if (confirmSpecial && confirmNum && confirmUpper) {
      userChoice = special.concat(numbers, upper);
    }
    else if (confirmSpecial && confirmNum && confirmLower) {
      userChoice = special.concat(numbers, lower);
    }
    else if (confirmSpecial && confirmLower && confirmUpper) {
      userChoice = special.concat(lower, upper);
    }
    else if (confirmNum && confirmLower && confirmUpper) {
      userChoice = numbers.concat(lower, upper);
    }
    else if (confirmSpecial && confirmNum) {
      userChoice = special.concat(numbers);
      
    } else if (confirmSpecial && confirmLower) {
      userChoice = special.concat(lower);
      
    } else if (confirmSpecial && confirmUpper) {
      userChoice = special.concat(upper);
    }
    else if (confirmLower && confirmNum) {
      userChoice = lower.concat(numbers); 
    }
    else if (confirmLower && confirmUpper) {
      userChoice = lower.concat(upper); 
    }
    else if (confirmNum && confirmUpper) {
      userChoice = numbers.concat(upper);
    }
    else if (confirmSpecial) {
      userChoice = special;
    }
    else if (confirmNum) {
      userChoice = numbers;
    }
    else if (confirmLower) {
      userChoice = lower;
    }
    else if (confirmUpper) {
      userChoice = upper;
    }    
    return true;
  }














