import { classArchetype } from "../../basicCharacterClass";


//alchemist uses the base character types but implements archetype specific level up, including BaB spells etc
export class Alchemist extends classArchetype {
  name: "alchemist";

  baseAttackBonusProgression = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0};

  addSpell(){};

};