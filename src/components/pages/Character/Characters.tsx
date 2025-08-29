import { TabItem,Tabs } from "flowbite-react";
import BaseLayout from "../../layouts/BaseLayout";
import { useEffect, useState } from "react";
import { CreateCharacter } from "./CreateCharacter/CreateCharacter";


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
 
  {characters.map((character: Character)=>{
    return(
      <li key={character.name}>
        {character.name}
      </li>
    )
  })}
  <a href='/characters/new'>+New</a>
 
  return(
    <BaseLayout>
      <div className="content flex flex-col items-center ">
        <Tabs aria-label="character Tabs" variant="default">
          {characters.map((character)=>{
            return(
              <TabItem title={character.name}>
                {character.name}
              </TabItem>
            )
          })}
          <TabItem title="+ New character">
            <CreateCharacter />
          </TabItem>
        </Tabs>

      </div>
    </BaseLayout>
  );
};
      

