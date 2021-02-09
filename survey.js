const readline = require('readline');


/*
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at! 
*/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is an activity you like doing? ', (answer1) => {
  
  rl.question('What do you listen to while doing that? ', (answer2) => {
     
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
      
      rl.question('What is your favourite thing to eat for that meal? ', (answer4) => {

        rl.question('Which sport is your absolute favourite? ', (answer5) => {
                   
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer6) => {
            console.log(`Thank you for your answers: ${answer1}, ${answer2}, ${answer3}, ${answer4}, ${answer5}`);
          
          rl.close();  
  
});  }); }); }); }); });