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
    image: "assets/images/enemies/ragnar.jpeg",
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
const sentientSlime = {
    name: "Sentient Slime",
    description: "This sentient pool of goo is a mystery; whether it be the product of some bizarre evolutionary process or a magic spell gone wrong it seems to mean you harm.",
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    image: "assets/images/enemies/slime.webp",
    vulnerability:"",
    resist: "",
    magic:"",
    score:40,
    initialText: "<p>The strange ball of goo seems to rotate about the limited space of the corridor, occasionally reaching out tendrils as if in search of prey.</p>",
    successTextOne: "<p>You strike the sentient slime with your ",
    successTextTwo: "<br>It rolls around in a half circle, but seems undeterred from your destruction.</p>",
    deathText: "<p>The goo seems to lose all form, collapsing into itself and leaving trails of gelatious liquid across the stone floor of the corridor.<br>You think that it is finally dead.</p>",
    failText: "<p>The slime seems to re-arrange its form to avoid your attack, and your attempted strike cannot find its target.</p>",
    hitText: "<p>The slime lashes out with a solid tendril of goo, taking you by surprise,",
    killedYouText: "<p>Exhausted from the encounter, the slime senses your weakness and takes its chance to envelop and suffocate you.<br>YOU ARE DEAD</p>",
    missedText: "<p>The slime lashes out with a solid tendril of goo, but fortunately its aim is not true and you are able to evade the blow.</p>",
    choices: `<li><button class="choice-button" id="choice-twenty">Leave the area, by returning the way you came from.</button></li>
    <li><button class="choice-button" id="choice-twenty-one">Leave the area, by rounding the bend in the passageway.</button></li>
    <li><button class="choice-button" id="choice-twenty-two">Collect some of the goo.</button></li>`
}
const catWarrior = {
    name: "Cat Warrior",
    description: "This fearsome fluffy warrior is the most potent of his clan. He moves fast, and has a devilishly pointy looking little sword.  He is also very cute.  Awwww. ",
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    image: "assets/images/enemies/cat-warrior.webp",
    vulnerability:"",
    resist: "",
    magic:"",
    score: 20,
    initialText: "<p>The car warrior stalks you, every muscle tensed and its tail gently wagging as it looks for the opportinity to strike<br>You do not intend to give it one.</p>",
    successTextOne: "<p>You strike the Cat Warrior with your ",
    successTextTwo: "<br>The cat lands on its feet, as they are prone to do, and comes at you again.</p>",
    hitText: "<p>The does a sort of triple-salco, tail flailing and sword flashing before landing an accurate strike,",
    deathText: "<p>At the killing blow the kitty slumps to the ground, all curled up in a little ball, its sword skittering.  Something inside you dies.</p>",
    failText: "<p>The Cat Warrior arcs its body in an impossible shape, deftly avoiding your attack. Before returning to the perfect fighting stance like still water</p>",
    killedYouText: "<p>You are babmoozled by the speed of the furry warriors attacks, and unable to do anything to defend yourself as it lands the killing blow.<br>YOU ARE DEAD</p>",
    missedText: "<p>The Cat Sword moves like lightning, but the warrior's accuracy did not match it's speed, and the attack whistles past your ear.</p>",
    choices: `
    <li><button class="choice-button" id="choice-twenty-six">He should never have challenged me.</button></li>
    `
}
const iceQueen = {
    name: "Ice Queen",
    description: `
    She is tall, and dreadful, and thinks herself invincible because she was born to power.  
    Invicible she is not, but you wouldn't like to meet her in a dark cave at night.
    `,
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    image: "assets/images/enemies/ice-queen.webp",
    vulnerability:"",
    resist: "ice",
    magic:"ice",
    score: 70,
    initialText: "<p>As you scream the quesnion that's been haunting you the Ice Queen just laughs in your face. As you stalk forward, baying for her blood, she just laughs harder.</p>",
    successTextOne: "<p>You strike the Ice Queen with your ",
    successTextTwo: "<br>She take a step back, a rictus grin on her face, ice crystals flying from the spot where you struck her.</p>",
    hitText: "<p>With the barest motion of her fingers a pillar of ice strikes you square in the chest, winding you, ",
    deathText: "<p>Finally you land a killing blow.  A column of ice rises up to consume her, and then she is gone, leaving no trace she ever existed but a few shards of ice tinkling on the hard floor.</p>",
    failText: "<p>You move to strike confidently, but an icy shield forms between you, deflecting the blow.</p>",
    killedYouText: `
    <p>Frost is forming in your beard and your breathing has become laboured.  She knows she has you</p>
    <p>"DIEEEEEEE!!!!"</p>
    <p>She clearly relishes your death, and you never found out why.<br>YOU ARE DEAD</p>
    `,
    missedText: "<p>You manage to roll under another sheet of ice as it rolls towards you, avoiding the attack.</p>",
    choices: `
    <li><button class="choice-button" id="choice-thirty-nine">What is my name?</button></li>
    `
}
const fireMage = {
    name: "Fire Mage",
    description: `The majesty and prowess of the Fire Mages is well known. For their mercy, their humanity? Less so, for they have none. 
    Why this one has taken an interest in you, you could not say.
    `,
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    image: "assets/images/enemies/fire-mage.webp",
    vulnerability:"",
    resist: "fire",
    magic:"fire",
    score: 70,
    initialText: `
    <p>"You ask me your name, yet I do not think you really want to know."
    <p>You have no choice but to attack the wizard as blazing orbs of fire build in both his hands.
   <p>>He just looks serenely back at you, as if it was nothing.</p>
    `,
    successTextOne: "<p>You strike the Fire Mage with your ",
    successTextTwo: "<br>As you strike the mage he stands as if rooted, eyes closed, softly chanting some kind of mantra.  Your aim though is true, </p>",
    hitText: "<p>The mage launches an orb of fire which arcs into your groin like a blazing fastball,",
    deathText: "<p>Finally, the mage's chants can keep him upright no more.  As he crumples to the floor, his corpse burns with a bright phosphorescent flame, leaving nothing but ashes.</p>",
    failText: "<p>The mage's form seems to flicker like a flame, and somehow you miss him.</p>",
    killedYouText: `<p>The final ball of burning fire was too much for you, and you collapse to your knees, helpless to avoid your destruction.</p>
    As your vision fills with flame and you black out from the pain, you can only think of one thing.<p>"What was my name?</p><br>YOU ARE DEAD</p>
    `,
    missedText: "<p>You dodge at the last second and the fireball blazes past you, leaving a dark charcoal graze on your clothing.</p>",
    choices: `
    <li><button class="choice-button" id="choice-thirty-nine">What. Is. My. Name.</button></li>
    `
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
        adjective: "a Fire Mage's",
        name: "Wand of Fire",
        attack: 4,
        skill: 1,
        magic: "fire",
        type: "magical",
        image: "assets/images/items/fire-staff.webp",
        chance: 95,
        score: 30,
        description: "A blazing wand of fire, it can shoot blazing pillars of fire at your opponents... who knows how such a weapon ended up here - I'd imagine whoever it belongs to will want it back!"
    },
    {
        category: "weapon",
        adjective: "an Ice Queen's",
        name: "Frozen Staff",
        attack: 4,
        skill: 1,
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
        image: "assets/images/items/catnip.webp",
        chance: 15,
        score: 10,
        description:"Cats seem to find this potion particularly delightful. You decide it might be best to wear it like after-shave.  What could possibly go wrong?"
    },
    {
        category: "potion",
        adjective: "a soothing",
        name: "Potion of Healing",
        effect:"Restores 50 Health",
        image: "assets/images/items/healing.webp",
        chance: 30,
        score: 10,
        description: "There is not much to say about a potion of healing.  It's a pretty standard fantasy trope, and speaks of a chronic lack of imagination."
    },
    {
        category: "potion",
        adjective: "a spicy",
        name: "Potion of Fire",
        effect:"Causes Fire Damage",
        image: "assets/images/items/fire.webp",
        chance: 50,
        score: 15,
        description:"If you are lucky enough to find this along with the golden loincloth and the wand of fire, you better hope you come across enemies with a fire vulnerability."
    },
    {
        category: "potion",
        adjective: "a chilly",
        name: "Potion of Ice",
        effect:"Causes Ice Damage",
        image: "assets/images/items/ice.webp",
        chance: 70,
        score: 10,
        description:"If the Ice Queen is coming down here after her lost staff, then this potion will be useless against her.  I'm sure you'll find something to do with it though."
    },
    {
        category: "potion",
        adjective: "a combat",
        name: "Potion of Defence",
        effect:"Increases Defence for rest of the fight",
        image: "assets/images/items/defence.webp",
        chance: 85,
        score: 10,
        description:"If you're on your last legs and facing down a furious furry furore of feline fencers, then this might draw the game out for another couple of minues."
    },
    {
        category: "potion",
        adjective: "a combat",
        name: "Potion of Power",
        effect:"Increases attack for rest of the fight",
        image: "assets/images/items/power.webp",
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
        image: "assets/images/items/cables.webp",
        chance: 20,
        score: 1,
        description: "It's not quite clear how, but I'm sure if you keep hold of this big bag of obsolete cables for long enough it will come in useful.  Right?  Right??"
    },
    {
        category: "object",
        adjective: "a tasty",
        name: "Cat Biscuits",
        effect:"Cats really like these.",
        image: "assets/images/items/cat-biscuits.webp",
        chance: 35,
        score: 10,
        description: "Whilst it's clear your furry adversaries love these things, you can't help but be put off by the strong smell of fish."
    },
    {
        category: "object",
        adjective: "a useful",
        name: "Insect Repellent",
        effect:"Scares off bugs",
        image: "assets/images/items/insect-repellant.webp",
        chance: 50,
        score: 10,
        description: "There may come a point in this adventure where you reach bug-infested climes, and you will be grateful for the day you decided to keep hold of this.  Orrrr... perhaps not."
    },
    {
        category: "object",
        adjective: "a lucky",
        name: "Four Leaf Clover",
        effect:"Said to bring good fortune",
        image: "assets/images/items/clover.webp",
        chance: 65,
        score: 15,
        description:"Less gruesome than a rabbit's foot, and less effective than a gypsy's blessing, this item nevertheless is handy if you need to take your chances.  Which might actually happen a lot."
    },
    {
        category: "object",
        adjective: "a useless",
        name: "Stress Balls",
        effect:"You may need this",
        image: "assets/images/items/balls.webp",
        chance: 80,
        score: 4,
        description: "There's nothing more stressful than playing a browser-based game, stuck in an endless and seemingly inescapable gameplay loop, wondering where it all might end. On reflection, you may need these."
    },
    {
        category: "object",
        adjective: "an intriguing",
        name: "Frayed Rope",
        effect:"A rope in name only",
        image: "assets/images/items/rope.webp",
        chance: 100,
        score: 7,
        description:"It's a rope, but it's not really a rope, is it.  It seems unlikely to take your weight, even in your emaciated state.  In fact, it's hard to see the purpose of this object.  We'll see."
    },
];
//unique objects = 
const slime = {
    category: "object",
    adjective: "a slimy",
    name: "Slime",
    effect: "This object may make things slimy.",
    image: "assets/images/items/slime-hand.webp",
    score: 5,
    description: "This slime is no longer sentient, but it still retains some key properties of the dangerous monstrosity, in that it is slimy. As you might expect."
}
const catSword = {
    category: "weapon",
        adjective: "a nifty",
        name: "Cat Sword",
        attack: 2,
        skill: 3,
        magic: "",
        type: "sharp",
        image: "assets/images/items/cat-sword.webp",
        score: 10,
        description: "This seems to be the primary weapon of the cat warriors you have encountered.  It's small, light and perilously pointy."
}


