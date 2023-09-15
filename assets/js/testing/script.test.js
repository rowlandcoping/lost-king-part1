/**
 * @jest-environment jsdom
 */
let { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
   pageOne, optionsOne, gameOverGiveUp, giveUp, findItemType, characterWeapons,characterDefence, characterPotions, 
   characterObjects, searchForItem, foundItemInfo, setEnemyStats, ragnarTheHorrible, mainCharacterCurrent, 
   itemStorage, currentWeapon, currentDefence, currentPotion, currentObject, thingsWhatYouveDone, playerTestResistances, 
   enemyTestResistances, ragnarFight, continueFight, potionRound, enemyTurn, hitSuccess, initialDamage,
   damageResist, storeItem, changeModeToMainWindow, changeModeToItemWindow, openEyes, optionsTwoFirst, optionsTwoSecond,
   pageTwo, knowMyName, pageThreeFirst, pageThreeCommon, optionsThree, pageThreeSecondOne, pageThreeSecondTwo,
   pageThreeThird, fightingTalk, nameUnknown, displayItem, firstSearch, optionsFour, pageFour, ignoreFirstItem,
   rangarFightChance, pageFiveSecond, pageFiveCommon, pageFiveFirst, optionsFiveFirst, optionsFiveSecond, 
   keepFirstItem, getLucky, pageSixFirst, pageSixCommon, pageSixSecond, optionsSix, pageSixThird,
   braceYourself, testLuck, changeToBattleWindow, testForWeapons, changeToGameOver, leaveBattle } = require("../script.js");

beforeAll(() => {
   let fs = require("fs");
   let fileContents = fs.readFileSync("index.html", "utf-8");
   document.open();
   document.write(fileContents);
   document.close();
});

// HELPER FUNCTIONS TESTING

describe("random number generator works as expected", ()=>{
   test("should return random integer between 1 and 5", () =>{
      expect(getRandomNumber(1,5)).toBeGreaterThanOrEqual(1);
      expect(getRandomNumber(1,5)).toBeLessThanOrEqual(5);
   })
});
describe("luck test works as expected", ()=>{
   test("should return true based on inputted values", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(10/20);
      mainCharacterCurrent.luck = 10;
      expect(getLucky()).toEqual(true);
   })
});
describe("switch to main game window works as expected", ()=>{
   beforeAll(()=>{
      changeModeToMainWindow();
   }),
   test("image-section element is hidden", () =>{
      expect(document.getElementById('image-section').style.display).toBe("none");
   }),
   test("game-text element is displayed", () =>{
      expect(document.getElementById('game-text').style.display).toBe("block");
   }),
   test("upper-text element is removed", () =>{
      expect(document.getElementById('upper-text').style.display).toBe("none");
   }),
   test("lower-text element is removed", () =>{
      expect(document.getElementById('lower-text').style.display).toBe("none");
   }),
   test("battle-text-player element is removed", () =>{
      expect(document.getElementById('battle-text-player').style.display).toBe("none");
   }),
   test("battle-text-enemy element is removed", () =>{
      expect(document.getElementById('battle-text-enemy').style.display).toBe("none");
   }),
   test("choices section is displayed", () =>{
      expect(document.getElementById('choices-section').style.display).toEqual("block");
   }),
   test("battles section is hidden", () =>{
      expect(document.getElementById('battles-section').style.display).toEqual("none");
   }),
   test("elements with class of change-mode emptied", () =>{
      const resetElements = document.getElementsByClassName('change-mode');
      for (let i = 0; i < resetElements.length; i++) {
         expect(resetElements[i].innerHTML).toBe("");
      }
   })
});
describe("switch to item window works as expected", ()=>{
   beforeAll(()=>{
      changeModeToItemWindow();
   }),
   test("image-section element is displayed", () =>{
      expect(document.getElementById('image-section').style.display).toBe("flex");
   }),
   test("game-text element is hidden", () =>{
      expect(document.getElementById('game-text').style.display).toBe("none");
   }),
   test("upper-text element is displayed", () =>{
      expect(document.getElementById('upper-text').style.display).toBe("block");
   }),
   test("lower-text element is displayed", () =>{
      expect(document.getElementById('lower-text').style.display).toBe("block");
   }),
   test("battle-text-player displayed is removed", () =>{
      expect(document.getElementById('battle-text-player').style.display).toBe("block");
   }),
   test("battle-text-enemy displayed is removed", () =>{
      expect(document.getElementById('battle-text-enemy').style.display).toBe("block");
   }),
   test("choices section is displayed", () =>{
      expect(document.getElementById('choices-section').style.display).toEqual("block");
   }),
   test("battles section is hidden", () =>{
      expect(document.getElementById('battles-section').style.display).toEqual("none");
   })
});
describe("switch to battle window works as expected", ()=>{
   beforeAll(()=>{
      changeToBattleWindow(ragnarTheHorrible);
   }),
   test("upper-text element HTML is is hidden", () =>{
      expect(document.getElementById('upper-text').style.display).toEqual("none");
   }),
   test("lower-text element HTML is is hidden", () =>{
      expect(document.getElementById('lower-text').style.display).toEqual("none");
   }),
   test("initial enemy text displays as intended", () =>{
      expect(document.getElementById('battle-text-player').innerHTML).toEqual(ragnarTheHorrible.initialText);
   }),
   test("choices section is hidden", () =>{
      expect(document.getElementById('choices-section').style.display).toEqual("none");
   }),
   test("battles section is displayed", () =>{
      expect(document.getElementById('battles-section').style.display).toEqual("block");
   })
});
describe("switch to game over window works as expected", ()=>{
   beforeAll(()=>{
      mainCharacter.score=180;
      changeToGameOver();
   }),
   test("game over page is displayed", () =>{
      expect(document.getElementById('gameover-page').style.display).toEqual("flex");
   }),
   test("game page is hidden", () =>{
      expect(document.getElementById('game-page').style.display).toEqual("none");
   }),
   test("final score is displayed", () =>{
      expect(document.getElementById('final-score').innerHTML).toEqual("180");
   })
});

//CHARACTER CREATION TESTING

