 import { Chip  } from "@mui/material";
 import Loading from "../loading/loading";
 import './detailPokemon.css';
 import React from "react";

const DetailPokemon = ({pokeInfo}) => {

  return(
    <div>
          {
              pokeInfo.length !== 0 ? 
              <div className="detailPokemon">
                      <div className="pokeInfo">
                        <h1>{pokeInfo.name}</h1>
                        <div className="image-Pokemon">
                          <img src={pokeInfo.sprites.front_default} alt="" />
                        </div>
                      </div>
                      <div className="detail-pokeinfo">
                          <p>Altura: {(pokeInfo.height*0.1).toFixed(2)}m</p>
                          <p>Peso: {pokeInfo.weight*0.1}kg</p>
                          <div className="evo-habilities-container">
                              <div className="evolutions">
                              </div>
                              <div className="habilities">
                                <p>Habilidades</p>
                                {
                                    pokeInfo.abilities.map(abilities => <Chip key={abilities.ability.name} label={abilities.ability.name} />)
                                }
                              </div>
                      </div>
                      </div>
                  </div>
              :
            <Loading />
          }

        </div>
  )
}


     

export default DetailPokemon;