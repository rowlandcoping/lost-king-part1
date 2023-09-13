/**
 * @jest-environment jsdom
 */

const { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
   pageOne, optionsOne, gameOverGiveUp, giveUp, findItemType, characterWeapons,characterDefence, characterPotions, 
   characterObjects, searchForItem, foundItemInfo, setEnemyStats, ragnarTheHorrible, mainCharacterCurrent, 
   itemStorage, currentWeapon, currentDefence, currentPotion, currentObject, thingsWhatYouveDone, playerTestResistances, 
   enemyTestResistances } = require("../script.js");

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



// BATTLE FUNCTIONS TESTING

//test player turn resistances function
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
      expect(playerTestResistances(ragnarTheHorrible)).toBe(0.5);
   }),
   test("enemy fire vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "fire";
      currentWeapon.magic = "fire";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(2);
   }),
   test("enemy ice resist works correctly", () =>{
      ragnarTheHorrible.resist = "ice";
      currentWeapon.magic = "ice";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(0.5);
   }),
   test("enemy ice vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "ice";
      currentWeapon.magic = "ice";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(2);
   }),
   test("enemy sharp weapons resist works correctly", () =>{
      ragnarTheHorrible.resist = "sharp";
      currentWeapon.type = "sharp";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(0.5);
   }),
   test("enemy sharp weapons vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "sharp";
      currentWeapon.type = "sharp";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(2);
   }),
   test("enemy blunt weapons resist works correctly", () =>{
      ragnarTheHorrible.resist = "blunt";
      currentWeapon.type = "blunt";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(0.5);
   }),
   test("enemy blunt weapons vulnerability works correctly", () =>{
      ragnarTheHorrible.vulnerability = "blunt";
      currentWeapon.type = "blunt";
      expect(playerTestResistances(ragnarTheHorrible)).toBe(2);
   })
});
//test enemy turn resistances function
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
      expect(enemyTestResistances(ragnarTheHorrible)).toBe(2);
   }),
   test("player fire resist works correctly", () =>{
      ragnarTheHorrible.magic = "fire";
      currentDefence.resist = "fire";
      expect(enemyTestResistances(ragnarTheHorrible)).toBe(0.5);
   }),
   test("player ice vulnerability works correctly", () =>{
      ragnarTheHorrible.magic = "ice";
      mainCharacterCurrent.vulnerability = "ice";
      expect(enemyTestResistances(ragnarTheHorrible)).toBe(2);
   }),
   test("player ice resist works correctly", () =>{
      ragnarTheHorrible.magic = "ice";
      currentDefence.resist = "ice";
      expect(enemyTestResistances(ragnarTheHorrible)).toBe(0.5);
   })
});


// GAMEPLAY FUNCTIONS TESTING
describe("start game function works as intended", ()=>{
   beforeAll(() => {
      document.getElementById('character-name').value = "Randy Tangent";
      mainCharacter.score=150;
      startGame();
   }),
   test("name field in mainCharacter correctly populated", () =>{
      expect(mainCharacter.name).toBe("Randy Tangent");
   }),
   test("Score is reset to zero", () =>{
      expect(mainCharacter.score).toEqual(0);
   })

});

describe("write character info works as intended", () => {
   beforeAll(() => {
      mainCharacter.strength = 15;
      mainCharacter.skill = 15;
      mainCharacter.defence = 15;
      mainCharacter.luck = 15;
      mainCharacter.health = 75;
      writeInitialToDom();
   })
   test("strength property written to character sheet on page", () =>{
      expect(document.getElementById('main-strength').innerHTML).toBe("15");
   }),
   test("speed property written to character sheet on page", () =>{
      expect(document.getElementById('main-skill').innerHTML).toBe("15");
   }),
   test("stamina property written to character sheet on page", () =>{
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
   test("game page is displayed", () =>{
      expect(document.getElementById('game-page').style.display).toBe("flex");
   })
   
});

describe("first page text displays as intended", ()=>{
   beforeAll(() => {
      writeInitialToDom();
   }),
   test("story content appears as intended", () =>{
      expect(document.getElementById('game-text').innerHTML).toBe(pageOne);
   }),
   test("story options appear as intended", () =>{
      expect(document.getElementById('choices-section').innerHTML).toBe(optionsOne);
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
   })
});

describe("ensure gameOverGiveUp function works as intended", ()=>{
   beforeAll(() => {
      gameOverGiveUp();      
   }),
   test("game over page is displayed", () =>{
      expect(document.getElementById('gameover-page').style.display).toBe("flex");
   }),
   test("game page is hidden", () =>{
      expect(document.getElementById('game-page').style.display).toBe("none");
   }),
   test("game over text is displayed", () =>{
      expect(document.getElementById('game-outcome').innerHTML).toBe(giveUp);
   })
});


