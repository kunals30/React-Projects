import { Routes, Route } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails/pokemonDetails";
import Pokedex from "../components/Pokedex/pokedex";

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
    </Routes>
  )
}

export default CustomRoutes;
