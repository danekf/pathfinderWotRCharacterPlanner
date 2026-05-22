import { iCharacterStats } from "../../shared/types/characterTypesAndInterfaces";

interface classStrategy {
  //TODO - return level up info for that character level
  addLevelOf(): void;
}

interface characterStrategy {
  pointsToSpendAtCreation: number;
  validateStartingStats(startingStats: iCharacterStats): boolean;
}

class MainCharacter implements characterStrategy {
  pointsToSpendAtCreation: 25;
  validateStartingStats(startingStats: iCharacterStats): boolean {
    //TODO - Calculate validity of stats
    return true;
  }
}
class MercenaryCharacter implements characterStrategy {
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
  Level: number;

  constructor(
    name: string,
    characterType: characterStrategy,
    startingStats: iCharacterStats,
  ) {
    this.name = name;
    this.Level = 0;
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
