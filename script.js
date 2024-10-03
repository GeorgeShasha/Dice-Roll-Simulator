const rollDiceButton = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const history = document.getElementById("roll-history");

let historyList = [];

const diceRoll = () => {
    const rollResults = (Math.floor(Math.random() * 6) + 1);
    const diceFace = getDiceFace(rollResults);
    dice.innerHTML = diceFace;
    historyList.push(rollResults);
    updateRollHistory();
    
};

function updateRollHistory(){
    history.innerHTML = "";
    
    for(let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        history.appendChild(listItem);
    }
};

function getDiceFace(rollResults){
    switch(rollResults) {
        case 1:
            return "&#9856";
        case 2:
          return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
        default:
            return "";
      }
}

rollDiceButton.addEventListener('click', () => {
    dice.classList.add('roll-animation');
    setTimeout(() => {
        dice.classList.remove('roll-animation');
        diceRoll();
    }, 1000);
});