import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PokemonList from './Pages/PokemonList';
import PokemonDetail from './Pages/PokemonDetail';
import MyPokemon from './Pages/MyPokemon';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<PokemonList/>} />
          <Route path='/pokemon-detail' element={<PokemonDetail/>} />
          <Route path='/my-pokemon' element={<MyPokemon/>} />
        </Routes>
      </Router>
  );
}

export default App;
