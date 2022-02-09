import { useEffect, useState } from "react";
import CardPokemon from "../cardPokemon/cardPokemon";
import SearchBox from "../searchBox/searchBox";
import { Link } from "react-router-dom";
import { getPokemons } from "../../pokeapi";
import Loading from "../loading/loading";
import './listCardContainer.css';

const ListCardContainer = () =>{

    const [pokemons, setPokemons] = useState([]);
    const [searchText, setSearchText] = useState("");

    const dataInput = (data) =>{
       setSearchText(data)
    }

    useEffect(() => {
        searchText === "" ?
        getPokemons().then(data => setPokemons(data.results))
        :
        getPokemons().then(data => setPokemons(data.results.filter(pokemon => pokemon.name === searchText)))
    },[searchText])

    return (
        <div className="main-container fade-in">
            <div className="header-listCard">
                <SearchBox placeholder="Busca tu pokemon" dataInput={dataInput} /> 
            </div>
            <div className="card-containers">
            {
                pokemons.length !== 0 ? 
                pokemons.map((pokemon) => (
                    <Link to={`pokemondetails/${pokemon.name}`} key={pokemon.name}>
                        <CardPokemon pokemonURL={pokemon.url}/>
                    </Link>
                ))
                :
                <Loading />
            }
            </div>
        </div>
    )
}
export default ListCardContainer;