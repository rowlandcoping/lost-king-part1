//CHARACTER OBJECTS

//player objects
const mainCharacter = {
    name: 0,
    score: 0,
    strength: 0,
    skill: 0,
    defence: 0,
    luck: 0,
    health: 0
};

const mainCharacterCurrent = {
    luck: 0,
    health: 0,
    strength: 0,
    defence: 0,
    magic:"",
    resist:"",
    vulnerability:"",
};

//enemy objects

const ragnarTheHorrible = {
    name: "Ragnar the Horrible",
    description: "Ragnar will eat mud.  Ragnar will sleep with your sister.  Ragnar drinks a lot of tea.  Ragnar has seen better days.",
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    image: "assets/images/character-profiles/warrior-face.png",
    vulnerability:"",
    resist: "",
    magic:"",
    score:30,
    initialText: "<p>The near-corpse circles warily around you.  It seems to be your move.</p>",
    successTextOne: "<p>You smash Ragnar with your ",
    successTextTwo: "<br>He dances away, and then forces you to defend again.</p>",
    deathText: "<p>The little warrior crumples back to the floor, and this time you take no chances, beating his corpse with your fists.<br>Perhaps this time he'll stay dead.</p>",
    failText: "<p>The wily little fellow ducks away from your blow, grumbling to himself, before striking back at you.</p>",
    hitText: "<p>Squealing with delight, Ragnar lands a solid blow, sending you reeling,",
    killedYouText: "<p>You stumble and, in that instant, the little felon lands the killing blow, cleaving your aching skull.<br>YOU ARE DEAD</p>",
    missedText: "<p>Clearly stiff and sore from decades of misuse, Rangar swings clumsily, and it is an easy matter to evade him.</p>",
    choices: `<li><button class="choice-button" id="choice-twelve">It's probably time to leave.</button></li>`
}

