

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import Imagem1 from '../image/Imagem1.webp'
import Imagem2 from '../image/Imagem2.webp'
import Imagem3 from '../image/Imagem3.webp'
import Imagem4 from '../image/Imagem4.jpg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from '../styles/CarroselHome.module.css'




export default function CarroselHome()
{

    
    let listaImagens = [{id: 1, imagem: Imagem1}, {id: 2, imagem: Imagem2},{id: 3, imagem: Imagem3},{id: 4, imagem: Imagem4} ]
    return(
        <div>

<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}

    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    
    >


      {

        listaImagens.map((item) => {
            
            return(
                <SwiperSlide key={item.id}>
                  
                <div className={style.containerCarrosel}>
                <img className={style.imagemCarrosel} src={item.imagem} alt="" />
                </div>
                 
                 
         
                </SwiperSlide>

            )
       

        })
      }
       
       </Swiper>

        </div>
    )
}