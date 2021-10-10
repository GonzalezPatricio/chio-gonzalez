import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './context/CartContext';
import Formulario from './components/form/form';

function App() {
  return (
<CartContextProvider>
  <BrowserRouter>
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
            <Route path='/finalizar-compra' exact component>
              <Formulario/>
            </Route>
        
        </Switch> 
    </div>
  </BrowserRouter>
</CartContextProvider>

  );
}

export default App;
