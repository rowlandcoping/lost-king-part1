//Player Object

const mainCharacter = {
    name: "",
    score: "",
    strength: "",
    speed: "",
    stamina: "",
    luck: "",
    health: ""
};

//ITEM OBJECTS

//weapons
const characterWeapons = [
    {
        category: "weapon",
        adjective: "a mighty",
        name: "Oathbringer",
        attack: 15,
        speed: -5,
        magic: "",
        type: "sharp",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 3,
        score: 50,
        description: "The Oathbringer, long thought consigned to fanciful legends and bar talk.  A razor's edge and lore so endless that Tolkien would think his work thin by comparison."
    },
    {
        category: "weapon",
        adjective: "a nifty",
        name: "Cat Sword",
        attack: 10,
        speed: 5,
        magic: "",
        type: "sharp",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 20,
        score: 10,
        description: "This seems to be the primary weapon of the cat warriors you have encountered.  It's small, light and perilously pointy."
    },
    {
        category: "weapon",
        adjective: "a pefunctory",
        name: "Rusty Dagger",
        attack: 0,
        speed: 5,
        magic: "",
        type: "sharp",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 50,
        score: 3,
        description: "To say this weapon is blunt would be an understatement.  It weighs practically nothing though, and seems somehow to move even faster than your empty fist."
    },
    {
        category: "weapon",
        adjective: "a primitive",
        name: "Gnarled Club",
        attack: 3,
        speed: 0,
        magic: "",
        type: "blunt",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 80,
        score: 3,
        description: "The dubious stains and what appear to be lumps of scalp adhering to this weapon speak of its purpose.  It is, essentially, little more than a heavy piece of wood."
    },
    {
        category: "weapon",
        adjective: "a brutal",
        name: "Gleaming Mace",
        attack: 5,
        speed: 5,
        magic: "",
        type: "blunt",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 90,
        score: 15,
        description: "Not as heavy as its heft would imply, this thing practically whirrs though the air.  This and the pointy spikes on the end mean it is most unfriendly towards skulls."
    },
    {
        category: "weapon",
        adjective: "a wizardy",
        name: "Wand of Fire",
        attack: 10,
        speed: 0,
        magic: "fire",
        type: "magical",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 95,
        score: 30,
        description: "A blazing wand of fire, it can shoot blazing pillars of fire at your opponents... but be warned it's a good idea to know what you're doing."
    },
    {
        category: "weapon",
        adjective: "an Ice Queen's",
        name: "Frozen Staff",
        attack: 10,
        speed: 0,
        magic: "ice",
        type: "magical",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 100,
        score: 30,
        description: "A fearsome wand of ice, formerly of the Ice Princess from the far frozen North.  How it got here you could not say, but you wouldn't like to meet her if she's looking for it!"
    }
];
//defensive items
const characterDefence = [
    {
        category: "clothing",
        adjective: "some furry",
        name: "Furry Gilet and Shorts",
        defence: 2,
        magic: "",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 15,
        score: 3,
        description: "This natty combination looks like something Jane Fonda might have worn on the set of Barbarella.  It's unlikely her outfit would have smelt quite so much of excrement."
    },
    {
        category: "clothing",
        adjective: "some disco",
        name: "Golden Loin Cloth",
        defence: 2,
        magic: "fire",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 30,
        score: 5,
        description: "If you want to go and tear up the gay scene in 80s New York, this outfit is ideal.  Meandering about through dangerous dungeons with a serious head injury? Not so much."
    },
    {
        category: "clothing",
        adjective: "some disgusting",
        name: "Filthy Jerkin",
        defence: 4,
        magic: "",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 75,
        score: 1,
        description: "This foul leather jerkin shows signs of having once contained a decomposing corpse.  Where it came from, you really don't want to know."
    },
    {
        category: "clothing",
        adjective: "some shiny",
        name: "Chain Mail",
        defence: 6,
        magic: "",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 85,
        score: 10,
        description: "Although it probably isn't Mithril, this lovely chain mail still ought to be enough to turn aside an orcan blade.  Or an angry cat warrior claw, for that matter"
    },
    {
        category: "clothing",
        adjective: "some bizarre",
        name: "Purple Helmet",
        defence: 6,
        magic: "ice",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 95,
        score: 30,
        description: "The purpose behind the design of this protective device is a baffling mystery.  I'll leave it to your imagination.  It also seems to be imbued with magical powers."
    },
    {
        category: "clothing",
        adjective: "some uncomfortable",
        name: "Plate Armor",
        defence: 10,
        magic: "",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 100,
        score: 40,
        description: "The armor of a noble ancient knight.  It's amazing what you can find lying about in a dungeon, really. This shold keep out all but the most determined foe."
    },
];
//potions
const characterPotions = [
    {
        category: "potion",
        adjective: "an alluring",
        name: "Potion of Catnip",
        effect: "Cats likely to be more friendly",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 15,
        score: 10,
        description:"Cats seem to find this potion particularly delightful. You decide it might be best to wear it like after-shave.  What could possibly go wrong?"
    },
    {
        category: "potion",
        adjective: "a soothing",
        name: "Potion of Healing",
        effect:"Restores 50 Health",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 30,
        score: 10,
        description: "There is not much to say about a potion of healing.  It's a pretty standard fantasy trope, and speaks of a chronic lack of imagination."
    },
    {
        category: "potion",
        adjective: "a spicy",
        name: "Potion of Fire",
        effect:"Causes Fire Damage",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 50,
        score: 15,
        description:"If you are lucky enough to find this along with the golden loincloth and the wand of fire, you better hope you come across enemies with a fire vulnerability."
    },
    {
        category: "potion",
        adjective: "a chilly",
        name: "Potion of Ice",
        effect:"Causes Ice Damage",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 70,
        score: 10,
        description:"If the Ice Queen is coming down here after her lost staff, then this potion will be useless against her.  I'm sure you'll find something to do with it though."
    },
    {
        category: "potion",
        adjective: "a combat",
        name: "Potion of Defence",
        effect:"Increases Defence for next fight",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 85,
        score: 10,
        description:"If you're on your last legs and facing down a furious furry furore of feline fencers, then this might draw the game out for another couple of minues."
    },
    {
        category: "potion",
        adjective: "a combat",
        name: "Potion of Power",
        effect:"Increases attack for next fight",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 100,
        score: 10,
        description:"One swig of this, and nothing and no-one will be able to stand before you!  But only briefly, because it will have run out - there's not that much left in the bottle."
    },
];
//random objects
const characterObjects = [
    {
        category: "object",
        adjective: "a useless",
        name: "Bag of Cables",
        effect: "May help plugging something in",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 20,
        score: 1,
        description: "It's not quite clear how, but I'm sure if you keep hold of this big bag of obsolete cables for long enough it will come in useful.  Right?  Right??"
    },
    {
        category: "object",
        adjective: "a tasty",
        name: "Cat Biscuits",
        effect:"Restores 20 Health",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 35,
        score: 10,
        description: "Whilst it's clear your furry adversaries love these things, you can't help but be put off by the strong smell of fish."
    },
    {
        category: "object",
        adjective: "a useful",
        name: "Insect Repellent",
        effect:"Scares off bugs",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 50,
        score: 10,
        description: "There may come a point in this adventure where you reach bug-infested climes, and you will be grateful for the day you decided to keep hold of this.  Orrrr... perhaps not."
    },
    {
        category: "object",
        adjective: "a lucky",
        name: "Four Leaf Clover",
        effect:"Said to bring good fortune",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 65,
        score: 15,
        description:"Less gruesome than a rabbit's foot, and less effective than a gypsy's blessing, this item nevertheless is handy if you need to take your chances.  Which might actually happen a lot."
    },
    {
        category: "object",
        adjective: "a useless",
        name: "Stress Balls",
        effect:"You may need this",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 80,
        score: 4,
        description: "There's nothing more stressful than playing a browser-based game, stuck in an endless and seemingly inescapable gameplay loop, wondering where it all might end. On reflection, you may need these."
    },
    {
        category: "object",
        adjective: "an intriguing",
        name: "Frayed Rope",
        effect:"A rope in name only",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 100,
        score: 7,
        description:"It's a rope, but it's not really a rope, is it.  It seems unlikely to take your weight, even in your emaciated state.  In fact, it's hard to see the purpose of this object.  We'll see."
    },
];

