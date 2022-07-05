import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './componentes/paginas/home/Home';
import Login from './componentes/paginas/login/Login';
import CadastroUsuario from './componentes/paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
    <Navbar />

    <div style={{ minHeight: '100vh' }}>
       <Routes> 

        <Route
         path="/home" 
         element={<Home />}
        />

        <Route
         path="/" 
         element={< Login />} 
        />

        <Route 
         path="/login" 
         element={< Login />} 
        />

        <Route 
         path="/cadastrousuario" 
         element={< CadastroUsuario />} 
        />   

      </Routes>
    </div>

    <Footer />
  </Router>
  );
}

export default App;
