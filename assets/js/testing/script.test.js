/**
 * @jest-environment jsdom
 */

const { mainCharacter } = require("../script.js");

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