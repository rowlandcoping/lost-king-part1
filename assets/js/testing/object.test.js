/**
 * @jest-environment jsdom
 */

const { mainCharacter, ragnarTheHorrible, mainCharacterCurrent, characterWeapons, characterDefence, characterPotions, 
    characterObjects, currentWeapon, currentDefence, currentPotion, currentObject, foundItemInfo,thingsWhatYouveDone } = require("../script.js");
 
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
 });
 
 // CHARACTER OBJECT TESTING

 //main character object tests 
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
    test("skill property exists", () =>{
      expect("skill" in mainCharacter).toBe(true);
    }),
    test("defence property exists", () =>{
      expect("defence" in mainCharacter).toBe(true);
    }),
    test("luck property exists", () =>{
      expect("luck" in mainCharacter).toBe(true);
    })
    test("health property exists", () =>{
      expect("health" in mainCharacter).toBe(true);
  })
 });
 describe("mainCharacterCurrent object contains correct properties", ()=>{
   test("luck property exists", () =>{
      expect("luck" in mainCharacterCurrent).toBe(true);
   }),
   test("health property exists", () =>{
      expect("health" in mainCharacterCurrent).toBe(true);
   }),
   test("strength key exists", () =>{
      expect("strength" in mainCharacterCurrent).toBe(true);
   }),
   test("defence property exists", () =>{
     expect("defence" in mainCharacterCurrent).toBe(true);
   }),
   test("magic property exists", () =>{
     expect("magic" in mainCharacterCurrent).toBe(true);
   }),
   test("resit property exists", () =>{
     expect("resist" in mainCharacterCurrent).toBe(true);
   }),
   test("vulnerability property exists", () =>{
     expect("vulnerability" in mainCharacterCurrent).toBe(true);
   })
 });

//enemy character object tests 
 describe("Ragnar Character object contains correct properties", ()=> {
   test("name property exists", () =>{
      expect("name" in ragnarTheHorrible).toBe(true);
   }),
   test("description property exists", () =>{
      expect("description" in ragnarTheHorrible).toBe(true);
   }),
   test("strength property exists", () =>{
      expect("strength" in ragnarTheHorrible).toBe(true);
   }),
   test("skill property exists", () =>{
      expect("skill" in ragnarTheHorrible).toBe(true);
   }),
   test("defence property exists", () =>{
      expect("defence" in ragnarTheHorrible).toBe(true);
   }),
   test("health property exists", () =>{
      expect("health" in ragnarTheHorrible).toBe(true);
   }),
   test("image property exists", () =>{
      expect("image" in ragnarTheHorrible).toBe(true);
   }),
   test("vulnerability property exists", () =>{
      expect("vulnerability" in ragnarTheHorrible).toBe(true);
   }),
   test("resist property exists", () =>{
      expect("resist" in ragnarTheHorrible).toBe(true);
   }),
   test("magic property exists", () =>{
      expect("magic" in ragnarTheHorrible).toBe(true);
   }),
   test("score property exists", () =>{
      expect("score" in ragnarTheHorrible).toBe(true);
   }),
   test("initialText property exists", () =>{
      expect("initialText" in ragnarTheHorrible).toBe(true);
   }),
   test("successTextOne property exists", () =>{
      expect("successTextOne" in ragnarTheHorrible).toBe(true);
   }),
   test("successTextTwo property exists", () =>{
      expect("successTextTwo" in ragnarTheHorrible).toBe(true);
   }),
   test("deathText property exists", () =>{
      expect("deathText" in ragnarTheHorrible).toBe(true);
   }),
   test("failText property exists", () =>{
      expect("failText" in ragnarTheHorrible).toBe(true);
   }),
   test("hitText property exists", () =>{
      expect("hitText" in ragnarTheHorrible).toBe(true);
   }),
   test("killedYouText property exists", () =>{
      expect("killedYouText" in ragnarTheHorrible).toBe(true);
   }),
   test("missedText property exists", () =>{
      expect("missedText" in ragnarTheHorrible).toBe(true);
   }),
   test("choices property exists", () =>{
      expect("choices" in ragnarTheHorrible).toBe(true);
   })
 });

//ITEM OBJECT TESTING

//item object tests 
describe("characterWeapons array objects all contain correct properties", ()=>{
    test("category property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("category" in thing).toBe(true);
        }); 
    }),
    test("adjective property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("adjective" in thing).toBe(true);
        }); 
    }),
    test("name property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("name" in thing).toBe(true);
        }); 
    }),
    test("attack property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("attack" in thing).toBe(true);
        }); 
    }),
    test("skill property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("skill" in thing).toBe(true);
        }); 
    }),
    test("magic property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("magic" in thing).toBe(true);
        }); 
    }),
    test("type property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("type" in thing).toBe(true);
        }); 
    }),
    test("image property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("image" in thing).toBe(true);
        }); 
    }),
    test("chance property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("chance" in thing).toBe(true);
        }); 
    }),
    test("score property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("score" in thing).toBe(true);
        }); 
    }),
    test("description property in all objects", () =>{
        characterWeapons.forEach((thing) => {
          expect("description" in thing).toBe(true);
        }); 
    })
});

