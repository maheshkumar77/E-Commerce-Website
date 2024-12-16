
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './pages/Shop'

import Shopcatogory from './pages/Shopcatogory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Foter from './components/footer/Foter';
//import Hero from './components/hero/Hero'
//import menb from './components/assets/mens-baner.jpeg'
//import womenb from './components/assets/womens-baner.jpeg'
//import kidb from './components/assets/kids-baner.jpeg'
import './App.css'
function App() {
  return (
  <div className='app'>
<BrowserRouter>
<Navbar/>

<Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/mens' element={<Shopcatogory  category="mens"/>}/>
<Route path='/women' element={<Shopcatogory   category="womens"/>}/>
<Route path='/kid' element={<Shopcatogory    category="kids"/>}/>
<Route path='/product' element={<Product/>}/>
<Route  exat path='/product/:id' element={<Product/>}/>
<Route path='/cart' element={<Cart></Cart>}></Route>
<Route path='/login' element={<Loginsignup/>}/>
</Routes>
<Foter/>
</BrowserRouter>
    
  </div>
  );
}

export default App;