const currentWeapon = {
    name: "",
    attack: 0,
    speed: 0,
    magic: "",
    type: "",
    image: ""
}

const currentDefence = {
    name: "",
    defence: 0,
    magic: "",
    image: ""
}

const currentPotion = {
    name: "",
    effect: "",
    image: ""
}

const currentObject = {
    name: "",
    effect: "",
    image: ""
}

//Object temporarily containing item found
const foundItemInfo = {
    category: "",
    name: "",
    speed: 0,
    magic: "",
    type: "",
    image: "",
    effect: "",
    attack: 0,
    defence: 0,
    score: 0,
    description: ""
}

//Object logging player actions

const thingsWhatYouveDone = {
    firstRoomSearch: false,
    slimeKill: false,
}

// HELPER FUNCTIONS
// Random number generator
const getRandomNumber= (min, max) => Math.floor(Math.random() * (max - min)) + min;

//Character stats generator
function generateStats(character, min, max, hMin, hMax) {
    character.strength = getRandomNumber(min, max);
    character.speed = getRandomNumber(min, max);
    character.stamina = getRandomNumber(min, max);
    character.luck = getRandomNumber(min, max);
    character.health = getRandomNumber(hMin, hMax);
}

// Functions to find randomized items
//select category
function findItemType (chanceOne, chanceTwo, chanceThree, chanceFour) {
    let randomChance = getRandomNumber(1, 100);
    let objectSelection;
    if (randomChance > chanceFour) {
        objectSelection = "";
    } else {
        if (randomChance <= chanceOne){
            objectSelection = characterWeapons;
        } else if (randomChance <= chanceFour && randomChance > chanceThree){
            objectSelection = characterObjects;
        } else if (randomChance <= chanceThree && randomChance > chanceTwo) {
            objectSelection = characterPotions;
        } else if (randomChance <= chanceTwo && randomChance > chanceOne){
            objectSelection = characterDefence;
        }
    }
    return objectSelection;
}
//select item from category
function searchForItem(chanceWeapon, chanceDefence, chancePotion, chanceObject) {
    let itemType = findItemType(chanceWeapon, chanceDefence, chancePotion, chanceObject);
    if (itemType) {
        let likelihoods = itemType.map(i => i.chance);
        let itemSelection = getRandomNumber(1, 100);
        console.log(itemSelection);
        let valueSelector = [];
        const filterItems = likelihoods.filter((value) => {  
            if (itemSelection <= value) {
               valueSelector.push(value);
            }
        });
        foundItem = valueSelector[0];
        for (let i of itemType) {
            if (i.chance === foundItem) {
                foundItemInfo.category = i.category;
                foundItemInfo.adjective = i.adjective;
                foundItemInfo.name = i.name;
                foundItemInfo.attack = i.attack;
                foundItemInfo.speed = i.speed;
                foundItemInfo.magic = i.magic,
                foundItemInfo.type = i.type,
                foundItemInfo.image = i.image,
                foundItemInfo.effect = i.effect,
                foundItemInfo.defence = i.defence,
                foundItemInfo.score = i.score,
                foundItemInfo.description = i.description
            }
        }
    }   
}
//Store Item as current
function itemStorage() {
    if (foundItemInfo.category === "weapon") {
        if (currentWeapon.name) {
            // add a warning popup with options
        } else {
            currentWeapon.name = foundItemInfo.name;
            currentWeapon.attack = foundItemInfo.attack;
            currentWeapon.speed = foundItemInfo.speed;
            currentWeapon.magic = foundItemInfo.magic;
            currentWeapon.type = foundItemInfo.type;
            currentWeapon.image = foundItemInfo.image;
        }
    } else if (foundItemInfo.category === "clothing") {
        if (currentDefence.name) {
            // add a warning popup with options
        } else {
            currentDefence.name = foundItemInfo.name;
            currentDefence.defence = foundItemInfo.defence;
            currentDefence.magic = foundItemInfo.magic;
            currentDefence.image = foundItemInfo.image;
        }
    } else if (foundItemInfo.category === "potion") {
        if (currentPotion.name) {
            // add a warning popup with options
        } else {
            currentPotion.name = foundItemInfo.name;
            currentPotion.effect = foundItemInfo.effect;
            currentPotion.image = foundItemInfo.image;
        }
    } else if (foundItemInfo.category === "object") {
        if (currentObject.name) {
            // add a warning popup with options
        } else {
            currentObject.name = foundItemInfo.name;
            currentObject.effect = foundItemInfo.effect;
            currentObject.image = foundItemInfo.image;
        }
    }
}

