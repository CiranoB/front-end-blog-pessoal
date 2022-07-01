import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './componentes/paginas/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Footer />
    </>

  );
}

export default App;
