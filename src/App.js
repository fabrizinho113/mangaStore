import './App.css'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Checkout from './pages/Checkout';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/cart" element={<Checkout/>}/>
          <Route path="/:category/:id" element={<Detail />}/>
          <Route path="*" element={ <Error />}/>
        </Routes>
      </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
