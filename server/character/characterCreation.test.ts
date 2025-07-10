import {expect, test} from 'vitest';

import { MainCharacter } from "./characterClass";

test('Creates a new Main Character', () => {
  const char = new MainCharacter('Bon Jovius',
  {
    Strength: 10,
    Dexterity: 16,
    Constitution: 18,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 12,
  },
  'male',
  'Human',
);

char.levelUp(1,{className: 'Barbarian', feat: {name:'Big shoes'}});
char.levelUp(2,{className: 'Fighter', subclass: 'Titan Fighter', feat: {name: 'Tiny Feet', preRequisiteFeats:{name:'Big shoes'}}});

console.log(char.getLevelInfo());
console.log(char.getStatBonuses());

//dummy expect
expect(1).toBe(1);

});


