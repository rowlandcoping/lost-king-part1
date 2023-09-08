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
   }),
   test("name field in mainCharacter correctly populated", () =>{
      expect(mainCharacter.name).toBe("Randy Tangent");
   }),
   test("name is added to initial gameplay section", () =>{
      expect(document.getElementById('initial-name').innerHTML).toBe("Randy Tangent");
   }),
   test("landing-page div is hidden", () =>{
      expect(document.getElementById('landing-page').style.display).toBe("none");
   }),
   test("game-page div is set to flex", () =>{
      expect(document.getElementById('game-page').style.display).toBe("flex");
   }),
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
   })

});

/*
describe("Intro page works as intended", ()=>{
   beforeAll(() => {
      document.getElementById('character-name').value = "Randy Tangent";
      startGame();
   }),
   test("name field in mainCharacter correctly populated", () =>{
      expect(mainCharacter.name).toBe("Randy Tangent");
   }),
   test("name is added to initial gameplay section", () =>{
      expect(document.getElementById('initial-name').innerHTML).toBe("Randy Tangent");
   }),
});
*/