describe("character stat creation code works as expected", ()=>{
   beforeAll(() =>{
      generateStats(mainCharacter, 1,5,15,25);
   }),
   test("mainCharacter should return strength as integer between 1 and 5", () =>{
      expect(mainCharacter.strength).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.strength).toBeLessThanOrEqual(5);
   }),
   test("mainCharacter should return skill as integer between 1 and 5", () =>{
      expect(mainCharacter.skill).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.skill).toBeLessThanOrEqual(5);
   }),
   test("mainCharacter should return defence as integer between 1 and 5", () =>{
      expect(mainCharacter.defence).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.defence).toBeLessThanOrEqual(5);
   }),
   test("mainCharacter should return luck as integer between 1 and 5", () =>{
      expect(mainCharacter.luck).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.luck).toBeLessThanOrEqual(5);
   }),
   test("mainCharacter should return health as integer between 15 and 25", () =>{
      expect(mainCharacter.health).toBeGreaterThanOrEqual(15);
      expect(mainCharacter.health).toBeLessThanOrEqual(25);
   })
});
describe("enemy character stat creation works as expected for base values", ()=>{
   beforeEach(() => {
      setEnemyStats(ragnarTheHorrible, 20,20,25,25);
   }),
   test("strength field populates as expected", () =>{
      expect(ragnarTheHorrible.strength).toEqual(20);
   }),
   test("skill field populates as expected", () =>{
      expect(ragnarTheHorrible.skill).toEqual(20);
   }),
   test("defence field populates as expected", () =>{
      expect(ragnarTheHorrible.defence).toEqual(20);
   }),
   test("luck field populates as expected", () =>{
      expect(ragnarTheHorrible.luck).toEqual(20);
   }),
   test("health field populates as expected", () =>{
      expect(ragnarTheHorrible.health).toEqual(25);
   })
});
describe("enemy character stat creation works as expected extended values", ()=>{
   beforeEach(() => {
      setEnemyStats(ragnarTheHorrible, 20,20,25,25, 10, 10, 10, 30, "fire", "ice", "fire");
   }),
   test("strength field populates as expected", () =>{
      expect(ragnarTheHorrible.strength).toEqual(30);
   }),
   test("skill field populates as expected", () =>{
      expect(ragnarTheHorrible.skill).toEqual(30);
   }),
   test("defence field populates as expected", () =>{
      expect(ragnarTheHorrible.defence).toEqual(30);
   }),
   test("health field populates as expected", () =>{
      expect(ragnarTheHorrible.health).toEqual(55);
   }),
   test("strItem field populates as expected", () =>{
      expect(ragnarTheHorrible.strItem).toEqual(10);
   }),
   test("vulnerability field populates as expected", () =>{
      expect(ragnarTheHorrible.vulnerability).toEqual("fire");
   }),
   test("resist field populates as expected", () =>{
      expect(ragnarTheHorrible.resist).toEqual("ice");
   }),
   test("magic field populates as expected", () =>{
      expect(ragnarTheHorrible.magic).toEqual("fire");
   })
});
describe("enemy character creation populates DOM as intended", ()=>{
   beforeEach(() => {
      setEnemyStats(ragnarTheHorrible, 20,20,25,25);
   }),
   test("image-image element popluates as expected", () =>{
      expect(document.getElementById('image-image').innerHTML).toEqual(`<img src="` + ragnarTheHorrible.image + `">`);
   }),
   test("image-title element popluates as expected", () =>{
      expect(document.getElementById('image-title').innerHTML).toEqual(ragnarTheHorrible.name);
   }),
   test("item-description element populates as expected", () =>{
      expect(document.getElementById('item-description').innerHTML).toEqual(ragnarTheHorrible.description);
   }),
   test("list-item-one element populates as expected", () =>{
      expect(document.getElementById('list-item-one').innerHTML).toEqual("Strength: " + ragnarTheHorrible.strength);
   }),
   test("list-item-two element populates as expected", () =>{
      expect(document.getElementById('list-item-two').innerHTML).toEqual("Skill: " + ragnarTheHorrible.skill);
   }),
   test("list-item-three element populates as expected", () =>{
      expect(document.getElementById('list-item-three').innerHTML).toEqual("Defence: " + ragnarTheHorrible.defence);
   }),
   test("list-item-four element populates as expected", () =>{
      expect(document.getElementById('list-item-four').innerHTML).toEqual("Health: " + ragnarTheHorrible.health);
   })
});

