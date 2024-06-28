
import './PokemonList.css';
import Pokemon from "../Pokemon/pokemon";
import usePokemonList from '../../hooks/usePokemonList';



function pokemonList() {


    const [pokemonListState, setPokemonListState] = usePokemonList('https://pokeapi.co/api/v2/pokemon', false);

    
    // const [pokemonList, setPokemonList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [pokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    // const[nextUrl, setNextUrl] = useState('');
    // const[prevUrl, setPrevUrl] = useState('');


  return (
    <div className="pokemon-list-wrapper">
        <h2>Pokemon List</h2>
        <div className="pokemon-wrapper">
            {(pokemonListState.isLoading) ? 'Loading...' : 
            pokemonListState.pokemonList?.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>  )}
        </div>
        <div className="controls">
            <button disabled={pokemonListState.prevUrl == null} onClick={()=> setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.prevUrl})}>Previous</button>
            <button disabled={pokemonListState.nextUrl == null} onClick={()=> setPokemonListState({...pokemonListState, pokedexUrl:pokemonListState.nextUrl})}>Next</button>
        </div>
    </div>
  )
}

export default pokemonList;
