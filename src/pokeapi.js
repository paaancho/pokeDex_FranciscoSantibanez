export const getPokemons = () =>{
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=25').then((response) => response.json());
}

export const getPokemon = async (url) => {
    return await fetch(url).then((response) => response.json());
}

export const getPokemonByName = async (name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json());
}

export const getEvolutionsById = async (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((response) => response.json());
}

export const getEvolutionsChainById = async (id) => {
    return fetch(`https://pokeapi.co/api/v2/characteristic/${id}`).then((response) => response.json());
}