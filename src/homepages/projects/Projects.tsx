import Project from '../../components/project/Project'
import './Projects.css'
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from 'react';

type Project ={
  appName: string,
  imageUrl: string;
  githubUrl: string;
}


const Projects = () => {
  const dbRef = ref(getDatabase());
  const [projects,setProjects]=useState<Project[]>([])
  const getProjects = async() =>{
    const response = await get(child(dbRef,`projects/`)) 
    const projects = await response.val()
    setProjects(projects)
  }
  useEffect(() => {
      getProjects()
  },[])
  
  return (
    <section className='projects-section'>
      <p>My recents <span>works</span></p>
      <div className='projects-container'>
        {
          projects.map((project,index)=>{
            return <Project key={index} githubLink={project.githubUrl} imgSrc={project.imageUrl} imgAlt={project.appName} />
          })
        }
      </div>
    </section>
  )
}

export default Projects