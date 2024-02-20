


import { MdApartment, MdOutlineSearch } from "react-icons/md";

import style from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';


export default function NavBar({ valorInput }) {



  function atualizar()
  {
   Location.reload()

}

  const inputValue = (e) => {

    const dadoDigitado = e.target.value
    
  
    

   

      valorInput(dadoDigitado)
  

   

   

  }

  
  return (
    <>
      <div className={style.container}>
        <span className={style.logotipo}>

          <Link onClick={atualizar}to={'/'}>
            <MdApartment className={style.iconLogo} />
            <h1>Goes</h1>
          </Link>

        </span>


        <span className={style.campoEntrada}>
          <input
            className={style.inputValue}
            type="text"

            placeholder="Digite o nome do imóvel"
            onChange={inputValue}


          />

          <button  className={style.btnInput}>
            <MdOutlineSearch className={style.lupa} />
          </button>




      


        </span>



      </div>
    </>
  );



}





