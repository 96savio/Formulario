import React ,{useState} from "react";
import { db } from "../Services/fireibase-config";
import {collection, addDoc} from 'firebase/firestore'
import "../Cadastrar/index.css"
import { clear } from "@testing-library/user-event/dist/clear";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';




function Cadastrar() {
  
  const contasCollections = collection(db, "contas")
  const [error, setError] = useState('')
  const [contasdescricao, setContasdescricao] = useState("")
  const [contasdtvencimento, setContasdtvencimento] = useState("")
  const [contasdtpagamento, setContasdtpagamento] = useState("")
  const [contasvalor, setContasvalor] = useState("")
  const [contaspaga, setContaspaga] = useState("false")
  const navigate = useNavigate()
  

  const handleSubmit = async(e)=>{
    e.preventDefault();
        setError('');
    try {
    await addDoc(contasCollections, {descricao: contasdescricao, vencimento:contasdtvencimento, valor: contasvalor , pagamento:contasdtpagamento})
   
    if(Response.addDoc = true)
    {alert("cadastro realizado com sucesso!")}
   
   
    }
    catch (e) {
          setError(e.message);
          {alert("erro ao cadastrar!")}
         
        }
  

      };



  return (
    <div id="Cadastrar">
       <div className="logout">

        <p className="navegar"><Link  to="/pagas">Pagas</Link></p>
        <p className="navegar"><Link to="/Autenticado">A pagar</Link></p>
      </div>

      <h3>Cadastar Contas</h3>
   <div className="pendentes">
   
  
      
      <div className="formdiv">
       
      <Form.Group className="mb-3" onSubmit= {handleSubmit}>
      <form>
        <label>
            Conta:
            <input type="text"  placeholder="descricao" onChange={(e)=>{setContasdescricao(e.target.value)}} />
          </label>
          <label>
            Data Vencimento:
            <input type="date"  placeholder="vencimento" onChange={(e)=>{setContasdtvencimento(e.target.value)} }  />
          </label>
          <label>
           Valor:
            <input type="text" placeholder="valor" onChange={(e)=>{setContasvalor(e.target.value)}}/>
          </label>
          <label>
            Data pagamento:
            <input type="date"  placeholder="Dia Pagamento"  onChange={(e)=>{setContasdtpagamento(e.target.value)}}/>
          </label>
    
          <button  type="submit">Cadastrar</button>
          <button type="reset">Apagar</button>
          </form>
          </Form.Group>
        
      </div>
      
      </div>
    </div>
  )
}

export default Cadastrar;