//GAMEPLAY FUNCTIONS

// Game restart and reset functions

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
    for(let item of Object.keys(currentWeapon)) {
        currentWeapon[item] = "";
     }
     for(let item of Object.keys(currentDefence)) {
        currentDefence[item] = "";
     }
     for(let item of Object.keys(currentPotion)) {
        currentPotion[item] = "";
     }
     for(let item of Object.keys(currentObject)) {
        currentObject[item] = "";
     }
    
    writeInitialToDom();
}

function writeInitialToDom() {
    const resetElements = document.getElementsByClassName('reset');
    for (let i = 0; i < resetElements.length; i++) {
        resetElements[i].innerHTML = "";
    }
    document.getElementById('weapon-item-image').innerHTML = `<img src="assets/images/items/box.png">`;
    document.getElementById('defence-item-image').innerHTML = `<img src="assets/images/items/box.png">`;
    document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png">`;
    document.getElementById('object-item-image').innerHTML = `<img src="assets/images/items/box.png">`;
    document.getElementById('landing-page').style.display = "none";
    document.getElementById('gameover-page').style.display = "none";
    document.getElementById('image-section').style.display = "none";
    document.getElementById('upper-text').style.display = "none";
    document.getElementById('game-text').style.display = "block";
    document.getElementById('game-page').style.display = "flex";
    document.getElementById('final-score').innerHTML = "";
    document.getElementById('character-sheet-name').innerHTML = "Identity Unknown";
    document.getElementById('main-strength').innerHTML = mainCharacter.strength;
    document.getElementById('main-speed').innerHTML = mainCharacter.speed;
    document.getElementById('main-stamina').innerHTML = mainCharacter.stamina;
    document.getElementById('main-luck').innerHTML = mainCharacter.luck;
    document.getElementById('main-health').innerHTML = mainCharacter.health;
    document.getElementById('game-text').innerHTML = pageOne;
    document.getElementById('choices-section').innerHTML = optionsOne;    
}