// ITEM SEARCH FUNCTIONS TESTING
//search functions
describe("findItemType function returns correct category as expected", ()=>{
   test("function returns weapon object", () =>{
      expect(findItemType(100,100,100,100)).toBe(characterWeapons);
   }),
   test("function returns defence object", () =>{
      expect(findItemType(0,100,100,100)).toBe(characterDefence);
   })
   test("function returns potions object", () =>{
      expect(findItemType(0,0,100,100)).toBe(characterPotions);
   }),
   test("function returns objects object", () =>{
      expect(findItemType(0,0,0,100)).toBe(characterObjects);
   }),
   test("function returns empty string (nothing)", () =>{
      expect(findItemType(0,0,0,0)).toBe("");
   })
});
describe("searchForItem function returns correct values as expected (not exhaustive)", ()=>{
   afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
      for(let item of Object.keys(foundItemInfo)) {
         foundItemInfo[item] = "";
      }
   }),
   test("category value written correctly to foundItemInfo object", () =>{
      searchForItem(0,100,100,100);
      expect(foundItemInfo.category).toEqual("clothing");
   }),
   test("name value for defence item with index of [4] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterDefence[4].chance / 100);
      searchForItem(0,100,100,100);
      expect(foundItemInfo.name).toBe(characterDefence[4].name);
   }),
   test("skill value for weapon with index of [0] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterWeapons[0].chance / 100);
      searchForItem(100,100,100,100);
      expect(foundItemInfo.skill).toEqual(characterWeapons[0].skill);
   }),
   test("defence value for defence item with index of [2] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterDefence[2].chance / 100);
      searchForItem(0,100,100,100);
      expect(foundItemInfo.defence).toEqual(characterDefence[2].defence);
   }),
   test("magic value for Potion item with index of [1] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterPotions[1].chance / 100);
      searchForItem(0,0,100,100);
      expect(foundItemInfo.magic).toEqual(characterPotions[1].magic);
   }),
   test("type value for weapon with index of [3] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterWeapons[3].chance / 100);
      searchForItem(100,100,100,100);
      expect(foundItemInfo.type).toEqual(characterWeapons[3].type);
   }),
   test("image value for object with index of [1] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterObjects[1].chance / 100);
      searchForItem(0,0,0,100);
      expect(foundItemInfo.image).toEqual(characterObjects[1].image);
   }),
   test("effect value for object with index of [5] written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(characterObjects[5].chance / 100);
      searchForItem(0,0,0,100);
      expect(foundItemInfo.effect).toEqual(characterObjects[5].effect);
   })
});
// display found item on page function
describe("display item page shows info in DOM correctly", ()=>{   
   afterEach(() => {
      for(let item of Object.keys(foundItemInfo)) {
         foundItemInfo[item] = "";
      }
   }),
   test("image-section element is displayed", () =>{
      displayItem();
      expect(document.getElementById('image-section').style.display).toBe("flex");
   }),
   test("game-text element is hidden", () =>{
      displayItem();
      expect(document.getElementById('game-text').style.display).toBe("none");
   }),
   test("upper-text element is displayed", () =>{
      displayItem();
      expect(document.getElementById('upper-text').style.display).toBe("block");
   }),
   test("lower-text element is displayed", () =>{
      displayItem();
      expect(document.getElementById('lower-text').style.display).toBe("block");
   }),
   test("heading correctly displayed in upper-text element", () =>{
      foundItemInfo.adjective = "grrrrr";
      foundItemInfo.category = "steve";
      displayItem();
      expect(document.getElementById('upper-text').innerHTML).toEqual("<h3>You have found " + foundItemInfo.adjective + " " + foundItemInfo.category + "!!!</h3>");
   }),
   test("image correctly displayed in image element", () =>{
      foundItemInfo.image = "image1";
      displayItem();
      expect(document.getElementById('image-image').innerHTML).toEqual(`<img src="` + foundItemInfo.image + `">`);
   }),
   test("name correctly displayed in title element", () =>{
      foundItemInfo.name = "steve";
      displayItem();
      expect(document.getElementById('image-title').innerHTML).toEqual(foundItemInfo.name);
   }),
   test("description correctly displayed in description element", () =>{
      foundItemInfo.description = "grrrrr";
      displayItem();
      expect(document.getElementById('item-description').innerHTML).toEqual(foundItemInfo.description);
   }),
   test("weapon attack stat correctly displayed in list element", () =>{
      foundItemInfo.category = "weapon";
      foundItemInfo.attack = 15 ;
      displayItem();
      expect(document.getElementById('list-item-one').innerHTML).toEqual("Attack: " + foundItemInfo.attack);
   }),
   test("weapon skill stat correctly displayed in list element", () =>{
      foundItemInfo.category ="weapon";
      foundItemInfo.skill = 15 ;
      displayItem();
      expect(document.getElementById('list-item-two').innerHTML).toEqual("Skill: " + foundItemInfo.skill);
   }),
   test("weapon type stat correctly displayed in list element", () =>{
      foundItemInfo.category ="weapon";
      foundItemInfo.type = "cheese";
      displayItem();
      expect(document.getElementById('list-item-three').innerHTML).toEqual("Type: " + foundItemInfo.type);
   }),
   test("weapon magic stat correctly displayed in list element", () =>{
      foundItemInfo.category ="weapon";
      foundItemInfo.magic = "fire";
      displayItem();
      expect(document.getElementById('list-item-four').innerHTML).toEqual("Magic: " + foundItemInfo.magic);
   }),
   test("defence stat correctly displayed in list element", () =>{
      foundItemInfo.category ="clothing";
      foundItemInfo.defence = 15 ;
      displayItem();
      expect(document.getElementById('list-item-one').innerHTML).toEqual("Defence: " + foundItemInfo.defence);
   }),
   test("defence magic stat correctly displayed in list element", () =>{
      foundItemInfo.category ="clothing";
      foundItemInfo.magic = "fire";
      displayItem();
      expect(document.getElementById('list-item-two').innerHTML).toEqual("Magic: " + foundItemInfo.magic);
   }),
   test("potion effect stat correctly displayed in list element", () =>{
      foundItemInfo.category ="potion";
      foundItemInfo.effect = "fire";
      displayItem();
      expect(document.getElementById('list-item-one').innerHTML).toEqual("Effect: " + foundItemInfo.effect);
   }),
   test("object effect stat correctly displayed in list element", () =>{
      foundItemInfo.category ="object";
      foundItemInfo.effect = "cows";
      displayItem();
      expect(document.getElementById('list-item-one').innerHTML).toEqual("Effect: " + foundItemInfo.effect);
   })   
});
//item storage function
describe("itemStorage function returns correct values to currentWeapon object", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "weapon";
      foundItemInfo.name = "steve";
      foundItemInfo.attack = 15 ;
      foundItemInfo.skill = 15;
      foundItemInfo.magic = "fire";
      foundItemInfo.type = "sword";
      foundItemInfo.image = "image1";
      itemStorage();
   }),
   test("name value written correctly to currentWeapon object", () =>{
      expect(currentWeapon.name).toEqual("steve");
   }),
   test("attack value written correctly to currentWeapon object", () =>{
      expect(currentWeapon.attack).toEqual(15);
   }),
   test("skill value written correctly to currentWeapon object", () =>{
      expect(currentWeapon.skill).toEqual(15);
   }),
   test("magic value written correctly to currentWeapon object", () =>{
      expect(currentWeapon.magic).toEqual("fire");
   }),
   test("type value written correctly to currentWeapon object", () =>{
      expect(currentWeapon.type).toEqual("sword");
   }),
   test("image value written correctly to currentWeapon object", () =>{
      expect(currentWeapon.image).toEqual("image1");
   })
   
});
describe("itemStorage function returns correct values to currentDefence object", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "clothing";
      foundItemInfo.name = "steve";
      foundItemInfo.defence = 15 ;
      foundItemInfo.resist = "fire";
      foundItemInfo.image = "image1";
      foundItemInfo.playerImage = "image2";
      itemStorage();
   }),
   test("name value written correctly to currentDefence object", () =>{
      expect(currentDefence.name).toEqual("steve");
   }),
   test("defence value written correctly to currentDefence object", () =>{
      expect(currentDefence.defence).toEqual(15);
   }),
   test("resist value written correctly to currentDefence object", () =>{
      expect(currentDefence.resist).toEqual("fire");
   }),
   test("image value written correctly to currentDefence object", () =>{
      expect(currentDefence.image).toEqual("image1");
   }),
   test("player image value written correctly to currentDefence object", () =>{
      expect(currentDefence.playerImage).toEqual("image2");
   })
});
describe("itemStorage function returns correct values to currentPotion object", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "potion";
      foundItemInfo.name = "steve";
      foundItemInfo.effect = "fire";
      foundItemInfo.image = "image1";
      itemStorage();
   }),
   test("name value written correctly to currentPotion object", () =>{
      expect(currentPotion.name).toEqual("steve");
   }),
   test("effect value written correctly to currentPotion object", () =>{
      expect(currentPotion.effect).toEqual("fire");
   }),
   test("image value written correctly to currentPotion object", () =>{
      expect(currentPotion.image).toEqual("image1");
   })
});
describe("itemStorage function returns correct values to currentObject object", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "object";
      foundItemInfo.name = "steve";
      foundItemInfo.effect = "fire";
      foundItemInfo.image = "image1";
      itemStorage();
   }),
   test("name value written correctly to currentObject object", () =>{
      expect(currentObject.name).toEqual("steve");
   }),
   test("effect value written correctly to currentObject object", () =>{
      expect(currentObject.effect).toEqual("fire");
   }),
   test("image value written correctly to currentObject object", () =>{
      expect(currentObject.image).toEqual("image1");
   })
});
describe("itemStorage function correctly processes 'Four leaf clover' object", ()=>{
   beforeAll(() =>{
      foundItemInfo.name = "Four Leaf Clover";
      mainCharacter.luck = 10;
      itemStorage();
   }),
   test("mainCharacterCurrent luck property corrently updated", () =>{
      expect(mainCharacterCurrent.luck).toEqual(13);
   })
});
describe("itemStorage function correctly processes 'Furry Gilet and Shorts' object", ()=>{
   test("vulnerability value written correctly to mainCharacterCurrent object", () =>{
      foundItemInfo.name = "Furry Gilet and Shorts";
      itemStorage();
      expect(mainCharacterCurrent.vulnerability).toEqual("fire");
   })
});
describe("itemStorage function correctly processes 'Oathbringer' object", ()=>{
   test("Oathbringer chance value is set to zero so it can't be found again", () =>{
      foundItemInfo.name = "Oathbringer";
      itemStorage();
      expect(characterWeapons[0].chance).toEqual(0);
   })
});
describe("itemStorage function correctly processes 'Frozen Staff' object", ()=>{
   test("Frozen Staff previous object's chance value is set to 100 so Frozen Staff can't be found again", () =>{
      foundItemInfo.name = "Frozen Staff";
      itemStorage();
      expect(characterWeapons[5].chance).toEqual(100);
   })
});
// store item function (DOM)
describe("storeItem function correctly writes weapon items to the DOM", ()=>{
   beforeAll(() =>{      
      foundItemInfo.category = "weapon";
      foundItemInfo.name = "steve";
      foundItemInfo.attack = 15 ;
      foundItemInfo.skill = 15;
      foundItemInfo.magic = "fire";
      foundItemInfo.type = "sword";
      foundItemInfo.image = "image1";
      storeItem();
   }),
   test("attack values correctly included on the page", () =>{
      expect(document.getElementById('weapon-list-item-one').innerHTML).toEqual("ATT: " + currentWeapon.attack);
   }),
   test("skill values correctly included on the page", () =>{
      expect(document.getElementById('weapon-list-item-two').innerHTML).toEqual("SKL: " + currentWeapon.skill);
   }),
   test("magic  values correctly included on the page", () =>{
      expect(document.getElementById('weapon-list-item-three').innerHTML).toEqual("MGC: " + currentWeapon.magic);
   }),
   test("name values correctly included on the page", () =>{
      expect(document.getElementById('weapon-item-name').innerHTML).toEqual(currentWeapon.name);
   }),
   test("type values correctly included on the page", () =>{
      expect(document.getElementById('weapon-list-item-four').innerHTML).toEqual("TYP: " + currentWeapon.type);
   }),
   test("image value correctly included on the page", () =>{
      expect(document.getElementById('weapon-item-image').innerHTML).toEqual(`<img src="` + currentWeapon.image + `">`);
   })
});
describe("storeItem function correctly writes defence items to the DOM", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "clothing";
      foundItemInfo.name = "steve";
      foundItemInfo.defence = 15 ;
      foundItemInfo.resist = "fire";
      foundItemInfo.image = "image1";
      foundItemInfo.playerImage = "image2";
      storeItem();
   }),
   test("name values correctly included on the page", () =>{
      expect(document.getElementById('defence-item-name').innerHTML).toEqual(currentDefence.name);
   }),
   test("defence values correctly included on the page", () =>{
      expect(document.getElementById('clothing-list-item-one').innerHTML).toEqual("DEF: " + currentDefence.defence);
   }),
   test("resist values correctly included on the page", () =>{
      expect(document.getElementById('clothing-list-item-two').innerHTML).toEqual("RST: " + currentDefence.resist);
   }),
   test("image values correctly included on the page", () =>{
      expect(document.getElementById('defence-item-image').innerHTML).toEqual(`<img src="` + currentDefence.image + `">`);
   }),
   test("player image values correctly included on the page", () =>{
      expect(document.getElementById('character-image').innerHTML).toEqual(`<img src="` + currentDefence.playerImage + `">`);
   })
});
describe("storeItem function correctly writes potion items to the DOM", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "potion";
      foundItemInfo.name = "steve";
      foundItemInfo.effect = "fire";
      foundItemInfo.image = "image1";
      storeItem();
   }),
   test("name values correctly included on the page", () =>{
      expect(document.getElementById('potion-item-name').innerHTML).toEqual(currentPotion.name);
   }),
   test("effect values correctly included on the page", () =>{
      expect(document.getElementById('potion-list-item-one').innerHTML).toEqual("EFFECT:<br>" + currentPotion.effect);
   }),
   test("image values correctly included on the page", () =>{
      expect(document.getElementById('potion-item-image').innerHTML).toEqual(`<img src="` + currentPotion.image + `">`);
   })
});
describe("storeItem function correctly writes object items to the DOM", ()=>{
   beforeAll(() =>{
      foundItemInfo.category = "object";
      foundItemInfo.name = "steve";
      foundItemInfo.effect = "fire";
      foundItemInfo.image = "image1";
      storeItem();
   }),
   test("name values correctly included on the page", () =>{
      expect(document.getElementById('object-item-name').innerHTML).toEqual(currentObject.name);
   }),
   test("effect values correctly included on the page", () =>{
      expect(document.getElementById('object-list-item-one').innerHTML).toEqual("EFFECT:<br>" + currentObject.effect);
   }),
   test("image values correctly included on the page", () =>{
      expect(document.getElementById('object-item-image').innerHTML).toEqual(`<img src="` + currentObject.image + `">`);
   })
});

