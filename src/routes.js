import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FormularioLogin from "../src/Components/FormularioLogin";
import FormularioCadastro from "../src/Components/FormularioCadastro";
import Autenticado from "./Components/Autenticado";
import ProtectRoute, {} from '../src/Components/Protect/ProtectRout'
import Pagas from "./Components/Pagas";
import Cadastrar from "./Components/Cadastrar";

function RoutesApp(){
    return(
       <BrowserRouter>
         <Routes>
                <Route path="/" element={ <FormularioLogin/> }/>
                <Route path="/cadastro" element={ <FormularioCadastro/> }/>
                <Route path="/pagas" element={ <Pagas/> }/>
                <Route path="/Cadastrar" element={ <Cadastrar/> }/>
                <Route path="/Autenticado" element={
                  <ProtectRoute>
                   <Autenticado/> 
                   </ProtectRoute>
                   }/>
              
         </Routes>
       </BrowserRouter> 

    )
}

export default RoutesApp;