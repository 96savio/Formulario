import React,{useState} from "react";
import '../FormularioLogin/formulario.css';
import { Link } from 'react-router-dom';
import{ signInWithEmailAndPassword}from "firebase/auth"
import{auth} from "../Services/fireibase-config"
import {UserAuth}from '../context/AuthContext'
import {useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';


function Formulario (){


  const{login} = UserAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const handlelogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
        await login (email,password);
        navigate ('/Autenticado')
      }catch (e) {
        setError(e.message)
        console.log(e.message)
       
      }
    };
  

      return (
        <div className="formcontrollogin"> 
        
        <form className="formlogin" onSubmit={handlelogin}>
        <h5>Login</h5>
          
          <label>
            Email
            <input type="email" placeholder="Email..." onChange={(e)=>{setEmail(e.target.value)}}/>
          </label>
          <label>
            Senha
          <input type="password" placeholder="Current Password"onChange={(e)=>{setPassword(e.target.value)}} />
          </label>
          <button className="buttonl"  type="submit" > Login </button>
          <div className="createaccount" >
           <p>Não tem uma conta? <Link to="/cadastro">Cadastrar</Link></p>
           
          </div>
         
        </form>
      
        </div>
      );
    
  }

  export default Formulario;