import React from "react";
import Home from "./Home";
import Contato from "./Contato";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () =>{
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contato" element={<Contato />}></Route>
      </Routes>
  )
}
export default AppRoutes;