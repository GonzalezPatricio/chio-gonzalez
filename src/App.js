import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
<CartContextProvider>
  <Router>
    <div className="App">
      <NavBar />

        <Switch>
            <Route path='/' exact component>
              < ItemListContainer greeting="Bienvenido!!" pHome="ENCONTRA TODO LO QUE ESTABAS BUSCANDO"/>
            </Route>

                <Route path='/item/:idProducto' exact component>
                  < ItemDetailContainer />
                </Route>

                <Route path='/categoria/:idCategoria' exact component >
                  < ItemListContainer />
                </Route>
        
            <Route path='/cart' exact component>
              <Cart/>
            </Route>
        
        </Switch> 
    </div>
  </Router>
</CartContextProvider>

  );
}

export default App;
