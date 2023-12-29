import './ContactMe.css'
import img from './contact-section-img.svg'
import arrow from './contact-arrow.svg'
import ContactForm from '../../components/contact_form/ContactForm'


const ContactMe = () => {
  return (
    <section className='contact-section'>
      <div className='contact-section-content'>
        <p>Got a job in <br /><span>mind?</span></p>
        <div>
          <img src={arrow} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
      <div className='contact-form'>
        <ContactForm />
      </div>
      
  

    </section>
  )
}

export default ContactMe