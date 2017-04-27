console.log("hello world");

var line = require('readline');
const rl = line.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Who was the fisrt president?",(answer)=>{console.log( `this ${answer}`);
rl.close();});
