import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home/Home';
import About from '../src/Components/About/About';
import Products from './Components/Products/Products';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Cart from './Components/Cart/Cart';
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Contact from './Components/Contact/Contact';
import './App.css';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
