import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      < ItemListContainer greeting="Bienvenido!!" pHome="ENCONTRA TODO LO QUE ESTABAS BUSCANDO"/>
    </div>
  );
}

export default App;
