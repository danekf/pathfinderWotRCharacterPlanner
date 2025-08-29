import BaseLayout from "../../../layouts/BaseLayout";

//TODO use type from backend, this is placeholder
interface Character {
  name: string
};

/* This component show all the current stats of a chosen character. Will be a flowbite tab and can be swapped between easily to show details of all currently created characters. */

export const ShowCharacter = (character: Character) => {
  return(
    <BaseLayout>
      <div className="content flex justify-center">
        {character.name}
      </div>
    </BaseLayout>
  );
};
      