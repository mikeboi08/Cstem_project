var readline = require('readline');
var username;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello adventurer, what is youe name? ', (answer) => {
  username = answer;
  console.log("welcome " + username + ", this adventure is going to test how much you know about the enviornmet. Get ready and lets Go!");

  rl.close();
});