// BATTLE FUNCTIONS TESTING
//test battle conditions before/between rounds function
describe("test continueFight function works as intended", ()=>{
   beforeAll(() => {
      ragnarTheHorrible.health = "30";
      mainCharacterCurrent.health = "40";
      continueFight(ragnarTheHorrible);
   }),
   afterEach(() => {
      for(let item of Object.keys(ragnarTheHorrible)) {
         ragnarTheHorrible[item] = "";
      }
   }),  
   test("list-item-four populated with updated enemy health", () =>{ 
      expect(document.getElementById('list-item-four').innerHTML).toEqual("Health: " + ragnarTheHorrible.health);
   }),
   test("main-health element populated with updated character health", () =>{
      expect(document.getElementById('main-health').innerHTML).toEqual(mainCharacterCurrent.health);
   })
});
describe("testForWeapons function works as intended", ()=>{
   test("test weapon name is displayed if weapon equipped", () =>{
      for(let item of Object.keys(currentWeapon)) {
         currentWeapon[item] = "";
      }
      currentWeapon.name = "dave";
      testForWeapons();
      expect(document.getElementById('battle-choice-weapon').innerHTML).toEqual("dave");
   }),
   test("test weapon button is not displayed if no weapon equipped", () =>{
      for(let item of Object.keys(currentWeapon)) {
         currentWeapon[item] = "";
      }
      currentWeapon.name = undefined;
      testForWeapons();
      expect(document.getElementById('weapon-button').style.display).toEqual("none");
   }),
   test("test potion name is displayed if potion equipped", () =>{
      for(let item of Object.keys(currentPotion)) {
         currentPotion[item] = "";
      }
      currentPotion.name = "dave";
      testForWeapons();
      expect(document.getElementById('battle-choice-potion').innerHTML).toEqual("dave");
   }),
   test("test potion button is not displayed if no weapon equipped", () =>{
      for(let item of Object.keys(currentPotion)) {
         currentPotion[item] = "";
      }
      currentPotion.name = undefined;
      testForWeapons();
      expect(document.getElementById('potion-button').style.display).toEqual("none");
   })
});
describe("leaveBattle function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.strength = 10;
      mainCharacterCurrent.strength = 20;
      mainCharacter.defence = 10;
      mainCharacterCurrent.defence = 20;
      mainCharacter.score = 3;
      ragnarTheHorrible.score = 20;
      leaveBattle(ragnarTheHorrible);
   })
   test("choices section is displayed", () =>{
      expect(document.getElementById('choices-section').style.display).toEqual("block");
   }),
   test("battles section is hidden", () =>{
      expect(document.getElementById('battles-section').style.display).toEqual("none");
   }),
   test("enemy health set to zero", () =>{
      expect(document.getElementById('list-item-four').innerHTML).toEqual('<span class="red">Health: ' + "0</span>");
   }),
   test("enemy death text displayed correctly", () =>{
      expect(document.getElementById('battle-text-player').innerHTML).toEqual('<h3 class="green">' + ragnarTheHorrible.name + " Is Dead.</h3>" + ragnarTheHorrible.deathText);
   }),
   test("enemy battle text cleared", () =>{
      expect(document.getElementById('battle-text-enemy').innerHTML).toEqual("");
   }),
   test("temporary strength bonuses removed", () =>{
      expect(mainCharacterCurrent.strength).toEqual(10);
   }),
   test("temporary defence bonuses removed", () =>{
      expect(mainCharacterCurrent.defence).toEqual(10);
   }),
   test("score correctly updated", () =>{
      expect(mainCharacter.score).toEqual(23);
   }),
   test("choices section displays correctly", () =>{
      expect(document.getElementById('choices-section').innerHTML).toEqual(ragnarTheHorrible.choices);
   })
});