// CHARACTER INFO STORAGE

const currentWeapon = {
    category: "",
    name: "",
    attack: 0,
    skill: 0,
    magic: "",
    type: "",
    image: ""
}

const currentDefence = {
    category: "",
    name: "",
    defence: 0,
    magic: "",
    image: ""
}

const currentPotion = {
    category: "",
    name: "",
    effect: "",
    image: ""
}

const currentObject = {
    category: "",
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
    encounterLikelihood: false,
    slimeCollect: false,
    firstCatKilled: false,
    getCatSword: false,
    catGod: false,
    catsKilled: 0,
    cavernVisits: 0,
    catCaptureChance: 25,
    catFightChance: 60,
    catRunawayChance: 14,
    catGodChance: 1,
    courtGodChance: 15,
    courtHangChance: 15,
    courtPrisonChance: 70
}
const thingsWhatYouveDoneInitial = {
    firstRoomSearch: false,
    slimeKill: false,
    encounterLikelihood: false,
    slimeCollect: false,
    firstCatKilled: false,
    catSwordCollected: false,
    getCatSword: false,
    catGod: false,
    catsKilled: 0,
    cavernVisits: 0,
    catCaptureChance: 25,
    catFightChance: 60,
    catRunawayChance: 14,
    catGodChance: 1,
    courtGodChance: 15,
    courtHangChance: 15,
    courtPrisonChance: 70
}

function thingsReset() {
    thingsWhatYouveDone.firstRoomSearch = thingsWhatYouveDoneInitial.firstRoomSearch;
    thingsWhatYouveDone.slimeKill = thingsWhatYouveDoneInitial.slimeKill;
    thingsWhatYouveDone.encounterLikelihood = thingsWhatYouveDoneInitial.encounterLikelihood;
    thingsWhatYouveDone.slimeCollect = thingsWhatYouveDoneInitial.slimeCollect;
    thingsWhatYouveDone.firstCatKilled = thingsWhatYouveDoneInitial.firstCatKilled;
    thingsWhatYouveDone.getCatSword = thingsWhatYouveDoneInitial.getCatSword;
    thingsWhatYouveDone.catGod = thingsWhatYouveDoneInitial.catGod;

    thingsWhatYouveDone.catsKilled = thingsWhatYouveDoneInitial.catsKilled;
    thingsWhatYouveDone.cavernVisits = thingsWhatYouveDoneInitial.cavernVisits;
    thingsWhatYouveDone.catCaptureChance = thingsWhatYouveDoneInitial.catCaptureChance;
    thingsWhatYouveDone.catFightChance = thingsWhatYouveDoneInitial.catFightChance;
    thingsWhatYouveDone.catRunawayChance = thingsWhatYouveDoneInitial.catRunawayChance;
    thingsWhatYouveDone.catGodChance = thingsWhatYouveDoneInitial.catGodChance;
    thingsWhatYouveDone.courtGodChance = thingsWhatYouveDoneInitial.courtGodChance;
    thingsWhatYouveDone.courtHangChance = thingsWhatYouveDoneInitial.courtHangChance;
    thingsWhatYouveDone.courtPrisonChance = thingsWhatYouveDoneInitial.courtPrisonChance;
}

//ROOM OBJECTS

