
// REMOVE ME
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  iCharacterStats,
  iFeat,
  TCharName,
  TGender,
  TRace,
  iCharacter,
  iCharacterFeats,
  iMythicLevel,
  BaseAttackBonusProgression,
  iClass,
  iSpell,
} from "../../shared/types/characterTypesAndInterfaces";

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

  feats = new Map<number, iCharacterFeats>();
  mythicLevels = new Map<number, iMythicLevel>();

  constructor(name: string, gender: TGender, race: TRace, startingStats: iCharacterStats,){
    /*
    [X]get name
    [X]get gender
    [X]get race
      []get chosen racial bonuses
    []validate stats
    []caluculate fortitude, reflex, will saving throws
    []level up to level 1 and apply proper feats, including bonus feats if applicable

    */
    if(this.validateStartingStats(startingStats)){
      this.strength = startingStats.Strength;
      this.dexterity = startingStats.Dexterity;
      this.constitution = startingStats.Constitution;
      this.intelligence = startingStats.Intelligence;
      this.wisdom = startingStats.Wisdom;
      this.charisma = startingStats.Charisma;
    };
    this.name = name;
    this.gender = gender;
    this.race = race;
    //add racial bonuses
    //calculate fort, ref, will
    this.levelUp()

  };

  levelUp(newClass: Lowercase<string>, baseFeat?: iFeat, bonusFeat?: iFeat){
    /*
    level up should 
      [X] take in new class to level up in 
        [X] As string
        ![] As class (This is the better design, setup as the strategy design principle)
      [X] check if level in class exists
      [] check requirements for class and compare to requirements (in the case of prestige class)
      [] add new levelUp data to levelUpsMap
      [X] increase character level by 1
      [X] add feat on every second level up
      [] confirm whether this patter continues for legend 21-40 and adjust accordingly    
    */
   
    this.level+= 1;    
    //if the current level is not divisible by 2 (ie 1,3,5, etc...), then we need to add a feat
    if(this.level % 2 !== 0 && baseFeat){
      try{
        this.addFeat(this.level, baseFeat);
      } catch(error){
        this.removeLevelUp();
        throw new Error(error);

      }
    } else if(this.level % 2 !== 0 && !baseFeat){
        this.removeLevelUp();
        throw new Error("Required level up feat is missing");
    };

    /*
    TODO:

    [] check to see if character has a level in the requested class already.
    [] if so, level up using that classes level up function
    [] if not, attempt to add class via the helper function
    */
    let charHasClass = false;    
    for(const characterClass of this.classes) {
      if(newClass === characterClass.name){
        charHasClass = true;
        characterClass.levelUp()
      };
    };
    if(!charHasClass){
      //if the class is a valid option, add the first level to the classes for this character.
      try {
        const classToAdd = classSelectorHelper(newClass);
        this.classes.push(classToAdd);
      } catch(error){
          this.removeLevelUp();
          throw new Error(error)
        };
     };
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
    /*TODO 
    - adjust each stat bonus based on gear, when gear is implemented. That is why it is not a const
    - loop through all equipped gear
      - if gear has a bonus to stat, compare to current bonuses, and add highest of all unique bonuses
    */
    return statBonuses;    
  };

  //helper functions for level up
  private addFeat(level: number, featToAdd: iFeat, isBonusfeat?: boolean){
    /*
      Add feat should :
      [X]take in level to add feat to
        [X]should be current level
        [X]take in feat to add
      [] check all prerequisites for feat before adding
       [X]if all is good, add to levelUps map 
         * handled by throwing an exception during "checkPrerequisitesForFeat.If any exception is raised, the parent calling addFeat will run "removeLevelUp" to cancel out that level
      [] throw error if there are issues. addFeat is used in tryCatch blocks, so just throw when there is a problem.
    */
    if(level !== this.level){
      throw ("Invalid level for feat, not current level. Please remove levels or correct input level and try again.")
    };

    this.checkPrerequisitesForFeat(featToAdd);
 
    //account for bonus feats by not overriding level if it exists
    let currentLevelFeats: iCharacterFeats = {};
    if(this.feats.get(level)){
      currentLevelFeats = this.feats.get(level);
    };

    if(isBonusfeat){
      currentLevelFeats = {...currentLevelFeats, bonusFeat: featToAdd};
    }else{
      currentLevelFeats = {...currentLevelFeats, feat: featToAdd};
    };
    this.feats.set(level, currentLevelFeats);

  };

  //resets all potential changes from the previous level
  private removeLevelUp(){
    /*
      removeLevelUp is invoked to correct errors and rollback levels one at a time. This can be used to correct errors as well as rollback builds to a set level to choose different paths.
      It should:
      [] remove all data for the latest level up
    */
  };

  private checkPrerequisitesForFeat(feat: iFeat){
    /*
      Should :
        []be able to check prerequisites for feats using what already exists.
        []check all levels for requirements, including subClasses
        []throw proper error if there is one. 
    */

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
    let totalValueOfStats: number = 0;

    // Stop TS from complaining about no unused variable
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(startingStats).map(([key, value]) => {
      /*
        TODO
        [] add to total values for temp validation. to be expanded on and properly types
      */
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

export class classArchetype implements iClass {

  /*
  ------------------------------------------------------------
  PLACEHOLDER VALUES, will be overwritten in class archetypes 
  ------------------------------------------------------------
  */ 
  baseAttackBonusProgression = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0};
  hpPerLevel: { dice: 4 | 6 | 8 | 10 | 12 | 20; numberOfDice: number; }; 

  spellList: [];
  
  constructor(){

  };

  levelUp(){
    /*
      [] account for spells learned per level
      [] add feats at proper levels, if applicable
      [] add special class specific stuff
      []
    */
  };

  addSpell(){
    /*  
      [] add the chosen spell to spellbook
    */
  };


};


