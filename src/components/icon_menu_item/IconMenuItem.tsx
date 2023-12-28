import { Link } from 'react-scroll'
import Icon from '../icon/Icon'
import './IconMenuItem.css'

type Props={
    text:string,
    iconSrc:string,
    iconAlt:string,
    destination:string
}
const IconMenuItem = ({text,iconSrc,iconAlt,destination}:Props) => {
  return (
    <Link to={destination} className="menu-item">
        <div className='icon-menu-item'>
            <Icon iconSrc={iconSrc} iconAlt={iconAlt} />
            <p>{text}</p>
        </div>
    </Link>
  )
}

export default IconMenuItem