//object for initial location (cavern, Ragnar, search)
const firstCavern = {
    // bsic details
    backgroundOne: "url('assets/images/backgrounds/cavern-dark.webp') no-repeat left center",
    backgroundTwo: "url('assets/images/backgrounds/cavern.webp') no-repeat left center",
    //initial options
    openEyes: function openEyes(){
        mainCharacter.score +=1;   
        document.getElementById('game-section').style.background = this.backgroundOne;
        document.getElementById('choices-section').innerHTML = this.optionsTwoFirst + mainCharacter.name + this.optionsTwoSecond;
        document.getElementById('game-text').innerHTML = this.pageTwo;  
    },
    pageTwo: `
    <p>It makes no discernable difference.  Either you are blind, or it is deep, pitch dark.</p>

    <p>But who are you?</p>
    <p>"Who am I???"</p>
    <p>Somebody spoke the words.  You think that it was you.</p>
    `,
    optionsTwoFirst:`
    <li><button class="choice-button" id="choice-three">That's easy.  I am called... 
    `,   
    optionsTwoSecond:`
    </button></li>
    <li><button class="choice-button" id="choice-four">I am The Soul Of DARKNESSSSS.</button></li>
    <li><button class="choice-button" id="choice-five">It's...... too early to say.</button></li>
    `,
    //give up (death)
    gameOverGiveUp: function gameOverGiveUp() {
        mainCharacter.score -=5;
        document.getElementById('final-score').innerHTML = mainCharacter.score;
        document.getElementById('gameover-page').style.display="flex";
        document.getElementById('game-page').style.display="none";
        document.getElementById('game-outcome').innerHTML = this.giveUp;
    },
    giveUp:`
    <p>You force the pain and the cruel world that accompanies it to the back of your mind.</p>
    <p>Your head sinks slowly back to the rough, cool, rocky floor.</p>
    <p>Your eyes relax, and you breathe the darkness in.</p>
    <p>They never open again</p>
    <p>YOU ARE DEAD</p>
    `,
    // name options
    pageThreeCommon:`
    <p>You appear to be in a small cave. A dark,rough-hewn apeture forms a the only visible exit on the opposite wall.</p>
    <p>To your left, you see the dark bulk of... something...</p>
    <p>It is time to act.</p>
    `,
    optionsThree:`
    <li><button class="choice-button" id="choice-six">I am curious.  Let us examine the thing on the floor. </button></li>
    <li><button class="choice-button" id="choice-seven">Maybe I can find a light. Or safety. Let's get out of here.</button></li>  
    `,
    knowMyName: function knowMyName(){   
        mainCharacter.score +=3;
        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.pageThreeFirst + this.pageThreeCommon;
        document.getElementById('character-sheet-name').innerHTML = mainCharacter.name;
        document.getElementById('choices-section').innerHTML = this.optionsThree;   
    },
    pageThreeFirst:`
    <p>Very good.  You... remember.</p>
    <p>Or at least you think you do...</p>
    <p>Your head still hurts, but as your eyes adjust a very dim light grows.</p>
    `,
    fightingTalk: function fightingTalk(){
        mainCharacter.score +=1;
        thingsWhatYouveDone.encounterLikelihood = true;
        thingsWhatYouveDone.catCaptureChance -= 10;
        thingsWhatYouveDone.catFightChance += 10;

        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.pageThreeSecondOne + mainCharacter.name + this.pageThreeSecondTwo + this.pageThreeCommon;
        document.getElementById('character-sheet-name').innerHTML = mainCharacter.name;
        document.getElementById('choices-section').innerHTML = this.optionsThree;  
    },
    pageThreeSecondOne:`
    <p>Even as you think them, you are screaming out the words - your deep, cracked voice echoes from the walls.</p>
    <p><em><strong>Darkness, destroyer of worlds.</strong></em></p>
    <p>But of course, that is not your real name.  You are
    `,
    pageThreeSecondTwo:`... aren't you???</p><p>Your head still hurts, but as your eyes adjust a very dim light grows.</p>
    `,
    nameUnknown: function nameUnknown(){
        mainCharacter.score +=5;
        document.getElementById('game-section').style.background = this.backgroundTwo;  
        document.getElementById('game-text').innerHTML = this.pageThreeThird + this.pageThreeCommon;
        document.getElementById('character-sheet-name').innerHTML = mainCharacter.name + "<br><em>(provisional)</em>";
        document.getElementById('choices-section').innerHTML = this.optionsThree;    
    },
    pageThreeThird:`
    <p>A name comes to mind.  A familiar phrase... but you dare not think it. Perhaps you are mistaken.
    <br>You will try it out for now.  No committing though.</p>
    <p>Your head still hurts, but as your eyes adjust a very dim light grows.</p>
    `,    
    // search for an item
    firstSearch: function firstSearch() {
        searchForItem(15, 35, 55, 100);
        document.getElementById('lower-text').innerHTML = this.pageFour;
        document.getElementById('choices-section').innerHTML = this.optionsFour;
        thingsWhatYouveDone.firstRoomSearch = true;
    },
    pageFour: `<p>Tentatively approaching the dark form on the ground, you soon see that it is the corpse of a fellow traveller, gently rotting in the gloom.</p>
    <p>You find yourself strangely unbothered by this, swiftly rummaging around to see what you can find.</p>
    `,
    optionsFour: `<li><button class="choice-button" id="choice-eight">Let's keep it!  You never know when it will come in handy.</button></li>
    <li><button class="choice-button" id="choice-nine">I have no use for this rubbish. It's time to leave this room.</button></li>
    `,
    // keep or leave the item
    checkFirstItem: function checkFirstItem() {
        if (foundItemInfo.category === currentWeapon.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentWeapon.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-search"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-search"); 
        } else if (foundItemInfo.category === currentDefence.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentDefence.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-search"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-search"); 
        } else if (foundItemInfo.category === currentPotion.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentPotion.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-search"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-search"); 
        } else if (foundItemInfo.category == currentObject.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentObject.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-search"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-search"); 
        } else {
            this.keepFirstItem();
        }
    },
    keepFirstItem: function keepFirstItem() {
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        mainCharacter.score += foundItemInfo.score;
        storeItem();
        this.rangarFightChance();
    },
    ignoreFirstItem: function ignoreFirstItem() {
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        changeModeToMainWindow();
        mainCharacter.score +=-2;
        this.rangarFightChance();
    },
    rangarFightChance: function rangarFightChance() {
        changeModeToMainWindow();
        let fightChance = getRandomNumber(1,100);
        if(thingsWhatYouveDone.encounterLikelihood) {
            fightChance -= 20;
        }
        if (fightChance <= 50) {
            document.getElementById('game-text').innerHTML = this.pageFiveCommon + this.pageFiveFirst;
            document.getElementById('choices-section').innerHTML = this.optionsFiveFirst;
        } else {
            document.getElementById('game-text').innerHTML = this.pageFiveCommon + this.pageFiveSecond;
            document.getElementById('choices-section').innerHTML = this.optionsFiveSecond;
        }
    },
    pageFiveCommon: `
    <p>As you walk away from the corpse you give it a healthy punt with your boot</p>
    <p>The flesh is firmer than you expected it to be, and you freeze, awaiting a response...</p>
    `,
    pageFiveFirst: `
    <p>With unreasonable speed for a stinking corpse, a filthy hand grabs you around the ankle.
    <br>From within the bundle of rags, a blade flashes in the darkness...</p>
    `,
    pageFiveSecond: `
    <p>The figure remains still. Whoever this was, they are definitely dead.  You'd have been surprised if not, because they really do smell like it.</p>
    `,
    optionsFiveFirst: `
    <li><button class="choice-button" id="choice-ten">TEST YOUR LUCK! Can you dodge the blade?</button></li>
    <li><button class="choice-button" id="choice-eleven">Superstitious nonsense.  Let's just crush this wretch.</button></li>
    `,
    optionsFiveSecond:`
    <li><button class="choice-button" id="choice-twelve">It's probably time to leave.</button></li>
    `,
    // luck test fight with ragnar (or not!)
    testLuck: function testLuck() {
        changeModeToItemWindow();
        mainCharacter.score += 3;
        if (getLucky()) {
            document.getElementById('upper-text').innerHTML = this.pageSixFirst + this.pageSixCommon;
            mainCharacter.score += 3;
        } else {
            document.getElementById('upper-text').innerHTML = this.pageSixSecond + this.pageSixCommon;
            mainCharacterCurrent.health -= 7;
            mainCharacter.score -= 3;
            if (mainCharacterCurrent.health <=0) {
                changeToGameOver();
                mainCharacter.score -= 10;            
                document.getElementById('game-outcome').innerHTML = ragnarTheHorrible.killedYouText;
            }
            document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
        }
        document.getElementById('choices-section').innerHTML = this.optionsSix;
        setEnemyStats(ragnarTheHorrible, 8,12,20,30);
    }, 
    braceYourself: function braceYourself() {
        changeModeToItemWindow();
        document.getElementById('upper-text').innerHTML = this.pageSixThird + this.pageSixCommon;
        mainCharacterCurrent.health -= 4;
        document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
        document.getElementById('choices-section').innerHTML = this.optionsSix;
        setEnemyStats(ragnarTheHorrible, 8,12,20,30);
    },
    pageSixCommon: `
    <p>Snarling, you break free of your foe's grip and turn to face them.</p>
    <p>The pile of rags on the floor has metamorphasised, like a corpse-stench ridden butterfly, into a furious looking warrior with a filthy straggly beard. </p>
    `,
    pageSixFirst: `
    <p>Stumbling to your knees as the gnarly hand grips your ankle, you narrowly avoid the blade, sensing it flash inches past your thigh</p>
    `,
    pageSixSecond: `
    <p>You try to dodge but with your ankle caught fast there is no way of avoiding the blade.  <br>It plunges into your thigh for <span class="red">7</span> health points of damage.</p>
    `,
    pageSixThird: `
    <p>You stand your ground and angle yourself to best withstand the impact of the blade.  <br>It grazes off your thigh for <span class="red">4</span> health points of damage.</p>
    `,
    optionsSix: `
    <li><button class="choice-button" id="choice-thirteen">Stand and fight the warrior.</button></li>
    `,
    //Ragnar Fight Setup
    ragnarFight: function ragnarFight(enemy) {
        changeToBattleWindow(enemy);
        document.getElementById('fists-button').firstChild.setAttribute("id", "ragnar-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "ragnar-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "ragnar-three"); 
        testForWeapons(ragnarTheHorrible);
    },
    // returning to the loation    
    caveReturn: function caveReturn() {
        changeModeToMainWindow();
        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.pageThreeCommon;
        if (thingsWhatYouveDone.firstRoomSearch) {
            if (thingsWhatYouveDone.slimeCollect) {
            document.getElementById('choices-section').innerHTML = this.optionsThreeSearchedTwo;
            } else {
            document.getElementById('choices-section').innerHTML = this.optionsThreeSearchedOne;   
            }
        } else {
            document.getElementById('choices-section').innerHTML = this.optionsThree;
        }
    },    
    optionsThreeSearchedOne:`
    <li><button class="choice-button" id="choice-seven">I think we've exhausted all the fun in this room.  Let's move on!</button></li>
    `,
    optionsThreeSearchedTwo:`
    <li><button class="choice-button" id="choice-twenty-three">I think we've exhausted all the fun in this room.  Let's move on!</button></li>
    `
}
//object for corridor with slime encounter.
const slimeCorridor = {
    background: "url('assets/images/backgrounds/corridorv3.webp') no-repeat left center",
    //corridor navigation
    slimeEncounter: function slimeEncounter() {
        changeModeToMainWindow();
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        if (thingsWhatYouveDone.slimeCollect) {
            catCavern.catCavern();
        } else if (thingsWhatYouveDone.slimeKill) {
            document.getElementById('game-section').style.background = this.background;
            document.getElementById('game-text').innerHTML = this.pageSevenSlimed;
            document.getElementById('choices-section').innerHTML = this.optionsSevenTwo;
        } else {
        mainCharacter.score += 1;
        document.getElementById('game-section').style.background = this.background;
        document.getElementById('game-text').innerHTML = this.pageSeven;
        document.getElementById('choices-section').innerHTML = this.optionsSeven;
        }
    },
    pageSeven: `<p>You soon find yourself in a dark passageway, feeling for the walls either side of you in the claustrophobia of the gloomy corridor.</p>
    <p>Finally you see light from beyond the corner up ahead glinting from the surface of a small patch of liquid. <br>Light... and water... too much to ask?</p>
    <p>You run your tongue over your parched lips.  You don't know when it last was you drank anything.
    <br>This could do wonders for your constitution. What do you do?</p>
    `,
    pageSevenSlimed: `
    <p>Once again you enter the dark narrow corridor, but more confidently this time.  </p>
    <p>As you come to the point where you defeated the slime you still see pools of dead goo puddled, glinting in the half-light.
    `,
    optionsSeven: `
    <li><button class="choice-button" id="choice-fourteen">Drink the liquid.</button></li>
    <li><button class="choice-button" id="choice-fifteen">Examine the liquid.</button></li>
    <li><button class="choice-button" id="choice-twenty">Turn and hurry back to the cave you started in.</button></li>
    <li><button class="choice-button" id="choice-sixteen">Round the corner, giving the puddle a wide berth.</button></li>
    `,
    optionsSevenTwo: `
    <li><button class="choice-button" id="choice-twenty">Go back to the cave you started in.  You liked that room.</button></li>
    <li><button class="choice-button" id="choice-sixteen">Round the bend in the corridor.</button></li>
    <li><button class="choice-button" id="choice-twenty-two">Collect some of the goo.</button></li>
    `,
    //Goo initial interactions
    gameOverDrink: function gameOverDrink() {
        mainCharacter.score -=10;
        document.getElementById('final-score').innerHTML = mainCharacter.score;
        document.getElementById('gameover-page').style.display="flex";
        document.getElementById('game-page').style.display="none";
        document.getElementById('game-outcome').innerHTML = this.drinkSlime;
    },
    slimeAttack: function slimeAttack() {
        mainCharacter.score +=5;
        document.getElementById('game-text').innerHTML = this.pageEight;
        document.getElementById('choices-section').innerHTML = this.optionsEight;
    },
    drinkSlime: `<p>You fall to your hands and knees by the puddle, scooping the liquid into your mouth and swallowing it unthikingly.</p>
    <p>It is incredibly refreshing, if a little more gelatinous than normal water... until you realise that you cannot breathe.</p>
    <p>The sentient slime you have discovered does not appreciate being drunk, and expands to fill your airwaves.
    <br>It is a slow and agonising death, giving you ample time to appreciate what a poor decision you have just made.</p>
    <p>YOU ARE DEAD</p>
    `,
    pageEight: `<p>Kneeling by the glinting pool, you cautiously lower your fingers into the liquid. As you lift your hand it clings to your fingers, 
    glooping slowly down to rejoin the rest as if it were a single entity.</p>
    <p>Without warning the liquid seems to reach up of its own accord, enveloping your arm.  It begins to squeeze, hard, and dark borders 
    start to appear at the edges of your vision...</p>
    `,
    optionsEight: `
    <li><button class="choice-button" id="choice-seventeen">TEST YOUR LUCK: Try and shake off the slime</button></li>
    <li><button class="choice-button" id="choice-eighteen">Smash your arm against the wall to try and free it.</button></li>
    `,  
    //Page nine
    slimeLuck: function slimeLuck() {
        changeModeToItemWindow();
        thingsWhatYouveDone.slimeKill = true;
        if (getLucky()) {
            mainCharacter.score += 3;
            document.getElementById('lower-text').innerHTML = this.pageNineFirst;
            document.getElementById('choices-section').innerHTML = this.optionsNine;
            setEnemyStats(sentientSlime, 4,8,30,40,0,0,8, 0, undefined, "sharp");
        } else {
            mainCharacter.score -=10;
            document.getElementById('final-score').innerHTML = mainCharacter.score;
            document.getElementById('gameover-page').style.display="flex";
            document.getElementById('game-page').style.display="none";
            document.getElementById('game-outcome').innerHTML = this.strangledSlime;
        }
    },
    slimeSmash: function slimeSmash() {
        thingsWhatYouveDone.slimeKill = true;
        changeModeToItemWindow();
        document.getElementById('upper-text').innerHTML = this.pageNineSecond;
        mainCharacterCurrent.health -= 5;
        mainCharacter.score += 3;
        if (mainCharacterCurrent.health <=0) {
            changeToGameOver();
            mainCharacter.score -= 10;            
            document.getElementById('game-outcome').innerHTML = sentientSlime.killedYouText;
        }
        document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
        document.getElementById('choices-section').innerHTML = this.optionsNine;
        setEnemyStats(sentientSlime, 4,8,30,40,0,0,8, 0, undefined, "sharp");
    },
    pageNineFirst: `
    <p>Moving swiftly, you manage to shake your arm free, sending the goo skittering from the opposite wall.</p><p>The ooze immediately coalesces 
    and begins moving in your general direction.</p>
    `,
    pageNineSecond: `<p>No matter what you do, you can't shake the goo off. Your only option is to smash your arm into the hard rock of the corridor wall. 
    It sends the goo skittering and frees your arm, at the cost of <span class="red">5</span> health points.</p>
    <p>The ooze immediately coalesces and begins moving in your general direction.</p>
    `,
    strangledSlime: `<p>You attempt to shake the slime free of your arm, but somehow it clings on.  You gather your strength to try again but it has already 
    enveloped your arm, and is reaching for your throat.</p>
    <p>Slowly its grip tightens, until you can no longer breathe.  You have no choices left.</p>
    <p>YOU ARE DEAD</p>
    `,
    optionsNine: `
    <li><button class="choice-button" id="choice-nineteen">Prepare to do battle with the sentient slime.</button></li>
    `,
    // Slime fight setup
    slimeFight: function slimeFight(enemy) {
        changeToBattleWindow(enemy);
        document.getElementById('fists-button').firstChild.setAttribute("id", "slime-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "slime-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "slime-three"); 
        testForWeapons(enemy);
    },
    // Pickup slime
    checkSlime: function checkSlime() {
        if (currentObject.name) {
        document.getElementById('transparency').style.opacity = 0.3;
        document.getElementById('alert-page').style.display = "block";
        document.getElementById('item-details').innerHTML = currentObject.name;
        document.getElementById('keep-new').firstChild.setAttribute("id", "keep-slime"); 
        document.getElementById('keep-old').firstChild.setAttribute("id", "lose-slime"); 
        } else {
            this.getSlime();
        }
    },
    getSlime: function getSlime() {  
        changeModeToItemWindow();      
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        thingsWhatYouveDone.slimeCollect = true;
        foundItemInfo.category = slime.category;
        foundItemInfo.adjective = slime.adjective
        foundItemInfo.name = slime.name;
        foundItemInfo.effect = slime.effect;
        foundItemInfo.image = slime.image;
        foundItemInfo.score = slime.score;
        foundItemInfo.description = slime.description;
        document.getElementById('lower-text').innerHTML = this.slimeGet;
        document.getElementById('choices-section').innerHTML = this.slimeGetOptions;
        displayItem();
        storeItem();   
    },
    slimeGet: `
    <p>You reach down and tentatively pick up some of the goo.  The handful you take sags through your fingers and forms gloopy tendrils connecting it to the rest of the slime on the floor, but eventually comes free.</p>
    <p>You put it away, wondering what earthly use you might ever have for it.</p>
    `,
    slimeGetOptions: `
    <li><button class="choice-button" id="choice-twenty">Leave the area, by returning the way you came from.</button></li>
    <li><button class="choice-button" id="choice-twenty-one">Leave the area, by rounding the bend in the passageway.</button></li>
    `
}
//object for room where cats are encountered.
const catCavern = {
    background: "url('assets/images/backgrounds/cat-cavern.webp') no-repeat left center",
    catImage: `<img src="assets/images/enemies/cat-warriors.webp">`,
    catCavern: function catCavern() {
        changeModeToMainWindow();
        mainCharacter.score += 2;
        document.getElementById('game-section').style.background = this.background;
        if (thingsWhatYouveDone.catsKilled === 5){
            document.getElementById('game-text').innerHTML = this.catCavernText + this.catsGoneText;
            document.getElementById('choices-section').innerHTML = this.catsGoneOptions;
        } else {
            document.getElementById('game-text').innerHTML = this.catCavernText + this.catImage;
            if (thingsWhatYouveDone.cavernVisits === 0){
                document.getElementById('choices-section').innerHTML = this.catCavernOptionsFirst;
            } else if (thingsWhatYouveDone.cavernVisits === 1){
                document.getElementById('choices-section').innerHTML = this.catCavernOptionsSecond;
            } else if (thingsWhatYouveDone.cavernVisits === 2){
                document.getElementById('choices-section').innerHTML = this.catCavernOptionsThird;
            } else if (thingsWhatYouveDone.cavernVisits === 3){
                document.getElementById('choices-section').innerHTML = this.catCavernOptionsFourth;
            } else if (thingsWhatYouveDone.cavernVisits > 3){
                document.getElementById('choices-section').innerHTML = this.catCavernOptionsMore;
            }
        }
        thingsWhatYouveDone.cavernVisits +=1;
    },
    catCavernText: `
    <p>You emerge into a large cavernous space enclosed by sheer rock cliffs. Lanterns have been placed sparsely about the room, barely illuminating the vast space.</p>
    <p>It is clear this area is often frequented.</p>
    <p>Before you can assess your options, a loud noise startles you.  It sound like... feet?  Not quite.  Claws?  You hope not.
    <br>You have little time to react before a small group of cat-like warriors charge into the room.</p>
    `,
    catCavernOptionsFirst: `
    <li><button class="choice-button" id="choice-twenty-four">I can scarcely wait to see what happens next.</li>
    `,
    catCavernOptionsSecond: `
    <li><button class="choice-button" id="choice-twenty-four">The first time was great, the second time...</li>
    `,
    catCavernOptionsThird: `
    <li><button class="choice-button" id="choice-twenty-four">I can see that this is starting to become a theme.</li>
    `,
    catCavernOptionsFourth: `
    <li><button class="choice-button" id="choice-twenty-four">I almost missed you, furry cat friends.</li>
    `,
    catCavernOptionsMore: `
    <li><button class="choice-button" id="choice-twenty-four">OK I want to get out of this gameplay loop now.</li>
    `,
    catsGoneText:`
    <p>You prepare yourself for the patter of tiny cat feet, but you hear nothing.  The cavern is eerily silent.</p>
    <p>There is no sign of life anywhere, just the slowly rotting pile of cat corpses which YOU have created.</p>
    <p>Could it be you have forced them to leave for a safer place, following the endless slaughter of their kind?</p>
    `,
    catsGoneOptions:` 
    <li><button class="choice-button" id="choice-thirty-two">They left me little choice.</button></li>
    `,
    catDecision: function catDecision(chanceOne, chanceTwo, chanceThree, chanceFour) {
        let randomChance = getRandomNumber(0,100);
        if (randomChance <= chanceOne){
            return "arrest";
        } else if (randomChance <= chanceTwo && randomChance > chanceOne){
            return "fight";
        } else if (randomChance <= chanceThree && randomChance > chanceTwo) {
            return "run away";
        } else if (randomChance <= chanceFour && randomChance > chanceThree) {
            return "god";
        } 
    },
    catCavernDecision: function catCavernDecision() {
        if (thingsWhatYouveDone.catGod === true) {
            this.catGod();
        } else {
            if (currentPotion.name === "Potion of Catnip") {
            thingsWhatYouveDone.catCaptureChance -= 5;
            thingsWhatYouveDone.catFightChance -= 5;
            thingsWhatYouveDone.catRunawayChance -= 5;
            thingsWhatYouveDone.catGodChance += 15;
            }
            let catResult = this.catDecision(thingsWhatYouveDone.catCaptureChance, thingsWhatYouveDone.catFightChance + thingsWhatYouveDone.catCaptureChance,
            thingsWhatYouveDone.catRunawayChance + thingsWhatYouveDone.catFightChance + thingsWhatYouveDone.catCaptureChance, 
            thingsWhatYouveDone.catRunawayChance + thingsWhatYouveDone.catFightChance + thingsWhatYouveDone.catCaptureChance + thingsWhatYouveDone.catGodChance);
            if (currentPotion.name === "Potion of Catnip") {
                thingsWhatYouveDone.catCaptureChance += 5;
                thingsWhatYouveDone.catFightChance += 5;
                thingsWhatYouveDone.catRunawayChance += 5;
                thingsWhatYouveDone.catGodChance -= 15;
            }
            if (catResult === "arrest") {
                this.catCapture();
            } else if (catResult === "fight") {
                this.catAttack();
            } else if (catResult === "run away") {
                this.catsRunAway();
            } else {
                this.catGod();
            }
        }
    },
    catCapture: function catCapture() {
        mainCharacter.score +=5;
        document.getElementById('game-text').innerHTML = this.catCaptureText;
        document.getElementById('choices-section').innerHTML = this.catCaptureOptions;
    },
    catCaptureText:`
    <p>The cats arrange themselves around you in a semi-circle and, at an urgent mewl from what seemed to be their leader, pounced as one.</p>
    <p>Faster than you would care to admit, you are overwhelmed and slung in some kind of... cats cradle... between the group, being transported at speed along a wide corridor.</p>
    `,
    catCaptureOptions: `
    <li><button class="choice-button" id="choice-thirty">I should never have opened my eyes.</button></li>
    `,
    catAttack: function catAttack() {
        changeModeToItemWindow();
        document.getElementById('upper-text').innerHTML = this.catAttackText;
        document.getElementById('choices-section').innerHTML = this.catAttackChoices;
        setEnemyStats(catWarrior, 8,10,20,30,2,5,0, 0, "fire");
    },
    catAttackText: `
    <p>The cats draw to a swift halt, glance at each other, then step back and allow the largest of them centre-stage</p>
    <p>It seems like they wish you to fight this Cat Warrior.</p>
    `,
    catAttackChoices: `
    <li><button class="choice-button" id="choice-twenty-eight">Stand your ground and meet the challenge.</button></li>
    <li><button class="choice-button" id="choice-twenty-nine">Make a run for it to avoid the slaughter.</button></li>
    `,
    catFight: function catFight(enemy) {
        changeToBattleWindow(enemy);
        document.getElementById('fists-button').firstChild.setAttribute("id", "cat-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "cat-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "cat-three");
        if (currentObject.name === "Cat Biscuits") {
            document.getElementById('object-button-one').firstChild.setAttribute("id", "cat-four"); 
            document.getElementById('object-button-two').firstChild.setAttribute("id", "cat-five");
        }
        testForWeapons(enemy);
    },
    feedBiscuits: function feedBiscuits() {
        changeModeToMainWindow();
        thingsWhatYouveDone.catFightChance -=10;
        thingsWhatYouveDone.catGodChance +=10;
        thingsWhatYouveDone.courtHangChance -=10;
        thingsWhatYouveDone.courtGodChance +=10;
        mainCharacter.score += 20;
        //remove cat biscuits from inventory
        document.getElementById('object-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`;
        document.getElementById('object-item-name').innerHTML = "";
        document.getElementById('object-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentObject)) {
            currentObject[item] = "";
        }        
        document.getElementById('game-text').innerHTML = this.catBiscuitsText;
        document.getElementById('choices-text').innerHTML = this.bicsuitOptions;
    },
    catBiscuitsText: `
    <p>You offer out a handful of biscuits to the fearsome kitty - whilst at first he looks fearful and confused, he eventually pushes his nose into your hand and scoffs the lot</p>
    <p>Stopping briefly to run affectionately and alarmingly against your leg, both the warrior and his bretheren are soon high-tailing it back the way they came.</p>
    `,
    biscuitOptions: `
    <li><button class="choice-button" id="choice-thirty-two">Well, there's something you don't see every day.</button></li>
    `,
    catnipWarrior: function catnipWarrior(){
        changeModeToMainWindow();
        thingsWhatYouveDone.catCaptureChance -=5;
        thingsWhatYouveDone.catFightChance -=5;
        thingsWhatYouveDone.catGodChance +=10;
        thingsWhatYouveDone.courtHangChance -=10;
        thingsWhatYouveDone.courtPrisonChance -=10;
        thingsWhatYouveDone.courtGodChance +=20;
        mainCharacter.score += 30;
        //remove catnip biscuits from inventory
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`;
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }        
        document.getElementById('game-text').innerHTML = this.catnipText;
        document.getElementById('choices-section').innerHTML = this.catnipOptions;
    },
    catnipText: `
    <p>Immediately on applying the catnip, the animals begin to behave differently.  The warrior approaches and begins rubbing iteslf against your legs,
    whilst the others rapidly approach.</p>
    <p>The force of their affection forces you to your knees, whereupon one of them leaps upon your shoulders and begins nibbling your ear, making you giggle.</p>
    <p>Before long through, the fun stops and the felines seem to remember themselves, skedaddling back the way they came.</p>
    `,
    catnipOptions: `
    <li><button class="choice-button" id="choice-thirty-two">I'm not really even a cat person.</button></li>
    `,
    getCatSword: function getCatSword() {
        changeModeToItemWindow();
        foundItemInfo.category = catSword.category;
        foundItemInfo.adjective = catSword.adjective
        foundItemInfo.name = catSword.name;
        foundItemInfo.attack = catSword.attack;
        foundItemInfo.skill = catSword.skill;
        foundItemInfo.type = catSword.type;
        foundItemInfo.magic = catSword.magic;
        foundItemInfo.image = catSword.image;
        foundItemInfo.score = catSword.score;
        foundItemInfo.description = catSword.description;
        document.getElementById('lower-text').innerHTML = this.catSwordGet;
        document.getElementById('choices-section').innerHTML = this.catSwordGetOptions;
        displayItem();
    },
    catSwordGet: `
    <p>Stooping down, you pick up the cat's sword, and run through a basic set of thrusts and parries.</p>
    <p>Although small, it is well balanced, and will likely help your life expectancy.</p>
    `,
    catSwordGetOptions:`
    <li><button class="choice-button" id="choice-thirty-one">Keep the Cat Sword.</button></li>
    <li><button class="choice-button" id="choice-thirty-two">Leave the Cat Sword here for now.</button></li>
    `,
    checkCatSword: function checkCatSword() {
        if (currentWeapon.name) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentWeapon.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-cat"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-cat");
        } else {
            this.keepCatSword();
        }
    },
    keepCatSword: function keepCatSword() {
        thingsWhatYouveDone.getCatSword = true;
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        mainCharacter.score += foundItemInfo.score;
        storeItem();
        this.catExitOptions();
    },
    catsRunAway: function catsRunAway() {
        mainCharacter.score += 5;
        document.getElementById('game-text').innerHTML = this.catsRunAwayText;
        document.getElementById('choices-section').innerHTML = this.optionsRunAway;
    },
    catsRunAwayText: `
    <p>No sooner has your brain even begun to register what is going on, the little furry troublemakers rapidly conclude a debate among themselves.</p>
    <p>As swiftly as they appeared, the cats appear to have decided discretion is the better part of valour, and hot-foot it back the way they came.</p>
    `,
    optionsRunAway: `
    <li><button class="choice-button" id="choice-thirty-two">I guess I look pretty fearsome to a cat...</button></li>
    `,
    catGod: function catGod() {
        thingsWhatYouveDone.catGod = true;
        document.getElementById('character-sheet-name').innerHTML = mainCharacter.name + "<br><em>Cat Deity</em>";
        document.getElementById('game-text').innerHTML = this.catGodText;
        document.getElementById('choices-section').innerHTML = this.optionsGod;
    },
    catGodText: `
    <p>The cats slowly approach you, and you see both fear and wonder in their eyes.  Falling to their knees, they bow and grovel for as long as they dare, before melting away into the gloom</p>
    <p>Strange as this seemed, it is preferable to many of the alternatives you might have imagined.</p>
    <p>Quite apart from that, although your memory is still hazy, this also feels like the exact way you SHOULD be treated.</p>
    `,
    optionsGod: `
    <li><button class="choice-button" id="choice-thirty-two">I always felt... different...</button></li>
    `,
    catExitOptions: function catExitOptions() {
        changeModeToMainWindow();
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        if (thingsWhatYouveDone.firstCatKilled && thingsWhatYouveDone.getCatSword) {
            if (thingsWhatYouveDone.catsKilled === 1) {
            document.getElementById('game-text').innerHTML = this.catCavernExitTextOne + this.catCavernExitTextTwo + "A cat corpse is" 
            + this.catCavernExitTextThree + this.catCavernExitTextExits;
            } else {
                document.getElementById('game-text').innerHTML = this.catCavernExitTextOne + this.catCavernExitTextTwo + "A small pile of cat corpses are" 
                + this.catCavernExitTextThree + this.catCavernExitTextExits;
            }
            document.getElementById('choices-section').innerHTML = this.exitOptionsOne;
        } else if (thingsWhatYouveDone.firstCatKilled) {
            if (thingsWhatYouveDone.catsKilled === 1) {
                document.getElementById('game-text').innerHTML = this.catCavernExitTextOne + this.catCavernExitTextTwo + "A cat corpse is" 
                + this.catCavernExitTextThree + this.catCavernExitTextFour + this.catCavernExitTextExits;
            } else {
                document.getElementById('game-text').innerHTML = this.catCavernExitTextOne + this.catCavernExitTextTwo + "A small pile of cat corpses are" 
                + this.catCavernExitTextThree + this.catCavernExitTextFour + this.catCavernExitTextExits;
            }
            document.getElementById('choices-section').innerHTML = this.exitOptionsOne + this.exitOptionsTwo;
        } else {
            document.getElementById('game-text').innerHTML = this.catCavernExitTextOne + this.catCavernExitTextExits;
            document.getElementById('choices-section').innerHTML = this.exitOptionsOne;
        }
    },
    catCavernExitTextOne: `
    <p>Now things have got a little less intense, you finally have the chance to look around.</p>
    `,
    catCavernExitTextTwo: `
    <p>In the centre of the room there are signs of a recent struggle. 
    `,
    catCavernExitTextThree: `
     curled up on the floor.</p> 
    `,
    catCavernExitTextFour: `
    <p>You can also see a little cat sword is lying nearby.</p>
    `,
    catCavernExitTextExits: `
    <p>Up ahead you see the broad corridor through which the cats emerged, the floor worn smooth by the passage of many tiny feet.
    <br>To your left you see a stone doorway, seemingly without a door.
    <br>Over to your right a treacherous narrow stairway is cut directly into the rock of the cavern wall.</p>
    <p>What do you do next?</p>
    `,
    exitOptionsOne:`
    <li><button class="choice-button" id="choice-thirty-three">Go back the way you came. This place is crazy.</button></li>
    <li><button class="choice-button" id="choice-thirty-four">Leave via the broad cat corridor.</button></li>
    <li><button class="choice-button" id="choice-thirty-five">Venture through the stone doorway.</button></li>
    <li><button class="choice-button" id="choice-thirty-six">Attempt to climb the rocky stairs.</button></li>
    `,
    exitOptionsTwo: `
    <li><button class="choice-button" id="choice-twenty-five">Pick up the Cat Sword.</button></li>
    `,
    goBack: function goBack() {
        if (thingsWhatYouveDone.slimeCollect) {
            firstCavern.caveReturn();
        } else {
            slimeCorridor.slimeEncounter();
        }
    }
}
const mysteryRoom = {
    background: "url('assets/images/backgrounds/mystery-room.webp') no-repeat left center",
    backgroundTwo: "url('assets/images/backgrounds/mystery-room-golden.webp') no-repeat left center",

    mysteryRoom: function mysteryRoom() {
        changeModeToMainWindow();
        mainCharacter.score += 5;
        document.getElementById('game-section').style.background = this.background;
        if (specialObject.name === "Glowing Orb") {
            document.getElementById('game-text').innerHTML = this.mysteryRoomText + this.mysteryRoomOrbText;
            document.getElementById('choices-section').innerHTML = this.mysteryRoomOptionsTwo;
        } else {
            document.getElementById('game-text').innerHTML = this.mysteryRoomText;
            document.getElementById('choices-section').innerHTML = this.mysteryRoomOptionsOne;
        }
    },
    mysteryRoomText: `
    <p>The room within is small and square, but far more ornately decorated than any other so far.</p>
    <p>Not hard really since everything else was simply hewn from the rock.  Nevertheless.</p>
    <p>In one of the walls stands a plinth, which has every appearance of being designed for a very specific item.
    <br>There are no other exits.</p>
    `,
    mysteryRoomOrbText: `
    <p>Looking down at the strange Glowing Orb you are carrying, it looks like it might be a fit for the plinth.
    <br>I wouldn't call this a spoiler... what else were you going to do?</p>
    <p>Not to say that it isn't some kind of cruelly conceived trap though. I mean it would be perfectly in keeping, wouldn't it?</p>
    `,
    mysteryRoomOptionsOne: `
    <li><button class="choice-button" id="choice-sixteen">I guess there's no choice but to go back in there with all the bloody cats.</button></li>
    `,
    mysteryRoomOptionsTwo: `
    <li><button class="choice-button" id="choice-thirty-seven">Place the Glowing Orb on the plinth.</button></li>
    <li><button class="choice-button" id="choice-sixteen">Leave the room.</button></li>
    `,
    orbPlace: function orbPlace() {
        mainCharacter.score += 100;
        document.getElementById('game-text').innerHTML = this.orbPlaceText;
        document.getElementById('choices-section').innerHTML = this.orbPlaceOptions;
    },
    orbPlaceText: `
    <p>Almost as soon as you place the orb, you hear a loud click in the wall to your right.</p>
    <p>You watch as a stone panel slides open... whatever lies beyond there is a light draught, and air that could almost be described as fresh.</p>
    <p>To say you've made it would be an understatement, since you have no idea where you are, but at least...</p>
    <p>Your thoughts freeze as you hear footsteps, and what can only be described as evil laughter.</p>
    `,
    orbPlaceOptions: `
    <li><button class="choice-button" id="choice-thirty-eight">Well of course... but... yeah well this can't be good...</button></li>
    `,
    sorcererFight: function sorcererFight() {
        if (getRandomNumber(0,100)<=50) {
            changeModeToItemWindow();
            document.getElementById('upper-text').innerHTML = this.iceQueenText;
            document.getElementById('choices-section').innerHTML = this.iceQueenChoices;
            setEnemyStats(iceQueen, 13,16,35,40);
        } else {
            changeModeToItemWindow();
            document.getElementById('upper-text').innerHTML = this.fireMageText;
            document.getElementById('choices-section').innerHTML = this.fireMageChoices;
            setEnemyStats(fireMage, 13,16,35,40);
        }
    },
    iceQueenText: `
    <p>The draught of air turns freezing as the Ice Queen strides into the room.  The place suddenly feels very small indeed</p>
    <p>"Oh, it's you! I thought I was well rid of you!"</p>
    <p>All you can do is look at her blanky.  Her laugh barks out again, shrill and awful.</p>
    <p>"Poor baby... you don't even remember, do you?  It won't matter now."</p>
    `,
    iceQueenTextTwo: `
    <p>"Is that my staff by the way? If you don't mind I might have to take it from your...c-c-c-c-cooolllld... dead corpse."
    `,
    iceQueenChoices: `
    <li><button class="choice-button" id="choice-fourty">What... is... MY... NAME???</button></li>
    `,
    fireMageText: `
    <p>The draught of air turns the room to a blazing furnace as the Fire Mage glides through the door. In spite of yourself you find you are backing away.</p>
    <p>"HA! You live! At least for now!"</p>
    <p>You had no idea you knew this man.</p>
    <p>"What have you become... do you even know your powers?  I suppose it's up to me to finish the job... AGAIN."</p>
    `,
    fireMageTextTwo: `
    <p>The mage acknowledges the Wand of Fire held in your trembling hands.
    <br>"Do you even know how that thing works, boy? No matter, now."</p>
    `,
    fireMageChoices: `
    <li><button class="choice-button" id="choice-fourty-one">What... is... MY... NAME???</button></li>
    `,
    endFightQueen: function endFightQueen(enemy) {
        changeToBattleWindow(enemy);
        document.getElementById('fists-button').firstChild.setAttribute("id", "queen-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "queen-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "queen-three");
        testForWeapons(enemy);
    },
    endFightMage: function endFightMage(enemy) {
        changeToBattleWindow(enemy);
        document.getElementById('fists-button').firstChild.setAttribute("id", "mage-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "mage-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "mage-three");
        testForWeapons(enemy);
    },
}
const endingScene = {
    endingScene: function endingScene() {
        mainCharacter.score += 10;
        document.getElementById('final-score').innerHTML = mainCharacter.score;
        document.getElementById('gameover-page').style.display="flex";
        document.getElementById('game-page').style.display="none";
        document.getElementById('game-outcome').innerHTML = this.endingText;
        
    },
    endingText: `
    <p>You pass through the secret door, and beyond it a short flight of stairs.
    <br>All the time, the darkness fades and you see hope of a world beyond these caverns.  You enter a short corridor, and see sun streaming in through an opening at the end of it.</p>
    <p>You wonder how you remember what that even is. You wonder what that world now holds for you.</p>
    <p>You know that you must cast this assumed name aside. You know that you have been wronged, the sorceror proved as much.
    <br>Their recognition, their hostility - what did it really mean??</p>
    <p>Now is the time to find out who you REALLY are. And when the time is right?</p>
    <p>VENGENCE.</p>
    `
}
const dangerStairs = {
    background: "url('assets/images/backgrounds/danger-stairs.webp') no-repeat left center",
    dangerStairs: function dangerStairs() {
        changeModeToMainWindow();
        mainCharacter.score += 5;
        document.getElementById('game-section').style.background = this.background;
        document.getElementById('game-text').innerHTML = this.stairsText;
        document.getElementById('choices-section').innerHTML = this.stairsChoices;
    },
    stairsText: `
    <p>The closer you get to the stairs the worse an idea it looks going up them.  Still, in for a penny and all that.</p>
    <p>Do you still want to try the stairs?</p>
    `,
    stairsChoices: `
    <li><button class="choice-button" id="choice-fourty-two">Of course, it's a flight of stairs not the darn Ice Queen!</button></li>
    <li><button class="choice-button" id="choice-thirty-two">No thank you, I'm scared.</button></li>
    `,
    stairsFallOutcome: function stairsFallOutcome() {
        let randomChance = getRandomNumber(0,100);
        if (randomChance <= 15) {
            return "death";
        } else if (randomChance>15<=75) {
            return "injury";
        } else {
            return "fine";
        }
    },
    climbStairs: function climbStairs() {
        if (getLucky()) {
            mainCharacter.score +=5;
            document.getElementById('game-text').innerHTML = this.stairsClimbedText;
            document.getElementById('choices-section').innerHTML = this.stairsClimbedChoices;
        } else {
            if (this.stairsFallOutcome() === "death") {
                this.deathStairs();
            } else if (this.stairsFallOutcome() === "injury") {
                mainCharacter.score -=5;
                let injuryStair = getRandomNumber(0,7);
                mainCharacterCurrent.health -= injuryStair;
                if (mainCharacterCurrent.health<=0) {
                    this.deathStairs();
                } else {
                    document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
                    document.getElementById('game-text').innerHTML = this.stairsInjuryTextOne + injuryStair + this.stairsInjuryTextTwo;
                    document.getElementById('choices-section').innerHTML = this.stairsFellChoices;
                }
            } else {
                mainCharacter.score -=2;
                document.getElementById('game-text').innerHTML = this.stairsFellText;
                document.getElementById('choices-section').innerHTML = this.stairsFellChoices;
            }
        }
    },
    stairsClimbedText: `
    <p>There were a few slips and scares on the way, but you just about make it to the top unscathed</p>
    <p>Stairs, indeed.  Talk about generation snowflake.</p>
    <p>Anyhow, right ahead of you there is an entry to a cave.  You can smell the rank stale air from where you are stood, overlooking the canyon.</p>
    `,
    stairsClimbedChoices:`
    <li><button class="choice-button" id="choice-fourty-three">Set about exploring the cave</button></li>
    <li><button class="choice-button" id="choice-fourty-four">Go down the stairs.</button></li>
    `,
    stairsInjuryTextOne: `
    <p>Just as you put your foot down the step beneath you crumbles, sending you tumbling off balance back down to the floor of the cavern</p>
    <p>Fortunately, you get off lightly, losing <span class="red"> 
    `,
    stairsInjuryTextTwo: `
    </span> health points.</p>
    `,
    stairsFellText: `
    <p>No matter how tentatively you approach the stairs, you can't stop yourself from slipping and falling on the treacherous surface</p>
    <p>Fortunately you hadn't got very far up the flight, so no harm was done</p>
    `,
    stairsFellChoices: `
    <li><button class="choice-button" id="choice-fourty-two">If at first you don't succeed...</button></li>
    <li><button class="choice-button" id="choice-thirty-two">Bugger this for a game of skittles.</button></li>
    `,
    descendStairs: function descendStairs() {
        if (getLucky()) {
            mainCharacter.score +=5;
            document.getElementById('game-text').innerHTML = this.stairsDescendedText + this.stairsDescendedTextCommon;
            document.getElementById('choices-section').innerHTML = this.stairsDescendedChoices;
        } else {
            if (this.stairsFallOutcome() === "death") {
                this.deathStairs();
            } else if (this.stairsFallOutcome() === "injury") {
                mainCharacter.score -=5;
                let injuryStair = getRandomNumber(0,7)
                mainCharacterCurrent.health -= injuryStair;
                if (mainCharacterCurrent.health<=0) {
                    this.deathStairs();
                } else {
                    document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
                    document.getElementById('game-text').innerHTML = this.stairsInjuryTextOne + injuryStair + this.stairsInjuryTextTwo + this.stairsDescendedTextCommon;
                    document.getElementById('choices-section').innerHTML = this.stairsDescendedChoices;
                }
            } else {
                mainCharacter.score -=2;
                document.getElementById('game-text').innerHTML = this.stairsFellDescendedText;
                document.getElementById('choices-section').innerHTML = this.stairsDescendedChoices;
            }
        }
    },
    stairsDescendedText: `
    <p>There were a few slips and scares on the way, but you just about make it to the bottom unscathed</p>
    <p>Regardless, these are probably the worst stairs ever.</p>
    `,
    stairsDescendedTextCommon: `
    <p>You find yourself at the fringes of the large cavern where you encountered the cat warriors.</p>
    `,
    stairsFellDescendedText: `
    <p>No matter how tentatively you approach the stairs, you can't stop yourself from slipping and falling on the treacherous surface</p>
    <p>Fortunately you'd got most of the way down, so no harm was done</p>
    `,
    stairsDescendedChoices:`
    <li><button class="choice-button" id="choice-fourty-two">Go back up the stairs again.</button></li>
    <li><button class="choice-button" id="choice-thirty-two">Enter the cavern.</button></li>
    `,
    deathStairs: function deathStairs() {
        mainCharacter.score -= 10;
        document.getElementById('final-score').innerHTML = mainCharacter.score;
        document.getElementById('gameover-page').style.display="flex";
        document.getElementById('game-page').style.display="none";
        document.getElementById('game-outcome').innerHTML = this.deathStairsText;
    },
    deathStairsText:`
    <p>You lose your footing at just the wrong moment...</p>
    <p>Having been thrown off balance, you are powerless to prevent yourself from toppling over the steep canyon edge.</p>
    <p>You have little time to think before your brains are dashed out on the rocks below.
    <br>YOU ARE DEAD</p>
    `
}



const catCourt ={
    catCourt: function catCourt(){

    }
}

// HELPER FUNCTIONS
// Random number generator
const getRandomNumber = (min, max) => Math.ceil(Math.random() * (max - min)) + min;
//luck tested
const getLucky = () => getRandomNumber(0,20) <= mainCharacterCurrent.luck;
//game state switchers
function changeModeToMainWindow() {
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
    const resetElements = document.getElementsByClassName('change-mode');
    for (let i = 0; i < resetElements.length; i++) {
        resetElements[i].innerHTML = "";
    }
    document.getElementById('upper-text').style.display = "block";
    document.getElementById('lower-text').style.display = "block";
    document.getElementById('image-section').style.display = "flex";
    document.getElementById('game-text').style.display = "none";
    document.getElementById('battle-text-player').style.display = "none";
    document.getElementById('battle-text-enemy').style.display = "none";
}
function changeToBattleWindow(enemy) {
    document.getElementById('upper-text').style.display = "none";
    document.getElementById('lower-text').style.display = "none";
    document.getElementById('battle-text-player').style.display = "block";
    document.getElementById('battle-text-enemy').style.display = "block";
    document.getElementById('battle-text-player').innerHTML = enemy.initialText;
    document.getElementById('choices-section').style.display = "none";
    document.getElementById('battles-section').style.display = "block";
    document.getElementById('game-text').style.display = "none";
}
function changeToGameOver() {   
    document.getElementById('final-score').innerHTML = mainCharacter.score;
    document.getElementById('gameover-page').style.display="flex";
    document.getElementById('game-page').style.display="none";
}
//CHARACTER GENERATION
function generateStats(character, min, max, hMin, hMax, strItem, sklItem, dItem, hlthItem, vuln, resist, magic) {
    character.strength = getRandomNumber(min-1, max);
    character.skill = getRandomNumber(min-1, max);
    character.defence = getRandomNumber(min-1, max);
    character.luck = getRandomNumber(min-1, max);
    character.health = getRandomNumber(hMin-1, hMax);
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

// ITEM FUNCTIONS
//select category
function findItemType (chanceOne, chanceTwo, chanceThree, chanceFour) {
    let randomChance = getRandomNumber(0, 100);
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
        let itemSelection = getRandomNumber(0, 100);
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
        currentWeapon.category = foundItemInfo.category;
        currentWeapon.name = foundItemInfo.name;
        currentWeapon.attack = foundItemInfo.attack;
        currentWeapon.skill = foundItemInfo.skill;
        currentWeapon.magic = foundItemInfo.magic;
        currentWeapon.type = foundItemInfo.type;
        currentWeapon.image = foundItemInfo.image;
        
    } else if (foundItemInfo.category === "clothing") {
        currentDefence.category = foundItemInfo.category;
        currentDefence.name = foundItemInfo.name;
        currentDefence.defence = foundItemInfo.defence;
        currentDefence.resist = foundItemInfo.resist;
        currentDefence.image = foundItemInfo.image;
        currentDefence.playerImage = foundItemInfo.playerImage;
    } else if (foundItemInfo.category === "potion") {
        currentPotion.category = foundItemInfo.category;
        currentPotion.name = foundItemInfo.name;
        currentPotion.effect = foundItemInfo.effect;
        currentPotion.image = foundItemInfo.image;
    } else if (foundItemInfo.category === "object") {
        currentObject.category = foundItemInfo.category;
        currentObject.name = foundItemInfo.name;
        currentObject.effect = foundItemInfo.effect;
        currentObject.image = foundItemInfo.image;
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
function testForWeapons(enemy) {
    if (enemy.name === "Cat Warrior" && currentObject.name === "Cat Biscuits") {    
        document.getElementById('object-button-one').style.display = "block";
        document.getElementById('object-button-two').style.display = "block";
    } else {
        document.getElementById('object-button-one').style.display = "none";
        document.getElementById('object-button-two').style.display = "none";
    }
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
    if (currentObject.name === "Insect Repellant") {
        document.getElementById('object-button-three').style.display = "block";
    } else {
        document.getElementById('object-button-three').style.display = "none";
    }
}
function continueFight(enemy) {
    document.getElementById('list-item-four').innerHTML = "Health: " + enemy.health;
    document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
    testForWeapons(enemy);
}
function leaveBattle(enemy) {
    document.getElementById('choices-section').style.display = "block";
    document.getElementById('battles-section').style.display = "none";
    document.getElementById('list-item-four').innerHTML = '<span class="red">Health: ' + "0</span>";
    document.getElementById('battle-text-player').innerHTML = '<h3 class="green">' + enemy.name + " Is Dead.</h3>" + enemy.deathText;
    document.getElementById('battle-text-enemy').innerHTML ="";            
    //sets odds changes in cat cavern and cat court.  Logs presence of weapon item too.
    if (enemy.name === "Cat Warrior") {
        thingsWhatYouveDone.catsKilled +=1;
        thingsWhatYouveDone.catFightChance -=12;
        thingsWhatYouveDone.catCaptureChance +=7;
        thingsWhatYouveDone.catGodChance +=5;
        thingsWhatYouveDone.courtPrisonChance -= 20;
        thingsWhatYouveDone.courtHangChance += 15;
        thingsWhatYouveDone.courtGodChance += 5;
        if (thingsWhatYouveDone.firstCatKilled === false) {
            thingsWhatYouveDone.firstCatKilled = true;
        }
    }
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
    let chanceToHit = getRandomNumber(0,20);
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
    return getRandomNumber(minStrength -1, maxStrength); 
}
function damageResist (enemy, weapon) {
    let initialResist = getRandomNumber(0,15);
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
        return Math.floor(roundDamage);
    } else {
        return "fail";
    }
}
function playerTurn(enemy, weapon) {
    let roundResult = nextRound(enemy, weapon);
    if (roundResult === "fail") {
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.failText;
        enemyTurn(enemy, "enemy");
    } else {
        let roundDamage = roundResult;
        if (roundDamage > 0) {enemy.health -= roundDamage;}
        if (enemy.health > 0) {
            if (weapon === "fists") {
                if (roundDamage > 0){
                    document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + `bare hands, causing <span class="green">` + roundDamage + `</span>` +` health points of damage.` + enemy.successTextTwo;
                } else {
                    document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + `bare hands, but the blow glances off them.` + enemy.successTextTwo;
                }
            } else {
                if (roundDamage > 0){
                    if (playerTestResistances(enemy) < 1) {
                        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + currentWeapon.name + `, causing <span class="green">` + roundDamage + `</span>` +` health points of damage.` + enemy.successTextTwo + weaponIneffective;
                    } else if (playerTestResistances(enemy) > 1) {
                        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + currentWeapon.name + `, causing <span class="green">` + roundDamage + `</span>` +` health points of damage.` + enemy.successTextTwo + weaponEffective;
                    } else { 
                    document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + currentWeapon.name + `, causing <span class="green">` + roundDamage + `</span>` +` health points of damage.` + enemy.successTextTwo;
                    }
                } else {
                    if (playerTestResistances(enemy) < 1) {
                        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + currentWeapon.name + `, but the blow glances off them.` + enemy.successTextTwo + weaponIneffective;
                    } else if (playerTestResistances(enemy) > 1) {
                        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + currentWeapon.name + `, but the blow glances off them.` + enemy.successTextTwo + weaponEffective;
                    } else { 
                        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + enemy.successTextOne + currentWeapon.name + `, but the blow glances off them.` + enemy.successTextTwo;
                    }
                }
            }
            enemyTurn(enemy, "enemy");
        } else {
            leaveBattle(enemy);
        } 
    }
}
function potionRound(enemy, weapon) {
    let roundDamage;
    let potionName = currentPotion.name;
    if (potionName === "Potion of Catnip") {
        if (enemy.name === "Cat Warrior") {
            catCavern.catnipWarrior();
        } else {
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "You rub on some of the catnip potion, but it doesn't seem to do anything right now.";
        mainCharacter.score -=3;
        enemyTurn(enemy, weapon);
        }
    } else if (potionName === "Potion of Healing") {
        if (mainCharacterCurrent.health + 50 <= mainCharacter.health) {
            mainCharacterCurrent.health =+ 50;
        } else {
            mainCharacterCurrent.health = mainCharacter.health
        }
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "You drink down the restorative balm, and feel instantly re-invigorated";
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`;
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
            enemyTurn(enemy, weapon);
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
            enemyTurn(enemy, weapon);
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
    } else if (currentObject.name === "Cat Biscuits") {
        if (mainCharacterCurrent.health + 20 <= mainCharacter.health) {
            mainCharacterCurrent.health += 20;
        } else {
            mainCharacterCurrent.health = mainCharacter.health
        }
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "You crunch down the cat biscuits, which in truth taste much better than they smell, restoring 20 health points.  The cats look on with much displeasure - that was a bit cruel to be fair.";
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentPotion)) {
            currentPotion[item] = "";
        }
        mainCharacter.score +=10;
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
//cat cavern decision-making dynamic


//cat court decision making dynamic


// Game restart and reset functions

function resetGame() {
    thingsReset();
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
    thingsReset();
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
    changeModeToMainWindow();
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
    document.getElementById('game-section').style.backgroundImage = "";
}

//START GAME EVENT HANDLERS

//start-game-button
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('start-game-button').addEventListener('click', startGame);
});
//restart game event handlers
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('restart-game-button').addEventListener('click', startGame);
});
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('restart-game-button-end').addEventListener('click', startGame);
});
//reset character button event handlers
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('reset-game-button').addEventListener('click', resetGame);
});
document.addEventListener('DOMContentLoaded', function () {  
    document.getElementById('reset-game-button-end').addEventListener('click', resetGame);
});

