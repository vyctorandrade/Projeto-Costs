import React from 'react'
import styles from './Empresa.module.css'
import imagemumempresa from '../img/imagemumempresa.jpeg'
import apresentacao from '../img/apresentacao.jpg'

function Empresa() {
    return(
        <div className={styles.Estrutura}>
            <h1>Quem nós somos</h1>
            
            <p>Apenas um desenvolvedor visando sempre projetos promissores. Esse é o Your Projescts, desenvolvido através do curso Hora de Codar, por Vyctor Andrade. Com o intuito de proporcionar aos usuários um serviço onde poderão criar projetos, determinar orçamentos e serviços a serem adicionados ao seu projeto. Assim, facilitando e otimizando o trabalho de empresas jurídica e de pessoas física. </p>
            <img src={imagemumempresa} alt="Costs"/>

            <div className={styles.NovaParte}>
            <img src={apresentacao} alt="Costs"/>
                <h1>Criamos tecnologias que impulsionam o progresso</h1>
                <p>O início de tudo começou com uma paixão: que é a tecnologia. Hoje é fundamental é fundamental a evolução e precisamos acompanhar, desenvolvendo as melhores e diversas tecnologias para todos os públicos alvo. 

                Tentamos trazer diversas soluções para ajudar com a régra de negócio das empresas e solicitantes. Abrangendo um cenário maior de produtivade e gestões.
                </p>
                
            </div>
            
        </div>

        
    ) 
}

export default Empresa