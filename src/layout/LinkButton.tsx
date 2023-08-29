import React from 'react'
import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

function LinkButton({to, text}) {
  return (
    <Link className={styles.btn} to={to}>
    {text}
    </Link>

    // Text e o to são dinâmicos, com essas props usamos no Home.tsx com o link do novoprojeto e o texto que definir
  )
}

export default LinkButton