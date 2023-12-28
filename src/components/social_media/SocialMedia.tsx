import Icon from '../icon/Icon'
import './SocialMedia.css'

type Props={
    link:string,
    iconSrc:string,
    iconAlt:string
}
const SocialMedia = ({link,iconSrc,iconAlt}:Props) => {
  return (
    <a className="social-media" href={link}><Icon  iconSrc={iconSrc} iconAlt={iconAlt}/></a>
  )
}

export default SocialMedia