
import './AboutMe.css'
import img from './aboutme-section-img.svg'
import arrow from './aboutme-arrow.svg'
import lightbulb from './lightbulb.svg'



const AboutMe = () => {
  return (
    <section className='about-me-section'>
      <div className='about-me-content'>
        <div className='title'>
          <p>About <span>me</span></p>
          <img src={lightbulb} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Nunc vulputate libero et  velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos  himenaeos. Curabitur tempus urna at turpis condimentum ...<span>Read more.</span></p>
        <img src={arrow} alt="" />
      </div>
      <img src={img} alt="" />

    </section>
    
  )
}

export default AboutMe