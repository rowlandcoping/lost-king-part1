const mainCharacter = {
    name: "",
    score: "",
    strength: "",
    speed: "",
    stamina: "",
    luck: "",
    health: ""
};

const characterWeapons = [
    {
        name: "Oathbringer",
        attack: "15",
        speed: "-5",
        magic: "",
        type: "sharp",
        image: "",
        chance: 5
    },
    {
        name: "Cat Sword",
        attack: "10",
        speed: "5",
        magic: "",
        type: "sharp",
        image: "",
        chance: 20
    },
    {
        name: "Rusty Dagger",
        attack: "0",
        speed: "5",
        magic: "",
        type: "sharp",
        image: "",
        chance: 50
    },
    {
        name: "Gnarled Club",
        attack: "3",
        speed: "0",
        magic: "",
        type: "blunt",
        image: "",
        chance: 80
    },
    {
        name: "Gleaming Mace",
        attack: "5",
        speed: "5",
        magic: "",
        type: "blunt",
        image: "",
        chance: 90
    },
    {
        name: "Wand of Fire",
        attack: "10",
        speed: "0",
        magic: "fire",
        type: "magical",
        image: "",
        chance: 95
    },
    {
        name: "Frozen Staff",
        attack: "10",
        speed: "0",
        magic: "ice",
        type: "magical",
        image: "",
        chance: 100
    }
];

const characterDefence = [
    {
        name: "Furry Gilet and Shorts",
        defence: "2",
        magic: "",
        image: "",
        chance: 15
    },
    {
        name: "Golden Loin Cloth",
        defence: "2",
        magic: "fire",
        image: "",
        chance: 30
    },
    {
        name: "Filthy Jerkin",
        defence: "4",
        magic: "",
        image: "",
        chance: 75
    },
    {
        name: "Chain Mail",
        defence: "6",
        magic: "",
        image: "",
        chance: 85
    },
    {
        name: "Purple Helmet",
        defence: "6",
        magic: "ice",
        image: "",
        chance: 95
    },
    {
        name: "large shield",
        defence: "10",
        magic: "",
        image: "",
        chance: 100
    },
];

const characterPotions = [
    {
        name: "Potion of Catnip",
        effect: "Cats likely to be more friendly",
        image: "",
        chance: 15
    },
    {
        name: "Potion of Healing",
        effect:"Restores 50 Health",
        image: "",
        chance: 30
    },
    {
        name: "Potion of Fire",
        effect:"Causes Fire Damage",
        image: "",
        chance: 50
    },
    {
        name: "Potion of Ice",
        effect:"Causes Ice Damage",
        image: "",
        chance: 70
    },
    {
        name: "Potion of Defence",
        effect:"Increases Defence for next fight",
        image: "",
        chance: 85
    },
    {
        name: "Potion of Power",
        effect:"Increases Attack for next fight",
        image: "",
        chance: 100
    },
];

const characterRandom = [
    {
        name: "Bag of Cables",
        effect: "May help plugging something in",
        image: "",
        chance: 20
    },
    {
        name: "Cat Biscuits",
        effect:"Restores 20 Health",
        image: "",
        chance: 35
    },
    {
        name: "Insect Repellent",
        effect:"Scares off bugs",
        image: "",
        chance: 50
    },
    {
        name: "Four Leaf Clover",
        effect:"Said to bring good fortune",
        image: "",
        chance: 65
    },
    {
        name: "Stress Balls",
        effect:"You may need this",
        image: "",
        chance: 80
    },
    {
        name: "Frayed Rope",
        effect:"A rope in name only",
        image: "",
        chance: 100
    },
];





const getRandomNumber= (min, max) => Math.floor(Math.random() * (max - min)) + min;

function findItemType (chanceOne, chanceTwo, chanceThree, chanceFour) {
    let randomChance = getRandomNumber(1, 100);
    if (randomChance <= chanceOne) {
        return characterWeapons;
    } else if (randomChance > chanceOne && randomChance <= chanceTwo) {
        return characterDefence;
    } else if (randomChance > chanceTwo && randomChance <= chanceThree) {
        return characterPotions;
    } else if (randomChance > chanceThree && randomChance <= chanceFour) {
        return characterRandom;
    } else {
        return "";
    }
}



function searchForItem() {
    let itemType = findItemType(25,40,55,90);
    if (itemType == "") {
        return "";
    } else {
        let likelihoods = itemType.map(i => i.chance);
        let itemSelection = getRandomNumber(1, 100);
        let foundItem = "";
        for (const likelihood of likelihoods) {
            if (likelihood <= itemSelection) {
                foundItem = likelihood;
            } else {
                break;
            } 
        }
        if (itemType === characterWeapons) {console.log("you have found a weapon");}
        return foundItem;
    }
}

