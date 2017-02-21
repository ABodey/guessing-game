
function userName(){
  console.log("asking for the name of user, with a greeting");
  //var username = ("Please tell us who you are:","Namey MCNamerson");
  var yourName =(document.getElementById('username').value);
  // document.getElementById("username".value);
  console.log(yourName);
  //  var form = document.forms["registration"];
  //  var yourName = .elements["first_name"];
  //  console.log("users name");
  var greeting = "Nice to meet you "+yourName+" !";
  console.log(greeting);
  var nameParagraph = document.getElementById("name-location");
  console.log(nameParagraph);
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
function guessingGameResult(){
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
  var src = document.getElementById("q1a");
  if (document.getElementById('dq1').checked){
    baseScore++;
    result += "<div class= 'crt'>#1 Correct, his name is Bubdow</div>";
    src.innerHTML = "<img  class='icon' id='q1a' src='green-thumb-up.png'>";
  }
  else if(document.getElementById('dq2').checked){
    result += "<div class= 'wrg'>#1 Andrew does have a dog, his name is Bubdow</div>";
      src.innerHTML = "<img class='icon' id='q1a' src='red-thumb-down.png'>";
  };
};

function question2(){
  var src = document.getElementById("q2a");
  var q2 = (document.getElementById('proQ').value);
  if ((q2.toLowerCase()=== "fit squirrels")||(q2.toLowerCase()=== "squirrels")||(q2.toLowerCase()=== "fit")){
    baseScore++;
    result += "<div class= 'crt'>#2 Correct,The page name was Fit Squirrels</div>";
    src.innerHTML = "<img  class='icon' id='q2a' src='green-thumb-up.png'>";
    console.log(result);
  }
  else {
    result += "<div class= 'wrg'>#2 Not the answer I am looking for, see the bottom of the page.</div>";
      src.innerHTML = "<img class='icon' id='q2a' src='red-thumb-down.png'>";
    console.log(result);
  }
  console.log(q2);
};

function question3(){
  var src = document.getElementById("q3a");
  var q3 = (document.getElementById('cityQ').value);
  if ((q3.toLowerCase() === "seattle")||(q3.toLowerCase() === "sea")){
    baseScore++;
    result += "<div class= 'crt'>#3 Correct Andrew was born in Seattle</div>";
    src.innerHTML = "<img  class='icon' id='q3a' src='green-thumb-up.png'>";
  }
  else {
    result += "<div class= 'wrg'>#3 Not the answer I am looking for, read the first part for a clue</div>";
      src.innerHTML = "<img class='icon' id='q3a' src='red-thumb-down.png'>";
  }
};

function question4(){
  var src = document.getElementById("q4a");
  console.log("Switch question for qestion4");
  switch (true) {
    case (document.getElementById('cq3').checked):
    result += "<div class= 'crt'>#4 Correct, Andrew has been to China 3 times so far.</div>";
    src.innerHTML = "<img  class='icon' id='q4a' src='green-thumb-up.png'>";
    baseScore++;
    break;
    case (document.getElementById('cq2','cq1').checked):
    result += "<div class= 'wrg'>#4 You guessed too low</div>";
    src.innerHTML = "<img class='icon' id='q4a' src='red-thumb-down.png'>";
    break;
    case (document.getElementById('cq4').checked):
    result += "<div class= 'wrg'>#4 You guessed too high</div>";
      src.innerHTML = "<img class='icon' id='q4a' src='red-thumb-down.png'>";
    break;
    default:
    result += "<div class= 'wrg'>#4 Please enter a number value.</div>";
      src.innerHTML = "<img class='icon' id='q4a' src='red-thumb-down.png'>";
  }
};


function question5(){
  console.log("while loop for question 5");
  var q5 = (document.getElementById('ageQ').value)
  var src = document.getElementById("q5a");
  if ((~~q5) ===32){

  baseScore++;
  result += "<div class= 'crt'>#5 Correct</div>";
  src.innerHTML = "<img  class='icon' id='q5a' src='green-thumb-up.png'>";
} else{
  result += "<div class= 'wrg'>#5 Please enter a number value, to guess an age.</div>";
  src.innerHTML = "<img class='icon' id='q5a' src='red-thumb-down.png'>";
}
};

function question51(){
  console.log("blur");
  var q5 = (document.getElementById('ageQ').value)
  var src = document.getElementById("arrow");
  if ((~~q5)<32){
    console.log("upblur");
    src.innerHTML = "<img class='icon' id='arrow' src='up-arrow-circle-hi.png'>";
  }else if((~~q5)>32){
    console.log("downblur");
    src.innerHTML = "<img class='icon' id='arrow' src='down-arrow-circle-hi.png'>";
  }else if((~~q5) ===32){
    console.log("blurwait");
    src.innerHTML = "  ";
  }

};


function question6(){
  console.log("array question");
  var src = document.getElementById("q6a");
  var ansArray = ["skiing", "walking the dog", "training the dog", "resturaunts with Wife",
  "cooking something new", "ride the motorcycle", "work on cadillac", "target shooting",
  "getting tattoos", "explore the internet"];
  if (ansArray.indexOf(document.getElementById('hobbQ').options[document.getElementById('hobbQ').selectedIndex].text.toLowerCase()) === -1 ){
    result += "<div class= 'wrg'>#6 Try reading the list to see the answer.</div>"
    src.innerHTML = "<img class='icon' id='q6a' src='red-thumb-down.png'>";
  } else {
    baseScore++
    result += "<div class= 'crt'>#6 You guessed the hobbie correct.</div>"
    src.innerHTML = "<img  class='icon' id='q6a' src='green-thumb-up.png'>";
  }


  console.log("end of Guessing Game");

};

console.log("reached end of JS script");
