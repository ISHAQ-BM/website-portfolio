import facebook from './facebook.svg'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import github from './github.svg'
import SocialMedia from '../social_media/SocialMedia'
import './SocialMediaMenu.css'

const SocialMediaMenu = () => {
  return (
    <ul className='social-media-menu'>
        <li><SocialMedia link={"https://github.com/ISHAQ-BM"} iconSrc={facebook} iconAlt={"facebook"} /></li>
        <li><SocialMedia link={"https://github.com/ISHAQ-BM"} iconSrc={instagram} iconAlt={"instagram"}/></li>
        <li><SocialMedia link={"https://github.com/ISHAQ-BM"} iconSrc={linkedin} iconAlt={"linkedin"}/></li>
        <li><SocialMedia link={"https://github.com/ISHAQ-BM"} iconSrc={github} iconAlt={"github"}/></li>
    </ul>
  )

}

export default SocialMediaMenu