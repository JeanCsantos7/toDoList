import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import ImoveisDestaque from '../components/ImoveisDestaque';
import CarroselHome from '../components/CarroselHome';
import MiniFooter from '../components/MiniFooter';



export default function Home() {

  const[valordeEntrada, setValordeEntrada] = useState('')

  

  function PassarValores(dadoNavBar)
  {
    

   
      setValordeEntrada(dadoNavBar)
 

 
  }


   
  return (
    
    
    
    <>
     <NavBar valorInput={PassarValores}></NavBar>
      <CarroselHome />
      <ImoveisDestaque termoPesquisa={valordeEntrada} />
      <MiniFooter />
   
    </>
  
    
  
  );
}
