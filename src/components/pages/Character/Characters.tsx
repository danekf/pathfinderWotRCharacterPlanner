import { TabItem,Tabs } from "flowbite-react";
import BaseLayout from "../../layouts/BaseLayout";
import { useEffect, useState } from "react";
import { CreateCharacter } from "./CreateCharacter/CreateCharacter";
import { ShowCharacter } from "./showCharacter/ShowCharacter";


//TODO use interface from backend, this is placeholder
interface Character {
  name: string
};


export const Characters = () => {
  // characters map
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(()=>{
    /*
    TODO 

    [] fetch characters from backend
    [] Validate character conforms to interface
    [] setCharacters data to state
    */
    setCharacters([{name: "Trazyn The Infinite"},
    {name: "Lotara"}])
  },[])
  
  return(
    <BaseLayout>
      <div className="content flex flex-col items-center">
        <Tabs aria-label="character Tabs" variant="fullWidth">
          {characters.map((character)=>{
            return(
              <TabItem title={character.name}>
                <ShowCharacter character={character} />
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
      

