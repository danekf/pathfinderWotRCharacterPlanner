import { iFeat, TRace, iCharacter } from "./interfaces";

const hasPrerequisiteFeat = (characterLevelsMap: any, prerequisiteFeat: iFeat): boolean => {
  let hasPrerequisiteFeat = false;
  let currentLevel = 1;

  // continue searching until feat is found or character level is reached
  while(!hasPrerequisiteFeat && currentLevel <= characterLevelsMap.length){
    const currentLevelData = characterLevelsMap.currentLevel;
    
    if(currentLevelData.feat === prerequisiteFeat.name || currentLevelData.bonusFeat === prerequisiteFeat.name) {
      hasPrerequisiteFeat = true;
    } else {
      currentLevel ++
    };
  };
  return hasPrerequisiteFeat;
};

// const hasPrerequisiteRace = (characterLevelsMap: any, preRequisiteRace: iFeat): boolean => {
//   let hasPrerequisite = false;


//   return hasPrerequisite;
// };

export const validateFeatSelection = (characterLevelsMap: any, featToAdd: iFeat): boolean => {

  if(featToAdd?.preRequisiteFeats){
    hasPrerequisiteFeat(characterLevelsMap, featToAdd)
  };

  // racial validation
  // if(featToAdd.preRequisiteRace){
  //   hasPrerequisiteRace()

  // }

  //if no issues, give the OK
  return true
}