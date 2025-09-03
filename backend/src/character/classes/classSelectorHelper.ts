/*
 The goal for this file is to create a helper function to find classes/subclasses that have been implemented to aid with level ups.
*/
import { iClass } from "../interfaces";
import { Alchemist } from "./Alchemist/Alchemist";
import { Chirugeon } from "./Alchemist/Chirugeon/Chirugeon";

export const classSelectorHelper = (classToFind: Lowercase<string>): iClass => {
  switch(classToFind) {
    case "alchemist":
      return new Alchemist;
    case "chirugeon":
      return new Chirugeon;
    default:
      throw`${classToFind} class not yet implemented or does not exist`;
  };  
};
