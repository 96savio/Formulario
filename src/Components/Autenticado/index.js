import React ,{useEffect, useState} from "react";
import { db } from "../Services/fireibase-config";
import "../Autenticado/index.css"
import { BsSearch } from "react-icons/bs";
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import {addDoc, collection, getDocs, deleteDoc} from 'firebase/firestore'
import { Link} from 'react-router-dom';


function Autenticado() {
  const { user, logout } = UserAuth()
  const navigate = useNavigate()
  const [contas, setContas] = useState ([])
  const contasCollections = collection(db, "contas")
  const contaspagasCollections = collection(db, "contaspagas")
 
  const [contaspagasdescricao, setContaspagasdescricao] = useState("")
  const [contaspagasdtvencimento, setContaspagasdtvencimento] = useState("")
  const [contaspagasdtpagamento, setContaspagasdtpagamento] = useState("")
  const [contaspagasvalor, setContaspagasvalor] = useState("")
 

  const handlelogout = async () => {
    try {
      await logout();
      navigate('/')
    } catch (e) {
      console.log(e.message)

    }
  };


const pagar = async()=>{
  await addDoc(contaspagasCollections, {descricao: contaspagasdescricao, vencimento:contaspagasdtvencimento, valor: contaspagasvalor , pagamento:contaspagasdtpagamento, 
  })
  if(Response.addDoc = true)
  {alert("Pago com sucesso!")}
  }


  useEffect(()=>{
   
    const getcontas = async ()=>{
     const data = await getDocs(contasCollections);
    setContas(data.docs.map((doc)=>({...doc.data(), id: doc.id })));
    };
    
   getcontas();
   
  },[]);
  

  return (
    <div id="Contas">

      <div className="logout">
        <div className="sair">
      <button onClick={handlelogout} className="button">Sair</button>
      </div>
        <p className="navegar"><Link  to="/pagas">Pagas</Link></p>
        <p className="navegar"><Link to="/cadastrar">Cadastrar</Link></p>
      </div>
      <nav>

        {/* <div className="search"> 
          <label className="pesquisar">
            <input className="pesquisa"
              type="text"
              placeholder="Pesquisar..."
            onChange ={(e)=>setInput(e.target.value)}
            />
            <i><BsSearch /></i>
          </label>
  </div>*/}
     
      </nav>
      <h3>Contas a pagar</h3>
   <div className="pendentes">
   
      {contas.map((contas)=>( 
      
      <div className="contas" key ={contas.id}>
     
    
        <label>
            Conta:
            <input type="text" placeholder={contas.descricao} value={contas.descricao} onMouseOver={(e)=>{setContaspagasdescricao(e.target.value)}} />
          </label>
          <label>
            Data Vencimento:
            <input type="text"  placeholder={contas.vencimento} onChange={(e)=>{setContaspagasdtvencimento(e.target.value)}} />
          </label>
          <label>
           Valor:
            <input type="number" placeholder={contas.valor} 
            onChange={(e)=>{setContaspagasvalor(e.target.value)}} />
          </label>
          <label>
            Data pagamento:
            <input type="date"  placeholder={contas.pagamento }onChange={(e)=>{setContaspagasdtpagamento(e.target.value)}} />
          </label>
          <button onClick={pagar}>Pagar</button>
          
        
      </div>))
      }
      </div>
    </div>
  )
}

export default Autenticado;