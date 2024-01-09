

import style from '../styles/toDo.module.css'
import {useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";
export default function ToDoList()
{
  const[tarefa, setTarefa] = useState([])
  const [listaTarefas, setListaTarefas] = useState([])

  

  function adicionarTarefa()
  {

      if(listaTarefas.length<5)
      {
        setListaTarefas(listaTarefas.concat(tarefa))
      }
        
        
  }

  function deletar()
  {
    setListaTarefas(listaTarefas.slice(0, -1))
  }
 

  return(
    <>
   <div className={style.container}>
     <h1>Lista de Tarefas</h1>
     <span className={style.inputContainer}>
     <input type="text" placeholder='Digite a tarefa' required onChange={(e) => {setTarefa(e.target.value)}}  />
     <button onClick={adicionarTarefa}>Adicionar</button>
    
     </span>




{   listaTarefas.map((item, index) => {
            
            return(
            <>
           
            <div className={style.containerTarefas}>
            <p className={style.itemLista} key={index}>{item}</p>
            <FaTrashAlt onClick={deletar} className={style.lixeira}></FaTrashAlt>
           
            
            </div>
           
        
        
            </>
        

            
            
            )
        
            
         
        })     }

        
   
   </div>

    </>

    


  )

 

}

