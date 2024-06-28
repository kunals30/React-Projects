import './App.css'
import Pokedex from './components/Pokedex/pokedex'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom';


function App() {


  return (
    <div className='outerPokedex'>
        <h1 id="pokedex-heading">
          <Link to='/'>
          Pokedex
          </Link>
          </h1>
          

        <CustomRoutes/>
      
    </div>
  )
}

export default App
