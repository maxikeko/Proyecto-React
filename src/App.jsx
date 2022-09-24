import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <NavBar/>
       
       <ItemListContainer
       greeting="Bienvenidos a nuestra tienda de productos de pc"/>


      </header>
    </div>
  );
}

export default App;