//ITEM OBJECTS
//weapons
const characterWeapons = [
    {
        category: "weapon",
        adjective: "a mighty",
        name: "Oathbringer",
        attack: 10,
        skill: -5,
        magic: "",
        type: "sharp",
        image: "assets/images/items/oathbringer.jpeg",
        chance: 3,
        score: 50,
        description: "The Oathbringer, long thought consigned to fanciful legends and bar talk.  A razor's edge and lore so endless that Tolkien would think his work thin by comparison."
    },
    {
        category: "weapon",
        adjective: "an unimaginative",
        name: "Short Sword",
        attack: 2,
        skill: 2,
        magic: "",
        type: "sharp",
        image: "assets/images/items/short-sword.webp",
        chance: 20,
        score: 10,
        description: "This is the kind of weapon that pretty much everyone carries, everywhere.  It's the Ford Mondeo of weaponary. You wouldn't want to be stabbed by it though."
    },
    {
        category: "weapon",
        adjective: "a pefunctory",
        name: "Rusty Dagger",
        attack: 0,
        skill: 3,
        magic: "",
        type: "sharp",
        image: "assets/images/items/rusty-dagger.webp",
        chance: 50,
        score: 3,
        description: "To say this weapon is blunt would be an understatement.  It weighs practically nothing though, and you are able to wield it with considerable grace."
    },
    {
        category: "weapon",
        adjective: "a primitive",
        name: "Gnarled Club",
        attack: 2,
        skill: 0,
        magic: "",
        type: "blunt",
        image: "assets/images/items/club.webp",
        chance: 80,
        score: 3,
        description: "The dubious stains and what appear to be lumps of scalp adhering to this weapon speak of its purpose.  It is, essentially, little more than a club-sized piece of tree."
    },
    {
        category: "weapon",
        adjective: "a brutal",
        name: "Gleaming Mace",
        attack: 3,
        skill: 3,
        magic: "",
        type: "blunt",
        image: "assets/images/items/mace.webp",
        chance: 90,
        score: 15,
        description: "Not as heavy as its heft would imply, this thing practically whirrs though the air.  This and the pointy spikes on the end mean it is most unfriendly towards skulls."
    },
    {
        category: "weapon",
        adjective: "a wizardy",
        name: "Wand of Fire",
        attack: 4,
        skill: 0,
        magic: "fire",
        type: "magical",
        image: "assets/images/items/fire-staff.webp",
        chance: 95,
        score: 30,
        description: "A blazing wand of fire, it can shoot blazing pillars of fire at your opponents... but be warned it's a good idea to know what you're doing."
    },
    {
        category: "weapon",
        adjective: "an Ice Queen's",
        name: "Frozen Staff",
        attack: 4,
        skill: 0,
        magic: "ice",
        type: "magical",
        image: "assets/images/items/frozen-staff.webp",
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
        defence: 1,
        resist: "",
        image: "assets/images/items/gilet.webp",
        playerImage: "assets/images/character-profiles/player-gilet.webp",
        chance: 15,
        score: 3,
        description: "This natty combination looks like something Jane Fonda might have worn on the set of Barbarella.  It's unlikely her outfit would have smelt quite so much of excrement, or have been quite so vulnerable to naked flames."
    },
    {
        category: "clothing",
        adjective: "some disco",
        name: "Golden Loin Cloth",
        defence: 1,
        resist: "fire",
        image: "assets/images/items/loincloth.webp",
        playerImage: "assets/images/character-profiles/player-loincloth.webp",
        chance: 30,
        score: 5,
        description: "If you want to go and tear up the gay scene in 80s New York, this outfit is ideal.  Meandering about through dangerous dungeons with a serious head injury? Not so much."
    },
    {
        category: "clothing",
        adjective: "some disgusting",
        name: "Filthy Jerkin",
        defence: 2,
        resist: "",
        image: "assets/images/items/jerkin.webp",
        playerImage: "assets/images/character-profiles/player-jerkin.webp",
        chance: 75,
        score: 1,
        description: "This foul leather jerkin shows signs of having once contained a decomposing corpse.  Where it came from, you really don't want to know."
    },
    {
        category: "clothing",
        adjective: "some shiny",
        name: "Chain Mail",
        defence: 4,
        resist: "",
        image: "assets/images/items/chainmail.webp",
        playerImage: "assets/images/character-profiles/player-chainmail.webp",
        chance: 85,
        score: 10,
        description: "Although it probably isn't Mithril, this lovely chain mail still ought to be enough to turn aside an orcan blade.  Or an angry cat warrior claw, for that matter"
    },
    {
        category: "clothing",
        adjective: "some bizarre",
        name: "Purple Helmet",
        defence: 3,
        resist: "ice",
        image: "assets/images/items/helmet.webp",
        playerImage: "assets/images/character-profiles/player-helmet.webp",
        chance: 95,
        score: 30,
        description: "The purpose behind the design of this protective device is a baffling mystery.  I'll leave it to your imagination.  It also seems to be imbued with magical powers."
    },
    {
        category: "clothing",
        adjective: "some uncomfortable",
        name: "Plate Armor",
        defence: 5,
        resist: "",
        image: "assets/images/items/plate.webp",
        playerImage: "assets/images/character-profiles/player-plate.webp",
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
        effect:"Increases Defence for rest of the fight",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 85,
        score: 10,
        description:"If you're on your last legs and facing down a furious furry furore of feline fencers, then this might draw the game out for another couple of minues."
    },
    {
        category: "potion",
        adjective: "a combat",
        name: "Potion of Power",
        effect:"Increases attack for rest of the fight",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 100,
        score: 10,
        description:"One swig of this, nothing and no-one will be able to stand before you!  But only briefly, because it will have run out - there's not that much left in the bottle."
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
//unique objects = 
const adventureObjects = [
    {
        category: "weapon",
        adjective: "a nifty",
        name: "Cat Sword",
        attack: 3,
        skill: 3,
        magic: "",
        type: "sharp",
        image: "assets/images/items/placeholder-sword.jpeg",
        chance: 20,
        score: 10,
        description: "This seems to be the primary weapon of the cat warriors you have encountered.  It's small, light and perilously pointy."
    }
];


// CHARACTER INFO STORAGE

const currentWeapon = {
    name: "",
    attack: 0,
    skill: 0,
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
    skill: 0,
    magic: "",
    resist: "",
    type: "",
    image: "",
    playerImage:"",
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
    encounterLikelihood: 0
}

// HELPER FUNCTIONS
// Random number generator
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
//luck tested
const getLucky = () => getRandomNumber(1,20) <= mainCharacterCurrent.luck;
//game state switchers
function changeModeToMainWindow() {
    const resetElements = document.getElementsByClassName('change-mode');
    for (let i = 0; i < resetElements.length; i++) {
        resetElements[i].innerHTML = "";
    }
    document.getElementById('choices-section').style.display = "block";
    document.getElementById('battles-section').style.display = "none";
    document.getElementById('image-section').style.display = "none";
    document.getElementById('upper-text').style.display = "none";
    document.getElementById('lower-text').style.display = "none";    
    document.getElementById('battle-text-player').style.display = "none";
    document.getElementById('battle-text-enemy').style.display = "none";
    document.getElementById('game-text').style.display = "block";
}
function changeModeToItemWindow() {
    
    document.getElementById('upper-text').style.display = "block";
    document.getElementById('lower-text').style.display = "block";
    document.getElementById('image-section').style.display = "flex";
    document.getElementById('game-text').style.display = "none";
    document.getElementById('battle-text-player').style.display = "block";
    document.getElementById('battle-text-enemy').style.display = "block";
}
function changeToBattleWindow(enemy) {   
    document.getElementById('upper-text').style.display = "none";
    document.getElementById('lower-text').style.display = "none"; 
    document.getElementById('battle-text-player').innerHTML = enemy.initialText;
    document.getElementById('choices-section').style.display = "none";
    document.getElementById('battles-section').style.display = "block";
}
function changeToGameOver() {   
    document.getElementById('final-score').innerHTML = mainCharacter.score;
    document.getElementById('gameover-page').style.display="flex";
    document.getElementById('game-page').style.display="none";
}
//CHARACTER GENERATION
function generateStats(character, min, max, hMin, hMax, strItem, sklItem, dItem, hlthItem, vuln, resist, magic) {
    character.strength = getRandomNumber(min, max);
    character.skill = getRandomNumber(min, max);
    character.defence = getRandomNumber(min, max);
    character.luck = getRandomNumber(min, max);
    character.health = getRandomNumber(hMin, hMax);
    if(strItem) {
        character.strength += strItem;
        character.strItem = strItem;
    }
    if(sklItem) {character.skill += sklItem;}
    if(dItem) {character.defence += dItem;}
    if(hlthItem) {character.health += hlthItem;}   
    if(vuln) {character.vulnerability = vuln;}
    if(resist) {character.resist = resist;}
    if(magic) {character.magic = magic;}    
}
function setEnemyStats(enemy, min, max, hMin, hMax, strItem, sklItem, dItem, hlthItem, vuln, resist, magic) {
    generateStats(enemy, min, max, hMin, hMax, strItem, sklItem, dItem, hlthItem, vuln, resist, magic);
    document.getElementById('image-image').innerHTML = `<img src="` + enemy.image + `">`;
    document.getElementById('image-title').innerHTML = enemy.name;
    document.getElementById('item-description').innerHTML = enemy.description;
    document.getElementById('list-item-one').innerHTML = "Strength: " + enemy.strength;
    document.getElementById('list-item-two').innerHTML = "Skill: " + enemy.skill;
    document.getElementById('list-item-three').innerHTML = "Defence: " + enemy.defence;
    document.getElementById('list-item-four').innerHTML = "Health: " + enemy.health;
}

// ITEM SEARCH FUNCTIONS
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
                foundItemInfo.skill = i.skill;
                foundItemInfo.resist = i.resist,
                foundItemInfo.magic = i.magic,
                foundItemInfo.type = i.type,
                foundItemInfo.image = i.image,
                foundItemInfo.playerImage = i.playerImage,
                foundItemInfo.effect = i.effect,
                foundItemInfo.defence = i.defence,
                foundItemInfo.score = i.score,
                foundItemInfo.description = i.description
            }
        }
    }
    displayItem();  
}
//displays found item on screen
function displayItem() {    
    document.getElementById('image-section').style.display = "flex";
    document.getElementById('upper-text').style.display = "block";
    document.getElementById('lower-text').style.display = "block";
    document.getElementById('game-text').style.display = "none";
    document.getElementById('upper-text').innerHTML = "<h3>You have found " + foundItemInfo.adjective + " " + foundItemInfo.category + "!!!</h3>";
    document.getElementById('image-image').innerHTML = `<img src="` + foundItemInfo.image + `">`;
    document.getElementById('image-title').innerHTML = foundItemInfo.name;
    document.getElementById('item-description').innerHTML = foundItemInfo.description;
    if (foundItemInfo.category =="weapon") {
        document.getElementById('list-item-one').innerHTML = "Attack: " + foundItemInfo.attack;
        document.getElementById('list-item-two').innerHTML = "Skill: " + foundItemInfo.skill;
        document.getElementById('list-item-three').innerHTML = "Type: " + foundItemInfo.type;
        if (foundItemInfo.magic){
            document.getElementById('list-item-four').innerHTML = "Magic: " + foundItemInfo.magic;
        } else { document.getElementById('list-item-four').innerHTML = "Magic: " + "None";  
        }
    } else if (foundItemInfo.category =="clothing") {
        document.getElementById('list-item-one').innerHTML = "Defence: " + foundItemInfo.defence;
        if (foundItemInfo.magic){
            document.getElementById('list-item-two').innerHTML = "Magic: " + foundItemInfo.magic;
        } else { document.getElementById('list-item-two').innerHTML = "Magic: " + "None";  
        }
    } else {
        document.getElementById('list-item-one').innerHTML = "Effect: " + foundItemInfo.effect;
    }
}
//Store Item as current, place item in current inventory
function itemStorage() {
    if (foundItemInfo.category === "weapon") {
        if (currentWeapon.name) {
            // add a warning with options
        } else {
            currentWeapon.name = foundItemInfo.name;
            currentWeapon.attack = foundItemInfo.attack;
            currentWeapon.skill = foundItemInfo.skill;
            currentWeapon.magic = foundItemInfo.magic;
            currentWeapon.type = foundItemInfo.type;
            currentWeapon.image = foundItemInfo.image;
        }
    } else if (foundItemInfo.category === "clothing") {
        if (currentDefence.name) {
            // add a warning with options
        } else {
            currentDefence.name = foundItemInfo.name;
            currentDefence.defence = foundItemInfo.defence;
            currentDefence.resist = foundItemInfo.resist;
            currentDefence.image = foundItemInfo.image;
            currentDefence.playerImage = foundItemInfo.playerImage;
        }
    } else if (foundItemInfo.category === "potion") {
        if (currentPotion.name) {
            // add a warning with options
        } else {
            currentPotion.name = foundItemInfo.name;
            currentPotion.effect = foundItemInfo.effect;
            currentPotion.image = foundItemInfo.image;
        }
    } else if (foundItemInfo.category === "object") {
        if (currentObject.name) {
            // add a warning with options
        } else {
            currentObject.name = foundItemInfo.name;
            currentObject.effect = foundItemInfo.effect;
            currentObject.image = foundItemInfo.image;
        }
    }
    if (foundItemInfo.name === "Four Leaf Clover") {
        mainCharacterCurrent.luck = mainCharacter.luck + 3;
    }
    if (foundItemInfo.name === "Furry Gilet and Shorts") {
        mainCharacterCurrent.vulnerability = "fire";
    }
    if (foundItemInfo.name === "Oathbringer") {
        characterWeapons[0].chance = 0;
    }
    if (foundItemInfo.name === "Frozen Staff") {
        characterWeapons[5].chance = 100;
    }
}
//write info to DOM, clears foundItemInfo
function storeItem() {
    itemStorage();
    if (foundItemInfo.category === "weapon") {
        document.getElementById('weapon-item-image').innerHTML = `<img src="` + currentWeapon.image + `">`;
        document.getElementById('weapon-item-name').innerHTML = currentWeapon.name;
        document.getElementById('weapon-list-item-one').innerHTML = "ATT: " + currentWeapon.attack;
        document.getElementById('weapon-list-item-two').innerHTML = "SKL: " + currentWeapon.skill;
        if (currentWeapon.magic) {document.getElementById('weapon-list-item-three').innerHTML = "MGC: " + currentWeapon.magic;}
        document.getElementById('weapon-list-item-four').innerHTML = "TYP: " + currentWeapon.type;
    } else if (foundItemInfo.category === "clothing") {
        document.getElementById('defence-item-image').innerHTML = `<img src="` + currentDefence.image + `">`;
        document.getElementById('character-image').innerHTML = `<img src="` + currentDefence.playerImage + `">`;
        document.getElementById('defence-item-name').innerHTML = currentDefence.name;
        document.getElementById('clothing-list-item-one').innerHTML = "DEF: " + currentDefence.defence;
        if (currentDefence.resist) {document.getElementById('clothing-list-item-two').innerHTML = "RST: " + currentDefence.resist;}
    } else if (foundItemInfo.category === "potion") {
        document.getElementById('potion-item-image').innerHTML = `<img src="` + currentPotion.image + `">`;
        document.getElementById('potion-item-name').innerHTML = currentPotion.name;
        document.getElementById('potion-list-item-one').innerHTML = "EFFECT:<br>" + currentPotion.effect;
    } else if (foundItemInfo.category === "object") {
        document.getElementById('object-item-image').innerHTML = `<img src="` + currentObject.image + `">`;
        document.getElementById('object-item-name').innerHTML = currentObject.name;
        document.getElementById('object-list-item-one').innerHTML = "EFFECT:<br>" + currentObject.effect;
    }
    for(let item of Object.keys(foundItemInfo)) {
        foundItemInfo[item] = "";
    }
}

