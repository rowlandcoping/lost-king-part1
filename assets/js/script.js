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
    hitText: "<p>The cat does a sort of triple-salco, tail flailing and sword flashing before landing an accurate strike,",
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
    <p>He just looks serenely back at you, as if it was nothing.</p>
    `,
    successTextOne: "<p>You strike the Fire Mage with your ",
    successTextTwo: "<br>As you strike the mage he stands as if rooted, eyes closed, softly chanting some kind of mantra.  Your aim though is true, </p>",
    hitText: "<p>The mage launches an orb of fire which arcs into your groin like a blazing fastball,",
    deathText: "<p>Finally, the mage's chants can keep him upright no more.  As he crumples to the floor, his corpse burns with a bright phosphorescent flame, leaving nothing but ashes.</p>",
    failText: "<p>The mage's form seems to flicker like a flame, and somehow you miss him.</p>",
    killedYouText: `<p>The final ball of burning fire was too much for you, and you collapse to your knees, helpless to avoid your destruction.</p>
    As your vision fills with flame and you black out from the pain, you can only think of one thing.<p>"What was my name?"</p><br>YOU ARE DEAD</p>
    `,
    missedText: "<p>You dodge at the last second and the fireball blazes past you, leaving a dark charcoal graze on your clothing.</p>",
    choices: `
    <li><button class="choice-button" id="choice-thirty-nine">What. Is. My. Name.</button></li>
    `
}
const giantSpider = {
    name: "Giant Spider",
    description: `
    <p>The terrifying Giant Spider is often found in dark caves in Fantasy-RPG games like this one.  This example has far too many eyes.</p>
    `,
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    image: "assets/images/enemies/giant-spider.webp",
    vulnerability:"sharp",
    score: 20,
    initialText: `
    <p>The spider hisses and chatters at you, and actually appears to be salivating.
    <br>You do not intend to be its next meal.</p>
    `,
    successTextOne: "<p>You whack the Giant Spider in its soft underbelly with your ",
    successTextTwo: "<br>It chatters, as if surprised it could be hurt, before coming at you again.</p>",
    hitText: "<p>The spider strikes out a spiny limb with incredible speed which catches you off guard,",
    deathText: `<p>With one last thrust you disembowel the creature; its innards spill across the cave floor in front of you.
    <br>This smells really bad.</p>
    `,
    failText: "<p>The giant sagging form of the spider side-steps with surprising speed, causing you to miss.</p>",
    killedYouText: `<p>As you reel from the latest blow the spider lurches forwards and sinks its fangs into your neck, completely incapacitating you</p>
    <p>The next few days are spent in agony, immobilised in a cocoon of silk yet still fully conscious, as your innards slowly dissolve.</p>
    <p>As you die half mad from the burning pain, you still don't remember who you once were.
    <br>YOU ARE DEAD</p>
    `,
    missedText: "<p>As the spider strikes, you pirouette in a half circle, narrowly avoiding its trailing claw.</p>",
    choices: `
    <li><button class="choice-button" id="choice-fourty-seven">That's probably the least fun I've had so far.</button></li>
    `
}
const bigBug = {
    name: "Giant Cockroach",
    description: `
    <p>Although the Giant Cockroach is not particularly dangerous, it is extremely alarming to come across.  Dog-sized and extremely difficult to kill, they are more than just a pest.</p>
    `,
    strength: 0,
    strItem: 0,
    skill: 0,
    defence: 0,
    health: 0,
    dItem: 0,
    image: "assets/images/enemies/giant-bug.webp",
    vulnerability:"",
    score: 10,
    initialText: "<p>The bug scuttles towards you with aggressive intent.  It is alarming.</p>",
    successTextOne: "<p>Hoping desperately to discourage it, you thwhack the cockroach with your ",
    successTextTwo: "<br>It skids away, right itself, then comes at you again, unperturbed.</p>",
    hitText: "<p>The cockroach lashes at you with its foreleg,",
    deathText: `<p>Finally, after your most recent blow, the cursed creature finally stops moving.  A growing pool of green ooze from it's midsection suggests this situation may be permanent.</p>
    `,
    failText: "<p>You strike at the beast but it is a weary blow, and it is able to evade you.</p>",
    killedYouText: `<p>The pace of the fight and the concentration required is taking its toll - the relentless creature will not die.</p>
    <p>Finally, as you stumble to your knees, it crushes your skull with its mandibles, putting you out of your misery.
    <br>YOU ARE DEAD</p>
    `,
    missedText: "<p>The roach reaches out with its legs to strike you again, but you are able to move to evade it.</p>",
    choices: `
    <li><button class="choice-button" id="choice-fifty-eight">I hate those things.</button></li>
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
        effect: "May help plugging something in.",
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
        effect:"Scares off bugs.",
        image: "assets/images/items/insect-repellent.webp",
        chance: 50,
        score: 10,
        description: "There may come a point in this adventure where you reach bug-infested climes, and you will be grateful for the day you decided to keep hold of this.  Orrrr... perhaps not."
    },
    {
        category: "object",
        adjective: "a lucky",
        name: "Four Leaf Clover",
        effect:"Said to bring good fortune.",
        image: "assets/images/items/clover.webp",
        chance: 65,
        score: 15,
        description:"Less gruesome than a rabbit's foot, and less effective than a gypsy's blessing, this item nevertheless is handy if you need to take your chances.  Which might actually happen a lot."
    },
    {
        category: "object",
        adjective: "a useless",
        name: "Stress Balls",
        effect:"Relieves anxiety.",
        image: "assets/images/items/balls.webp",
        chance: 80,
        score: 4,
        description: "There's nothing more stressful than playing a browser-based game, stuck in an endless and seemingly inescapable gameplay loop, wondering where it all might end. On reflection, you may need these."
    },
    {
        category: "object",
        adjective: "an intriguing",
        name: "Frayed Rope",
        effect:"A rope in name only.",
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
const specialObject = {
    name: "",
    image: "assets/images/items/glowing-orb.webp",
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
    spiderKill: false,
    caveExplore: false,
    rearEntry: false,
    cellOneSearched: false,
    cellTwoSearched: false,
    bugFight: false,
    prisonerSearched: false,
    prisonVisits: 0,
    catCourtVisits: 0,
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
    spiderKill: false,
    caveExplore: false,
    rearEntry: false,
    cellOneSearched: false,
    cellTwoSearched: false,
    bugFight: false,
    prisonerSearched: false,
    prisonVisits: 0,
    catCourtVisits: 0,
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
    thingsWhatYouveDone.spiderKill = thingsWhatYouveDoneInitial.spiderKill;
    thingsWhatYouveDone.caveExplore = thingsWhatYouveDoneInitial.caveExplore;
    thingsWhatYouveDone.rearEntry = thingsWhatYouveDoneInitial.rearEntry;
    thingsWhatYouveDone.cellOneSearched = thingsWhatYouveDoneInitial.cellOneSearched;
    thingsWhatYouveDone.cellTwoSearched = thingsWhatYouveDoneInitial.cellTwoSearched;
    thingsWhatYouveDone.bugFight = thingsWhatYouveDoneInitial.bugFight;
    thingsWhatYouveDone.prisonerSearched =thingsWhatYouveDoneInitial.prisonerSearched

    thingsWhatYouveDone.prisonVisits = thingsWhatYouveDoneInitial.prisonVisits;
    thingsWhatYouveDone.catCourtVisits = thingsWhatYouveDoneInitial.catCourtVisits;
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
        document.getElementById('lower-text').style.display = "none";
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
        document.getElementById('lower-text').style.display = "none";
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
        document.getElementById('lower-text').style.display = "none";
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
        document.getElementById('lower-text').style.display = "none";
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
    runAway: function runAway() {
        changeModeToMainWindow();
        thingsWhatYouveDone.catRunawayChance -= 5;
        thingsWhatYouveDone.catCaptureChance += 5;
        if (getLucky()) {
        mainCharacter.score += 2;
            document.getElementById('game-text').innerHTML = this.runAwayTextOne;
            document.getElementById('choices-section').innerHTML = this.runAwayChoices;
        } else {
            mainCharacter.score -= 2;
            let injuryRunAway = getRandomNumber(0,7);
            mainCharacterCurrent.health -= injuryRunAway;
            if (mainCharacterCurrent.health<=0) {
                mainCharacter.score -= 10;
                this.deathRunAway();
            } else {
                document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
                document.getElementById('game-text').innerHTML = this.runAwayTextTwo + injuryRunAway + this.runAwayTextThree;
                document.getElementById('choices-section').innerHTML = this.runAwayChoices;
            }
        }
    },
    runAwayTextOne: `
    <p>You sucessfully managed to dodge past the warrior's flailing blade, making rapidly for the corridor opposite</p>
    <p>The furry creatures all manage to fall over one another in a scene reminiscent of Back to The Future, and as the sounds of pursuit fade you slow to a trot, breathing hard.</p>
    `,
    runAwayTextTwo: `
    <p>As you try to dodge past the Cat Warrior, he catches you with the tip of his blade - you lose <span class = "red">
    `,
    runAwayTextThree: `
    </span> health.</p>
    <p>As you sprint up the broad corridor, they give up the pursiut almost immediately.  You don't know if this is a good thing or a bad thing.</p>
    `,
    runAwayChoices: `
    <li><button class="choice-button" id="choice-thirty-four">That was a close one.</button></li>
    `,
    deathRunAway: function deathRunAway() {
        changeToGameOver();
        document.getElementById('game-outcome').innerHTML = this.deathRunAwayText;
    },
    deathRunAwayText: `
    <p>As you attempt to run, the Cat Warrior's blade swings true and deals a killing blow</p>
    <p>As you sink to the floor, blood pumping, you reflect on how cute his little furry face is.
    <br>YOU ARE DEAD</p>
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
    eatBiscuits: function eatBiscuits(enemy, weapon) {
        if (mainCharacterCurrent.health + 20 <= mainCharacter.health) {
            mainCharacterCurrent.health += 20;
        } else {
            mainCharacterCurrent.health = mainCharacter.health
        }
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + "<p>You crunch down the cat biscuits, restoring <span class='green'>20</span> health.<br>Fortunately they taste much better than they smell.</p><p>The cats look on with much displeasure - that was a bit cruel to be fair.</p>";
        document.getElementById('potion-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('potion-item-name').innerHTML = "";
        document.getElementById('potion-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentObject)) {
            currentObject[item] = "";
        }
        mainCharacter.score +=10;
        enemyTurn(enemy, weapon);
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
        document.getElementById('choices-section').innerHTML = this.biscuitOptions;
    },
    catBiscuitsText: `
    <p>You offer out a handful of biscuits to the fearsome kitty - whilst at first he looks fearful and confused, he eventually pushes his nose into your hand and scoffs the lot.</p>
    <p>Stopping briefly to rub affectionately and alarmingly against your leg, both the warrior and his bretheren are soon high-tailing it back the way they came.</p>
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
        document.getElementById('game-section').style.background = this.background;
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
        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.orbPlaceText;
        document.getElementById('choices-section').innerHTML = this.orbPlaceOptions;
    },
    orbPlaceText: `
    <p>Almost as soon as you place the orb, you hear a loud click in the wall to your right. The orb glows brighter, illuminating the entire room with its golden rays, making you take a step back.</p>
    <p>You watch as a stone panel slides open... whatever lies beyond there is a light draught, and air that could almost be described as fresh.</p>
    <p>To say you've made it would be an understatement, since you have no idea where you are, but at least...</p>
    <p>Your thoughts freeze as you hear footsteps, and what can only be described as evil laughter.</p>
    `,
    orbPlaceOptions: `
    <li><button class="choice-button" id="choice-thirty-eight">Well of course... but... yeah well this can't be good...</button></li>
    `,
    sorcererFight: function sorcererFight() {
        let mageChance = getRandomNumber(0,100)
        if (mageChance <= 50) {
            changeModeToItemWindow();
            document.getElementById('lower-text').style.display = "none";
            document.getElementById('upper-text').innerHTML = this.iceQueenText;
            document.getElementById('choices-section').innerHTML = this.iceQueenChoices;
            setEnemyStats(iceQueen, 13,16,35,40);
        } else {
            changeModeToItemWindow();
            document.getElementById('lower-text').style.display = "none";
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
    backgroundTwo: "url('assets/images/backgrounds/top-stairs.webp') no-repeat left center",
    dangerStairsUp: function dangerStairsUp() {
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
    dangerStairsDown: function dangerStairsDown() {
        changeModeToMainWindow();
        mainCharacter.score += 5;
        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.stairsDownText;
        document.getElementById('choices-section').innerHTML = this.stairsClimbedChoices;
    },
    stairsDownText: `
    <p>The stairs before you appear to lead down to the cavern where you first encountered the cats.</p>
    <p>They look seriously unsafe, crumbling in all the wrong places and with the threat of a sheer drop below.</p>
    <p>It doesn't look like there are many other options though.</p>
    `,
    stairsChoices: `
    <li><button class="choice-button" id="choice-fourty-two">Of course, it's a flight of stairs not the darn Ice Queen!</button></li>
    <li><button class="choice-button" id="choice-thirty-two">No thank you, I'm scared.</button></li>
    `,
    stairsFallOutcome: function stairsFallOutcome() {
        let randomChance = getRandomNumber(0,100);     
        if (currentDefence.name ==="Purple Helmet") {
            randomChance += 10;
        }
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
            document.getElementById('game-section').style.background = this.backgroundTwo;
            document.getElementById('game-text').innerHTML = this.stairsClimbedText;
            document.getElementById('choices-section').innerHTML = this.stairsClimbedChoices;
        } else {
            let fallOutcome = this.stairsFallOutcome();
            if (fallOutcome === "death") {
                this.deathStairs();
            } else if (fallOutcome === "injury") {
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
    <p>You just about make it to the top of the stairs without incident.  Nothing to be worried about.</p>
    <p>You stand at the entrance to a cave.  You can smell the rank stale air from within, almost choking you with its pungency.</p>
    `,
    stairsClimbedChoices:`
    <li><button class="choice-button" id="choice-fourty-three">Enter the cave.</button></li>
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
        document.getElementById('game-section').style.background = this.background;
        if (getLucky()) {
            mainCharacter.score +=5;
            document.getElementById('game-text').innerHTML = this.stairsDescendedText + this.stairsDescendedTextCommon;
            document.getElementById('choices-section').innerHTML = this.stairsDescendedChoices;
        } else {
            let fallOutcome = this.stairsFallOutcome();
            if (fallOutcome === "death") {
                this.deathStairs();
            } else if (fallOutcome === "injury") {
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
    <li><button class="choice-button" id="choice-twenty-one">Enter the cavern.</button></li>
    `,
    deathStairs: function deathStairs() {
        mainCharacter.score -= 10;
        changeToGameOver();
        document.getElementById('game-outcome').innerHTML = this.deathStairsText;
    },
    deathStairsText:`
    <p>You lose your footing at just the wrong moment...</p>
    <p>Having been thrown off balance, you are powerless to prevent yourself from toppling over the steep canyon edge.</p>
    <p>You have little time to think before your brains are dashed out on the rocks below.
    <br>YOU ARE DEAD</p>
    `
}
const spiderRoom = {
    background: "url('assets/images/backgrounds/spider-cave.webp') no-repeat left center",
    backgroundTwo: "url('assets/images/backgrounds/cave-drop.webp') no-repeat left center",
    spiderRoom: function spiderRoom() {
        changeModeToMainWindow();
        if (thingsWhatYouveDone.spiderKill) {
            this.noSpider();
        } else {
        mainCharacter.score += 5;
        document.getElementById('game-section').style.background = this.background;
        document.getElementById('game-text').innerHTML = this.caveText;
        document.getElementById('choices-section').innerHTML = this.caveChoices;
        }
    },
    caveText: `
    <p>You enter the cave with caution - you've had enough surprises already today</p>
    <p>There's not much surprising about this scene though - cat bones litter the floor, and there is a worrying density of what appears to be spider's web.</p>
    <p>In, fact, you're not surprised at all when you hear a loud chittering noise emerge from the depths of the cave.</p>
    `,
    caveChoices: `
    <li><button class="choice-button" id="choice-fourty-five">Run Away!!</button></li>
    <li><button class="choice-button" id="choice-fourty-six">Let's get it over with.</button></li>
    `,
    spiderAttack: function spiderAttack() {
        changeModeToItemWindow();
        document.getElementById('lower-text').style.display = "none";
        document.getElementById('upper-text').innerHTML = this.spiderText;
        document.getElementById('choices-section').innerHTML = this.spiderChoices;
        setEnemyStats(giantSpider, 12,15,25,30);
    },
    spiderText: `
    <p>What emerges from the back of the cave is even more terrifying than perhaps you were prepared for.</p>
    <p>The spider is clearly enormous, having gorged iteslf over the years on errant cats.  Most of its body, aside from a sliver of underbelly, is covered with a tough-looking chitinous armour.</p>
    <p>Perhaps because of the perpetual darkness of the cave, it has far too many eyes for your liking.
    <br>And now you have to fight it.  Great. The perfect day.</p>
    `,
    spiderChoices: `
    <li><button class="choice-button" id="choice-fifty">I take it I can no longer run away?</button></li>
    `,
    spiderFight: function spiderFight(enemy) {
        changeToBattleWindow(enemy);
        thingsWhatYouveDone.spiderKill = true;
        thingsWhatYouveDone.courtGodChance += 15;
        thingsWhatYouveDone.courtHangChance -= 10;
        thingsWhatYouveDone.courtPrisonChance -= 5;
        document.getElementById('fists-button').firstChild.setAttribute("id", "spider-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "spider-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "spider-three");
        if (currentObject.name === "Insect Repellent") {
            document.getElementById('object-button-three').firstChild.setAttribute("id", "spider-four");
        }
        testForWeapons(enemy);
    },
    insectRepellant: function insectRepellant(enemy, weapon) {
        mainCharacter.score -=10;
        document.getElementById('battle-text-player').innerHTML = battleHeadingYou + `<p>You spray the Insect Repellent at the spider, emptying the bottle. It just blinks its eyes and looks at you incredulously, if a spider can even do that.<br>It was unlikely to work on a 6 ft high cat-eating spider.  Plus, you know, a spider isn't even an insect.`;
        document.getElementById('object-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('object-item-name').innerHTML = "";
        document.getElementById('object-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentObject)) {
            currentObject[item] = "";
        }
        enemyTurn(enemy, weapon);
    },
    noSpider: function nospider() {
        changeModeToMainWindow();
        document.getElementById('game-section').style.background = this.background;
        if (thingsWhatYouveDone.rearEntry === true) {
            document.getElementById('game-text').innerHTML = this.noSpiderRearText;
            document.getElementById('choices-section').innerHTML = this.noSpiderRearChoices;
        } else {
            document.getElementById('game-text').innerHTML = this.noSpiderText;
            document.getElementById('choices-section').innerHTML = this.noSpiderChoices;
        }
    },
    noSpiderText: `
    <p>There are so many cat bones.  Those little folk will surely be delighted the beast is slain.</p>
    <p>Towards the rear of the cave it widens out, and you can see a narrow apeture high up on the wall.</p>
    `,
    noSpiderChoices: `
    <li><button class="choice-button" id="choice-fourty-five">Leave the cave.</button></li>
    <li><button class="choice-button" id="choice-fourty-eight">Investigate the apeture.</button></li>
    `,
    noSpiderRearText: `
    <p>There are so many cat bones in here.  Those little folk will surely be delighted the beast is slain.</p>
    <p>Towards the rear of the cave you can see the exit to the car corridor high up on the wall.</p>
    `,
    noSpiderRearChoices: `
    <li><button class="choice-button" id="choice-fourty-five">Leave the cave.</button></li>
    <li><button class="choice-button" id="choice-fourty-eight">Go through to the rear of the cave.</button></li>
    `,
    caveBackExit: function caveBackExit() {
        if (thingsWhatYouveDone.rearEntry) {
            this.rearOfCaveRearEntry();
        }else{
            thingsWhatYouveDone.caveExplore = true;
            if (currentObject.name === "Frayed Rope") {
                document.getElementById('game-text').innerHTML = this.backExitText + this.backExitTextTwo;
                document.getElementById('choices-section').innerHTML = this.backExitChoices + this.backExitChoicesTwo;
            } else {
                document.getElementById('game-text').innerHTML = this.backExitText;
                document.getElementById('choices-section').innerHTML = this.backExitChoices;
            }
        }
    },
    backExitText: `
    <p>The apeture seems to have once been an exit, and sits high up on the wall at the back of the cave.  You have no way of reaching it or climbing up there.</p>
    <p>Whatever stairs used to lead up there are now rubble.</p>
    `,
    backExitTextTwo: `
    <p>You look down at the frayed length of rope you have found, and wonder if it might take your weight after all.</p>
    `,
    backExitChoices: `
    <li><button class="choice-button" id="choice-fourty-five">Leave the cave.</button></li>
    `,
    backExitChoicesTwo: `
    <li><button class="choice-button" id="choice-fourty-nine">Try using the rope to climb up.</button></li>
    `,
    ropeFallOutcome: function ropeFallOutcome() {
        let randomChance = getRandomNumber(0,100);     
        if (currentDefence.name ==="Purple Helmet") {
            randomChance += 10;
        }
        if (randomChance <= 5) {
            return "death";
        } else if (randomChance>5<=60) {
            return "injury";
        } else {
            return "fine";
        }
    },
    ropeBroke: function ropeBroke() {
        document.getElementById('object-item-image').innerHTML = `<img src="assets/images/items/box.png"></img>`
        document.getElementById('object-item-name').innerHTML = "";
        document.getElementById('object-list-item-one').innerHTML = "";
        for(let item of Object.keys(currentObject)) {
            currentObject[item] = "";
        }
        let fallOutcome = this.ropeFallOutcome();
            if (fallOutcome === "death") {
                mainCharacter.score -=20;
                this.deathRope();
            } else if (fallOutcome === "injury") {
                mainCharacter.score -=10;
                let injuryRope = getRandomNumber(0,7)
                mainCharacterCurrent.health -= injuryRope;
                if (mainCharacterCurrent.health<=0) {
                    this.deathRope();
                } else {
                    document.getElementById('main-health').innerHTML = mainCharacterCurrent.health;
                    document.getElementById('game-text').innerHTML = this.ropeBrokeCommon + this.ropeInjury + injuryRope + this.ropeInjuryTwo + this.ropeBrokeCommonTwo;
                    document.getElementById('choices-section').innerHTML = this.ropeFallChoices;
                }
            } else {
                mainCharacter.score -=10;
                document.getElementById('game-text').innerHTML = this.ropeBrokeCommon + this.ropeBrokeFine + this.ropeBrokeCommonTwo;
                document.getElementById('choices-section').innerHTML = this.ropeFallChoices;
            }
    },
    deathRope: function deathRope() {
        document.getElementById('final-score').innerHTML = mainCharacter.score;
        document.getElementById('gameover-page').style.display="flex";
        document.getElementById('game-page').style.display="none";
        document.getElementById('game-outcome').innerHTML = this.ropeBrokeCommon + this.deathRopeText;
    },
    ropeBrokeCommon: `
    <p>Unsurprisingly, the Frayed Rope is unable to take your weight.  It unravels and snaps and sends you tumbling to the ground.</p>
    `,
    deathRopeText: `
    <p>Unfortunately, you were near the top when it finally let go, and the awkward angle sent you head-first into the ground, cracking open your skull and spilling the contents.</p>
    <p>Congratulations, you have just discovered the dumbest way to die in the whole game.
    <br>YOU ARE DEAD.</p>
    `,
    ropeInjury: `
    <p>The fall causes you to lose <span class="red">
    `,
    ropeInjuryTwo: `
    </span> health points. Think yourself lucky.</p>
    `,
    ropeBrokeFine: `
    <p>Fortunately, you didn't get far and manage to land more or less on your feet.</p>
    <p>You must have been spending too much time around cats.</p>
    `,
    ropeBrokeCommonTwo: `
    <p>There is little more to do in this cave.</p>
    `,
    ropeFallChoices: `
    <li><button class="choice-button" id="choice-fourty-five">Leave the cave.</button></li>
    `,
    caveRearEntry: function caveRearEntry() {
        thingsWhatYouveDone.rearEntry = true;
        document.getElementById('game-section').style.background = this.backgroundTwo;
        if (thingsWhatYouveDone.caveExplore) {
            document.getElementById('game-text').innerHTML = this.rearEntryText;
            document.getElementById('choices-section').innerHTML = this.rearEntryChoices;
        } else {
            document.getElementById('game-text').innerHTML = this.rearEntryTextTwo;
            document.getElementById('choices-section').innerHTML = this.rearEntryChoices;
        }
        
    },
    rearEntryText: `
    <p>The narrow exit from the corridor leads to... nothing!</p>
    <p>You find yourself teetering on the precipice of a drop before realising it's not too high to lower yourself down, but you'd never get back up again.</p>
    <p>The room seems to be the spider's cave you have entered previously. You wonder that the spider never emerged at night and ran amok.</p>
    <p>Maybe it did...</p>
    `,
    rearEntryTextTwo: `
    <p>The narrow exit from the corridor leads to... nothing!</p>
    <p>You find yourself teetering on the precipice of a drop before realising it's not too high to lower yourself down... but you'd never get back up again.</p>
    <p>The room beyond the door is dark, and you can hear faint shuffling noises from below.</p>
    `,
    rearEntryChoices: `
    <li><button class="choice-button" id="choice-fifty-one">Lower yourself down.</button></li>
    <li><button class="choice-button" id="choice-sixty-two">Return to the corridor.</button></li>
    `,
    rearOfCaveRearEntry: function rearOfCaveRearEntry() {
        thingsWhatYouveDone.caveExplore = true;
        thingsWhatYouveDone.rearEntry = true;
        document.getElementById('game-section').style.background = this.background;
        if (thingsWhatYouveDone.spiderKill) {
            if (currentObject.name === "Frayed Rope") {
                document.getElementById('game-text').innerHTML = this.rearRearText + this.rearRearTextTwo;
                document.getElementById('choices-section').innerHTML = this.backExitChoices + this.backExitChoicesTwo;
            } else {
                document.getElementById('game-text').innerHTML = this.rearRearText;
                document.getElementById('choices-section').innerHTML = this.rearRearChoices;
            }
        } else {
            changeModeToItemWindow();
            document.getElementById('upper-text').innerHTML = this.spiderRearText;
            document.getElementById('choices-section').innerHTML = this.spiderRearChoices;
            setEnemyStats(giantSpider, 12,15,25,30);
        }
    },
    rearRearText: `
    <p>In the rear of the spider's den, your nostrils fill with the stench of the beast; it's decaying corpse lies nearby.</p>
    <p>You really don't want to be here any more.</p>
    <p>It would be impossible to climb up through the exit to the cat corridor, so there is only really one viable way out.</p>
    `,
    rearRearTextTwo: `
    <p>Unless... looking at the frayed rope you picked up earlier, you wonder if it would take your weight.</p>
    `,
    rearRearChoices: `
    <li><button class="choice-button" id="choice-fourty-five">Leave the cave.</button></li>
    `,
    rearRearChoicesTwo: `
    <li><button class="choice-button" id="choice-fourty-nine">Try using the rope to climb up.</button></li>
    `,
    spiderRearText: `
    <p>As you drop to the ground, you come face to face with multiple sets of eyes.  Far too many eyes in fact.</p>
    <p>You barely have enough time to leap clear and take up your guard before the Giant Spider can sink its fangs into you.</p>
    `,
    spiderRearChoices: `
    <li><button class="choice-button" id="choice-fifty">And so it continues.</button></li>
    `
}
const catDining = {
    background: "url('assets/images/backgrounds/cat-dining-full.webp') no-repeat left center",
    backgroundTwo: "url('assets/images/backgrounds/cat-dining-empty.webp') no-repeat left center",
    catDining: function catDining() {
        changeModeToMainWindow();
        if (thingsWhatYouveDone.catGod === true) {
            document.getElementById('game-section').style.background = this.background;
            mainCharacter.score += 5;
            if (thingsWhatYouveDone.catCourtVisits === 0) {
                document.getElementById('game-text').innerHTML = this.diningCommonText + this.diningGodTextOne;
                document.getElementById('choices-section').innerHTML = this.diningGodChoicesOne;
            } else {
                document.getElementById('game-text').innerHTML = this.diningCommonText + this.diningGodTextTwo;
                document.getElementById('choices-section').innerHTML = this.diningGodChoicesTwo;
            }
        } else if (thingsWhatYouveDone.catsKilled<5) {
            mainCharacter.score += 5;
            document.getElementById('game-section').style.background = this.background;
            document.getElementById('game-text').innerHTML = this.diningCommonText + this.diningCaptureText;
            document.getElementById('choices-section').innerHTML = this.diningCaptureChoices;
        } else {
            mainCharacter.score += 50;
            specialObject.name = "Glowing Orb";
            document.getElementById('game-section').style.background = this.backgroundTwo;
            document.getElementById('game-text').innerHTML = this.diningEmptyText;
            document.getElementById('choices-section').innerHTML = this.diningEmptyChoices; 
        }
    },
    diningCommonText: `
    <p>After following the corridor for a short time, you abruptly stumble out into a large open space.</p>
    <p>The room is full of the cat warriors in full armor, seemingly engaged in a grand banquet</p>
    `,
    diningGodTextOne: `
    <p>Immidiately on spotting you, the nearest warriors drop to their knees; before long the entire room is prostrate in supplication.
    <br>You are their God.</p>
    <p>The creatures surround you in what seems to be a parade, and start marching towards the hall's grand entrance.  <br>Where you are going, you could not say.</p>
    `,
    diningGodTextTwo: `
    <p>This banquet has been going on for some time now.</p>
    <p>A particularly friendly looking creature seems to wave cheerily at you.  They seem to have become a lot more comfortable with a Deity in their midst.
    <br>Either that or the day long drinking and eating binge has left them considerably the worse for wear.</p>
    `,
    diningGodChoicesOne: `
    <li><button class="choice-button" id="choice-thirty">Show me the way, my cat bretheren!</button></li>
    `,
    diningGodChoicesTwo: `
    <li><button class="choice-button" id="choice-fifty-three">Continue along the corridor.</button></li>
    <li><button class="choice-button" id="choice-twenty-three">Return to the Cat Cavern.</button></li>
    `,
    diningCaptureText: `
    <p>When the nearest cat senses your presence, they sound a general alarm</p>
    <p>Within seconds, the bristling points of multiple cat swords are being held at your through.</p>
    <p>A guard is arranged, and soon you are being frogmarched towards the hall's grand entrance.</p>
    `,
    diningCaptureChoices: `
    <li><button class="choice-button" id="choice-thirty">This surely cannot be good.</button></li>
    `,
    diningEmptyText: `
    <p>You have not been following the corridor for long before you stumble into a room where it looks like a great feast has been taking place...
    <br>...but there is nobody feasting.  Have the cats abandoned their home, or just locked themselves away?</p>
    <p>What seems to be the hall's grand entrance is closed, the door locked tight.</p>
    <p>In the middle of the room, among the detruitis, is a glowing golden orb. Lost in the melee?
    <br>Without a second's pause for debate, you grab it tight.  You feel like you will be needing this.</p>
    `,
    diningEmptyChoices: `
    <li><button class="choice-button" id="choice-fifty-three">Continue along the corridor.</button></li>
    <li><button class="choice-button" id="choice-twenty-three">Go back to the cat cavern.</button></li>
    `
}
const catCourt = {
    background: "url('assets/images/backgrounds/cat-court.webp') no-repeat left center",
    catCourt: function catCourt(){
        changeModeToMainWindow();
        thingsWhatYouveDone.catCourtVisits +=1
        mainCharacter.score += 5;
        document.getElementById('game-section').style.background = this.background;
        document.getElementById('game-text').innerHTML = this.catCourtText;
        document.getElementById('choices-section').innerHTML = this.catCourtChoices;
    },
    catCourtText: `
    <p>It has to be said that not much surprises you any more.
    <br>The sight of the Royal Court of the Cat Creatures was something nothing on your travels could have prepared you for.</p>
    <p>Amidst the opulence and pagentry sit their Magnificent Furrinesses, the Cat King and Cat Queen.</p>
    <p>The room goes silent.</p>
    <p>It seems the warriors are expecting some kind of a judgment.</p>
    `,
    catCourtChoices: `
    <li><button class="choice-button" id="choice-fifty-four">Wait, a what now?</button></li>
    `,
    catJudgment: function catDecision(chanceOne, chanceTwo, chanceThree) {
        let randomChance = getRandomNumber(0,100);
        if (randomChance <= chanceOne){
            return "god";
        } else if (randomChance <= chanceTwo && randomChance > chanceOne){
            return "death";
        } else if (randomChance <= chanceThree && randomChance > chanceTwo) {
            return "prison";
        }
    },
    catCourtJudgment: function catCourtJudgment() {
        if (thingsWhatYouveDone.catGod) {
            this.courtGod();
        } else {
            let courtResult = this.catJudgment(thingsWhatYouveDone.courtGodChance, thingsWhatYouveDone.courtHangChance + thingsWhatYouveDone.courtGodChance,
            thingsWhatYouveDone.courtPrisonChance + thingsWhatYouveDone.courtHangChance + thingsWhatYouveDone.courtGodChance);
            if (courtResult === "god") {
                this.courtGod();
            } else if (courtResult === "death") {
                this.courtDeath();
            } else if (courtResult === "prison") {
                this.courtPrison();
            }
        }
    },
    itemGift: function itemGift() {
        let giftSelect = getRandomNumber(0,100);
        if (giftSelect<=50) {
            return "loin";
        } else {
            return "helmet";
        }
    },
    courtGod: function courtGod() {
        thingsWhatYouveDone.catGod = true;
        document.getElementById('character-sheet-name').innerHTML = mainCharacter.name + "<br><em>Cat Deity</em>";
        changeModeToItemWindow();
        if (this.itemGift()==="loin") {
            foundItemInfo.category = characterDefence[1].category;
            foundItemInfo.name = characterDefence[1].name;
            foundItemInfo.defence = characterDefence[1].defence;
            foundItemInfo.resist = characterDefence[1].resist;
            foundItemInfo.image = characterDefence[1].image;
            foundItemInfo.playerImage = characterDefence[1].playerImage
            foundItemInfo.score = characterDefence[1].score;
            foundItemInfo.description = characterDefence[1].description;
            displayItem();
            document.getElementById('upper-text').innerHTML = "<h3>You have been gifted a Golden Loin Cloth</h3>";
        } else {
            foundItemInfo.category = characterDefence[4].category;
            foundItemInfo.name = characterDefence[4].name;
            foundItemInfo.defence = characterDefence[4].defence;
            foundItemInfo.resist = characterDefence[4].resist;
            foundItemInfo.image = characterDefence[4].image;
            foundItemInfo.playerImage = characterDefence[4].playerImage
            foundItemInfo.score = characterDefence[4].score;
            foundItemInfo.description = characterDefence[4].description;
            displayItem();
            document.getElementById('upper-text').innerHTML = "<h3>You have been gifted a Purple Helmet</h3>";
        }
        document.getElementById('lower-text').innerHTML = this.catGodText;
        document.getElementById('choices-section').innerHTML = this.catGodChoices;
    },
    catGodText: `
    <p>The noble Cat King turns his paw to face upwards, and the cats all around you fall to their knees in supplication.</p>
    <p>It's scarcely believable, but it seems that they believe you to be some kind of a deity!</p>
    <p>Before you can really grasp what is going on, they present you with a magical item.</p>
    `,
    catGodChoices: `
    <li><button class="choice-button" id="choice-fifty-five">Keep the item.</button></li>
    <li><button class="choice-button" id="choice-fifty-six">Refuse the item.</button></li>
    `,
    checkGiftItem: function checkGiftItem() {
        if (currentDefence.name) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentDefence.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-gift"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-gift");
        } else {
            this.keepGiftItem();
        }
    },
    keepGiftItem: function keepGiftItem() {
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        mainCharacter.score += foundItemInfo.score;
        storeItem();
        this.catCourtGodExit();
    },
    catCourtGodExit: function catCourtGodExit() {
        changeModeToMainWindow();
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        specialObject.name = "Glowing Orb";
        mainCharacter.score += 50;
        document.getElementById('game-text').innerHTML = this.catExitText;
        document.getElementById('choices-section').innerHTML = this.catExitChoices;
    },
    catExitText: `
    <p>Finally, one of the royal minions advances towards you, carrying a glowing golden orb on a velvet cusion.</p>
    <p>It is clear they view this as one of the trappings of your Godhood.
    <br>You take the object with much reverence. You feel like you may need it later.</p>
    <p>Once you have claimed the orb, the cats begin sheparding you towards the exit doors.
    <br>It appears that even Gods can out-stay their welcome.</p>
    `,
    catExitChoices: `
    <li><button class="choice-button" id="choice-fifty-seven">Until the next time, my children.</button></li>
    `,
    courtDeath: function courtDeath() {
        mainCharacter.score -= 20;
        changeToGameOver();
        document.getElementById('game-outcome').innerHTML = this.deathCatpostText;
    },
    deathCatpostText: `
    <p>The Cat King appears to frown, and turns his paw to face downwards.
    <br>Shocked cat sounds echo around the hall.</p>
    <p>Soon you find yourself surrounded by cat guards in full plate armor, and marched to the corner of the hall.
    <br>There you see looming before you a large and elaborate scratching post.</p>
    <p>Rope is tied around your ankles, and at that point a terrible realisation.</p>
    <p>You spend the rest of your agonising days tied to the top of the pole, used by cat warriors and royalty as a living plaything.</p>
    <p>It is weeks before you finally succumb to your injuries - blinded, bleeding from wounds all over your body, and none the wiser as to who you really are.
    <br>YOU ARE DEAD</p>
    `,
    courtPrison: function courtPrison() {
        changeModeToMainWindow();
        document.getElementById('game-text').innerHTML = this.catPrisonText;
        document.getElementById('choices-section').innerHTML = this.catPrisonChoices;
    },
    catPrisonText: `
    <p>On seeing you brought before them, the Cat King becomes animated, mewling angrily at his subordinates
    <br>It seems that somebody has made an error</p>
    <p>Finally he gestures toward the guards, and they gather around and begin escorting you towards the back of the Great Hall.</p>
    `,
    catPrisonChoices: `<li><button class="choice-button" id="choice-fifty-eight">Things could be worse, I guess...</button></li>`
}
const catCorridor = {
    background: "url('assets/images/backgrounds/cat-corridor-one.webp') no-repeat left center",
    backgroundTwo: "url('assets/images/backgrounds/cat-corridor-two.webp') no-repeat left center",
    catCorridor: function catCorridor() {
        mainCharacter.score += 5;
        document.getElementById('game-section').style.background = this.background;
        document.getElementById('choices-section').innerHTML = this.catCorridorChoices;
            if  (thingsWhatYouveDone.prisonVisits === 0) {
        document.getElementById('game-text').innerHTML = this.catCorridorTextOne;
        } else {
            document.getElementById('game-text').innerHTML = this.catCorridorTextTwo;
        }        
    },
    catCorridorTextOne: `
    <p>You find yourself in a good-sized corridor well lit by lanterns.  High in the wall you see a small barred window you could -just- about fit through.</p>
    <p>There is no way you can reach it though.</p>
    <p>From one direction you can hear cat noises and the sound of cat merriment.
    <br>In the other direction the lamps seem to peter out.  It is the road less travelled.</p>
    `,
    catCorridorTextTwo: `
    <p>You find yourself in a good-sized corridor well lit by lanterns. High in the wall you see the window to the prison cell.</p>
    <p>There is no way you can reach it from here though.
    <br>Why would you even want to??</p>
    <p>From one direction you can hear cat noises and the sound of cat merriment.
    <br>In the other direction the lamps seem to peter out.  It is the road less travelled.</p>
    `,
    catCorridorChoices: `
    <li><button class="choice-button" id="choice-sixty">Head away from the cat sounds.</button></li>
    <li><button class="choice-button" id="choice-thirty-four">Head towards the cat sounds.</button></li>
    `,
    catCorridorTwo: function catCorridorTwo() {
        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.catCorridorTwoText;
        document.getElementById('choices-section').innerHTML = this.catCorridorTwoChoices;
    },
    catCorridorTwoText: `
    <p>The corridor narrows, then seems almost to shrink.  There are no longer lanterns on the wall, and the darkness begins to close in again.</p>
    <p>Eventually it ends with a narrow doorway through which you reckon you can just about fit.</p>
    `,
    catCorridorTwoChoices: `
    <li><button class="choice-button" id="choice-sixty-one">Investigate the doorway.</button></li>
    <li><button class="choice-button" id="choice-thirty-four">Turn around and head back the other way, towards the cat sounds.</button></li>
    `
}
document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
const catPrison = {
    background: "url('assets/images/backgrounds/cat-prison.webp') no-repeat left center",
    backgroundTwo: "url('assets/images/backgrounds/prison-cells.webp') no-repeat left center",
    prisonSearchOptions: function prisonSearchOptions() {
        if (thingsWhatYouveDone.prisonerSearched) {
            if (thingsWhatYouveDone.cellOneSearched && thingsWhatYouveDone.cellTwoSearched) {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesFour;
            } else if (thingsWhatYouveDone.cellOneSearched) {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesThree + this.catPrisonChoicesFour;
            } else if (thingsWhatYouveDone.cellTwoSearched) {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesTwo + this.catPrisonChoicesFour;
            } else {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesTwo + this.catPrisonChoicesThree + this.catPrisonChoicesFour;
            }
        } else {
            if (thingsWhatYouveDone.cellOneSearched && thingsWhatYouveDone.cellTwoSearched) {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesOne + this.catPrisonChoicesFour;
            } else if (thingsWhatYouveDone.cellOneSearched) {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesOne + this.catPrisonChoicesThree + this.catPrisonChoicesFour;
            } else if (thingsWhatYouveDone.cellTwoSearched) {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesOne + this.catPrisonChoicesTwo + this.catPrisonChoicesFour;
            } else {
                document.getElementById('choices-section').innerHTML = this.catPrisonChoicesOne + this.catPrisonChoicesTwo + this.catPrisonChoicesThree + this.catPrisonChoicesFour;
            }
        }
    },
    catPrison: function catPrison() {
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        changeModeToMainWindow();
        document.getElementById('game-section').style.background = this.background;
        if (thingsWhatYouveDone.prisonVisits === 0) {
            document.getElementById('game-text').innerHTML = this.catPrisonTextOne;
        } else {
            document.getElementById('game-text').innerHTML = this.catPrisonTextTwo;
        }
        this.prisonSearchOptions();        
    },
    catPrisonTextOne: `
    <p>You find yourself in a prison cell.  It wouldn't be so bad, if it weren't for the putrid rotting corpse you're having to share the room with.</p>
    <p>It looks like a multi-purpose facility, with three cells linked by adjoining doors.  All the adjoining doors to your are open for now, suggesting you are the only one here.
    <br>It seems like they don't get too many guests down here.</p>
    <p>A small narrow window is within arm's reach.  You may or may not fit through it.</p>
    `,
    catPrisonTextTwo: `
    <p>You find yourself back in the prison cell.</p>
    <p>Nobody has replaced the window bar. It's beyond you how the cats seem to be so baffled by your escape.
    <br>Perhaps they hadn't factored in your height.</p>
    <p>The corpse is still in here.  If anything its rictus grin is growing ever wider.</p>
    `,
    catPrisonChoicesOne: `
    <li><button class="choice-button" id="choice-sixty-two">Search the dead prisoner.</button></li>
    `,
    catPrisonChoicesTwo: `
    <li><button class="choice-button" id="choice-sixty-three">Search the first adjoining cell.</button></li>
    `,
    catPrisonChoicesThree: `
    <li><button class="choice-button" id="choice-sixty-four">Search the second adjoining cell.</button></li>
    `,
    catPrisonChoicesFour: `
    <li><button class="choice-button" id="choice-sixty-five">See if you can get out of the window.</button></li>
    `,
    climbOutWindow: function climbOutWindow() {
        if (thingsWhatYouveDone.prisonVisits === 0) {
            document.getElementById('game-text').innerHTML = this.windowTextOne;
        } else {
            document.getElementById('game-text').innerHTML = this.windowTextTwo;
        }
        thingsWhatYouveDone.prisonVisits += 1;
        mainCharacter.score += 10;
        thingsWhatYouveDone.courtGodChance +=2;
        thingsWhatYouveDone.courtPrisonChance +=3;
        thingsWhatYouveDone.courtHangChance -=5;
        document.getElementById('choices-section').innerHTML = this.windowChoices;
    },
    windowTextOne: `
    <p>You reach up and grab the single metal bar blocking your exit, and try to use it to haul yourself up to the window at eye-level, to see what is beyond.
    <br>As you do so, the bar comes away in your hand.</p>
    <p>It seems security is not a cat strong point.</p>
    <p>Even so, it is no small matter to pull and shimmy your aching and distraught frame through the tiny hole in the wall that remains.</p>
    `,
    windowTextTwo: `
    <p>As before, you shimmy your aching and distraught frame through the tiny hole in the wall and out into the corridor beyond.</p>
    <p>You don't really want to be doing this too often, you reflect.</p>
    `,
    windowChoices: `
    <li><button class="choice-button" id="choice-fifty-seven">It's called the dungeon diet...</button></li>
    `,
    searchCorpse: function searchCorpse() {
        changeModeToItemWindow();
        document.getElementById('game-section').style.background = this.background;
        thingsWhatYouveDone.prisonerSearched = true;
        foundItemInfo.category = characterDefence[0].category;
        foundItemInfo.adjective = characterDefence[0].adjective;
        foundItemInfo.name = characterDefence[0].name;
        foundItemInfo.defence = characterDefence[0].defence;
        foundItemInfo.resist = characterDefence[0].resist;
        foundItemInfo.image = characterDefence[0].image;
        foundItemInfo.playerImage = characterDefence[0].playerImage
        foundItemInfo.score = characterDefence[0].score;
        foundItemInfo.description = characterDefence[0].description;
        displayItem();
        document.getElementById('lower-text').innerHTML = this.corpseSearchText;
        document.getElementById('choices-section').innerHTML = this.corpseSearchOptions;    
    },
    corpseSearchText: `
    <p>The corpse is wearing a rather tasteless furry gilet with matching short-shorts.</p>
    <p>You clean it off as best you can.  It doesn't offer much protection from a blade, but it looks cosy.</p>
    `,
    corpseSearchOptions: `
    <li><button class="choice-button" id="choice-sixty-nine">Keep the Furry Gilet.</button></li>
    <li><button class="choice-button" id="choice-fifty-eight">Discard the foul-smelling rags.</button></li>
    `,
    checkGilet: function checkGilet() {
        if (currentDefence.name) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentDefence.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-gilet"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-gilet");
        } else {
            this.keepGilet();
        }
    },
    keepGilet: function keepGilet() {
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        mainCharacter.score += foundItemInfo.score;
        storeItem();
        this.catPrison();
    },
    bugChance: function bugChance() {
        let bugLikelihood = getRandomNumber(0,100);
        if (bugLikelihood<=50) {
            return true;
        } else {
            return false;
        }
    },
    firstCellSearch: function firstCellSearch() {
        document.getElementById('game-section').style.background = this.backgroundTwo;
        changeModeToItemWindow();
        if (!thingsWhatYouveDone.bugKill) {
            if (this.bugChance()) {
                document.getElementById('game-section').style.background = this.backgroundTwo;
                document.getElementById('lower-text').style.display = "none";
                document.getElementById('upper-text').innerHTML = this.bigBugText;
                document.getElementById('choices-section').innerHTML = this.bigBugChoices;
                setEnemyStats(bigBug, 8,10,25,30,0,0,5,0,"fire");
                thingsWhatYouveDone.bugKill = true;
            } else {
                searchForItem(10, 80, 90, 100);
                document.getElementById('lower-text').innerHTML = this.cellSearch;
                document.getElementById('choices-section').innerHTML = this.cellSearchOptions;
                thingsWhatYouveDone.cellOneSearched = true;
            }
        } else {
            searchForItem(10, 80, 90, 100);
            document.getElementById('lower-text').innerHTML = this.cellSearch;
            document.getElementById('choices-section').innerHTML = this.cellSearchOptions;
            thingsWhatYouveDone.cellOneSearched = true;
        }
    },
    secondCellSearch: function secondCellSearch() {
        document.getElementById('game-section').style.background = this.backgroundTwo;
        changeModeToItemWindow();
        if (!thingsWhatYouveDone.bugKill) {
            if (this.bugChance()) {
                document.getElementById('game-section').style.background = this.backgroundTwo;
                document.getElementById('lower-text').style.display = "none";
                document.getElementById('upper-text').innerHTML = this.bigBugText;
                document.getElementById('choices-section').innerHTML = this.bigBugChoices;
                setEnemyStats(bigBug, 6,8,25,30,0,0,5,0,"fire");
                thingsWhatYouveDone.bugKill = true;
            } else {
                searchForItem(10, 20, 90, 100);
                document.getElementById('lower-text').innerHTML = this.cellSearch;
                document.getElementById('choices-section').innerHTML = this.cellSearchOptions;
                thingsWhatYouveDone.cellTwoSearched = true;
            }
        } else {
            searchForItem(10, 20, 90, 100);
            document.getElementById('lower-text').innerHTML = this.cellSearch;
            document.getElementById('choices-section').innerHTML = this.cellSearchOptions;
            thingsWhatYouveDone.cellTwoSearched = true;
        }
    },
    cellSearch: `
    <p>Although you didn't hold out much hope, you eventually manage to find a discarded item worth keeping in the corner of the cell</p>
    <p>These cats really aren't ones for housekeeping.</p>    
    `,
    cellSearchOptions: `
    <li><button class="choice-button" id="choice-seventy">Keep the item.</button></li>
    <li><button class="choice-button" id="choice-fifty-eight">Discard the item.</button></li>
    `,
    checkCellItem: function checkCellItem() {
        if (foundItemInfo.category === currentWeapon.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentWeapon.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-cell"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-cell"); 
        } else if (foundItemInfo.category === currentDefence.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentDefence.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-cell"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-cell"); 
        } else if (foundItemInfo.category === currentPotion.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentPotion.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-cell"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-cell"); 
        } else if (foundItemInfo.category == currentObject.category) {
            document.getElementById('transparency').style.opacity = 0.3;
            document.getElementById('alert-page').style.display = "block";
            document.getElementById('item-details').innerHTML = currentObject.name;
            document.getElementById('keep-new').firstChild.setAttribute("id", "keep-cell"); 
            document.getElementById('keep-old').firstChild.setAttribute("id", "lose-cell"); 
        } else {
            this.keepCellItem();
        }
    },
    keepCellItem: function keepCellItem() {
        document.getElementById('transparency').style.opacity = 1;
        document.getElementById('alert-page').style.display = "none";
        mainCharacter.score += foundItemInfo.score;
        storeItem();
        this.catPrison();
    },
    bigBugText: `
    <p>As you rummage around in the dark space of the unlit cell, you catch movement in the corner of your eye.</p>
    <p>Looking, you see a cockroach the size of a Basset Hound.
    <br>You don't have time to be alarmed before it is upon you.</p>
    `,
    bigBugChoices: `
    <li><button class="choice-button" id="choice-sixty-seven">I've seen bigger...</button></li>
    `,
    bigBugFight: function bigBugFight(enemy) {
        changeToBattleWindow(enemy);
        document.getElementById('fists-button').firstChild.setAttribute("id", "bug-one"); 
        document.getElementById('weapon-button').firstChild.setAttribute("id", "bug-two"); 
        document.getElementById('potion-button').firstChild.setAttribute("id", "bug-three");
        if (currentObject.name === "Insect Repellent") {
            document.getElementById('object-button-three').firstChild.setAttribute("id", "bug-four");
        }
        testForWeapons(enemy);
    },
    insectRepellentBug: function insectRepellantBug() {
        changeModeToMainWindow();
        document.getElementById('game-section').style.background = this.backgroundTwo;
        document.getElementById('game-text').innerHTML = this.insectRepellantBugText;
        this.prisonSearchOptions();
    },
    insectRepellantBugText: `
    <p>You spray the bottle of Insect Repellent until it empties, more in hope than expectation</p>
    <p>The dog-sized, near indestructible insect pauses, wipes its head with its forelegs, then disappears through a large crack.
    <br>You HAVE to find more of this stuff.</p>
    <p>Confident there will be no more bugs in the area, you can continue your search.</p>
    `
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
    document.getElementById('battle-text-enemy').style.display = "none";
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
        let foundItem = valueSelector[0];
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
    if (currentObject.name === "Insect Repellent" && (enemy.name === "Giant Spider" || enemy.name === "Giant Cockroach")) {
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
        return roundDamage;
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
        let roundDamage = Math.floor(roundResult * playerTestResistances(enemy));
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
    } 
}
function enemyTurn(enemy, weapon) {
    let roundResult = nextRound(enemy, weapon);
    if (document.getElementById('battle-text-enemy').style.display === "none") {
        document.getElementById('battle-text-enemy').style.display = "block";
    }
    if (roundResult === "fail") {
        document.getElementById('battle-text-enemy').innerHTML = battleHeadingThem + enemy.missedText;
        continueFight(enemy);
    } else {
        let roundDamage = Math.floor(roundResult * enemyTestResistances(enemy))
        roundDamage = Math.floor(roundDamage);
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
    window.localStorage.clear();
    thingsReset();
    specialObject.name = "";
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
    window.localStorage.clear();
    thingsReset();
    specialObject.name = "";
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
//run away option
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-twenty-nine"); 
    if(target){
        catCavern.runAway();
    }
});
//cat god option
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-thirty"); 
    if(target){
        catCourt.catCourt();
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
        catCavern.eatBiscuits(catWarrior, "enemy");
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
        dangerStairs.dangerStairsUp();
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
    const target = e.target.closest("#choice-fourty-three"); 
    if(target){
        spiderRoom.spiderRoom();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-four"); 
    if(target){
        dangerStairs.descendStairs();
    }
});
//ROOM 6 - SPIDER ROOM

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-five"); 
    if(target){
        dangerStairs.dangerStairsDown();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-six"); 
    if(target){
        spiderRoom.spiderAttack();
    }
});
//fight with spider
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty"); 
    if(target){
        spiderRoom.spiderFight(giantSpider);
    }
});
//spider fight handlers
document.addEventListener("click", function(e){
    const target = e.target.closest("#spider-one"); 
    if(target){
        playerTurn(giantSpider, "fists");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#spider-two"); 
    if(target){
        playerTurn(giantSpider, "weapon");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#spider-three"); 
    if(target){
        potionRound(giantSpider, "enemy");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#spider-four"); 
    if(target){
        spiderRoom.insectRepellant(giantSpider, "enemy");
    }
});
//post fight option
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-seven"); 
    if(target){
        spiderRoom.noSpider();
    }
});
//back of cave
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-eight"); 
    if(target){
        spiderRoom.caveBackExit();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fourty-nine"); 
    if(target){
        spiderRoom.ropeBroke();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-two"); 
    if(target){
        catCorridor.catCorridorTwo();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-one"); 
    if(target){
        spiderRoom.rearOfCaveRearEntry();
    }
});

//ROOM 6 - CAT DINING ROOM
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-three"); 
    if(target){
        catCorridor.catCorridor();
    }
});
//ROOM 7 - CAT COURT
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-four"); 
    if(target){
        catCourt.catCourtJudgment();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#keep-gift"); 
    if(target){
        catCourt.keepGiftItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-five"); 
    if(target){
        catCourt.checkGiftItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-six"); 
    if(target){
        catCourt.catCourtGodExit();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#lose-gift"); 
    if(target){
        catCourt.catCourtGodExit();
    }
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-seven"); 
    if(target){
        catCorridor.catCorridor();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-fifty-eight"); 
    if(target){
        catPrison.catPrison();
    }
});


// ROOM 8 - CAT CORRIDOR
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty"); 
    if(target){
        catCorridor.catCorridorTwo();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-one"); 
    if(target){
        spiderRoom.caveRearEntry();
    }
});

// ROOM 9 - CAT PRISON
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-two"); 
    if(target){
        catPrison.searchCorpse();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-three"); 
    if(target){
        catPrison.firstCellSearch();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-four"); 
    if(target){
        catPrison.secondCellSearch();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-five"); 
    if(target){
        catPrison.climbOutWindow();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-nine"); 
    if(target){ 
        catPrison.checkGilet();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#keep-gilet"); 
    if(target){ 
        catPrison.keepGilet();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#lose-gilet"); 
    if(target){
        catPrison.catPrison();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-six"); 
    if(target){
        catPrison.keepGilet();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-sixty-seven"); 
    if(target){
        catPrison.bigBugFight(bigBug);
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#choice-seventy"); 
    if(target){ 
        catPrison.checkCellItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#keep-cell"); 
    if(target){ 
        catPrison.keepCellItem();
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#lose-cell"); 
    if(target){
        catPrison.catPrison();
    }
});

//cockroach battle listeners
document.addEventListener("click", function(e){
    const target = e.target.closest("#bug-one"); 
    if(target){
        playerTurn(bigBug, "fists");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#bug-two"); 
    if(target){
        playerTurn(bigBug, "weapon");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#bug-three"); 
    if(target){
        potionRound(bigBug, "enemy");
    }
});
document.addEventListener("click", function(e){
    const target = e.target.closest("#bug-four"); 
    if(target){
        catPrison.insectRepellentBug();
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

