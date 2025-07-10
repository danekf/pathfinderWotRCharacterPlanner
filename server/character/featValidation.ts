import { iFeat, TRace } from "./interfaces";



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

const hasPrerequisiteRace = (featToAdd: iFeat, race: TRace ): boolean => {
  let hasPrerequisite = false;

  if(featToAdd.preRequisiteRace === race){
    hasPrerequisite = true;
  };
  return hasPrerequisite;
};

export const validateFeatSelection = (characterLevelsMap: any, featToAdd: iFeat, race: TRace): boolean => {

  if(featToAdd?.preRequisiteFeats){
    hasPrerequisiteFeat(characterLevelsMap, featToAdd)
  };

  if(featToAdd?.preRequisiteRace){
    hasPrerequisiteRace(featToAdd, race)
  };

  //if no issues, give the OK
  return true
}