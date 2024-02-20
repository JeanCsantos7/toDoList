
import style from '../styles/MiniFooter.module.css'
import { ImWhatsapp } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";





export default function MiniFooter() {

    return (

        <>
            <div className={style.containerRetangulo}>
                <div className={style.containerIcons}>



                  <span className={style.containerFooter}>

                 

                    <a href="#">
                        <ImWhatsapp className={style.iconRedes}></ImWhatsapp>
                        <h1 className={style.tituloRedes}>Converse via Whatsapp</h1>
                    </a>

                    <a href="#">
                        <GrInstagram className={style.iconRedes}></GrInstagram>
                        <h1 className={style.tituloRedes}>Siga-nos no Instagram</h1>
                    </a>


                    <a href="#">
                        <TfiEmail className={style.iconRedes}></TfiEmail>
                        <h1 className={style.tituloRedes}> Fale conosco via Email</h1>
                    </a>
                    </span>

                </div>
            </div>

            
        </>
    )


}