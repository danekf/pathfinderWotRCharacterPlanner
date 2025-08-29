// Should be used to show current progression of a character. To be called either during character creation or when showing a character.
  // ? should maybe be able to click on stuff to change, in some sort of edit mode when in character creation? Then revalidate everything. Could be really nice, with errors sent back on save on the level that failed?
// ! Shows only the grid of a class, no other info.

//TODO use type from backend, this is placeholder
interface Character {
  name: string
};

interface iProgressionProps {
  character: Character,
  editMode?: boolean,
}

const CurrentCharacterProgression = ({character, editMode}: iProgressionProps) => {

    return (
    <div className="flex ml-5 hover:bg-gray-400">
      Character progression chart for {character.name} will go here.
      {editMode && <section className="text-green-500 font-bold ml-2">We be editing now</section>}
    </div>
    )
};

export default CurrentCharacterProgression