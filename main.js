console.log("  QUIZ USING JS - HOW WELL DO YOU KNOW ME !\n");

var readlinesync = require('readline-sync');

var username = readlinesync.question('Whats Your Name : ');

console.log(" \nWelcome "+username);

var score=0;


function checktf(age){
  if(age == "y" || age == "yes"){
  console.log("You are Correct !");
  score+=1;
  console.log("score is : "+ score)
  } else {
  console.log("Nope! Your answer is incorrect. ");
  score-=1;
  console.log("score is : "+ score)
  }
}


age = readlinesync.question('Is my age greater than 22 (yes/y or no/n) ');
checktf(age);


function play(question,answer){
  let useranswer = readlinesync.question(question);
  if (useranswer===answer) {
    score+=1;
    console.log("Correct! You answered right.");
  } else {
    score-=1;
    console.log("wWrong! You are Incorrect.");
  }

  console.log("Current Score : "+score);
  console.log("------------------")
}

let questions = [{
  question: "Where do I live? \na. Tehri\nb. Dehradun\nc. London\n Answer : ",
  answer: "b"
},{
  question: "What is my favoutite dish?\na. Aloo Paratha\nb. Pizza\nc. Dosa\n Answer : ",
  answer: "a"
},{
  question: "Which is my favorite exercise?\na. Running\nb. Swimming\nc. Cycling\n Answer : ",
  answer: "c"
},{
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

