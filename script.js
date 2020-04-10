// SELECTING PARTS OF PAGE
// div elements
var timerDisplay=document.getElementById("timerDisplay");
var titleDisplay=document.getElementById("titleDisplay");
var questionDisplay=document.getElementById("questionDisplay");
var answerDisplay=document.getElementById("answerDisplay");
var answerButtons=document.getElementById("answerButtons");
var resultDisplay=document.getElementById("resultDisplay");

// text inside div elements
var timerText=document.getElementById("timerText");
var titleText=document.getElementById("titleText");
var questionText=document.getElementById("questionText");
var answerText=document.getElementById("answerText");
var resultText=document.getElementById("resultText");

//SELECTING BUTTONS
answerButtons.addEventListener("click",buttonClicked);
var button1=document.getElementById("butt1");
var button2=document.getElementById("butt2");
var button3=document.getElementById("butt3");
var button4=document.getElementById("butt4");
// FUNCTION TO IDENTIFY BUTTON
function buttonClicked(){
  switch(event.target){
    case button1:
    return "button1";
    
    
    case button2:
    return "button2";
    
    case button3:
    return "button3";
    
    case button4:
    return "button4";
  }
} 

// 1. Welcome 
function welcomeScreen(){
  timerText.textContent="";
  titleText.textContent="Welcome!";
  questionText.textContent="Are you ready for a quiz?";
  answerText.textContent="";
  resultText.textContent="Welcome!";
  
}

// 2. Questions
function questionScreen(){
  timerText.textContent="Questions!";
  titleText.textContent="Questions!";
  questionText.textContent="Questions!";
  answerText.textContent="Questions!";
  resultText.textContent="Questions!";
}
// WHILE TIME LEFT OR QUESTIONS LEFT
while(timerValue>0 || length.questionArray>0){
  for (var i = 0; i < questionArray.length; i++){
    var currentQuestion=questionArray[i];
    var currentQuestionText=currentQuestion.q;
    var currentAnswer=currentQuestion.c;
  }
}


// QUESTION AND ANSWERS
var questionArray = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour
]; 


// 3. Score
function scoreScreen(){
  timerText.textContent="Score!";
  titleText.textContent="Score!";
  questionText.textContent="Score!";
  answerText.textContent="Score!";
  resultText.textContent="Score!";
}

// QUESTIONS AND ANSWERS
var questionOne = {
  q:"David gilmour is famous for playing what kind of guitar?",
  c:"Fender Strat",
  w1:"Gibson SG",
  w2:"Scjecter Demon",
  w3:"BC Rich Warlock" 
}
var questionTwo = {
  q:"The album Animals is about what?",
  c:"Capitalism",
  w1:"Women",
  w2:"Childhood Memories",
  w3:"Fluffy Animals"
}
var questionThree = {
  q:"What concert incident inspired Roger Waters to write The Wall?",
  c:"Roger Spits on a Fan",
  w1:"Roger Highfives a Fan",
  w2:"Roger suffers a brain injury from a fall",
  w3:"Roger poops himself"
}
var questionFour = {
  q:"The Album Artwork for Saucer full of secret features which superhero?",
  c:"Dr. Strange",
  w1:"Dr. Manhattan",
  w2:"Dr. Doom",
  w3:"Dr. Who"
}


function randomizeButtons(choices){
  rand1=Math.random();
  rand2=Math.random();
  rand3=Math.random();
  rand4=Math.random();
  
    
}


// Loadpage
// Call the welcome page which sets the title 




