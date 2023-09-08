const mainCharacter = {
    name: "",
    score: "0",
    strength: "",
    speed: "",
    stamina: "",
    luck: ""
};

function startGame(event) {
    if (!mainCharacter.name) {
    mainCharacter.name = document.getElementById('character-name').value;
    }
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('game-page').style.display = "flex";
}

document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('start-game-button').addEventListener('click', startGame);
});



var module = module || {};
module.exports = { mainCharacter, startGame };