// Gameplay functions

//Page One

//open eyes
function openEyes(){    
    document.getElementById('game-text').innerHTML = pageTwo;
    document.getElementById('choices-section').innerHTML = optionsTwoFirst + mainCharacter.name + optionsTwoSecond;   
}
//give up (death)
function gameOverGiveUp() {
    document.getElementById('final-score').innerHTML = mainCharacter.score;
    document.getElementById('gameover-page').style.display="flex";
    document.getElementById('game-page').style.display="none";
    document.getElementById('game-outcome').innerHTML = giveUp;
};

//Page Two
function knowMyName(){    
    document.getElementById('game-text').innerHTML = pageThreeFirst + pageThreeCommon;
    document.getElementById('character-sheet-name').innerHTML = mainCharacter.name;
    document.getElementById('choices-section').innerHTML = optionsThree;   
}
function fightingTalk(){    
    document.getElementById('game-text').innerHTML = pageThreeSecondOne + mainCharacter.name + pageThreeSecondTwo + pageThreeCommon;
    document.getElementById('character-sheet-name').innerHTML = mainCharacter.name;
    document.getElementById('choices-section').innerHTML = optionsThree;  
}
function nameUnknown(){    
    document.getElementById('game-text').innerHTML = pageThreeThird + pageThreeCommon;
    document.getElementById('character-sheet-name').innerHTML = mainCharacter.name + "<br><em>(provisional)</em>";
    document.getElementById('choices-section').innerHTML = optionsThree;    
}

