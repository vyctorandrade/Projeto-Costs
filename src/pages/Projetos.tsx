import { useState, useEffect } from 'react'
import Message from '../layout/Message.tsx'
import { useLocation } from 'react-router-dom'
import styles from './Projetos.module.css'
import Container from '../layout/Container.tsx'
import LinkButton from '../layout/LinkButton.tsx'
import ProjectCard from '../components/project/ProjectCard.tsx'
import Loading from '../layout/Loading.tsx'


function Projetos() {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message =''
  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(
      () => {
        fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setProjects(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
      }, 600)
  }, [])

  function removeProject(id){
    fetch (`http://localhost:5000/projects/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },

    }).then(resp => resp.json())
    .then(() => {
      setProjects(projects.filter((project) => project.id !== id ))
      setProjectMessage('Projeto removido com sucesso!')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.project_container}>
    <div className={styles.title_container}>
      <h1>Meus Projetos</h1>
      <LinkButton to='/novoprojeto' text="Criar Projeto"/> 
    </div>
    {message && <Message type='success' msg={message} />}
    {projectMessage && <Message type='success' msg={projectMessage} />}
    <Container customClass ='start'>
      {projects.length > 0 &&
      projects.map((project) => (
        <ProjectCard 
        name = {project.name} 
        id = {project.id}
        budget={project.budget}
        category={project.category.name}
        key={project.id}
        handleRemove={removeProject}
        
        />
      )
      
      
      )
      }
  {!removeLoading && <Loading/> }
  {removeLoading && projects.length === 0 && (
    <p>Não há projetos cadastrados!</p>
  )}
    </Container>
    </div>
  )
}

export default Projetos