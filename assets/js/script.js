const mainCharacter = {
    name: "",
    score: "0",
    strength: "",
    speed: "",
    stamina: "",
    luck: ""
};



function startGame(event) {
    let characterName = document.getElementById('character-name');
    mainCharacter.name = characterName.value;
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('game-page').style.display = "flex";
}

let startButton =  document.getElementById('start-game-button');
startButton.addEventListener('click', startGame);

module.exports = { mainCharacter, startGame };

