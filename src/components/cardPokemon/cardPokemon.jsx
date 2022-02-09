import { useEffect, useState } from "react";
import { getPokemon, getEvolutionsById } from "../../pokeapi";
import { Chip } from "@mui/material";
import './cardPokemon.css'


const CardPokemon = ({pokemonURL}) => {

    const [pokemon, setPokemon] = useState([])
    const [evolution, setEvolutions] = useState([]);

    useEffect(() => {
        getPokemon(pokemonURL).then(data => setPokemon(data))
        if(pokemon.length !== 0){
            getEvolutionsById(pokemon.id).then(data => setEvolutions(data))
        }
        return () => {
            setEvolutions([]);
        }
    },[pokemonURL, pokemon.length, pokemon.id])


    return(
        <>
            {
                pokemon.length !== 0 ? 
                <div className="pokemon-card">
                    <div className="title-card">
                        <h3>{pokemon.name}</h3>
                        <span>ID {pokemon.id}</span></div>
                    <div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} width="100" height="100" />
                        </div>
                    <div className="info-card-types">
                        {
                            pokemon.types.map( types => (<Chip key={types.type.name} label={types.type.name}/>))
                        }
                    </div>
                    <div className="footer-evolutions">
                        <p>{evolution.evolves_from_species != null ? `Evolución de: ${evolution.evolves_from_species.name}` : ''}</p>
                    </div>
                </div>  : <></>
            }
        </>        
    )
}

export default CardPokemon;