import BaseLayout from "../../../layouts/BaseLayout";

//TODO use type from backend, this is placeholder
interface Character {
  name: string
};

export const ShowCharacter = (character: Character) => {
  return(
    <BaseLayout>
      <div className="content flex justify-center">
        {character.name}
      </div>
    </BaseLayout>
  );
};
      