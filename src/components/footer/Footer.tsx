import IconMenu from "../icon_menu/IconMenu"
import SocialMediaMenu from "../social_media_menu/SocialMediaMenu"
import './Footer.css'


const Footer = () => {
  return (
    <footer>
        <IconMenu />
        <SocialMediaMenu />
        <p>Terms of Service - Privacy Policy</p>
    </footer>
  )
}

export default Footer