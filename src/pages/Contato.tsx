import React from 'react'
import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Contato.module.css'

function Contato() {

    return(

        <div className={styles.Estiloum}>
            <h1>Contato</h1>
            <p>Você pode fazer orçamentos e tirar dúvidas entrando em contato, <br /> através dos meios de comunicação.
            </p>
            <div>

                
            <form action="Dúvida">
            <label htmlFor="email"> <span>Envie-nos uma mensagem</span></label> 
             <br />
            <input placeholder='Digite o seu e-mail' type="email" name="email" id="email" /> <br />
           
           
            <textarea placeholder='Digite sua mensagem' name="mensagem"></textarea>
            

           
            </form>
            <button type="submit">Enviar</button>
            </div>
           
            
            
            
            
            <div className={styles.Contato}>    
            <ul className={styles.Contato_list}>

            <li><FaFacebook/> <p>Facebook</p></li>
             <li><FaInstagram/> <p>Instagram</p></li>
             <li><FaLinkedin/> <p>LinkedIn</p>  </li>
            </ul>

        </div>
        </div>
    ) 
}

export default Contato
