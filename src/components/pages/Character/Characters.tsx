import { TabItem,Tabs, ThemeProvider } from "flowbite-react";
import { useEffect, useState } from "react";

//app level imports
import BaseLayout from "../../layouts/BaseLayout";
import { CreateCharacter } from "./CreateCharacter/CreateCharacter";
import { ShowCharacter } from "./showCharacter/ShowCharacter";
import { getCharacters } from "../../../helpers/getCharacters";

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
      ? tanstack or other might be good
    [] Validate character conforms to interface
    [] setCharacters data to state
    */
    setCharacters([
      {name: "Trazyn The Infinite"},
      {name: "Lotara"},
      {name: "Jobius Probius"},
    ])



  },[])

  return(
    <BaseLayout>
      <div className="content grid grid-col items-center">
        <ThemeProvider >
          <Tabs aria-label="character Tabs" variant="default" >
            {characters.map((character)=>{
              return(
                <TabItem title={character.name}>
                  <ShowCharacter character={character} />
                </TabItem>
              )
            })}
            <TabItem title="+ New character" >
              <CreateCharacter />
            </TabItem>
          </Tabs>
        </ThemeProvider>
      </div>
    </BaseLayout>
  );
};