// revised battle mechanics testing
describe("hitsuccess function works as intended", ()=>{
   beforeAll(() => {
      ragnarTheHorrible.skill = 10;
      mainCharacterCurrent.skill = 10;
      currentWeapon.skill = 5;
   }),
   afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
   }),  
   test("hit success mechanic works as intended with weapon", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(5/20);  
      expect(hitSuccess(ragnarTheHorrible, "weapon")).toEqual(true);
   }),  
   test("hit success mechanic works as intended with fists", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(5/20);  
      expect(hitSuccess(ragnarTheHorrible, "fists")).toEqual(false);
   }),  
   test("hit success mechanic works as intended with enemy", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(10/20);  
      expect(hitSuccess(ragnarTheHorrible, "enemy")).toEqual(true);
   })
});
describe("initial round damage function works as intended", ()=>{
   beforeEach(() => {
      ragnarTheHorrible.strength = 11;
      mainCharacterCurrent.strength = 2;
      currentWeapon.attack = 5;
   }),
   afterEach(() => {
      for(let item of Object.keys(ragnarTheHorrible)) {
         ragnarTheHorrible[item] = "";
      }
   }),  
   test("round damage works as intended with weapon", () =>{
      expect(initialDamage(ragnarTheHorrible, "weapon")).toBeGreaterThanOrEqual(5);
      expect(initialDamage(ragnarTheHorrible, "weapon")).toBeLessThanOrEqual(7);
   }),  
   test("round damage works as intended with fists", () =>{  
      expect(initialDamage(ragnarTheHorrible, "fists")).toBeGreaterThanOrEqual(1);
      expect(initialDamage(ragnarTheHorrible, "fists")).toBeLessThanOrEqual(2);
   }),  
   test("round damage works as intended with enemy (no item)", () =>{
      expect(initialDamage(ragnarTheHorrible, "enemy")).toBeGreaterThanOrEqual(1);
      expect(initialDamage(ragnarTheHorrible, "enemy")).toBeLessThanOrEqual(11);
   }),  
   test("round damage works as intended with enemy (item)", () =>{
      ragnarTheHorrible.strItem = 10;
      ragnarTheHorrible.strength= 12;
      expect(initialDamage(ragnarTheHorrible, "enemy")).toBeGreaterThanOrEqual(10);
      expect(initialDamage(ragnarTheHorrible, "enemy")).toBeLessThanOrEqual(12);
   })
});
describe("damage resist function works as intended", ()=>{
   beforeAll(() => {
      ragnarTheHorrible.defence = 7;
      mainCharacterCurrent.defence = 10;
   }),
   afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
      currentDefence.defence = 0;
   }), 
   test("player resists work as intended with defensive item", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(5/15);
      currentDefence.defence = 5;
      expect(damageResist(ragnarTheHorrible, "enemy")).toEqual(10);
   }),  
   test("player resists work as intended without defensive item", () =>{  
      jest.spyOn(global.Math, 'random').mockReturnValue(5/15);
      expect(damageResist(ragnarTheHorrible, "enemy")).toEqual(5);
   }),  
   test("enemy resists work as intended", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(5/15);
      expect(damageResist(ragnarTheHorrible, "fists")).toEqual(2);
   })
});
describe("test player turn resistances function works as intended", ()=>{
   afterEach(() => {
      for(let item of Object.keys(ragnarTheHorrible)) {
         ragnarTheHorrible[item] = "";
      }
      for(let item of Object.keys(currentWeapon)) {
         currentWeapon[item] = "";
      }
   }),
   test("enemy fire resist works correctly", () =>{
      ragnarTheHorrible.resist = "fire";
      currentWeapon.magic = "fire";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(0.5);
   }),
   test("enemy fire vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "fire";
      currentWeapon.magic = "fire";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(2);
   }),
   test("enemy ice resist works correctly", () =>{
      ragnarTheHorrible.resist = "ice";
      currentWeapon.magic = "ice";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(0.5);
   }),
   test("enemy ice vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "ice";
      currentWeapon.magic = "ice";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(2);
   }),
   test("enemy sharp weapons resist works correctly", () =>{
      ragnarTheHorrible.resist = "sharp";
      currentWeapon.type = "sharp";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(0.5);
   }),
   test("enemy sharp weapons vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "sharp";
      currentWeapon.type = "sharp";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(2);
   }),
   test("enemy blunt weapons resist works correctly", () =>{
      ragnarTheHorrible.resist = "blunt";
      currentWeapon.type = "blunt";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(0.5);
   }),
   test("enemy blunt weapons vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "blunt";
      currentWeapon.type = "blunt";
      expect(playerTestResistances(ragnarTheHorrible)).toEqual(2);
   })
});
describe("test enemy turn resistances function works as intended", ()=>{
   afterEach(() => {
      for(let item of Object.keys(ragnarTheHorrible)) {
         ragnarTheHorrible[item] = "";
      }
      for(let item of Object.keys(currentDefence)) {
         currentDefence[item] = "";
      }
      for(let item of Object.keys(mainCharacterCurrent)) {
         mainCharacterCurrent[item] = "";
      }
   }),
   test("player fire vulnerability works correctly", () =>{
      ragnarTheHorrible.magic = "fire";
      mainCharacterCurrent.vulnerability = "fire";
      expect(enemyTestResistances(ragnarTheHorrible)).toEqual(2);
   }),
   test("player fire resist works correctly", () =>{
      ragnarTheHorrible.magic = "fire";
      currentDefence.resist = "fire";
      expect(enemyTestResistances(ragnarTheHorrible)).toEqual(0.5);
   }),
   test("player ice vulnerability works correctly", () =>{
      ragnarTheHorrible.magic = "ice";
      mainCharacterCurrent.vulnerability = "ice";
      expect(enemyTestResistances(ragnarTheHorrible)).toEqual(2);
   }),
   test("player ice resist works correctly", () =>{
      ragnarTheHorrible.magic = "ice";
      currentDefence.resist = "ice";
      expect(enemyTestResistances(ragnarTheHorrible)).toEqual(0.5);
   })
});
describe("attacking with potion function works as intended", ()=>{
   beforeAll(() => {
      ragnarTheHorrible.strength = 0;
      mainCharacterCurrent.strength = 10;
      mainCharacterCurrent.defence = 10;
      ragnarTheHorrible.health = 30;
      mainCharacter.health = 60;
      mainCharacterCurrent.health = 40;      
      document.getElementById('potion-item-image').innerHTML = "something";
      document.getElementById('potion-item-name').innerHTML = "something else";
      document.getElementById('potion-list-item-one').innerHTML = "still another thing";
   }),
   afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
      mainCharacterCurrent.strength = 10;
      mainCharacterCurrent.defence = 10;
      ragnarTheHorrible.health = 30;
      mainCharacter.health = 40;
      mainCharacterCurrent.health = 40;
      document.getElementById('potion-item-image').innerHTML = "something";
      document.getElementById('potion-item-name').innerHTML = "something else";
      document.getElementById('potion-list-item-one').innerHTML = "still another thing";
   }),  
   test("catnip potion mechanic works as intended", () =>{
      currentPotion.name = "Potion of Catnip";
      potionRound(ragnarTheHorrible);
      expect(document.getElementById('battle-text-player').innerHTML).toContain("catnip");
   }),  
   test("potion of healing works as intended", () =>{
      currentPotion.name = "Potion of Healing";
      potionRound(ragnarTheHorrible);
      expect(mainCharacterCurrent.health).toEqual(40);
      expect(document.getElementById('battle-text-player').innerHTML).toContain("restorative");
      expect(document.getElementById('potion-item-image').innerHTML).toEqual(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('potion-item-name').innerHTML).toEqual("");
      expect(document.getElementById('potion-list-item-one').innerHTML).toEqual("");
      expect(currentPotion.name).toEqual("");

   }),
   test("potion of ice works as intended", () =>{
      currentPotion.name = "Potion of Fire";
      potionRound(ragnarTheHorrible);
      expect(document.getElementById('battle-text-player').innerHTML).toContain("flames");
      expect(document.getElementById('potion-item-image').innerHTML).toEqual(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('potion-item-name').innerHTML).toEqual("");
      expect(document.getElementById('potion-list-item-one').innerHTML).toEqual("");
      expect(currentPotion.name).toEqual("");
      expect(ragnarTheHorrible.health).toEqual(10);
   }),
   test("potion of defence works as intended", () =>{
      currentPotion.name = "Potion of Defence";
      potionRound(ragnarTheHorrible);
      expect(document.getElementById('battle-text-player').innerHTML).toContain("invincibility");
      expect(document.getElementById('potion-item-image').innerHTML).toEqual(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('potion-item-name').innerHTML).toEqual("");
      expect(document.getElementById('potion-list-item-one').innerHTML).toEqual("");
      expect(currentPotion.name).toEqual("");
      expect(mainCharacterCurrent.defence).toEqual(20);
   }),
   test("potion of defence works as intended", () =>{
      currentPotion.name = "Potion of Power";
      potionRound(ragnarTheHorrible);
      expect(document.getElementById('battle-text-player').innerHTML).toContain("bicep");
      expect(document.getElementById('potion-item-image').innerHTML).toEqual(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('potion-item-name').innerHTML).toEqual("");
      expect(document.getElementById('potion-list-item-one').innerHTML).toEqual("");
      expect(currentPotion.name).toEqual("");
      expect(mainCharacterCurrent.strength).toEqual(20);
   })
});

