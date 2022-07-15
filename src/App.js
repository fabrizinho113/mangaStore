import './App.css'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    
    <div className="App">
    <NavBar />
    <ItemListContainer title="Chainsaw Man" price={500} image={'chainsaw-man.webp'}/>
    <ItemListContainer title="Berserk" price={700} image={'Berserk.webp'}/>
    <ItemListContainer title="Gantz" price={500} image={'Gantz.webp'}/>
    </div>
  );
}

export default App;
