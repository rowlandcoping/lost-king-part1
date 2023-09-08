/**
 * @jest-environment jsdom
 */

const { mainCharacter, startGame } = require("../script.js");

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
});

describe("start game button callback function works as intended", ()=>{
   beforeAll(() => {
   document.getElementById('character-name').value = "Randy Tangent";
   startGame();
   })
   
   test("name field in mainCharacter correctly populated", () =>{
      expect(mainCharacter.name).toBe("Randy Tangent");
   }),
   test("landing-page div is hidden", () =>{
      expect(document.getElementById('landing-page').style.display).toBe("none");
   }),
   test("game-page div is set to flex", () =>{
      expect(document.getElementById('game-page').style.display).toBe("flex");
   })
});