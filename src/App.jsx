import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