// IN-GAME EVENT HANDLERS

//FIRST ROOM EVENT HANDLERS (Cavern)
// open eyes / give up

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-one");
    if(target){
       firstCavern.openEyes();
    }
 });
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-two");
    if(target){
        firstCavern.gameOverGiveUp();     
    }
 });

//name decision

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-three");
    if(target){
        firstCavern.knowMyName();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-four");
    if(target){
        firstCavern.fightingTalk();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-five"); 
    if(target){
        firstCavern.nameUnknown();
    }
});
// page three event handlers (decide whether to search or leave area)

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-six"); 
    if(target){
        mainCharacter.score += 3;
        firstCavern.firstSearch();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-seven"); 
    if(target){
        slimeCorridor.slimeEncounter();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-three"); 
    if(target){
        catCavern.catCavern();
    }
});

// page four event handlers (decide whether to keep item)
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-eight"); 
    if(target){ 
        firstCavern.checkFirstItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-nine"); 
    if(target){
        firstCavern.ignoreFirstItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#keep-search"); 
    if(target){ 
        firstCavern.keepFirstItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#lose-search"); 
    if(target){
        firstCavern.ignoreFirstItem();
    }
});


//page five event handlers (possible fight / leave area)

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-ten"); 
    if(target){ 
        firstCavern.testLuck();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-eleven"); 
    if(target){ 
        firstCavern.braceYourself();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twelve"); 
    if(target){
        slimeCorridor.slimeEncounter();
    }
});

//Page 6 event handler (begin fight with Ragnar)
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirteen"); 
    if(target){        
        firstCavern.ragnarFight(ragnarTheHorrible);
    }
});

