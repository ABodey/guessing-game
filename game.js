
function userName(){
  console.log("asking for the name of user, with a greeting");
  //var username = ("Please tell us who you are:","Namey MCNamerson");
  var elem = document.getElementById("username");
  var form = document.forms["registration"];
  var yourName = .elements["first_name"];
//  console.log("users name");
  var greeting = "Nice to meet you "+yourName+"!";
  //  console.log("doing the greeting");
  var nameParagraph = document.getElementById("name-location");
  nameParagraph.innerHTML = greeting;
  // var today= new Date();
  // greeting += "\n" + (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
  return greeting;
};

console.log("add global varibles");
var baseScore = 0;
var result = "";

//score keeping function
function scoreKeeper(){
  var scoreParagraph = document.getElementById("total-location");
  scoreParagraph.innerHTML = "Your current score is "+ baseScore + " out of 6." ;
};

//answerprinting function
function printAnswer(){
  var answerParagraph = document.getElementById("answer-location");
  answerParagraph.innerHTML = result;
};

//guessing game function that calls a series of functions
function guessingGame(){
  baseScore = 0;
  result = "";
  question1();
  printAnswer();
  question2();
  printAnswer();
  question3();
  printAnswer();
  question4();
  printAnswer();
  question5();
  printAnswer();
  question6();
  printAnswer();
  scoreKeeper();
  console.log("ggame ran");
};

function question1(){
  var q1 = prompt("Does Andrew have a dog?","Yes or No");
  if ((q1.toLowerCase() === "yes")||(q1.toLowerCase() === "y")){
    baseScore++;
    result += "<div class= 'crt'>Correct, his name is Bubdow</div>";
  }
  else {
    result += "<div class= 'wrg'>Andrew does have a dog, his name is Bubdow</div>";
  };
};

function question2(){
  var q2 = prompt("What was the Project from Code 101 called?","Enter code name here");
  if ((q2.toLowerCase()=== "fit squirrels")||(q2.toLowerCase()=== "squirrels")||(q2.toLowerCase()=== "fat")){
    baseScore++;
    result += "<div class= 'crt'>Correct,The page name was Fit Squirrels</div>";
  }
  else {
    result += "<div class= 'wrg'>Not the answer I am looking for, see the bottom of the page.</div>";
  }
};

function question3(){
  var q3 = prompt("Where was Andrew born?","Enter the city name");
  if ((q3.toLowerCase() === "seattle")||(q3.toLowerCase() === "sea")){
    baseScore++;
    result += "<div class= 'crt'>Correct Andrew was born in Seattle</div>";
  }
  else {
    result += "<div class= 'wrg'>Not the answer I am looking for, read the first part for a clue</div>";
  }
};

function question4(){
  console.log("Switch question for qestion4");
  var q4 = prompt("How many times has Andrew been to China?");
  var x=parseInt(q4);
  switch (true) {
    case (x === 3):
    result += "<div class= 'crt'>Correct, Andrew has been to China 3 times so far.</div>";
    baseScore++;
    break;
    case (x <=2):
    result += "<div class= 'wrg>'You guessed too low</div>";
    break;
    case (x >=4):
    result += "<div class= 'wrg'>You guessed too high</div>";
    break;
    default:
    result += "<div class= 'wrg'>Please enter a number value, to guess an age.</div>";
  }
};


function question5(){
  console.log("while loop for question 5");
  var q5 = prompt("Can you guess how old Andrew is?","Enter a number until you get it!");
  while ((~~q5) != 32) {
    if ((~~q5)<32){
      q5 = prompt("You guessed too low, guess again.", "Enter a number");
    }else if((~~q5)>32){
      q5 = prompt("You guessed too high, guess again.","Enter a number");
    }
  }
  baseScore++;
  result += "<div class= 'crt'>Correct</div>";


};

function question6(){
  console.log("array question");
  var ansArray = ["skiing", "walking the dog", "train the dog", "resturaunts", "cook", "motorcycle", "old cadillac", "shooting", "tattoos", "internet"];
  var q6 = prompt("Can you guess what one of Andrew's hobbies is?","Enter one or two words for the hobbie");
  if (ansArray.indexOf(q6.toLowerCase()) === -1 ){
    result += "<div class= 'wrg'>Try reading the list to see the answer.</div>"
  } else {
    baseScore++
    result += "<div class= 'crt'>You guessed the hobbie correct.</div>"
  }


  console.log("end of Guessing Game");

};

console.log("reached end of JS script");
