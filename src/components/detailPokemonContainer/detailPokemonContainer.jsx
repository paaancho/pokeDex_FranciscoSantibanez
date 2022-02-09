import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName} from "../../pokeapi";
import { Button } from "@mui/material";
import DetailPokemon from "../detailPokemon/detailPokemon";
import './detailPokemonContainer.css';

const DetailPokemonContainer = () => {
    const [pokeInfo, setPokeInfo] = useState([]);
    const {namePokemon} = useParams();
    
   useEffect(() => {
       getPokemonByName(namePokemon).then(data => setPokeInfo(data));
   },[namePokemon])

   return(
        <div className="detailPokemon-container fade-in">
            <h3>Información del pokemon</h3>
            <DetailPokemon pokeInfo={pokeInfo} />
            <Button variant="contained" href="/">Volver</Button>
        </div>
   )
}

export default DetailPokemonContainer;