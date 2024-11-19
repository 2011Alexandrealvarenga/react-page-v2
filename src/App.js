import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Template } from './components/MainComponents';
import AppRoutes from './Routes';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
          <AppRoutes />
        <Footer />
      </Template>
    </BrowserRouter>  
  );
}

export default App;
