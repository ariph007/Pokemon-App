import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PokemonList from './Pages/PokemonList';
import PokemonDetail from './Pages/PokemonDetail';
import MyPokemon from './Pages/MyPokemon';
import { ContextWrapper } from './utils/context';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<ContextWrapper><PokemonList/></ContextWrapper>} />
          <Route path='/pokemon-detail/:id' element={<ContextWrapper><PokemonDetail/></ContextWrapper>} />
          <Route path='/my-pokemon' element={<MyPokemon/>} />
        </Routes>
      </Router>
  );
}

export default App;
