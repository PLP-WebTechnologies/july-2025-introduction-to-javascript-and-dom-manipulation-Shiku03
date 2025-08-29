const defaultName= "Guest";
const defaultScore=0;

//variables for the player update functionality
const updateButton=document.getElementById("update-name-btn");
const updateField=document.getElementById("update-name-field");
const saveButton=document.getElementById("save-name-btn");
const updateNameContainer=document.getElementById("update-name-container");

//variables for the answers provided by the player and the array holding the correct answers
const answers=document.querySelectorAll(".answer");
const quizAnswers=[96,78,144,4,9];


//sets the default name of the player
let playerName = defaultName;

let displayName= document.getElementById("player-name");
displayName.textContent=playerName;
let playerScore= document.getElementById("player-score");
playerScore.textContent=defaultScore;

//reveals the field for updating the name of the player
updateButton.addEventListener("click", () =>{
    updateNameContainer.style.display="block";
});

//saves the updated name of the player
saveButton.addEventListener("click", () => {
    playerName= updateField.value;
    displayName.textContent=playerName;
    updateNameContainer.style.display="none";
});

//accepts the answers for each question and compares them against the array holding the answers
answers.forEach((btn,index) => {
    btn.addEventListener("click", () =>{
        questionIndex=Math.floor(index/4);
        let selectedbtn=btn.textContent;
        if(selectedbtn == quizAnswers[questionIndex]){
            score +=5;
        } else {
            score;
        }
        playerScore=score;
    });
});
    

//console.log(updateNameContainer);
//console.log(displayName.textContent);

