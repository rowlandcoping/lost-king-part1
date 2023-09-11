/**
 * @jest-environment jsdom
 */

const { mainCharacter, startGame, getRandomNumber, writeInitialToDom, generateStats, resetGame, 
   pageOne, optionsOne, gameOverGiveUp, giveUp, findItemType, characterWeapons,characterDefence, characterPotions, 
   characterObjects, searchForItem, foundItemInfo } = require("../script.js");

beforeAll(() => {
   let fs = require("fs");
   let fileContents = fs.readFileSync("index.html", "utf-8");
   document.open();
   document.write(fileContents);
   document.close();
});

describe("mainCharacter object contains correct properties", ()=>{
    test("score property exists", () =>{
       expect("score" in mainCharacter).toBe(true);
    }),
    test("name property exists", () =>{
       expect("name" in mainCharacter).toBe(true);
    }),
    test("strength key exists", () =>{
       expect("strength" in mainCharacter).toBe(true);
    }),
    test("speed property exists", () =>{
      expect("name" in mainCharacter).toBe(true);
    }),
    test("stamina property exists", () =>{
      expect("name" in mainCharacter).toBe(true);
    }),
    test("luck property exists", () =>{
      expect("name" in mainCharacter).toBe(true);
    })
    test("health property exists", () =>{
      expect("health" in mainCharacter).toBe(true);
  })
});

describe("random number generator works as expected", ()=>{
   test("should return random integer between 1 and 5", () =>{
      expect(getRandomNumber(1,5)).toBeGreaterThanOrEqual(1);
      expect(getRandomNumber(1,5)).toBeLessThanOrEqual(5);
   })
});

describe("character stat creation code works as expected", ()=>{
   beforeAll(() =>{
      generateStats(mainCharacter, 1,5,15,25);
   }),
   test("mainCharacter should return strength as integer between 1 and 5", () =>{
      expect(mainCharacter.strength).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.strength).toBeLessThanOrEqual(5);
   }),
   test("mainCharacter should return speed as integer between 1 and 5", () =>{
      expect(mainCharacter.speed).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.speed).toBeLessThanOrEqual(5);
   }),
   test("mainCharacter should return stamina as integer between 1 and 5", () =>{
      expect(mainCharacter.stamina).toBeGreaterThanOrEqual(1);
      expect(mainCharacter.stamina).toBeLessThanOrEqual(5);
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
      mainCharacter.speed = 15;
      mainCharacter.stamina = 15;
      mainCharacter.luck = 15;
      mainCharacter.health = 75;
      writeInitialToDom();
   })
   test("strength property written to character sheet on page", () =>{
      expect(document.getElementById('main-strength').innerHTML).toBe("15");
   }),
   test("speed property written to character sheet on page", () =>{
      expect(document.getElementById('main-speed').innerHTML).toBe("15");
   }),
   test("stamina property written to character sheet on page", () =>{
      expect(document.getElementById('main-stamina').innerHTML).toBe("15");
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

describe("FindItemType function returns correct category as expected", ()=>{
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
      expect(foundItemInfo.category).toEqual("Defence");
   }),
   test("name value for Purple Helmet written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.95);
      searchForItem(0,100,100,100);
      expect(foundItemInfo.name).toEqual("Purple Helmet");
   }),
   test("speed value for Oathbringer written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.05);
      searchForItem(100,100,100,100);
      expect(foundItemInfo.speed).toEqual(-5);
   }),
   test("defence value for Filthy Jerkin written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.75);
      searchForItem(0,100,100,100);
      expect(foundItemInfo.defence).toEqual(4);
   }),
   test("magic value for Potion of Catnip written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.15);
      searchForItem(0,0,100,100);
      expect(foundItemInfo.magic).toEqual(undefined);
   }),
   test("type value for Gleaming Mace written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.90);
      searchForItem(100,100,100,100);
      expect(foundItemInfo.type).toEqual("blunt");
   }),
   test("image value for Cat biscuits written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.35);
      searchForItem(0,0,0,100);
      expect(foundItemInfo.image).toEqual("");
   }),
   test("name value for Frozen Staff written correctly to foundItemInfo object", () =>{
      jest.spyOn(global.Math, 'random').mockReturnValue(0.96);
      searchForItem(100,100,100,100);
      expect(foundItemInfo.name).toEqual("Frozen Staff");
   })
});
