import React from 'react'
import styles from './Home.module.css'
import savings from '../img/savings.png'
import LinkButton from '../layout/LinkButton.tsx'



function Home(){
  return(
      <section className={styles.home_container}>
          <h1> Bem-Vindo ao <span> Your  Projects</span> </h1>
          <p> Comece a gerenciar os seus projetos agora mesmo!</p>
          <LinkButton to='/novoprojeto' text="Criar Projeto"/> 
          <img src={savings} alt="Costs"/>
      </section>
  )
}

export default Home