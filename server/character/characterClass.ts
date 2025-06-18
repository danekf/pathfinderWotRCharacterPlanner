

interface iCharacterStats {
  Strength: number,
  Dexterity: number,
  Constitution: number,
  Intelligence: number,
  Wisdom: number,
  Charisma: number,
};

interface iFeat {
  name: string,
  preRequisiteFeats? : iFeat[],
  // preRequisiteStats?: characterStats
};

interface TCharName {
  name: string

}; // attempt to create a type with min and max length of characters, return an error if not met. Might need to be set on frontend, or validated in a separate function within the class however.

interface iCharacter extends TCharName {
  level: number,
  Strength: number,
  Dexterity: number,
  Constitution: number,
  Intelligence: number,
  Wisdom: number,
  Charisma: number,
};

interface iCharacterLevel {
  className: string,
  subclass?: string,
  feat: iFeat,
}; // needs to be heavily expanded. Currently just a palceholder to add and map over basic feats.


class MainCharacter implements iCharacter {
  //init
  name = 'default';
  level = 1;
  Strength = 10;
  Dexterity = 10;
  Constitution = 10;
  Intelligence =10;
  Wisdom = 10;
  Charisma = 10;
  

  //map of all character levels, key is the level at which a level of that class was added.
  levelUps = new Map<number, iCharacterLevel>()
  
  constructor(name:string, startingStats: iCharacterStats){
    this.name = name;
    this.level = 1;
    this.Strength = startingStats.Strength;
    this.Dexterity = startingStats.Dexterity;
    this.Constitution = startingStats.Intelligence;
    this.Wisdom = startingStats.Wisdom;
    this. Charisma = startingStats.Charisma;
    
  };

  levelUp(charLevel:number, levelUpData: iCharacterLevel){
    if(this.levelUps.has(charLevel)){
      return `Unable to level up, level ${charLevel} already exists.`;
    }

    this.levelUps.set(charLevel, levelUpData); // extreme placeholder setter. Lots of validation required.
  };

  getLevelInfo(requestedLevel?: number){
    if(requestedLevel){
      return this.levelUps.get(requestedLevel)
    }
    return this.levelUps
  };

  addFeat(){

  };

}

const char = new MainCharacter('Bon Jovius', {
    Strength: 10,
    Dexterity: 16,
    Constitution: 18,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 12,
  }
);
char.levelUp(1,{className: 'Barbarian', feat: {name:'Big shoes'}});
char.levelUp(2,{className: 'Fighter', subclass: 'Titan Fighter', feat: {name: 'Tiny Feet'}});
console.log(char.getLevelInfo());

export default MainCharacter;