function generateStats(character, min, max, hMin, hMax) {
    character.strength = getRandomNumber(min, max);
    character.speed = getRandomNumber(min, max);
    character.stamina = getRandomNumber(min, max);
    character.luck = getRandomNumber(min, max);
    character.health = getRandomNumber(hMin, hMax);
}

function resetGame() {
    localStorage.clear();
    mainCharacter.name = "";
    mainCharacter.strength = "";
    mainCharacter.speed = "";
    mainCharacter.stamina = "";
    mainCharacter.luck = "";
    mainCharacter.health = "";
    mainCharacter.score = "";
    document.getElementById('landing-page').style.display = "flex";
    document.getElementById('game-page').style.display = "none";
    document.getElementById('gameover-page').style.display = "none";
    document.getElementById('final-score').innerHTML = "";    
}


function startGame(event) {
    localStorage.clear();
    if (!mainCharacter.name) {        
        if (document.getElementById('character-name').value) {
        mainCharacter.name = document.getElementById('character-name').value;
        generateStats (mainCharacter, 12, 20, 50, 100);
        }else{
            mainCharacter.name = "Another Lazy Gamer";
            generateStats (mainCharacter, 12, 20, 50, 100);
           }
    }
    mainCharacter.score = 0;
    writeInitialToDom();
}

function writeInitialToDom() {
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('game-page').style.display = "flex";
    document.getElementById('gameover-page').style.display = "none";
    document.getElementById('final-score').innerHTML = "";  
    document.getElementById('main-strength').innerHTML = mainCharacter.strength;
    document.getElementById('main-speed').innerHTML = mainCharacter.speed;
    document.getElementById('main-stamina').innerHTML = mainCharacter.stamina;
    document.getElementById('main-luck').innerHTML = mainCharacter.luck;
    document.getElementById('main-health').innerHTML = mainCharacter.health;
    document.getElementById('game-text').innerHTML = pageOne;
    document.getElementById('choices-section').innerHTML = optionsOne;    
}

function gameOverGiveUp() {
    document.getElementById('final-score').innerHTML = mainCharacter.score;
    document.getElementById('gameover-page').style.display="flex";
    document.getElementById('game-page').style.display="none";
    document.getElementById('game-outcome').innerHTML = giveUp;
};
function openEyes(){    
    document.getElementById('game-text').innerHTML = pageTwo;
    document.getElementById('choices-section').innerHTML = optionsTwoFirst + mainCharacter.name + optionsTwoSecond;   
}

/*start game button event handler*/
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('start-game-button').addEventListener('click', startGame);
});
/*restart character button event handlers*/
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('restart-game-button').addEventListener('click', startGame);
});
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('restart-game-button-end').addEventListener('click', startGame);
});
/*reset character button event handlers*/
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('reset-game-button').addEventListener('click', resetGame);
});
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('reset-game-button-end').addEventListener('click', resetGame);
});

/*GAME EVENT HANDLERS*/

/*page one event handlers*/

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-one"); // Or any other selector.
    if(target){
        mainCharacter.score +=1;
        openEyes();
    }
 });

 document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-two"); // Or any other selector.
    if(target){
        mainCharacter.score -=5;
        gameOverGiveUp();     
    }
 });


/* GAME TEXT */

/*page one */

const pageOne = `
    <p>You awaken.  You become aware of something.  It is pain.</p>  
    
    <p>You try to open your eyes.  You cannot. It feels like they are welded together.</p>
    
    <p>You reach for them, find a thin crust of blood. You try to prise them open.  The pain grows.</p>    
`;
const optionsOne = `
    <li><button class="choice-button" id="choice-one">Open your eyes.</button></li>
    <li><button class="choice-button" id="choice-two">Give up.</button></li>
`;

/* page two */
const pageTwo = `
    <p>It makes no discernable difference.  Either you are blind, or it is deep, pitch dark.</p>

    <p>But who are you?</p>
    <p>"Who am I???"</p>
    <p>Somebody spoke the words.  You think that it was you.</p>
`;
const giveUp = `
        <p>You force the pain and the cruel world that accompanies it to the back of your mind.</p>
        <p>Your head sinks slowly back to the rough, cool, rocky floor.</p>
        <p>Your eyes relax, and you breathe the darkness in.</p>
        <p>They never open again</p>
        <p>YOU ARE DEAD</p>
        `   

const optionsTwoFirst = `
    <li><button class="choice-button" id="choice-three">That's easy.  I am called... `   
const optionsTwoSecond = `
    </button></li>
    <li><button class="choice-button" id="choice-four">I am The Soul Of DARKNESSSSS.</button></li>
    <li><button class="choice-button" id="choice-five">It's...... too early to say.</button></li>
`;

/* page three */




var module = module || {};
module.exports = { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
    pageOne, optionsOne, gameOverGiveUp, giveUp };


