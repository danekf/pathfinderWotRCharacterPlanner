export interface iCharacterAttributes {
  Strength: number,
  Dexterity: number,
  Constitution: number,
  Intelligence: number,
  Wisdom: number,
  Charisma: number,
};

type TsidedDice = 4 | 6 | 8 | 10 | 12 | 20;

export type TCharName = {
  name: string
}; // ! TODO attempt to create a type with min and max length of characters, return an error if not met. Might need to be set on frontend, or validated in a separate function within the class however.

export type TGender = 'male' | 'female'; //dont hate, thats just how the game is
export type TRace = 'Aasimar' | 'Dhampir' | 'Elf' | 'Gnome' | 'Half-Elf' | 'Half-Orc' | 'Human' | 'Kitsune' | 'Tiefling';
export type TCasterType = 'Spontaneous' | 'Memorized';
export type TSpellSchool = "Conjuration"| "Evocation" |"Abjuration" | "Necromancy" | "Enchantment" |"Illusion" | "Transmutation" | "Divination" | "Elemental";
export type TSpellTargetSelector = "Personal" | "Enemies" | "Enemies in Area Of Effect" | "Target" | "Target Area Of Effect";
export type TMetamagic = "PLACEHOLDER"; // calculate changes to spells on the frontend, not backend but list the applied metamagics here.

export interface iSpell {
  spellName: string,
  spellSchool: TSpellSchool,
  spellDescription: string,
  spellLevel: number,
  spellTarget: TSpellTargetSelector,
  spellDC: number,
  spellAoe?: number,
  metamagic?: TMetamagic,
  /*
  spellSaves?: {}, //will, fort, reflex, also partial.
  spellRange: number, //could be short/med/long, but should probably have conversion for range in ft.
  */
};

//* bab progression has a specific 
export type BaseAttackBonusProgression = Record<1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20, number>;

export interface iFeat {
  name: string,
  preRequisiteFeats? : iFeat,
  preRequisiteStats?: iCharacterAttributes;
  preRequisiteRace?: TRace;
};

  export interface iCharacter extends TCharName {
  level: number,
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
  gender: TGender,
  race: TRace,

  baseAttackBonus: number,
  fortitude: number,
  will: number,
  reflex: number,

  classes: iClass[],
  //functions
  levelUp(newClass: Lowercase<string>): void,  
};

export interface iClass {
  name: Lowercase<string>
  baseAttackBonusProgression: BaseAttackBonusProgression
  hpPerLevel:{dice: TsidedDice, numberOfDice: number};

  casterType?: TCasterType,
  casterLevel?:number,
  spellList: iSpell[],
  learnedSpells?: Map<number, iSpell[]>, //spell level
  //functions
  levelUp(): void,
  addSpell(): void,
};

export interface iCharacterFeats {
  feat?: iFeat,
  bonusFeat?: iFeat,
};

//PLACEHOLDER
export interface iMythicLevel {
  stuff: string;
};
