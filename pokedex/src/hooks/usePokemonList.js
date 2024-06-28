import { useEffect, useState } from "react";
import axios from "axios";



function usePokemonList(url, type){
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: url,
        nextUrl:'',
        prevUrl:'',
    });

    async function downloadPokemons(){
        setPokemonListState((state)=> ({...state, isLoading:true}));
        const response = await axios.get(pokemonListState.pokedexUrl); // this downloads first 20 pokemons

        const pokemonResults = response.data.results; // we get array of pokemons from result

        console.log("response is",response.data.pokemon)
        setPokemonListState((state)=> ({
            ...state, 
            nextUrl:response.data.next, 
            prevUrl:response.data.previous
        }));
    

        //Iterating over the array of pokemons, and using their url to create an array of promise
        //that will download those 20 pokemons
        if(type){
            setPokemonListState((state)=>({
                ...state,
                pokemonList:response.data.pokemon.slice(0,5)
            }))
        }else{

        
            const pokemonResultPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));

            //passing that promise array to axios.all
            const pokemonData = await axios.all(pokemonResultPromise);//array of 20 pokemon detailed data
            // console.log(pokemonData);


            //Now iterate on the data of each pokemon and extract id, name, image, types
            const pokeListResult = (pokemonData.map((pokeData)=>{

                const pokemon = pokeData.data;
                return { 
                        id:pokemon.id,
                        name:pokemon.name, 
                        image:pokemon.sprites.other.dream_world.front_default, 
                        types:pokemon.types
                    }
            }))
            
            console.log(pokeListResult);
            setPokemonListState((state)=>({
                ...state, 
                pokemonList:pokeListResult, 
                isLoading:false
            }));
        } 
    }

    useEffect(()=>{
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);


    return[pokemonListState, setPokemonListState];
}

export default usePokemonList;