//BATTLE FUNCTIONS
//fight state change

function testForWeapons() {
    if (currentWeapon.name) {
        document.getElementById('battle-choice-weapon').innerHTML = currentWeapon.name;
        document.getElementById('weapon-button').style.display = "block";
    } else {
        document.getElementById('weapon-button').style.display = "none";
    }
    if (currentPotion.name) {
        document.getElementById('battle-choice-potion').innerHTML = currentPotion.name;
        document.getElementById('potion-button').style.display = "block";
    } else {
        document.getElementById('potion-button').style.display = "none";
    }
}
function continueFight(enemy) {
    document.getElementById('list-item-four').innerHTML = "Health: " + enemy.health;
    document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
    testForWeapons();
}
function leaveBattle(enemy) {
    document.getElementById('choices-section').style.display = "block";
    document.getElementById('battles-section').style.display = "none";
    document.getElementById('list-item-four').innerHTML = '<span class="red">Health: ' + "0</span>";
    document.getElementById('battle-text-player').innerHTML = '<h3 class="green">' + enemy.name + " Is Dead.</h3>" + enemy.deathText;
    document.getElementById('battle-text-enemy').innerHTML ="";            
    //resets values to remove potion effects
    mainCharacterCurrent.strength = mainCharacter.strength;
    mainCharacterCurrent.defence = mainCharacter.defence;
    mainCharacter.score += enemy.score;
    document.getElementById('choices-section').innerHTML = enemy.choices;
}
//fight mechanics
function playerTestResistances(enemy) {
    //enemy resists/etc
    if (enemy.resist ==="fire" && currentWeapon.magic === "fire") {
        return 0.5;
    } else if (enemy.vulnerability ==="fire" && currentWeapon.magic === "fire") {
        return 2;
    } else if (enemy.resist ==="ice" && currentWeapon.magic === "ice") {
        return 0.5;
    } else if (enemy.vulnerability ==="ice" && currentWeapon.magic === "ice") {
        return 2;
    } else if (enemy.resist ==="sharp" && currentWeapon.type === "sharp") {
        return 0.5;
    } else if (enemy.vulnerability ==="sharp" && currentWeapon.type === "sharp") {
        return 2;
    } else if (enemy.resist ==="blunt" && currentWeapon.type === "blunt") {
        return 0.5;
    } else if (enemy.vulnerability ==="blunt" && currentWeapon.type === "blunt") {
        return 2;
    } else {
        return 1;
    }
}
function enemyTestResistances(enemy) {
    if (enemy.magic ==="fire" && mainCharacterCurrent.vulnerability === "fire") {
        return 2;
    } else if (enemy.magic ==="fire" && currentDefence.resist === "fire") {
        return 0.5;
    } else if (enemy.magic ==="ice" && mainCharacterCurrent.vulnerability === "ice") {
        return 2;
    } else if (enemy.magic ==="ice" && currentDefence.resist === "ice") {
        return 0.5;
    } else { 
        return 1;
    }
}
function hitSuccess(enemy, weapon) {
    let overallSkill;
    let chanceToHit = getRandomNumber(1,20);
    if (weapon === "fists") {
        overallSkill = mainCharacter.skill;
    } else if (weapon === "weapon") {
        overallSkill = mainCharacter.skill + currentWeapon.skill;
    } else if (weapon === "enemy") {
        overallSkill = enemy.skill;
    }
    if (chanceToHit <= overallSkill) {
        return true;
    } else {
        return false;
    }
}
function initialDamage (enemy, weapon) {
    let minStrength;
    let maxStrength;
    if (weapon === "enemy") {
        if (enemy.strItem > 0) {
            minStrength = enemy.strItem;
            maxStrength = enemy.strength;
        } else {
            minStrength = 1;
            maxStrength = enemy.strength;
        }
    } else if (weapon === "weapon") {
        minStrength = currentWeapon.attack;
        maxStrength = mainCharacterCurrent.strength + currentWeapon.attack;
    } else {
        minStrength = 1;
        maxStrength = mainCharacterCurrent.strength;
    }
    return getRandomNumber(minStrength, maxStrength); 
}
function damageResist (enemy, weapon) {
    let initialResist = getRandomNumber(1,15);
    let overallDefence;
    if (weapon ==="enemy") {
        overallDefence = mainCharacterCurrent.defence + currentDefence.defence;
    } else {
        overallDefence = enemy.defence; 
    }
    let netResist = overallDefence - initialResist;
    if (netResist > 0) {
        return netResist;
    } else {
        return 0;
    }
}
function nextRound(enemy, weapon) {
    if (hitSuccess(enemy, weapon)) {
        let roundDamage = initialDamage(enemy, weapon);      
        roundDamage -= damageResist (enemy, weapon);
        roundDamage *= playerTestResistances(enemy);
        return roundDamage;
    } else {
        return "fail";
    }
}
function playerTurn(enemy, weapon) {
    let roundResult = nextRound(enemy, weapon);
    if (roundResult === "fail") {
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.failText;
        enemyTurn(ragnarTheHorrible, "enemy");
    } else {
        let roundDamage = roundResult;
        if (roundDamage > 0) {enemy.health -= roundDamage;}
        if (enemy.health > 0) {
            if (roundDamage > 0){
                document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + `bare hands, causing <span class="green">` + roundDamage + `</span>` +` health points of damage.` + enemy.successTextTwo;
            } else {
                document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + `bare hands, but the blow glances off them.` + enemy.successTextTwo;
            }
            enemyTurn(ragnarTheHorrible, "enemy");
        } else {
            leaveBattle(enemy);
        } 
    }
}
function potionRound(enemy) {
    let roundDamage;
    let potionName = currentPotion.name;
    if (potionName === "Potion of Catnip") {
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "You rub on some of the catnip potion, but it doesn't seem to do anything right now";
        mainCharacter.score -=3;
        enemyTurn(enemy);
    } else if (potionName === "Potion of Healing") {
        if (mainCharacterCurrent.health + 50 <= mainCharacter.health) {
            mainCharacterCurrent.health =+ 50;
        } else {
            mainCharacterCurrent.health = mainCharacter.health
        }
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "You drink down the restorative balm, and feel instantly re-invigorated";
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }
        mainCharacter.score +=5;
        enemyTurn(enemy);
    } else if (potionName === "Potion of Fire") {
        roundDamage = 20;
        if (enemy.resist ==="fire") {
            roundDamage = 10;
        } else if (enemy.vulnerability ==="fire") {
            roundDamage = 40;
        } else {
            roundDamage = 20;
        }
        enemy.health -= roundDamage;
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }
        
        if (enemy.health<=0) {
            leaveBattle(enemy);
            document.getElementById('battle-text-player').innerHTML = '<h3 class="green">' + enemy.name + " Is Dead.</h3><p>You hurl the vial at your opponent, and watch as they are consumed by flames.</p><p>They slump to the ground, their still smouldering flesh charred and blackened beyond recognition. <br>You almost feel sorry for them... almost.</p>";
            mainCharacter.score += 10;
        } else {
            document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "<p>You hurl the vial at your opponent, and watch as they are consumed by flames. <br>They lose <span class='orange'>" + roundDamage + "</span> health points of damage.</p>";
            mainCharacter.score +=10;
            enemyTurn(enemy);
        }
    } else if (potionName === "Potion of Ice") {
        roundDamage = 20;
        if (enemy.resist ==="ice") {
            roundDamage = 10;
        } else if (enemy.vulnerability ==="ice") {
            roundDamage = 40;
        }
        enemy.health -= roundDamage;
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }
        if (enemy.health<=0) {
            leaveBattle(enemy);
            document.getElementById('battle-text-player').innerHTML = '<h3 class="green">' + enemy.name + " Is Dead.</h3><p>As the vial smashes and the contents cover your opponent, you see them flinch and then scream as their skin burns with cold.</p><p>They slump to the ground, their skin raked from their flesh by your icy attack. <br>You almost feel sorry for them... almost.</p>";
            mainCharacter.score += 10;   
        } else {
            document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "<p>As the vial smashes and the contents cover your opponent, you see them flinch and then scream as their skin burns with cold.</p><br>They lose <span class='lightblue'>" + roundDamage + "</span> health points of damage.</p>";
            mainCharacter.score +=10;
            enemyTurn(enemy);
        }
    } else if (potionName === "Potion of Defence") {
        mainCharacterCurrent.defence += 10;
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "On drinking the potion a cool aura of invincibility gives you a sense of unusual calm.";
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }
        mainCharacter.score +=5;
        enemyTurn(enemy);
    } else if (potionName === "Potion of Power") {
        mainCharacterCurrent.strength += 10;
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "You drink the potion and then stare down at your bicep, which is visibly bulging in all the right places.<br>You feel POWERFUL!!!";
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }
        mainCharacter.score +=5;
        enemyTurn(enemy);
    }
}
function enemyTurn(enemy, weapon) {
    let roundResult = nextRound(enemy, weapon);
    if (roundResult === "fail") {
        document.getElementById('battle-text-enemy').innerHTML = battleHeadingThem + enemy.missedText;
        continueFight(enemy);
    } else {
        let roundDamage = roundResult;
        if (roundDamage > 0) {mainCharacterCurrent.health -= roundDamage;}
        if (mainCharacterCurrent.health > 0) {
            if (roundDamage>0) {
                document.getElementById('battle-text-enemy').innerHTML = battleHeadingThem + enemy.hitText + ` and causing <span class="red"> ` + roundDamage + `</span> health points of damage.`;
            } else {
                document.getElementById('battle-text-enemy').innerHTML = battleHeadingThem + enemy.hitText + ` but fortunately it does you no harm.`;
            }
            continueFight(enemy);
        } else {
            changeToGameOver();
            mainCharacter.score -= 10;            
            document.getElementById('game-outcome').innerHTML = enemy.killedYouText;            
        } 
    }  
}

