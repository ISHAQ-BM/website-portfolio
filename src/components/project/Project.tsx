import Icon from '../icon/Icon'
import './Project.css'
import arrowUpRight from './arrowUpRight.svg'

type Props={
    githubLink:string,
    imgSrc:string,
    imgAlt:string
}
const Project = ({githubLink,imgSrc,imgAlt}:Props) => {
    
  return (
    <div className='project'>
        <img src={imgSrc} alt={imgAlt} />
        <div className='actions'>
            <u>
                <a href={githubLink} className='github-link'>View on Github
                <Icon iconSrc={arrowUpRight} iconAlt={'view on github'} />
                </a>
            </u>
        
            
        </div>
        
    </div>
  )
}

export default Project