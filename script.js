// SELECTING PARTS OF PAGE
// div elements
var timerDiv=document.getElementById("timerDiv");
var titleDiv=document.getElementById("titleDiv");
var questionDiv=document.getElementById("questionDiv");
var answerDiv=document.getElementById("answerDiv");
var answerButtons=document.getElementById("answerButtons");
var resultDiv=document.getElementById("resultDiv");

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

// IF THE PAGE IS WELCOME, A QUESTION OR SCORE SCREEN
var pageStatus="welcome";

// USER SCORE, WHEN THEY GET A QUETION RIGHT INCREMENT
var score;

// INDIVIDUAL QUESTIONS WITH A CORRECT AND 3 WRONG
var questionOne = {
  q:"David Gilmour is famous for playing what kind of guitar?",
  c:"Fender Strat",
  w1:"Gibson SG",
  w2:"Gretsch DuoJet",
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

// FUNCTION TO IDENTIFY BUTTON
function buttonClicked(){
  switch(event.target){
    case button1:
    console.log("button1")
    if(pageStatus==="welcome"){
      pageStatus="questions";
      console.log(pageStatus);
    }
    return "button1";
    
    case button2:
    console.log("button2")
    if(pageStatus==="welcome"){
      pageStatus="questions";
      console.log(pageStatus);
    }
    return "button2";
    
    case button3:
    console.log("button3")
    if(pageStatus==="welcome"){
      pageStatus="questions";
      console.log(pageStatus);
    }
    return "button3";
    
    case button4:
    console.log("button4")
    if(pageStatus==="welcome"){
      pageStatus="questions";
      console.log(pageStatus);
    }
    
    return "button4";
  }
  console.log(pageStatus);
} 

// 1. Welcome 
function welcomeScreen(){
  timerText.textContent="";
  titleText.textContent="Welcome!";
  questionText.textContent="Are you ready for a quiz?";
  resultText.textContent="";
  pageStatus="welcome";
}
// 2. Questions
function questionScreen(){
  var questionOne = {
    q:"David Gilmour is famous for playing what kind of guitar?",
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
  
  timer();
  // WHILE TIME LEFT OR QUESTIONS LEFT
  var questionsLeft=questionArray.length;
  while(timeLeft>0 || questionsLeft>0){
    for (var i = 0; i < questionArray.length; i++){
      var currentQuestion=questionArray[i];
      renderQuestion(currentQuestion);
      renderAnswers(currentQuestion);
      questionsLeft--;
    }
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
  titleText.textContent="Finished!";
  questionText.textContent="Your score:";
  answerDiv.textContent=score;
}
// QUESTIONS AND ANSWERS

var questionArray = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour
]; 
function renderQuestion(question){
  var questionArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour
  ]; 

  var displayText=question.q;
  questionText.textContent=displayText;
}

function renderAnswers(question){
  var questionArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour
  ]; 
  var questionOne = {
    q:"David Gilmour is famous for playing what kind of guitar?",
    c:"Fender Strat",
    w1:"Gibson SG",
    w2:"Gretsch DuoJet",
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
  var correctAnswer=question.c;
  var wrong1=question.w1;
  var wrong2=question.w2;
  var wrong3=question.w3;
  var tempArray=[correctAnswer,wrong1,wrong2,wrong3];
  tempArray=tempArray.sort();
  for(var i=0;i<tempArray.length;i++){
    var h3 =document.createElement("h3");
    h3.textContent=tempArray[i];
    answerDiv.appendChild(h3);
  }
}
// CREATING THE TIMER
var timeLeft;
function timer(){ 
  timeLeft=10;
  timerText.textContent="Time left:"+timeLeft;
  setInterval(
    function(){
      // IF TIME LEFT IS GREATER THAN 0 DECREMENT
      if(timeLeft>0){
        timeLeft--;
      }
      timerText.textContent="Time left:"+timeLeft;
    },1000);
    
  }