//GAMEPLAY FUNCTIONS

// Game restart and reset functions

function resetGame() {
    mainCharacter.name = "";
    mainCharacter.strength = "";
    mainCharacter.skill = "";
    mainCharacter.defence = "";
    mainCharacter.luck = "";
    mainCharacter.health = "";
    mainCharacter.score = "";
    document.getElementById('landing-page').style.display = "flex";
    document.getElementById('game-page').style.display = "none";
    document.getElementById('gameover-page').style.display = "none";
    document.getElementById('final-score').innerHTML = "";    
}
function startGame(event) {
    if (!mainCharacter.name) {        
        if (document.getElementById('character-name').value) {
        mainCharacter.name = document.getElementById('character-name').value;
        }else{
            mainCharacter.name = "Another Lazy Gamer";
           }
        generateStats (mainCharacter, 10, 15, 50, 75);  
    }
    for(let item of Object.keys(mainCharacterCurrent)) {
        mainCharacterCurrent[item] = "";
     }
    mainCharacterCurrent.health = mainCharacter.health;
    mainCharacterCurrent.strength = mainCharacter.strength;
    mainCharacterCurrent.luck = mainCharacter.luck;
    mainCharacterCurrent.defence = mainCharacter.defence;
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
    changeModeToMainWindow()
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
    document.getElementById('character-image').innerHTML = `<img src="assets/images/character-profiles/player-default.webp">`;
    document.getElementById('main-strength').innerHTML = mainCharacter.strength;
    document.getElementById('main-skill').innerHTML = mainCharacter.skill;
    document.getElementById('main-defence').innerHTML = mainCharacter.defence;
    document.getElementById('main-luck').innerHTML = mainCharacter.luck;
    document.getElementById('main-health').innerHTML = mainCharacter.health;
    document.getElementById('game-text').innerHTML = pageOne;
    document.getElementById('choices-section').innerHTML = optionsOne;    
}

