import './Hero.css'
import img from './hero-section-img.svg'
import arrow from './arrow.svg'
import download from './download.svg'
import Button from '../../components/button/Button'
const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='content-container'>
        <img src={arrow} alt="" />
        <div className='content'>
          <p>ANDROID <br /><span>DEVELOPER</span></p>
          <div>
            <Button text="Hire me" iconSrc='' iconAlt='hire me' iconNotDisabled={false} />

            <Button text="Download CV" iconSrc={download} iconAlt='download cv' iconNotDisabled={true} />

          </div>
          
        </div>
      </div>
      <img src={img} alt="" />
    </section>
  )
}

export default Hero