// Welcome user to the password validator
console.log('Welcome to the password validator tool!')

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Please enter your password: ", function(password) {
  if(password.length < 10){
      console.log('Not a valid password. Must have 10+ characters')
    }else{
        console.log('Success!')
    }

})