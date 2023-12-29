import Project from '../../components/project/Project'
import './Projects.css'

const Projects = () => {
  return (
    <section className='projects-section'>
      <p>My recents <span>works</span></p>
      <div className='projects-container'>
        <Project link='' imgSrc='' imgAlt='' />
        <Project link='' imgSrc='' imgAlt='' />
        <Project link='' imgSrc='' imgAlt='' />
      </div>
    </section>
  )
}

export default Projects