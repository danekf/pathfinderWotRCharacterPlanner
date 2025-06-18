

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

type TCharName = {
  name: string

}; // attempt to create a type with min and max length of characters, return an error if not met. Might need to be set on frontend, or validated in a separate function within the class however.

type TGender = 'male' | 'female';

interface iCharacter extends TCharName {
  level: number,
  strength: number,
  dexterity: number,
  constitution: number,
  intelligence: number,
  wisdom: number,
  charisma: number,
  gender: TGender

};

interface iCharacterLevel {
  className: string,
  subclass?: string,
  feat: iFeat,
}; // needs to be heavily expanded. Currently just a palceholder to add and map over basic feats.


class MainCharacter implements iCharacter {
  //init
  name: string;
  level: number;
  gender: TGender;

    //Default starting values
  strength = 10;
  dexterity = 10;
  constitution = 10;
  intelligence =10;
  wisdom = 10;
  charisma = 10;
  
  

  //map of all character levels, key is the level at which a level of that class was added.
  levelUps = new Map<number, iCharacterLevel>()
  
  constructor(name:string, startingStats: iCharacterStats, gender: TGender,){
    this.name = name;
    this.gender = gender;
    this.level = 1;

    if(this.validateStartingStats(startingStats)){
      this.strength = startingStats.Strength;
      this.dexterity = startingStats.Dexterity;
      this.constitution = startingStats.Intelligence;
      this.wisdom = startingStats.Wisdom;
      this.charisma = startingStats.Charisma;
    } else {
        throw new Error('starting stats are invalid.')
    };
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

  private validateStartingStats(startingStats: iCharacterStats){
    let validStats = true;
    //do stuff and test
    let totalValueOfStats = 0;

    // Stop TS from complaining about no unused variable
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(startingStats).map(([key, value]) => {
      //add to total values for temp validation. to be expanded on
      totalValueOfStats += value;
    })

    //temp validation, must be expanded
    if(totalValueOfStats< 40){
      validStats = false;
    }

    //return results of stats
    return validStats;
  };
};

const char = new MainCharacter('Bon Jovius',
  {
    Strength: 10,
    Dexterity: 16,
    Constitution: 18,
    Intelligence: 10,
    Wisdom: 10,
    Charisma: 12,
  },
  'male'
);
char.levelUp(1,{className: 'Barbarian', feat: {name:'Big shoes'}});
char.levelUp(2,{className: 'Fighter', subclass: 'Titan Fighter', feat: {name: 'Tiny Feet'}});
console.log(char.getLevelInfo());

export default MainCharacter;