// GAMEPLAY FUNCTIONS TESTING

//game state initiation
describe("reset character button works as intended", ()=>{
   beforeAll(() => {
      resetGame();
   }),
   test("name field in mainCharacter cleared", () =>{
      expect(mainCharacter.name).toBe("");
   }),
   test("strength field in mainCharacter cleared", () =>{
      expect(mainCharacter.name).toBe("");
   }),
   test("speed field in mainCharacter cleared", () =>{
      expect(mainCharacter.name).toBe("");
   }),
   test("stamina field in mainCharacter cleared", () =>{
      expect(mainCharacter.name).toBe("");
   }),
   test("luck field in mainCharacter cleared", () =>{
      expect(mainCharacter.name).toBe("");
   }),
   test("health field in mainCharacter cleared", () =>{
      expect(mainCharacter.name).toBe("");
   }),
   test("landing page set to view", () =>{
      expect(document.getElementById('landing-page').style.display).toBe("flex");
   }),
   test("game page display set to none", () =>{
      expect(document.getElementById('game-page').style.display).toBe("none");
   }),
   test("gameover page display set to none", () =>{
      expect(document.getElementById('gameover-page').style.display).toBe("none");
   }),
   test("final score reset in DOM", () =>{
      expect(document.getElementById('final-score').innerHTML).toBe("");
   })

});
describe("restart game button works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.name = "Randy Tangent";
      startGame();
   }),
   test("name field in mainCharacter correctly retained", () =>{
      expect(mainCharacter.name).toBe("Randy Tangent");
   })
});
describe("start game function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score=150;
      mainCharacter.name = "";
      mainCharacterCurrent.health = 12;
      mainCharacterCurrent.strength = 12;
      mainCharacterCurrent.luck = 12;
      mainCharacterCurrent.defence = 12;
      startGame();
   }),
   test("name field in mainCharacter correctly if name not entered", () =>{
      expect(mainCharacter.name).toBe("Another Lazy Gamer");
   }),
   test("Score is reset to zero", () =>{
      expect(mainCharacter.score).toEqual(0);
   }),
   test("Score is reset to zero", () =>{
      expect(mainCharacter.score).toEqual(0);
   }),
   test("mainCharacterCurrent non-overwritten values cleared", () =>{
      expect(mainCharacterCurrent.magic).toEqual("");
      expect(mainCharacterCurrent.resist).toEqual("");
      expect(mainCharacterCurrent.vulnerability).toEqual("");
   }),  
   test("mainCharacterCurrent object strength property set", () =>{
      expect(mainCharacterCurrent.strength).toBeGreaterThanOrEqual(10);
      expect(mainCharacterCurrent.strength).toBeLessThanOrEqual(15);
   }),  
   test("mainCharacterCurrent object defence property set", () =>{
      expect(mainCharacter.defence).toBeGreaterThanOrEqual(10);
      expect(mainCharacter.defence).toBeLessThanOrEqual(15);
   }),  
   test("mainCharacterCurrent object luck property set", () =>{
      expect(mainCharacter.luck).toBeGreaterThanOrEqual(10);
      expect(mainCharacter.luck).toBeLessThanOrEqual(15);
   }),  
   test("mainCharacterCurrent object health property set", () =>{
      expect(mainCharacter.health).toBeGreaterThanOrEqual(50);
      expect(mainCharacter.health).toBeLessThanOrEqual(75);
   }),
   test("name field in mainCharacter correct if name is entered", () =>{
      mainCharacter.name ="";
      document.getElementById('character-name').value = "Randy Tangent";
      startGame();
      expect(mainCharacter.name).toBe("Randy Tangent");
   })
});
describe("writeContentToDOM works as intended", () => {
   beforeAll(() => {
      mainCharacter.strength = 15;
      mainCharacter.skill = 15;
      mainCharacter.defence = 15;
      mainCharacter.luck = 15;
      mainCharacter.health = 75;
      writeInitialToDom();
   }),
   test("initial name text written to page", () =>{
      expect(document.getElementById('character-sheet-name').innerHTML).toBe("Identity Unknown");
   }),
   test("items images set to default", () =>{
      expect(document.getElementById('weapon-item-image').innerHTML).toBe(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('defence-item-image').innerHTML).toBe(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('potion-item-image').innerHTML).toBe(`<img src="assets/images/items/box.png">`);
      expect(document.getElementById('object-item-image').innerHTML).toBe(`<img src="assets/images/items/box.png">`);
   }),
   test("strength property written to character sheet on page", () =>{
      expect(document.getElementById('main-strength').innerHTML).toBe("15");
   }),
   test("skill property written to character sheet on page", () =>{
      expect(document.getElementById('main-skill').innerHTML).toBe("15");
   }),
   test("defence property written to character sheet on page", () =>{
      expect(document.getElementById('main-defence').innerHTML).toBe("15");
   }),
   test("luck property written to character sheet on page", () =>{
      expect(document.getElementById('main-luck').innerHTML).toBe("15");
   }),
   test("health property written to character sheet on page", () =>{
      expect(document.getElementById('main-health').innerHTML).toBe("75");
   }),
   test("landing page is hidden", () =>{
      expect(document.getElementById('landing-page').style.display).toBe("none");
   }),
   test("gameover page is hidden", () =>{
      expect(document.getElementById('gameover-page').style.display).toBe("none");
   }),
   test("image-section element is hidden", () =>{
      expect(document.getElementById('image-section').style.display).toBe("none");
   }),
   test("upper-text element is hidden", () =>{
      expect(document.getElementById('upper-text').style.display).toBe("none");
   }),
   test("final score reset in DOM", () =>{
      expect(document.getElementById('final-score').innerHTML).toBe("");
   }),
   test("game page is displayed", () =>{
      expect(document.getElementById('game-page').style.display).toBe("flex");
   }),
   test("game-text element is displayed", () =>{
      expect(document.getElementById('game-text').style.display).toBe("block");
   }),
   test("text for first page is displayed", () =>{
      expect(document.getElementById('game-text').innerHTML).toBe(pageOne);
   }),
   test("options for first page are displayed", () =>{
      expect(document.getElementById('choices-section').innerHTML).toBe(optionsOne);
   })
   
});

