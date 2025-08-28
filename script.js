const defaultName= "Guest";
const defaultScore=0;

const updateButton=document.getElementById("update-name-btn");
const updateField=document.getElementById("update-name-field");
const saveButton=document.getElementById("save-name-btn");
const updateNameContainer=document.getElementById("update-name-container");
const answer=document.querySelectorAll("answer");

const quizAnswers=[25];

let playerName = defaultName;

let displayName= document.getElementById("player-name");
displayName.textContent=playerName;
let playerScore= document.getElementById("player-score");
playerScore.textContent=defaultScore;


updateButton.addEventListener("click", () =>{
    updateNameContainer.style.display="block";
})

saveButton.addEventListener("click", () => {
    playerName= updateField.value;
    displayName.textContent=playerName;
    updateNameContainer.style.display="none";
})
    

//console.log(updateNameContainer);
//console.log(displayName.textContent);

