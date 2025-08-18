
// REMOVE ME
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { iCharacterStats, iFeat, TCharName, TGender, TRace, iCharacter, iCharacterLevel, iMythicLevel, BaseAttackBonusProgression, iClass } from "./interfaces";

import { validateFeatSelection } from "./featValidation";
import { classSelectorHelper } from "./classes/classSelectorHelper";

/*
Main Character :
- Name
- Level
- Gender
- Race 
- Racial Stuff

- Mythic Levels

- STR
- DEX
- CON
- WIS
- CHA

- Validate Stats (number of points will differ between main character and merc, as well as potentially companions.)

- BAB (Calculated from progression of all bonuses from classes at each level?)

- Feats every 2 levels

*******
- Class choice every level, contained in its own map

------------------------------------
Class
- BAB Progression
- HP per level

*/

export class MainCharacter implements iCharacter {
  //init with constructor
  name: string;
  gender: TGender;
  race: TRace;

  // TODO determine proper starting calculations
  fortitude: number;
  will: number;
  reflex: number;

  //array containing all the character classes.
  classes: iClass[];
  
  //Default starting values
  level: 0;
  strength = 10;
  dexterity = 10;
  constitution = 10;
  intelligence =10;
  wisdom = 10;
  charisma = 10;
  baseAttackBonus=0;

  //map of all character levels, key is the level at which a level of that class was added.

  /*
  Level up example shape
  
  levelUps={
    1:{
      class: classArchetype,
    },
  };
  
  */



  levelUps = new Map<number, iCharacterLevel>();
  mythicLevels = new Map<number, iMythicLevel>();

  private levelUp(newClass: Lowercase<string>){    
    /*level up should 
      - take in new class to level up in 
        - check if level in class exists
        - check requirements for class and compare to requirements (in the case of prestige class)
      - add new levelUp data to levelUpsMap
      - increase character level by 1
      - add feat on every second level up
        - confirm whether this patter continues for legend 21-40 and adjust accordingly

    */

    //check to see if character has a level in the requested class already, if not 
    let hasClass = false;    
    for(const characterClass of this.classes) {
      if(newClass === characterClass.name){
        hasClass = true;
        characterClass.levelUp()
      };
    };

    if(!hasClass){
      //if the class is a valid option, add the first level to the classes for this character.
      try {
        const classToAdd = classSelectorHelper(newClass);
        this.classes.push(classToAdd);
      } catch(error){
        throw new Error(error)
      };
    };



  };

};

export class classArchetype implements iClass {

  /*
  ------------------------------------------------------------
  PLACEHOLDER VALUES, will be overwritten in class archetypes 
  ------------------------------------------------------------
  */ 
  baseAttackBonusProgression = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0};
  hpPerLevel: { dice: 4 | 6 | 8 | 10 | 12 | 20; numberOfDice: number; }; 
  


  
  constructor(){

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


  //helper functions for level up
  private addFeat(){
  };

  private setBaseAttackBonus(){

  };

  private calculateCmbAndCmd(){
    //CMB = BAB + StrBonus + mSize(size bonus of some sort? = 0 for med char)
    //CMD = 10 + BAB + StrBonus + DexBonus + mSize + mMisc (misc size bonuses such as from spells)
  };

  private calculateNumOfAttacks(){
    /*Base Attack Bonus
      A base attack bonus is an attack roll bonus derived from character class and level or creature type and Hit Dice (or combination’s thereof). Base attack bonuses increase at different rates for different character classes and creature types. A second attack is gained when a base attack bonus reaches +6, a third with a base attack bonus of +11 or higher, and a fourth with a base attack bonus of +16 or higher. Base attack bonuses gained from different sources, such as when a character is a multiclass character, stack.
    */
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


