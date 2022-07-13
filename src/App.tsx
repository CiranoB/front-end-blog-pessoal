import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './componentes/paginas/home/Home';
import Login from './componentes/paginas/login/Login';
import CadastroUsuario from './componentes/paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    
    <Provider store={store}>
      
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

          <Route
            path="/temas"
            element={< ListaTema />}
          />

          <Route
            path="/posts"
            element={< ListaPostagem />}
          />

          <Route 
          path="/formularioPostagem" 
          element={<CadastroPost />} />

          <Route 
          path="/formularioPostagem/:id" 
          element={<CadastroPost />} />

          <Route 
          path="/formularioTema" 
          element={<CadastroTema />} />

          <Route 
          path="/formularioTema/:id" 
          element={<CadastroTema />} />

          <Route 
          path="/deletarPostagem/:id" 
          element={<DeletarPostagem />} />

          <Route 
          path="/deletarTema/:id" 
          element={<DeletarTema />} />



        </Routes>
      </div>

      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
