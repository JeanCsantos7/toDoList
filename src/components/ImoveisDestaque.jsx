





import Apartamento1 from '../image/Apartamento1.webp'
import Apartamento2 from '../image/Apartamento2.webp'
import Apartamento3 from '../image/Apartamento3.webp'
import Apartamento4 from '../image/Apartamento4.jpg'
import Apartamento5 from '../image/Apartamento5.webp'
import Apartamento6 from '../image/Apartamento6.webp'
import Apartamento7 from '../image/Apartamento7.webp'
import Apartamento8 from '../image/Apartamento 8.jpg'

import style from '../styles/ImoveisDestaque.module.css'
import { FiHeart } from "react-icons/fi";
import { FaRulerHorizontal } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import { FaCarSide } from "react-icons/fa";










export default function ImoveisDestaque({ termoPesquisa }) {



    const arrayDeDados = [
        { id: 1, imagem: Apartamento1, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Casa ZN', preco: 'R$ 220000,00', tamanhoImovel: '36m²', dormitorios: '2', vaga: '1' },
        { id: 2, imagem: Apartamento2, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento ZS', preco: 'R$ 190000,00', tamanhoImovel: '39m²', dormitorios: '2', vaga: '1' },
        { id: 3, imagem: Apartamento3, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento ZS', preco: 'R$  100000,00', tamanhoImovel: '32m²', dormitorios: '1', vaga: '1' },
        { id: 4, imagem: Apartamento4, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento ZN', preco: 'R$  285000,00', tamanhoImovel: '50m²', dormitorios: '3', vaga: '1' },
        { id: 5, imagem: Apartamento5, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento ZL', preco: 'R$ 286000,00', tamanhoImovel: '42m²', dormitorios: '', vaga: '1' },
        { id: 6, imagem: Apartamento6, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento Centro', preco: 'R$ 240000,00', tamanhoImovel: '45m²', dormitorios: '3', vaga: '1' },
        { id: 7, imagem: Apartamento7, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento ZN', preco: 'R$ 230000,00', tamanhoImovel: '32m²', dormitorios: '2', vaga: '1' },
        { id: 8, imagem: Apartamento8, descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...', tipoImovel: 'Apartamento ZN', preco: 'R$ R$ 480000,00', tamanhoImovel: '62m²', dormitorios: '4', vaga: '1' },


    ]

    const ApartamentosFiltrados = arrayDeDados.filter((dado) => (


        dado.tipoImovel.toLowerCase().includes(termoPesquisa.toLowerCase()) || dado.preco.toLowerCase().includes(termoPesquisa.toLowerCase())
        
 
        
        




    ))

    return (


        <>





            <h2 className={style.imoveisTitulo}>IMÓVEIS EM DESTAQUE</h2>
            <div className={style.container}>


                {
                
              ApartamentosFiltrados.length === 0 ? (
                <p className={style.errorMessage}>Nenhum imóvel encontrado para o termo de pesquisa "{termoPesquisa}"</p>
              )
              :

                
                ApartamentosFiltrados.map((dados) => (

                    <span className={style.containerCard} key={dados.id}>

                        <div className={style.card}>

                            <img className={style.imagemApartamento} src={dados.imagem} alt="" />


                            <div className={style.precos}>
                                <h2 className={style.tipoImovel}>{dados.tipoImovel}</h2>
                           





                            </div>
                            <p id={style.valor} className={style.informacoesAP}>{dados.preco}</p>

                            <p className={style.informacoesAP}>{dados.descricao}</p>


                            <div className={style.informacoes}>

                                <FaRulerHorizontal className={style.icones}></FaRulerHorizontal>
                                <p className={style.paragrafoMetros}>{dados.tamanhoImovel}</p>
                                <IoMdBed className={style.icones}></IoMdBed>
                                <p className={style.paragrafoMetros}>{dados.dormitorios}</p>
                                <FaCarSide className={style.icones}></FaCarSide>
                                <p className={style.paragrafoMetros}>{dados.vaga}</p>

                            </div>

                        </div>

                    </span>



                ))}







  

            </div>















        </>





























    )
}