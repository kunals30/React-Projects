import PokemonList from "../PokemonList/pokemonList";
import Search from "../Search/search";
import './pokedex.css';



function Pokedex(){
    return(
        <div className = "pokedex-wrapper">
            <Search/>
            <PokemonList/>
        </div>
    )
}
export default Pokedex;