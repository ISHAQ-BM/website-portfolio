import IconMenuItem from '../icon_menu_item/IconMenuItem'
import './IconMenu.css'
import home from './home.svg'
import user from './user.svg'
import phone from './phone.svg'


const IconMenu = () => {
  return (
    <ul className='icon-menu'>
        <li>
            <IconMenuItem text='Home' iconSrc={home} iconAlt='home' destination='/' />
        </li>
        <li>
            <IconMenuItem text='About me' iconSrc={user} iconAlt='about me' destination='About me' />
        </li>
        <li>
            <IconMenuItem text='Contact me' iconSrc={phone} iconAlt='contact me' destination='Contact me' />
        </li>
    </ul>
  )
}

export default IconMenu