//Page Two

//open eyes
function openEyes(){
    mainCharacter.score +=1;   
    document.getElementById('game-text').innerHTML = pageTwo;
    document.getElementById('choices-section').innerHTML = optionsTwoFirst + mainCharacter.name + optionsTwoSecond;   
}
//give up (death)
function gameOverGiveUp() {
    mainCharacter.score -=5;
    document.getElementById('final-score').innerHTML = mainCharacter.score;
    document.getElementById('gameover-page').style.display="flex";
    document.getElementById('game-page').style.display="none";
    document.getElementById('game-outcome').innerHTML = giveUp;
};

//Page Three
function knowMyName(){   
    mainCharacter.score +=3; 
    document.getElementById('game-text').innerHTML = pageThreeFirst + pageThreeCommon;
    document.getElementById('character-sheet-name').innerHTML = mainCharacter.name;
    document.getElementById('choices-section').innerHTML = optionsThree;   
}
function fightingTalk(){
    mainCharacter.score +=1;
    thingsWhatYouveDone.encounterLikelihood += 20;
    document.getElementById('game-text').innerHTML = pageThreeSecondOne + mainCharacter.name + pageThreeSecondTwo + pageThreeCommon;
    document.getElementById('character-sheet-name').innerHTML = mainCharacter.name;
    document.getElementById('choices-section').innerHTML = optionsThree;  
}
function nameUnknown(){
    mainCharacter.score +=5;  
    document.getElementById('game-text').innerHTML = pageThreeThird + pageThreeCommon;
    document.getElementById('character-sheet-name').innerHTML = mainCharacter.name + "<br><em>(provisional)</em>";
    document.getElementById('choices-section').innerHTML = optionsThree;    
}

