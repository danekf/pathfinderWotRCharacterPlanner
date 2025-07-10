
// REMOVE ME
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { iCharacterStats, iFeat, TCharName, TGender, TRace, iCharacter, iCharacterLevel, iMythicLevel } from "./interfaces";

import { validateFeatSelection } from "./featValidation";

export class MainCharacter implements iCharacter {
  //init
  name: string;
  level: number;
  gender: TGender;
  race: TRace;

  //Default starting values
  strength = 10;
  dexterity = 10;
  constitution = 10;
  intelligence =10;
  wisdom = 10;
  charisma = 10;

  //map of all character levels, key is the level at which a level of that class was added.
  characterLevelUps = new Map<number, iCharacterLevel>();
  mythicLevels = new Map<number, iMythicLevel>();
  
  constructor(name:string, startingStats: iCharacterStats, gender: TGender, race: TRace,){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.race = race;

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

  levelUp(charLevel:number, newLevelUpData: iCharacterLevel){
    //validate level does not already exist
    if(this.characterLevelUps.has(charLevel)){
      return new Error (`Unable to level up, level ${charLevel} already exists.`);
    };
    // validate feat selection
    if(!validateFeatSelection(this.characterLevelUps, newLevelUpData.feat, this.race)){
      return new Error('Feat Selection invalid')      
    };
    //valiate any bonus feats
    if(newLevelUpData?.bonusFeat){
      if(!validateFeatSelection(this.characterLevelUps, newLevelUpData.bonusFeat, this.race)){
        return new Error('Bonus Feat Selection invalid')   
      };
    };
    // Lots more validation required.
    this.characterLevelUps.set(charLevel, newLevelUpData); 
  };

  getLevelInfo(requestedLevel?: number){
    if(requestedLevel){
      return this.characterLevelUps.get(requestedLevel)
    }
    return this.characterLevelUps
  };

  getStatBonuses(): iCharacterStats {
    // eslint-disable-next-line prefer-const
    let statBonuses = {
      Strength: (this.strength -10)/2,
      Dexterity: (this.dexterity -10)/2,
      Constitution: (this.constitution -10)/2,
      Intelligence: (this.intelligence -10)/2,
      Wisdom:(this.wisdom -10)/2,
      Charisma:(this.charisma -10)/2,
    };
    /*TODO adjust each stat bonus based on gear, when gear is implemented. That is why it is not a const
    
    - loop through all equipped gear
      - if gear has a bonus to stat, compare to current bonuses, and add highest of all unique bonuses
    */

    return statBonuses;    
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
    });

    //temp validation, must be expanded
    if(totalValueOfStats< 40){
      validStats = false;
    };
    //return results of stats
    return validStats;
  };
};


