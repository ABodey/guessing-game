
function userName(){
  console.log("asking for the name of user");
  var username = prompt("Please tell us who you are:","Namey MCNamerson");
  console.log("users name");
  var greeting = "Hello World I am "+username+"!";
  console.log("doing the greeting");
  var nameParagraph = document.getElementById("name-location");
  nameParagraph.innerHTML = greeting;
  // var today= new Date();
  // greeting += "\n" + (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
  return greeting;
};

console.log("add global varibles");
var baseScore = 0;
var result = "";

function scoreKeeper(){
  var scoreParagraph = document.getElementById("total-location");
  scoreParagraph.innerHTML = "Your current score is "+ baseScore + " out of 6." ;
};

function guessingGame(){
  baseScore = 0;
  result = "";
  question1();
  question2();
  question3();
  question4();
  question5();
  //  question6();
  scoreKeeper();
  console.log("ggame ran");
};

function question1(){
  var q1 = prompt("Does Andrew have a dog?","Yes or No");
  if ((q1.toLowerCase() === "yes")||(q1.toLowerCase() === "y")){
    var answerParagraph = document.getElementById("answer-location");
    var scoreParagraph = document.getElementById("score-location");
    baseScore++;
    result += ("<div class= crt>Correct, his name is Bubdow</div>");
    answerParagraph.innerHTML = result; //("Correct, his name is Bubdow");
  }
  else {
    result += ("<div class= wrg>Andrew does have a dog, his name is Bubdow</div>");
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = result;
  };
};

function question2(){

  var q2 = prompt("What was the Project from Code 101 called?","Enter code name here");
  if ((q2.toLowerCase()=== "fit squirrels")||(q2.toLowerCase()=== "squirrels")){
    var answerParagraph = document.getElementById("answer-location");
    baseScore++;
    result += ("<div class= crt>Correct,The page name was Fit Squirrels</div>");
    answerParagraph.innerHTML = result;
  }
  else {
    result += ("<div class= wrg>Not the answer I am looking for, see the bottom of the page.</div>");
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = result;
  }
};
// var userScore = alert("Your current score is "+ baseScore + " out of 5." );

function question3(){
  var q3 = prompt("Where was Andrew born?","Enter the city name");
  if ((q3.toLowerCase() === "seattle")||(q3.toLowerCase() === "sea")){
    var answerParagraph = document.getElementById("answer-location");
    baseScore++;
    result += ("<div class= crt>Correct Andrew was born in Seattle</div>");
    answerParagraph.innerHTML = result;
  }
  else {
    var answerParagraph = document.getElementById("answer-location");
    result += ("<div class= wrg>Not the answer I am looking for, read the first part for a clue</div");

    answerParagraph.innerHTML = result;
  }
};
//  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

console.log("Switch question for qestion4");
// Fixed switch, remember if case is true than it runs
function question4(){
  var q4 = prompt("How many times has Andrew been to China?");
  var x=parseInt(q4);
  switch (true) {
    case (x === 3):
    result += ("<div class= crt>Correct, Andrew has been to China 3 times so far.</div>");
    var answerParagraph = document.getElementById("answer-location");
    baseScore++;
    answerParagraph.innerHTML = result;
    break;
    case (x <=2):
    result += ("<div class= wrg>You guessed too low</div>");
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = result;
    break;
    case (x >=4):
    result += ("<div class= wrg>You guessed too high</div>");
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = result;
    break;
    default:
    result += ("<div class= wrg>Please enter a number value, to guess an age.</div>");
    var answerParagraph = document.getElementById("answer-location");
    answerParagraph.innerHTML = result;
  }
};
//  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

console.log("while loop for question 5");

function question5(){
  var q5 = prompt("Can you guess how old Andrew is?","Enter a number until you get it!");
  while ((~~q5) != 32) {
    if ((~~q5)<32){
      q5 = prompt("You guessed too low, guess again.", "Enter a number");
    }else if((~~q5)>32){
      q5 = prompt("You guessed too high, guess again.","Enter a number");
    }
  }
  // alert("Correct");
  baseScore++;
  result += ("<div class= crt>Correct</div>");
  var answerParagraph = document.getElementById("answer-location");
  answerParagraph.innerHTML = result;

  //  baseScore++;

  //  var userScore = ("Your current score is "+ baseScore + " out of 5." );
  //console.log("end of Guessing Game");

};

function question6(){
  var ansArray = ["Skiing", "walking the dog", "train the dog", "resturaunts", "cook", "motorcycle", "old cadillac", "shooting", "tattoos", "internet"];
  var q6 = prompt("Can you guess what one of Andrew's hobbies is?","Enter one or two words for the hobbie");
  var arrayLength = ansArray.length;
  for (var i = 0; i < arrayLength; i++) {
    alert(myStringArray[i]);
    //Do something
  }
  while (q6 != 32) {
    if (q6<32){
      q6 = prompt("You guessed too low, guess again.", "Enter a number");
    }else if(q6>32){
      q6 = prompt("You guessed too high, guess again.","Enter a number");
    }
  }
  // alert("Correct");
  // baseScore++;
  result += ("<div class= crt>Correct</div>");
  var answerParagraph = document.getElementById("answer-location");
  return answerParagraph.innerHTML = result;

  //  baseScore++;

  //  var userScore = ("Your current score is "+ baseScore + " out of 5." );
  console.log("end of Guessing Game");

};

console.log("reached end of JS script");