//Page Four
function firstSearch() {
    searchForItem(15, 35, 55, 100);
    document.getElementById('lower-text').innerHTML = pageFour;
    document.getElementById('choices-section').innerHTML = optionsFour;
    thingsWhatYouveDone.firstRoomSearch = true;
}

//Page Five

function keepFirstItem() {
    mainCharacter.score += foundItemInfo.score;
    storeItem();
    changeModeToMainWindow();
    rangarFightChance();
}
function ignoreFirstItem() {
    changeModeToMainWindow();
    mainCharacter.score +=-2;
    rangarFightChance();
}
function rangarFightChance() {
    let fightChance = getRandomNumber(1,100);
    if (fightChance <= 50 + thingsWhatYouveDone.encounterLikelihood) {
        document.getElementById('game-text').innerHTML = pageFiveCommon + pageFiveFirst;
        document.getElementById('choices-section').innerHTML = optionsFiveFirst;
    } else {
        document.getElementById('game-text').innerHTML = pageFiveCommon + pageFiveSecond;
        document.getElementById('choices-section').innerHTML = optionsFiveSecond;
    }
}
//Page Six
function testLuck() {
    changeModeToItemWindow();
    mainCharacter.score += 3;
    if (getLucky()) {
        document.getElementById('upper-text').innerHTML = pageSixFirst + pageSixCommon;
        mainCharacter.score += 3;
    } else {
        document.getElementById('upper-text').innerHTML = pageSixSecond + pageSixCommon;
        mainCharacterCurrent.health -= 7;
        mainCharacter.score -= 3;
        document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
    }
    document.getElementById('choices-section').innerHTML = optionsSix;
    setEnemyStats(ragnarTheHorrible, 8,12,20,30);
}
function braceYourself() {
    changeModeToItemWindow();
    document.getElementById('upper-text').innerHTML = pageSixThird + pageSixCommon;
    mainCharacterCurrent.health -= 4;
    document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
    document.getElementById('choices-section').innerHTML = optionsSix;
    setEnemyStats(ragnarTheHorrible, 8,12,20,30);
}
//Page Seven
function ragnarFight(enemy) {
    changeToBattleWindow(enemy);
    document.getElementById('fists-button').firstChild.setAttribute("id", "ragnar-one"); 
    document.getElementById('weapon-button').firstChild.setAttribute("id", "ragnar-two"); 
    document.getElementById('potion-button').firstChild.setAttribute("id", "ragnar-three"); 
    testForWeapons();
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
    const target = e.target.closest("#choice-one");
    if(target){
        openEyes();
    }
 });
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-two");
    if(target){
        gameOverGiveUp();     
    }
 });

 // page two event handlers

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-three");
    if(target){
        knowMyName();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-four");
    if(target){
        fightingTalk();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-five"); 
    if(target){
        nameUnknown();
    }
});
// page three event handlers (decide whether to search or leave area)

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-six"); 
    if(target){
        mainCharacter.score += 3;
        firstSearch();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-seven"); 
    if(target){
        mainCharacter.score += 1;
        slimeEncounter();
    }
});

