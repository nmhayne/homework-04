//IDENTIFY BUTTONS 
var button1=document.getElementById("butt1");
var button2=document.getElementById("butt2");
var button3=document.getElementById("butt3");
var button4=document.getElementById("butt4");

var answerButtons=document.getElementById("answerButtons");
answerButtons.addEventListener("click",buttonClicked);



// ANSWER (IN)CORRECT MESSAGES 
var correctMsg="Correct!";
var wrongMsg="Wrong!";

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


function buttonClicked(){
  console.log(event.target);
}



// Welcome page with start button
// Start button is clicked, timer starts, start questions loop
// Display Question
// Display possible answers in random buttons