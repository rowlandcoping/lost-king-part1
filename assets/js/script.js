const mainCharacter = {
    name: "",
    score: "0",
    strength: "15",
    speed: "15",
    stamina: "15",
    luck: "15"
};

function startGame(event) {
    if (!mainCharacter.name) {
        if (document.getElementById('character-name').value) {
        mainCharacter.name = document.getElementById('character-name').value;
        }else{mainCharacter.name = "Another Lazy Gamer"}
    }
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('game-page').style.display = "flex";
    document.getElementById('initial-name').innerHTML = mainCharacter.name;
    document.getElementById('main-strength').innerHTML = mainCharacter.strength;
    document.getElementById('main-speed').innerHTML = mainCharacter.speed;
    document.getElementById('main-stamina').innerHTML = mainCharacter.stamina;
    document.getElementById('main-luck').innerHTML = mainCharacter.luck;
}

document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('start-game-button').addEventListener('click', startGame);
});



var module = module || {};
module.exports = { mainCharacter, startGame };


