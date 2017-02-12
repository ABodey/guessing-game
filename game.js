
console.log("asking for the name of user");
var username = prompt("Please tell us who you are:","Namey MCNamerson");
console.log("users name");
var greeting = "Hello World I am "+username+"!";
console.log("doing the greeting");
// var today= new Date();
// greeting += "\n" + (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
alert(greeting);
console.log("invite to game with if else");
var invitation = prompt("Would you like to play a guessing game about my page?","Yes or No");
if (invitation.toLowerCase() === "yes"){
  alert("Great!")

  console.log("Ask 3 questions with if/else alert messages");
  console.log("Added  score system");

  var baseScore = (0);


  var question1 = prompt("Does Andrew have a dog?","Yes or No");
  if (question1.toLowerCase() === "yes"){
    alert("Correct, his name is Bubdow");
    baseScore++;
  }
  else {
    alert("Andrew does have a dog, his name is Bubdow")
  };
  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

  var question2= prompt("What was the Project from Code 101 called?","Enter code name here");
  if (question2.toLowerCase()=== "fit squirrels"){
    alert("Correct");
    baseScore++;
  }
  else {
    alert("Not the answer I am looking for, see the bottom of the page.")
  };
  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

  var question3 = prompt("Where was Andrew born?","Enter the city name");
  if (question3.toLowerCase() === "seattle"){
    alert("Correct");
    baseScore++;
  }
  else {
    alert("Not the answer I am looking for, read the first part for a clue")
  };
  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

  // Fixed switch, remember if case is true than it runs
  var question4 = prompt("How many times has Andrew been to China?");
  var x=parseInt(question4);
  switch (true) {
    case (x === 3):
    alert("Correct!");
    baseScore++;
    break;
    case (x <=2):
    alert("You guessed too low");
    break;
    case (x >=4):
    alert("You guessed too high");
    break;
    default:
    alert("Please enter a number value");

  };
  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

  var question5 = prompt("Can you guess how old Andrew is?","Enter a number untill you get it!");
  while (question5 != 32) {
    if (question5<32){
      question5 = prompt("You guessed too low, guess again");
    }else if(question5>32){
      question5 = prompt("You guessed too high, guess again.");
    }
    // alert("Correct");
    // baseScore++;
  };
  alert("Correct");
  baseScore++;

  var userScore = alert("Your current score is "+ baseScore + " out of 5." );

}
else {
  alert("Maybe later, enjoy the page!")
  console.log("user decided not to play the guessing game");
};
