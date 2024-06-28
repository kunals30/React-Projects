import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import './pokemonDetails.css';
import usePokemonList from "../../hooks/usePokemonList";



function pokemonDetails() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            types:response.data.types.map((t)=>t.type.name),
            weight:response.data.weight,
            height:response.data.height,

        })
    }

    const [pokemonListState] = usePokemonList(`https://pokeapi.co/api/v2/type/${pokemon.types ? pokemon.types[0]: "fire"}`,true);
    
    useEffect(()=>{
        downloadPokemon();
        console.log("list",pokemonListState);
    },[])
  
    return (
    <div className="pokemon-details-wrapper">
        <img className="pokemon-details-image" src={pokemon.image} alt="" />
        <div className="pokemon-details-name">Name: {pokemon.name}</div>
        <div className="HWK"><span className="HW">Height: {pokemon.height}</span></div>
        <div className="HWK"><span className="HW">Weight: {pokemon.weight}</span></div>
        <div className="pokemon-details-types">
            {pokemon.types?.map((t)=> <div key={t}> {t} </div>)}
        </div>

        {pokemon.types &&
        <div>
            More {pokemon.types[0]} type Pokemons
            <ul>
                {pokemonListState.pokemonList && pokemonListState.pokemonList.map((p)=> <li key={p.pokemon.url}>{p.pokemon.name}</li>) }
            </ul>
        </div>
        }

    </div>
  )
}

export default pokemonDetails;
