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


// USER SCORE, WHEN THEY GET A QUETION RIGHT INCREMENT
var score=0;

// INDIVIDUAL QUESTIONS WITH A CORRECT AND 3 WRONG
var questionOne = {
  q:"David Gilmour is famous for playing what kind of guitar?",
  a: [
    { n: "Fender Strat", correct: true }, 
    { n: "Gibson SG", correct: false }, 
    { n: "Gretsch DuoJet", correct: false }, 
    { n: "BC Rich Warlock", correct: false }
  ] 
}
var questionTwo = {
  q:"The album Animals is about what?",
  a:[
    { n: "Capitalism", correct: true},
    { n: "Women",correct: false},
    { n: "Childhood Memories",correct: false},
    { n: "Fluffy Animals", corect: false}
  ]
}
var questionThree = {
  q:"What concert incident inspired Roger Waters to write The Wall?",
  a:[
    { n: "Roger Spits on a Fan", correct: true},
    { n: "Roger Highfives a Fan",correct: false},
    { n: "Roger suffers a brain injury from a fall",correct: false},
    { n: "Roger poops himself", corect: false}
  ]
}
var questionFour = {
  q:"The Album Artwork for Saucer full of secret features which superhero?",
  a: [
    {n:"Dr. Strange", correct: true},
    {n:"Dr. Manhattan", correct: false},
    {n:"Dr. Doom", correct: false},
    {n:"Dr. Who", correct: false},
  ]
}
var questionFive = {
  q:"Comfortably Numb is about what drug?",
  a: [
    {n:"Heroin", correct: true},
    {n:"LSD", correct: false},
    {n:"Cannabis", correct: false},
    {n:"Alcohol", correct: false},
  ]
}
var questionSix = {
  q:"Only which member has been credited on every Pink Floyd album?",
  a: [
    {n:"Nick Mason", correct: true},
    {n:"Roger Waters", correct: false},
    {n:"David Gilmour", correct: false},
    {n:"Richard Wright", correct: false},
  ]
}
var questionSeven = {
  q:"Which of these song titles is correct?",
  a: [
    {n:"Alan's Psychedelic Breakfast", correct: true},
    {n:"Greg's Trippy Entre", correct: false},
    {n:"Fred's Galactic Tea-Time", correct: false},
    {n:"George's Gorgeous Porridge", correct: false},
  ]
}


// DELCLARING QUESTION ARRAY
var questionArray = [ questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven]; 


// INDEX OF THE CURRENT QUESTION
var currQuizIndex = 0;
var timeRemaining = 200;


// FUNCTION TO CALL WHEN THE PAGE LOADS
function startQuiz(){
  var ready=confirm("Are you ready for a quiz?");
  if(ready===false){
    titleText.textContent="Oh...";
    questionText.textContent="Well, come back when you're ready!";
  } 
  else{
    var countdown = setInterval(function(){
      if( timeRemaining <= 0 ){
        scoreScreen();
        clearInterval(countdown);
      }else if(currQuizIndex===questionArray.length){
        clearInterval(countdown);
      }
      else
      timeRemaining--;
      timerText.textContent="Time Remaining: "+ timeRemaining;
    }, 100 )
    runQuiz();}
  }
  
  // FUNCTION TO ASK QUESTIONS WHILE LEFT
  function runQuiz(){
    
    // IF CURRENT QUESTION INDEX IS LESS THAN ARRAY LENGTH, STILL QUIZ
    if( currQuizIndex < questionArray.length ){
      var currQuestion = questionArray[currQuizIndex];
      titleText.textContent="Question: "+(currQuizIndex+1);
      renderQuestion(currQuestion);
    } 
    // ELSE END QUIZ
    else { 
      scoreScreen();
    }
  }
  
  // FUNCTION TO DISPLAY THE QUESTION AND CREATE ANSWER BUTTONS
  function renderQuestion(question){
    
    // CLEAR PREVIOUS ANSWER BUTTONS
    answerDiv.textContent="";
    console.log("rendering");
    
    // SET QUESTION TEXT TO THE QUESTION
    questionText.textContent = question.q;
    
    // FOR ANSWERS CREATE A BUTTON
    for(var i = 0; i<question.a.length; i++){
      var btn = document.createElement("button");
      
      // SET THE ATTRIBUTE TO ANSWER-BTN
      btn.setAttribute("class", "answer-btn");
      
      // SET THE BUTTON TEXT TO THE ANSWER
      btn.textContent = question.a[i].n;
      
      // IF THE ANSWER IS THE CORRECT SET A DATA-CORRECT ATTRIBUTE TO YES
      if( question.a[i].correct === true ){
        btn.setAttribute("data-correct", "yes");
      }
      
      // APPEND THE BUTTON 
      answerDiv.appendChild(btn);
    }
  }
  
  // CLICK HANDLER FOR ANSWER BUTTONS
  answerDiv.addEventListener("click", function(){
    if(event.target.matches("button") ){
      // DETERMINE CLICKED BUTTON
      var button=event.target; 
      var buttonValue=button.getAttribute("data-correct");
      
      
      // IF CORRECT ANSWER
      if(buttonValue==="yes"){
        score++;
        resultText.textContent="Correct";  
      }
      
      // IF INCORRECT ANSWER
      if(buttonValue===null){
        timeRemaining-=20;
        resultText.textContent="Wrong!";        
      }

      // AFTER TESTING ANSWER VALIDITY
      // GO TO NEXT QUESTION
      currQuizIndex++;
      runQuiz();
    };
  });
  
  
  
  
  // 3. Score
  function scoreScreen(){
    timerText.textContent="Time Remaining: 0"
    titleText.textContent="Finished!";
    questionText.textContent="Your score:";
    answerDiv.textContent=score+" of "+ questionArray.length;
    resultText.textContent=Math.round(100*score/questionArray.length)+"%"
  }
  
  
  
  
  
  
  startQuiz();