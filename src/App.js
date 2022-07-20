import './App.css'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  const productOne = {
    title: 'Chainsaw Man',
    price: 500,
    image: 'chainsaw-man.png',
  }
  const productTwo = {
    title: 'Berserk',
    price: 700,
    image: 'Berserk.png',
  }
  const productThree = {
    title: 'Gantz',
    price: 500,
    image: 'Gantz.png',
  }

  return (
    <div className="App">
    <NavBar />
    <ItemListContainer product={productOne}/>
    <ItemListContainer product={productTwo}/>
    <ItemListContainer product={productThree}/>
    </div>
  );
}

export default App;
