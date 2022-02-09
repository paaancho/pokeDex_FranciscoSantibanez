import './App.css';
import ListCardContainer from './components/listCardContainer/listCardContainer';
import DetailPokemonContainer from './components/detailPokemonContainer/detailPokemonContainer';
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route exact path="/" element={<ListCardContainer />}/>
            <Route exact path="pokemondetails/:namePokemon" element={<DetailPokemonContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
