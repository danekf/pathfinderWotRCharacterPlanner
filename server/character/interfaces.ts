export interface iCharacterStats {
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
}; // attempt to create a type with min and max length of characters, return an error if not met. Might need to be set on frontend, or validated in a separate function within the class however.

export type TGender = 'male' | 'female'; //dont hate, thats just how the game is
export type TRace = 'Aasimar' | 'Dhampir' | 'Elf' | 'Gnome' | 'Half-Elf' | 'Half-Orc' | 'Human' | 'Kitsune' | 'Tiefling';
export type TCasterType = 'Spontaneous' | 'Memorized';


// bab progression has a specific
export type BaseAttackBonusProgression = Record<1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20, number>;

export interface iFeat {
  name: string,
  preRequisiteFeats? : iFeat,
  preRequisiteStats?: iCharacterStats;
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
  levelup(): void,
  
};

export interface iClass {
  name: Lowercase<string>
  baseAttackBonusProgression: BaseAttackBonusProgression
  hpPerLevel:{dice: TsidedDice, numberOfDice: number};
  casterType?: TCasterType,
  levelUp(): void,   

};

export interface iCharacterLevel {
  // className: string,
  // subclass?: string,
  feat: iFeat,
  bonusFeat?: iFeat,

}; // needs to be heavily expanded. Currently just a palceholder to add and map over basic feats.

//PLACEHOLDER
export interface iMythicLevel {
  stuff: string;
};
