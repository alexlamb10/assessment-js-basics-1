// Welcome user to the password validator
console.log('Welcome to the password validator tool!')

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get User's password
reader.question("Please enter your password: ", function(password) {
// Check for spaces
  let space = false;
  if(password.indexOf(' ') >= 1){
      space = true;
  }  
  //Check for capital
  let upperCase = false

for(let i = 0; i < password.length; i++){
  let char = password.charAt(i)
  if (char === char.toUpperCase()){
    upperCase = true;
    break;
  } else {
    upperCase = false
  }
}
//Check requirements and return message

  if(password.length < 10 || password.length > 20){
      console.log('Not a valid password. Password must be between 10-20 characters')
    }else if (space === true){
        console.log('Password cannot contain spaces')
    }else if(upperCase === false){
    console.log('Password must contain at least 1 capital letter')
    }else  {
        console.log('Success!')
    }

})