//Page Three
function firstSearch() {
    searchForItem(15, 35, 55, 100);
    document.getElementById('list-item-one').innerHTML = "";
    document.getElementById('list-item-two').innerHTML = "";
    document.getElementById('list-item-three').innerHTML = "";
    document.getElementById('list-item-four').innerHTML = "";
    document.getElementById('list-item-five').innerHTML = "";
    document.getElementById('image-section').style.display = "flex";
    document.getElementById('upper-text').style.display = "block";
    document.getElementById('game-text').style.display = "none";
    document.getElementById('upper-text').innerHTML = "<h3>You have found " + foundItemInfo.adjective + " " + foundItemInfo.category + "!!!</h3>" + 
    `<p>Tentatively approaching the dark form on the ground, you soon see that it is the corpse of a fellow traveller, gently rotting in the gloom.</p>
    <p>You find yourself strangely unbothered by this, swiftly rummaging around to see what you can find.</p>
    `;
    document.getElementById('image-image').innerHTML = `<img src="` + foundItemInfo.image + `">`;
    document.getElementById('image-title').innerHTML = foundItemInfo.name;
    document.getElementById('item-description').innerHTML = foundItemInfo.description;
    if (foundItemInfo.category =="weapon") {
        document.getElementById('list-item-one').innerHTML = "Attack: " + foundItemInfo.attack;
        document.getElementById('list-item-two').innerHTML = "Speed: " + foundItemInfo.speed;
        document.getElementById('list-item-three').innerHTML = "Type: " + foundItemInfo.type;
    } else if (foundItemInfo.category =="clothing") {
        document.getElementById('list-item-one').innerHTML = "Defence: " + foundItemInfo.defence;
        if (foundItemInfo.magic){
            document.getElementById('list-item-two').innerHTML = "Magic: " + foundItemInfo.magic;
        } else { document.getElementById('list-item-two').innerHTML = "Magic: " + "None";  
        }
    } else {
        document.getElementById('list-item-one').innerHTML = "Effect: " + foundItemInfo.effect;
    }
    document.getElementById('choices-section').innerHTML = optionsFour;
    thingsWhatYouveDone.firstRoomSearch = true;
}

//Page Four
function storeFirstItem() {
    itemStorage();
    if (foundItemInfo.category === "weapon") {
        document.getElementById('weapon-item-image').innerHTML = `<img src="` + currentWeapon.image + `">`;
        document.getElementById('weapon-item-name').innerHTML = currentWeapon.name;
        document.getElementById('weapon-list-item-one').innerHTML = "ATT: " + currentWeapon.attack;
        document.getElementById('weapon-list-item-two').innerHTML = "SPD: " + currentWeapon.speed;
        if (currentWeapon.magic) {document.getElementById('weapon-list-item-three').innerHTML = "MGC: " + currentWeapon.magic;}
        document.getElementById('weapon-list-item-four').innerHTML = "TYP: " + currentWeapon.type;
    } else if (foundItemInfo.category === "clothing") {
        document.getElementById('defence-item-image').innerHTML = `<img src="` + currentDefence.image + `">`;
        document.getElementById('defence-item-name').innerHTML = currentDefence.name;
        document.getElementById('clothing-list-item-one').innerHTML = "DEF: " + currentDefence.defence;
        if (currentDefence.magic) {document.getElementById('clothing-list-item-two').innerHTML = "MGK: " + currentDefence.magic;}
    } else if (foundItemInfo.category === "potion") {
        document.getElementById('potion-item-image').innerHTML = `<img src="` + currentPotion.image + `">`;
        document.getElementById('potion-item-name').innerHTML = currentPotion.name;
        document.getElementById('potion-list-item-one').innerHTML = "EFF: " + currentPotion.effect;
    } else if (foundItemInfo.category === "object") {
        document.getElementById('object-item-image').innerHTML = `<img src="` + currentObject.image + `">`;
        document.getElementById('object-item-name').innerHTML = currentObject.name;
        document.getElementById('object-list-item-one').innerHTML = "EFF: " + currentObject.effect;
    }
    for(let item of Object.keys(foundItemInfo)) {
        foundItemInfo[item] = "";
    }
}

//START GAME EVENT HANDLERS

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

