import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path='/' exact component>
          < ItemListContainer greeting="Bienvenido!!" pHome="ENCONTRA TODO LO QUE ESTABAS BUSCANDO"/>
        </Route>
        <Route path='/item/:idProducto'>
          < ItemDetailContainer />
        </Route>
        <Route path='/categoria/:id'>
          < ItemDetailContainer />
        </Route>
      </Switch> 
    </div>
  </Router>
  );
}

export default App;
