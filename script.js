// SELECTING PARTS OF PAGE
var title=document.getElementById("title");
var timer=document.getElementById("timer");
var questionText=document.getElementById("questionDisplay");
var resultAlert=document.getElementById("resultAlert");

//SELECTING BUTTONS 
var button1=document.getElementById("butt1");
var button2=document.getElementById("butt2");
var button3=document.getElementById("butt3");
var button4=document.getElementById("butt4");

// DIV CONTAINING BUTTONS FOR EVENT LISTENING
var answerButtons=document.getElementById("answerButtons");

// EVENT LISTENIG FOR BUTTONS
answerButtons.addEventListener("click",buttonClicked);

// QUESTION AND ANSWERS
  var questions=[];
  var answers=[];


// TIMER LEFT
var timeLeft=10;

//TIMER 
for(var i=0;i<10;i++){
  setInterval(console.log("test"),1000);
  setInterval(console.log("and"),1000);
  
}
function countdown() {
  for (var i = 10; i > 0; i--) {
    timeLeft--
    document.querySelector("timerP").textContent=timeLeft;
    console.log(timeLeft);
  }
};

// FUNCTION TO
function buttonClicked(){
  console.log(event.target);
  switch(event.target){
    case button1:
    console.log("button1");
    title.textContent="Button1"
    break;
    
    case button2:
    console.log("button2");
    title.textContent="Button2"
    break;

    case button3:
    console.log("button3");
    title.textContent="Button3"
    break;

    case button4:
    console.log("button4");
    title.textContent="Button4"
    break;
  }
}

// Welcome page with start button
// Start button is clicked, timer starts, start questions loop
// Display Question
// Display possible answers in random buttons


// FUNCTION TO ACT AS TITLE SCREEN
function titleScreen(){
  setTitleText("Welcome!");
  setQuestionText("Hit start when you're ready");
}
// FUNCTION TO RUN QUESTION
function askQuestions(){
  while(timer>0){
    for(var i=0;i<questions.length;i++){

    }
  }
}
// FUNCTION TO ACT AS SCORE SCREEN
function scoreScreen(){
  title.textContent=""
}



function setTitleText(stringInput){
  title.textContent=stringInput;
}

function setQuestionText(stringInput){
  questionText.textContent=stringInput;
}

// FUNCTION TO DISPLAY CORRECT
function gotAnswer(){
  resultAlert.textContent="Correct!"
}
// FUNCTION TO DISPLAY INCORRECT
function missedAnswer(){
  resultAlert.textContent="Inorrect!"
}



titleScreen();
gotAnswer();


// David gilmour is famous for playing what kind of guitar?
//   Fender Stratocater-Correct
//   Gibson SG
//   Schecter Demon 
//   BC Rich Warlock


// Dark Side of the Moon is pink floyds _____ album?
//   8th-Correct
//   1st
//   5th
//   13th

// Animals is about what?
//   Capitalism-Correct
//   fluffy animals
//   women  
//   childhood memories

// What concert incident inspired Roger Waters to write The Wall?
//   Roger Spits on a Fan-Correct
//   Roger Highfives a fan 
//   Roger suffers a brain injury from a fall
//   Roger poops himself

// The album artwork for A Saucer full of secrets features which superhero?
//   Dr Strange-Correct
//   Dr Manhattan
//   Dr Doom
//   Dr Who