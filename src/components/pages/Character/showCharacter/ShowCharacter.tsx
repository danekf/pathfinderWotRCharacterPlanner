import CurrentCharacterProgression from "../currentCharacterProgression/currentCharacterProgression";

//TODO use type from backend, this is placeholder
interface Character {
  name: string
};

interface iShowCharacterProps {
  character: Character,
}

/* This component show all the current stats of a chosen character. Will be a flowbite tab and can be swapped between easily to show details of all currently created characters. */

/*
  Should
  [X] Show data horizontally, like in the pathfinder games
  [] Be styled as closely as possible to pathfinder games
    [] Brown canvas background (could be styled using theme though, which is likely better)
    [] Squares for each chosen option
    [] Shows a darker line for each level of each class/character level
    [] Hover shows additional information for each
    [] Icons
  [] Show additional information such as 
    [] gender
    [X] name
    [] alignment requirement (if any)
    []
*/

export const ShowCharacter = ({character}: iShowCharacterProps ) => {
  return(
      <div className="content flex flex-col items-center gap-8">
        {/* Information that doesnt show on the class progression screen, such as name, alignment, race(sortof), etc. */}
        <section>{character.name}</section>
        <section>Other Data</section>        
        {/* Shows the horizontal progression chart */}
        <CurrentCharacterProgression character={character} />
      </div>
  );
};
      