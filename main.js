console.log(" SMALL QUIZ USING JS \n");

var readlinesync = require('readline-sync');

var username = readlinesync.question('Whats your name : ');

console.log(" \nWelcome "+username);

let score=0;

//let value="";

function checktf(age){
  
  if(age == "y" || age == "yes"){
  console.log("You are an adult");
  score+=1;
  console.log("score is : "+ score)
  } else {
  console.log("you are under 22");
  score-=1;
  console.log("score is : "+ score)
  }
}


age = readlinesync.question('Is your age greater than 22 (yes/y or no/n) ');
checktf(age);

function play(question,answer){
  
  let useranswer = readlinesync.question(question);
  if (useranswer===answer) {
    score+=1;
    console.log("you are correct !");
  } else {
    score-=1;
    console.log("you are wrong !");
  }

  console.log("Current Score : "+score);
}

let questions = [{
  question: "Who is my favorite superhero?\na. Bheem\nb. Raju\nc. Doremon\n Answer : ",
  answer: "c"
},{
  question: "Which is my favorite song?\na. Snap\nb. GOAT\nc. 275\n Answer : ",
  answer: "a"
  
}];

for (let i = 0; i < questions.length; i++)
{
let currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  console.log("YAY! You Scored: " + score);
}