describe("characterDefence array objects all contain correct properties", ()=>{
    test("category property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("category" in thing).toBe(true);
        }); 
    }),
    test("adjective property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("adjective" in thing).toBe(true);
        }); 
    }),
    test("name property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("name" in thing).toBe(true);
        }); 
    }),
    test("defence property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("defence" in thing).toBe(true);
        }); 
    }),
    test("resist property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("resist" in thing).toBe(true);
        }); 
    }),
    test("image property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("image" in thing).toBe(true);
        }); 
    }),
    test("chance property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("chance" in thing).toBe(true);
        }); 
    }),
    test("score property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("score" in thing).toBe(true);
        }); 
    }),
    test("description property in all objects", () =>{
        characterDefence.forEach((thing) => {
          expect("description" in thing).toBe(true);
        }); 
    })
});

describe("characterPotions array objects all contain correct properties", ()=>{
    test("category property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("category" in thing).toBe(true);
        }); 
    }),
    test("adjective property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("adjective" in thing).toBe(true);
        }); 
    }),
    test("name property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("name" in thing).toBe(true);
        }); 
    }),
    test("effect property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("effect" in thing).toBe(true);
        }); 
    }),
    test("image property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("image" in thing).toBe(true);
        }); 
    }),
    test("chance property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("chance" in thing).toBe(true);
        }); 
    }),
    test("score property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("score" in thing).toBe(true);
        }); 
    }),
    test("description property in all objects", () =>{
        characterPotions.forEach((thing) => {
          expect("description" in thing).toBe(true);
        }); 
    })
});

describe("characterObjects array objects all contain correct properties", ()=>{
    test("category property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("category" in thing).toBe(true);
        }); 
    }),
    test("adjective property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("adjective" in thing).toBe(true);
        }); 
    }),
    test("name property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("name" in thing).toBe(true);
        }); 
    }),
    test("effect property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("effect" in thing).toBe(true);
        }); 
    }),
    test("image property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("image" in thing).toBe(true);
        }); 
    }),
    test("chance property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("chance" in thing).toBe(true);
        }); 
    }),
    test("score property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("score" in thing).toBe(true);
        }); 
    }),
    test("description property in all objects", () =>{
        characterObjects.forEach((thing) => {
          expect("description" in thing).toBe(true);
        }); 
    })
});

//current item object tests

describe("currentWeapon contains correct properties", ()=>{
    test("name property exists", () =>{
        expect("name" in currentWeapon).toBe(true);
     }),
    test("attack property exists", () =>{
        expect("attack" in currentWeapon).toBe(true);
    }),
    test("skill property exists", () =>{
        expect("skill" in currentWeapon).toBe(true);
    }),
    test("magic property exists", () =>{
        expect("magic" in currentWeapon).toBe(true);
    }),
    test("type property exists", () =>{
        expect("type" in currentWeapon).toBe(true);
    }),
    test("image property exists", () =>{
        expect("image" in currentWeapon).toBe(true);
    })
});
describe("currentDefence contains correct properties", ()=>{
    test("name property exists", () =>{
        expect("name" in currentDefence).toBe(true);
    }),
    test("defence property exists", () =>{
        expect("defence" in currentDefence).toBe(true);
    }),
    test("image property exists", () =>{
        expect("image" in currentDefence).toBe(true);
    }),
    test("magic property exists", () =>{
        expect("magic" in currentDefence).toBe(true);
    })
});
describe("currentPotion contains correct properties", ()=>{
    test("name property exists", () =>{
        expect("name" in currentPotion).toBe(true);
    }),
    test("effect property exists", () =>{
        expect("effect" in currentPotion).toBe(true);
    }),
    test("image property exists", () =>{
        expect("image" in currentPotion).toBe(true);
    })
});
describe("currentObject contains correct properties", ()=>{
    test("name property exists", () =>{
        expect("name" in currentObject).toBe(true);
    }),
    test("effect property exists", () =>{
        expect("effect" in currentObject).toBe(true);
    }),
    test("image property exists", () =>{
        expect("image" in currentObject).toBe(true);
    })
});

//found item object tests

describe("foundItemInfo contains correct properties", ()=>{
    test("category property exists", () =>{
        expect("category" in foundItemInfo).toBe(true);
    }),
    test("name property exists", () =>{
        expect("name" in foundItemInfo).toBe(true);
    }),
    test("attack property exists", () =>{
        expect("attack" in foundItemInfo).toBe(true);
    }),
    test("skill property exists", () =>{
        expect("skill" in foundItemInfo).toBe(true);
    }),
    test("magic property exists", () =>{
        expect("magic" in foundItemInfo).toBe(true);
    }),
    test("type property exists", () =>{
        expect("type" in foundItemInfo).toBe(true);
    }),
    test("image property exists", () =>{
        expect("image" in foundItemInfo).toBe(true);
    }),
    test("resist property exists", () =>{
        expect("resist" in foundItemInfo).toBe(true);
    }),
    test("effect property exists", () =>{
        expect("effect" in foundItemInfo).toBe(true);
    }),
    test("defence property exists", () =>{
        expect("defence" in foundItemInfo).toBe(true);
    }),
    test("score property exists", () =>{
        expect("score" in foundItemInfo).toBe(true);
    }),
    test("description property exists", () =>{
        expect("description" in foundItemInfo).toBe(true);
    })
});

// dynamic game state object (thingsWhatYouveDone) contains initial properties in correct state

describe("thingsWhatYouveDone object contains properties in correct state", ()=>{
    test("firstRoomSearch property set to false", () =>{
        expect(thingsWhatYouveDone.firstRoomSearch).toEqual(false);
    }),
    test("slimeKill property set to false", () =>{
        expect(thingsWhatYouveDone.slimeKill).toEqual(false);
    }),
    test("encounterLikelihood property set to 0", () =>{
        expect(thingsWhatYouveDone.encounterLikelihood).toEqual(0);
    })
});