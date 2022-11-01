import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import CartContextComponent from "./CartContext/CartContextComponent";
function App() {
  
 
  return (
    <div className="App">
      <CartContextComponent>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenidos a nuestra tienda de productos de pc" />
              }
            />

            <Route path="/Producto/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />
            
          </Routes>
        </BrowserRouter>
      </CartContextComponent>
    </div>
  );
}

export default App;
