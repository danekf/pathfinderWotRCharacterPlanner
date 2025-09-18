import { iCharacterStats } from "../../shared/types/characterTypesAndInterfaces";

interface classStrategy {
  //TODO - return level up info for that character level
  addLevelOf(): void;
}

interface characterType {
  pointsToSpendAtCreation: number;
  validateStartingStats(startingStats: iCharacterStats): boolean;
}

class MainCharacter implements characterType {
  pointsToSpendAtCreation: 25;
  validateStartingStats(startingStats: iCharacterStats): boolean {
    //TODO - Calculate validity of stats
    return true;
  }
}
class MercenaryCharacter implements characterType {
  pointsToSpendAtCreation: 15;
  validateStartingStats(startingStats: iCharacterStats): boolean {
    //TODO - Calculate validity of stats
    return true;
  }
}

class Alchemist implements classStrategy {
  addLevelOf() {
    console.log("leveling up as Alchemist");
  }
}

class Character implements iCharacterStats {
  name: string;
  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;
  /*
  TODO
    [] Different starting stats/points for a main character vs a merc
      [] As a strategy in constructor to differentiate. 
  */
  constructor(
    name: string,
    characterType: characterType,
    startingStats: iCharacterStats,
  ) {
    this.name = name;
    if (characterType.validateStartingStats(startingStats)) {
      this.Strength = startingStats.Strength;
      this.Dexterity = startingStats.Dexterity;
      this.Constitution = startingStats.Constitution;
      this.Intelligence = startingStats.Intelligence;
      this.Wisdom = startingStats.Wisdom;
      this.Charisma = startingStats.Charisma;
    } else {
      throw new Error("Starting stats are not valid for character type");
    }
  }

  levelUp(newClass: classStrategy) {
    newClass.addLevelOf();
  }
}
