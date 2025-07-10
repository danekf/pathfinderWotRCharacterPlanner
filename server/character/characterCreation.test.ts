import { describe, it } from "node:test";
import test from "node:test";
import assert from "node:assert/strict";


import { MainCharacter } from "./characterClass.js";

test('test runs', () => {
  assert.strictEqual(1,1);
});

// describe('Main Character Class tests', () => {

//   it("create new Character", () => {
//     const char = new MainCharacter('Bon Jovius',
//     {
//       Strength: 10,
//       Dexterity: 16,
//       Constitution: 18,
//       Intelligence: 10,
//       Wisdom: 10,
//       Charisma: 12,
//     },
//     'male',
//     'Human',
//   );
  
//   char.levelUp(1,{className: 'Barbarian', feat: {name:'Big shoes'}});
//   char.levelUp(2,{className: 'Fighter', subclass: 'Titan Fighter', feat: {name: 'Tiny Feet', preRequisiteFeats:{name:'Big shoes'}}});
  
//   console.log(char.getLevelInfo());
//   console.log(char.getStatBonuses());
  
//   });
// });




