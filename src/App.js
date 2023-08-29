import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Layout
import NavBar from './layout/NavBar.tsx'
import Footer from './layout/Footer.tsx'
// Páginas
import Home from './pages/Home.tsx'
import Empresa from './pages/Empresa.tsx'
import Contato from './pages/Contato.tsx'
import NovoProjeto from './pages/NovoProjeto.tsx'
import Projetos from './pages/Projetos.tsx'
// Componente Container
import Container from './layout/Container.tsx'
import Project from './pages/Project.tsx'






function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass ='min_height'>
      <Routes>   
          <Route exact path='/' element = {<Home/>}></Route>
          <Route  path='/projetos' element = {<Projetos/>}></Route> 
          <Route  path='/empresa' element = {<Empresa/>}></Route>
          <Route  path='/contato' element = {<Contato/>}></Route>
          <Route  path='/novoprojeto' element = {<NovoProjeto/>}></Route>
          <Route  path='/project/:id' element = {<Project/>}></Route>
      </Routes>  
      </Container>
       <Footer/>
     </Router>
    
  )
}

export default App;