// IN-GAME EVENT HANDLERS

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

 // page two event handlers

 document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-three");
    if(target){
        mainCharacter.score +=3;
        knowMyName();
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-four");
    if(target){
        mainCharacter.score +=1;
        fightingTalk();
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-five"); 
    if(target){
        mainCharacter.score +=5;
        nameUnknown();
    }
});
// page three event handlers

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-six"); 
    if(target){
        mainCharacter.score += foundItemInfo.score; //add scores to items
        firstSearch();
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-seven"); 
    if(target){
        mainCharacter.score; //add scores to items
        slimeEncounter();
    }
});

// page four event handlers
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-eight"); 
    if(target){
        mainCharacter.score += foundItemInfo.score ; //add scores to items
        storeFirstItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-nine"); 
    if(target){
        mainCharacter.score +=-2;
        ignoreFirstItem();
    }
});


/* GAME TEXT */

/*page one (initial page)*/
const pageOne = `
    <p>You awaken.  You become aware of something.  It is pain.</p>  
    
    <p>You try to open your eyes.  You cannot. It feels like they are welded together.</p>
    
    <p>You reach for them, find a thin crust of blood. You try to prise them open.  The pain grows.</p>    
`;
const optionsOne = `
    <li><button class="choice-button" id="choice-one">Open your eyes.</button></li>
    <li><button class="choice-button" id="choice-two">Give up.</button></li>
`;

/* page two (give up or carry on!) */
const pageTwo = `
    <p>It makes no discernable difference.  Either you are blind, or it is deep, pitch dark.</p>

    <p>But who are you?</p>
    <p>"Who am I???"</p>
    <p>Somebody spoke the words.  You think that it was you.</p>
`;
const optionsTwoFirst = `
    <li><button class="choice-button" id="choice-three">That's easy.  I am called... `   
const optionsTwoSecond = `
    </button></li>
    <li><button class="choice-button" id="choice-four">I am The Soul Of DARKNESSSSS.</button></li>
    <li><button class="choice-button" id="choice-five">It's...... too early to say.</button></li>
`;
const giveUp = `
        <p>You force the pain and the cruel world that accompanies it to the back of your mind.</p>
        <p>Your head sinks slowly back to the rough, cool, rocky floor.</p>
        <p>Your eyes relax, and you breathe the darkness in.</p>
        <p>They never open again</p>
        <p>YOU ARE DEAD</p>
        `   
/* page three (name established, choice to search or carry on)*/
const pageThreeFirst = `
    <p>Very good.  You... remember.</p>
    <p>Or at least you think you do...</p>
`
//makes enemy encounters more likely.
const pageThreeSecondOne = `
    <p>Even as you think them, you are screaming out the words - your deep, cracked voice echoes from the walls.</p>
    <p><em><strong>Darkness, destroyer of worlds.</em></strong><p>
    <p>But of course, that is not your real name.  You are  
`
const pageThreeSecondTwo = `... aren't you???
`
const pageThreeThird = `
    <p>A name comes to mind.  A familiar phrase... but you dare not think it. Perhaps you are mistaken.
    <br>You will try it out for now.  No committing though.</p>
`
const pageThreeCommon =`
    <p>Your head still hurts, but as your eyes adjust a very dim light grows.<p>
    <p>You appear to be in a small cave. The tiny hint of light comes from a rough hewn exit on the opposite wall.<p>
    <p>Away to your right, you see the dark bulk of... something...</p>
    <p>It is time to act.</p>
`;

const optionsThree = `
    <li><button class="choice-button" id="choice-six">I am curious.  Let us examine the thing on the floor. </button></li>
    <li><button class="choice-button" id="choice-seven">Maybe I can find a light. Or safety. Let's get out of here.</button></li>
    
`;

//Page Four

const optionsFour = `<li><button class="choice-button" id="choice-eight">Let's keep it!  You never know when it will come in handy.</button></li>
<li><button class="choice-button" id="choice-nine">I have no use for this rubbish.  Let's move on.</button></li>
`;


// OBJECT EXPORTS FOR AUTOMATED TESTING
var module = module || {};
module.exports = { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
    pageOne, optionsOne, gameOverGiveUp, giveUp, findItemType, characterWeapons,characterDefence, characterPotions, 
    characterObjects, searchForItem, foundItemInfo };


