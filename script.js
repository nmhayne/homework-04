// SELECTING PARTS OF PAGE
var title=document.getElementById("title");
var timer=document.getElementById("timer");
var questionDisplay=document.getElementById("questionDisplay");
var answerDisplay=document.getElementById("answerDisplay");
var resultDisplay=document.getElementById("resultDisplay");
// DIV CONTAINING BUTTONS FOR EVENT LISTENING
var answerButtons=document.getElementById("answerButtons");
// EVENT LISTENIG FOR BUTTONS
answerButtons.addEventListener("click",buttonClicked);
//SELECTING BUTTONS 
var button1=document.getElementById("butt1");
var button2=document.getElementById("butt2");
var button3=document.getElementById("butt3");
var button4=document.getElementById("butt4");
// USER SCORE
var userScore=0;
// TIMER LEFT
var timeLeft=10;
//TIMER 
for(var i=0;i<10;i++){
  setInterval(console.log("test"),10000);
  setInterval(console.log("and"),10000);
  
}
function countdown() {
  for (var i = 10; i > 0; i--) {
    timeLeft--
    document.querySelector("timerP").textContent=timeLeft;
    console.log(timeLeft);
  }
};
// FUNCTION TO IDENTIFY BUTTON
function buttonClicked(){
  console.log(event.target);
  switch(event.target){
    case button1:
    console.log("button1");
    break;
    
    case button2:
    console.log("button2");
    break;
    
    case button3:
    console.log("button3");
    break;
    
    case button4:
    console.log("button4");
    break;
  }
}
// CONDENSING FUNCTION TO SET TITLE BLOCK
function setTitleText(stringInput){
  title.textContent=stringInput;
}
// CONDENSING FUNCTION TO SET QUESTION BLOCK
function setQuestionText(stringInput){
  questionText.textContent=stringInput;
}







// Welcome page with start button
// Start button is clicked, timer starts, start questions loop
// Display Question
// Display possible answers in random buttons



// 1. StartPage

// Set title To Welcome
// Set Question to describe quiz
// Set Answers to have start button

// FUNCTION TO ACT AS TITLE SCREEN
function welcomeScreen(){
  setTitleText("Welcome!");
  setQuestionText("Hit start when you're ready");
}



// 2. Questions
// FUNCTION TO DISPLAY CORRECT
function gotAnswer(){
  resultDisplay.textContent="Correct!"
}
// FUNCTION TO DISPLAY INCORRECT
function missedAnswer(){
  resultDisplay.textContent="Inorrect!"
}
// Set Title to display question number
// question index in the array
// Set Question to display Question text
// questionNumber.q
// Set Answers to display possible answers
// random assign button to c,w1,w2,w3

// FUNCTION TO SETUP QUESTION
function questionScreen(){
  // QUESTION AND ANSWERS
  var questionArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour
  ]; 
}
// FUNCTION TO IDENTIFY BUTTON
function buttonClicked(){
  console.log(event.target);
  switch(event.target){
    case button1:
    console.log("button1");
    break;
    
    case button2:
    console.log("button2");
    break;
    
    case button3:
    console.log("button3");
    break;
    
    case button4:
    console.log("button4");
    break;
  }
}

// 3. Score
// Set the Title to display finished
// Set the Quesiton to display score


// FUNCTION TO ACT AS SCORE SCREEN
function scoreScreen(){
  title.textContent="SCORE:" 
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