// page four event handlers (decide whether to keep item)
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-eight"); 
    if(target){ 
        keepFirstItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-nine"); 
    if(target){
        ignoreFirstItem();
    }
});

//page five event handlers (possible fight / leave area)

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-ten"); 
    if(target){ 
        testLuck();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-eleven"); 
    if(target){ 
        braceYourself();
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twelve"); 
    if(target){
        mainCharacter.score += 1; 
        slimeEncounter();
    }
});

//Page 6 event handler (begin fight with Ragnar)
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirteen"); 
    if(target){        
        ragnarFight(ragnarTheHorrible);
    }
});

//Page 7 event handlers (fight with Ragnar)

document.addEventListener("click", function(e){
    const target = e.target.closest("#ragnar-one"); 
    if(target){ 
        playerTurn(ragnarTheHorrible, "fists");
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#ragnar-two"); 
    if(target){
        playerTurn(ragnarTheHorrible, "weapon");
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#ragnar-three"); 
    if(target){
        potionRound(ragnarTheHorrible);
    }
});


/* GAME TEXT */

/*page one (open eyes)*/
const pageOne = `
    <p>You awaken.  You become aware of something.  It is pain.</p>  
    
    <p>You try to open your eyes.  You cannot. It feels like they are welded together.</p>
    
    <p>You reach for them, find a thin crust of blood. You try to prise them open.  The pain grows.</p>    
`;
const optionsOne = `
    <li><button class="choice-button" id="choice-one">Open your eyes.</button></li>
    <li><button class="choice-button" id="choice-two">Give up.</button></li>
`;

/* page two (decide on name / give up death text) */
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
const pageThreeSecondOne = `
    <p>Even as you think them, you are screaming out the words - your deep, cracked voice echoes from the walls.</p>
    <p><em><strong>Darkness, destroyer of worlds.</strong></em></p>
    <p>But of course, that is not your real name.  You are
`
const pageThreeSecondTwo = `... aren't you???</p>
`
const pageThreeThird = `
    <p>A name comes to mind.  A familiar phrase... but you dare not think it. Perhaps you are mistaken.
    <br>You will try it out for now.  No committing though.</p>
`
const pageThreeCommon =`
    <p>Your head still hurts, but as your eyes adjust a very dim light grows.</p>
    <p>You appear to be in a small cave. The tiny hint of light comes from a rough-hewn exit on the opposite wall.</p>
    <p>Away to your right, you see the dark bulk of... something...</p>
    <p>It is time to act.</p>
`;

const optionsThree = `
    <li><button class="choice-button" id="choice-six">I am curious.  Let us examine the thing on the floor. </button></li>
    <li><button class="choice-button" id="choice-seven">Maybe I can find a light. Or safety. Let's get out of here.</button></li>  
`;

//Page Four (decide whether to keep item or not)
const pageFour = `<p>Tentatively approaching the dark form on the ground, you soon see that it is the corpse of a fellow traveller, gently rotting in the gloom.</p>
<p>You find yourself strangely unbothered by this, swiftly rummaging around to see what you can find.</p>
`;
const optionsFour = `<li><button class="choice-button" id="choice-eight">Let's keep it!  You never know when it will come in handy.</button></li>
<li><button class="choice-button" id="choice-nine">I have no use for this rubbish. It's time to leave this room.</button></li>
`;

//Page Five
const pageFiveCommon = `
<p>As you walk away from the corpse you give it a healthy punt with your boot</p>
<p>The flesh is firmer than you expected it to be, and you freeze, awaiting a response...</p>
`
const pageFiveFirst = `
<p>With unreasonable speed for a stinking corpse, a filthy hand grabs you around the ankle.
<br>From within the bundle of rags, a blade flashes in the darkness...</p>
`
const pageFiveSecond = `
<p>The figure remains still. Whoever this was, they are definitely dead.  You'd have been surprised if not, because they really do smell like it.</p>
`
const optionsFiveFirst = `
<li><button class="choice-button" id="choice-ten">TEST YOUR LUCK! Can you dodge the blade?</button></li>
<li><button class="choice-button" id="choice-eleven">Superstitious nonsense.  Let's just crush this wretch.</button></li>
`
const optionsFiveSecond = `
<li><button class="choice-button" id="choice-twelve">It's probably time to leave.</button></li>
`
//Page Six (initial fight with Ragnar)

const pageSixCommon = `
<p>Snarling, you break free of your foe's grip and turn to face them.</p>
<p>The pile of rags on the floor has metamorphasised, like a corpse-stench ridden butterfly, into a furious looking warrior with a filthy straggly beard. </p>
`
const pageSixFirst = `
<p>Stumbling to your knees as the gnarly hand grips your ankle, you narrowly avoid the blade, sensing it flash inches past your thigh</p>
`
const pageSixSecond = `
<p>You try to dodge but with your ankle caught fast there is no way of avoiding the blade.  <br>It plunges into your thigh for 7 health points of damage.</p>
`
const pageSixThird = `
<p>You stand your ground and angle yourself to best withstand the impact of the blade.  <br>It grazes off your thigh for 4 health points of damage.</p>
`
const optionsSix = `
<li><button class="choice-button" id="choice-thirteen">Stand and fight the warrior.</button></li>
`
// GENERIC - text for battles

// turn indicators
const battleHeadingYou = `<h3 class="green">Your Turn</h3>`;
const battleHeadingThem = `<h3 class="red">Enemy Turn</h3>`;


// OBJECT EXPORTS FOR AUTOMATED TESTING
var module = module || {};
module.exports = { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
    pageOne, optionsOne, gameOverGiveUp, giveUp, findItemType, characterWeapons,characterDefence, characterPotions, 
    characterObjects, searchForItem, foundItemInfo, setEnemyStats, ragnarTheHorrible, mainCharacterCurrent,currentWeapon,
    currentDefence, currentPotion, currentObject, itemStorage, setEnemyStats, thingsWhatYouveDone, playerTestResistances, 
    enemyTestResistances, ragnarFight, continueFight, potionRound, enemyTurn, hitSuccess, initialDamage,
    damageResist, storeItem, changeModeToMainWindow, changeModeToItemWindow, openEyes, optionsTwoFirst, optionsTwoSecond,
    pageTwo, knowMyName, pageThreeFirst, pageThreeCommon, optionsThree, pageThreeSecondOne, pageThreeSecondTwo,
    pageThreeThird, fightingTalk, nameUnknown, displayItem, firstSearch, optionsFour, pageFour, ignoreFirstItem,
    rangarFightChance, pageFiveSecond, pageFiveCommon, pageFiveFirst, optionsFiveFirst, optionsFiveSecond, 
    keepFirstItem, getLucky, pageSixFirst, pageSixCommon, pageSixSecond, optionsSix, pageSixThird,
    braceYourself, testLuck, changeToBattleWindow, testForWeapons, changeToGameOver, leaveBattle };


