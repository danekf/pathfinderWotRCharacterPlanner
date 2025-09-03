// Note: Doesnt use the base layout as it is part of a flowbite tab group
import { useState } from "react";
import CurrentCharacterProgression from "../currentCharacterProgression/currentCharacterProgression";

/* TODO
  [] modal for "currentCharacterProgression"
    ?using another flowbite tab
  []
*/

export const CreateCharacter = () => {
  const [characterData, setCharacterData] = useState({name: "Trazyn The Infinite 2"});

  /*
    clickSave should:
      [] Validate form data
      [] Send to backend
      [] Get confirmation from backend
      [] reload page on confirm
  */
  const clickSave = () => {   
    location.reload();
  };

  return(
      <div className="content flex flex-col items-center gap-8">
        <h3>Create New Character Here!</h3>
        <CurrentCharacterProgression character={characterData} editMode={true} />
        <button className="save" onClick={()=>clickSave()}>Save Character</button>

      </div>
  )
};