//Ragnar fight event handlers

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
        potionRound(ragnarTheHorrible, "enemy");
    }
});


// ROOM 2- SLIME CORRIDOR
//Slime Corridor event handlers
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourteen"); 
    if(target){ 
        slimeCorridor.gameOverDrink();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifteen"); 
    if(target){
        slimeCorridor.slimeAttack();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixteen"); 
    if(target){
        catCavern.catCavern();
    }
});

//what to do with the slime
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-seventeen"); 
    if(target){
        slimeCorridor.slimeLuck();
    }
});
document.addEventListener("click", function(e){
const target = e.target.closest("#choice-eighteen"); 
    if(target){
        slimeCorridor.slimeSmash();
    }
});

//fight slime
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-nineteen"); 
    if(target){        
        slimeCorridor.slimeFight(sentientSlime);
    }
});

//slime fight event handlers
document.addEventListener("click", function(e){
    const target = e.target.closest("#slime-one"); 
    if(target){ 
        playerTurn(sentientSlime, "fists");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#slime-two"); 
    if(target){
        playerTurn(sentientSlime, "weapon");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#slime-three"); 
    if(target){
        potionRound(sentientSlime, "enemy");
    }
});

//post slime fight optionss (post slime fight)
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty"); 
    if(target){ 
        firstCavern.caveReturn();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-one"); 
    if(target){
        catCavern.catCavern();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-two"); 
    if(target){
        slimeCorridor.checkSlime();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#keep-slime"); 
    if(target){ 
        slimeCorridor.getSlime();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#lose-slime"); 
    if(target){
        slimeCorridor.slimeEncounter();
    }
});

// ROOM 3 - cat cavern.
//initial cat decision
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-four"); 
    if(target){
        catCavern.catCavernDecision();
    }
});
//cat warrior options
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-eight"); 
    if(target){
        catCavern.catFight(catWarrior);
    }
});
//run away option (incomplete)
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-nine"); 
    if(target){
        catCavern.runAway();
    }
});
//battle event handlers
document.addEventListener("click", function(e){
    const target = e.target.closest("#cat-one"); 
    if(target){ 
        playerTurn(catWarrior, "fists");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#cat-two"); 
    if(target){
        playerTurn(catWarrior, "weapon");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#cat-three"); 
    if(target){
        potionRound(catWarrior, "enemy");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#cat-four"); 
    if(target){
        potionRound(catWarrior, "enemy");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#cat-five"); 
    if(target){
        catCavern.feedBiscuits();
    }
});
//post battle event handlers (decide to keep sword or not)getCatSword
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-five"); 
    if(target){ 
        catCavern.getCatSword();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-six"); 
    if(target){
        catCavern.catExitOptions();
}
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-one"); 
    if(target){ 
        catCavern.checkCatSword();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-two"); 
    if(target){
        catCavern.catExitOptions();
}
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#keep-cat"); 
    if(target){ 
        catCavern.keepCatSword();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#lose-cat"); 
    if(target){
        catCavern.catExitOptions();
    }
});
//cavern exit options
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-three"); 
    if(target){ 
        catCavern.goBack();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-four"); 
    if(target){
        catDining.catDining();
}
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-five"); 
    if(target){ 
        mysteryRoom.mysteryRoom();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-six"); 
    if(target){
        dangerStairs.dangerStairs();
    }
});

// ROOM 4- MYSTERY ROOM
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-seven"); 
    if(target){
        mysteryRoom.orbPlace();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-eight"); 
    if(target){
        mysteryRoom.sorcererFight();
    }
});
//initiate final fights
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty"); 
    if(target){
        mysteryRoom.endFightQueen(iceQueen);
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-one"); 
    if(target){
        mysteryRoom.endFightMage(fireMage);
    }
});
//final fight ice
document.addEventListener("click", function(e){
    const target = e.target.closest("#queen-one"); 
    if(target){
        playerTurn(iceQueen, "fists");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#queen-two"); 
    if(target){
        playerTurn(iceQueen, "weapon");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#queen-three"); 
    if(target){
        potionRound(iceQueen, "enemy");
    }
});
//final fight fire
document.addEventListener("click", function(e){
    const target = e.target.closest("#mage-one"); 
    if(target){
        playerTurn(fireMage, "fists");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#mage-two"); 
    if(target){
        playerTurn(fireMage, "weapon");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#mage-three"); 
    if(target){
        potionRound(fireMage, "enemy");
    }
});
//ending scene
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty-nine"); 
    if(target){
        endingScene.endingScene();
    }
});
// ROOM 5- DANGER STAIRS
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-two"); 
    if(target){
        dangerStairs.climbStairs();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-four"); 
    if(target){
        dangerStairs.descendStairs();
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

// GENERIC - text for battles

// turn indicators
const battleHeadingYou = `<h3 class="green">Your Turn</h3>`;
const battleHeadingThem = `<h3 class="red">Enemy Turn</h3>`;

const weaponEffective = `<p>Your weapon appears to have a devastating effect on this foe.</p>`;
const weaponIneffective = `<p>Your weapon appears to be particularly ineffective against this foe.</p>`;



// OBJECT EXPORTS FOR AUTOMATED TESTING
var module = module || {};
module.exports = { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
    pageOne, optionsOne, findItemType, characterWeapons,characterDefence, characterPotions, 
    characterObjects, searchForItem, foundItemInfo, setEnemyStats, ragnarTheHorrible, mainCharacterCurrent,currentWeapon,
    currentDefence, currentPotion, currentObject, itemStorage, thingsWhatYouveDone, playerTestResistances, 
    enemyTestResistances, continueFight, potionRound, hitSuccess, initialDamage,
    damageResist, storeItem, changeModeToMainWindow, changeModeToItemWindow, displayItem, getLucky, changeToBattleWindow, testForWeapons, 
    changeToGameOver, leaveBattle, sentientSlime };

