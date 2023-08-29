import React from 'react'
import styles from './NovoProjeto.module.css'
import ProjectForm from '../components/project/ProjectForm.tsx'
import { useNavigate } from 'react-router-dom'

 
function NovoProjeto() {

    const navigate = useNavigate()


    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirect
            // history('/projetos', {message: 'Projeto criado com sucesso!'}) ou esse!
            navigate('/projetos', { state: { message: 'Projeto criado com sucesso !' }})




        })
        .catch(err => console.log(err))    
    }
    
    return(


        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar projeto'/>
        </div>
        
        

    ) 
}

export default NovoProjeto