//game progression functions
//page two
describe("ensure gameOverGiveUp function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      gameOverGiveUp();      
   }),
   test("game over page is displayed", () =>{
      expect(document.getElementById('gameover-page').style.display).toEqual("flex");
   }),
   test("game page is hidden", () =>{
      expect(document.getElementById('game-page').style.display).toEqual("none");
   }),
   test("game over text is displayed", () =>{
      expect(document.getElementById('game-outcome').innerHTML).toEqual(giveUp);
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(-5);
   })
});
describe("openeyes function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      openEyes();      
   }),
   test("text is displayed", () =>{
      expect(document.getElementById('game-text').innerHTML).toEqual(pageTwo);
   }),
   test("choices are displayed", () => {
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsTwoFirst + mainCharacter.name + optionsTwoSecond);
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(1);
   })
});
//page three
describe("knowMyName function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      knowMyName();      
   }),
   test("text is displayed", () =>{
      expect(document.getElementById('game-text').innerHTML).toEqual(pageThreeFirst + pageThreeCommon);
   }),
   test("choices are displayed", () => {
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsThree);
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(3);
   }),
   test("character name is updated in DOM", () =>{
      expect(document.getElementById('character-sheet-name').innerHTML).toEqual(mainCharacter.name);
   })
});
describe("fightingTalk function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      thingsWhatYouveDone.encounterLikelihood = 0;
      fightingTalk();      
   }),
   test("text is displayed", () =>{
      expect(document.getElementById('game-text').innerHTML).toEqual(pageThreeSecondOne + mainCharacter.name + pageThreeSecondTwo + pageThreeCommon);
   }),
   test("choices are displayed", () => {
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsThree);
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(1);
   }),
   test("character name is updated in DOM", () =>{
      expect(document.getElementById('character-sheet-name').innerHTML).toEqual(mainCharacter.name);
   }),
   test("event log updated to make encounters more likely", () =>{
      expect(thingsWhatYouveDone.encounterLikelihood).toEqual(20);
   })
});
describe("nameUnknown function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      nameUnknown();      
   }),
   test("text is displayed", () =>{
      expect(document.getElementById('game-text').innerHTML).toEqual(pageThreeThird + pageThreeCommon);
   }),
   test("choices are displayed", () => {
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsThree);
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(5);
   }),
   test("character name is updated in DOM", () =>{
      expect(document.getElementById('character-sheet-name').innerHTML).toEqual(mainCharacter.name + "<br><em>(provisional)</em>");
   })
});
//page three
describe("firstSearch function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      firstSearch();      
   }),
   test("text is displayed", () =>{
      expect(document.getElementById('lower-text').innerHTML).toEqual(pageFour);
   }),
   test("choices are displayed", () => {
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsFour);
   }),
   test("event log updated to log room has been searched", () =>{
      expect(thingsWhatYouveDone.firstRoomSearch).toEqual(true);
   })
});
// there will be a move on function here for the slime page.  and features elsewhere actually!
//page four
describe("keepFirstItem function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      foundItemInfo.score = 20;
      keepFirstItem();      
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(20);
   })
});
describe("ignoreFirstItem function works as intended", ()=>{
   beforeAll(() => {
      mainCharacter.score = 0;
      ignoreFirstItem();      
   }),
   test("score is updated", () =>{
      expect(mainCharacter.score).toEqual(-2);
   })
});
describe("rangarFightChance function works as intended", ()=>{
   afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
   }),
   test("fightChance odds work as expected modifiedand return correct text for true", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(70 / 100);
      thingsWhatYouveDone.encounterLikelihood = 20;
      rangarFightChance();
      expect(document.getElementById('game-text').innerHTML).toEqual(pageFiveCommon + pageFiveFirst);
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsFiveFirst);
   }),
   test("fightChance odds work as expected unmodified and return correct text for false", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(70 / 100);
      thingsWhatYouveDone.encounterLikelihood = 0;
      rangarFightChance();
      expect(document.getElementById('game-text').innerHTML).toEqual(pageFiveCommon + pageFiveSecond);
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsFiveSecond);
   })
});
//page five
describe("testLuck function works as intended", ()=>{
   test("choices section populates as expected", () =>{
      testLuck();
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsSix);
   })
});
describe("braceYourself function works as intended", ()=>{
   beforeEach(() => {
      mainCharacterCurrent.health = 7;
      mainCharacter.score = 3;
      braceYourself();      
   }),
   test("choices section populates as expected", () =>{
      expect(document.getElementById('choices-section').innerHTML).toEqual(optionsSix);
   }),
   test("text section populates as expected", () =>{
      expect(document.getElementById('upper-text').innerHTML).toEqual(pageSixThird + pageSixCommon);
   }),
   test("health object updates as expected", () =>{
      expect(mainCharacterCurrent.health).toEqual(3);
   }),
   test("health updated in DOM", () =>{
      expect(document.getElementById('main-health').innerHTML).toEqual("3");
   })
});
//page six
describe("test ragnarFight function works as intended", ()=>{
   beforeAll(() => {
      ragnarFight(ragnarTheHorrible);
   }),   
   test("fists button child id updated in DOM", () =>{ 
      expect(document.getElementById('fists-button').firstChild.id).toEqual("ragnar-one");
   }),   
   test("weapon button child id updated in DOM", () =>{ 
      expect(document.getElementById('weapon-button').firstChild.id).toEqual("ragnar-two");
   }),   
   test("potion button child id updated in DOM", () =>{ 
      expect(document.getElementById('potion-button').firstChild.id).toEqual("ragnar-three");
   })
});


