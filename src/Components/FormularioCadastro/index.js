import { useState } from "react";
import '../FormularioCadastro/formulariocadastro.css';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'


const FormularioCadastro = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {createUser} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await  createUser (email, password);
      navigate ('/Autenticado')
    }catch (e) {
      setError(e.message);
      console.log(e.message);
     
    }
  };
  
      return (
        <div className="formcontrol"> 
        
        <form className="formcadastro" onSubmit={handleSubmit}>
        <h5>Createaccount</h5>
       

          <label>
            Email
            <input type="email" placeholder="Email..."onChange={(event)=>{setEmail(event.target.value)}} />
          </label>

          <label>
            Senha
          <input type="password" placeholder="Current Password"onChange={(event)=>{setPassword(event.target.value)}} />
          </label>
          
          
      <button className="button" type="submit" >Cadastrar</button>
          <div className="createaccount" >
           <p>Já tenho uma conta? <Link to="/">Login</Link></p>
           
          </div>
        </form>
       
       
        </div>
        
      );
    
  }

  export default FormularioCadastro;