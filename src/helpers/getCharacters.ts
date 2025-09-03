export const getCharacters = async () => {
   const response = await fetch('/api/characters/getAll')

   return response.json();
};