
import BaseLayout from "../../layouts/BaseLayout";
import { useEffect, useState } from "react";


//TODO use type from backend, this is placeholder
interface Character {
  name: string
};


export const Characters = () => {
  // characters map
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(()=>{
    //TODO fetch characters from backend
    setCharacters([{name: "Jhonny do good"},
    {name: "Lotara"}])
  },[])
 
  //TODO the line items should be flowbite tabs instead which shows the character details when clicked.
  return(
    <BaseLayout>
      <div className="content flex flex-col items-center ">
        {characters && 
          <ul>
            {characters.map((character: Character)=>{
              return(
                <li key={character.name}>
                  {character.name}
                </li>
              )
            })}
          <a href='/characters/new'>+New</a>
          </ul>        
        }
      </div>
    </BaseLayout>
  );
};
      

