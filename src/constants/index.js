//const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://pokeapi.co/api/v2/pokemon/?limit=60";

export const allCards = () => `${base_url}`;
export const searchName = (name) => `${base_url}${name}`;
