import './App.css'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Checkout from './pages/Cart';
import CartProvider from './context/CartContext';


function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
      <div className="contentWrap">
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/cart" element={<Checkout />}/>
          <Route path="/:category/:id" element={<Detail />}/>
          <Route path="*" element={ <Error />}/>
        </Routes>
    </div>
    <Footer />
    </div>
    <ToastContainer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
