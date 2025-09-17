import {expect, test} from 'vitest';

import { BasicCharacter } from "./basicCharacterClass";

test('Creates a new Main Character', () => {
  const char = new BasicCharacter('Bon Jovius',
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
  expect(char.getStatBonuses()).toStrictEqual({
    Strength: 0,
    Dexterity: 3,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 1
  });
});


