import React ,{useEffect, useState} from "react";
import { db } from "../Services/fireibase-config";
import {collection, getDocs} from 'firebase/firestore'
import "../Pagas/index.css"
import { Link} from 'react-router-dom';

function Pagas() {
  
  
  const [pago, setPago] = useState ([])
  const contaspagasCollections = collection(db, "contaspagas")







  useEffect(()=>{
   
    const getContaspagas = async ()=>{
     const data = await getDocs(contaspagasCollections);
     setPago(data.docs.map((doc)=>({...doc.data(), id: doc.id })));
    };

    getContaspagas();

  },[]);
  

  return (
    <div className="todas" >
     <div className="logout">
       
        <p className="navegar"><Link  to="/Autenticado">Pagar</Link></p>
        <p className="navegar"><Link to="/cadastrar">Cadastrar</Link></p>
      </div>

      
      {pago.map ((pago)=>{return <div className="contaspagas">
      <h4>Conta paga </h4>
      
        <label>
            Conta:
            <input type="text" value={pago.descricao} />
          </label>
          <label>
            Data Vencimento:
            <input type="text"  value={pago.vencimento} />
          </label>
          <label>
           Valor:
            <input type="text" value={pago.valor} />
          </label>
          <label>
            Data pagamento:
            <input type="text"  value={pago.pagamento}/>
          </label>
       
          
        
      </div>})}
    </div>
  )
}

export default Pagas;