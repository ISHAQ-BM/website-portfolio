import { useState } from 'react'
import './ContactForm.css'
import Button from '../button/Button'
import emailjs from '@emailjs/browser';
import send from './send.svg'
const ContactForm = () => {
    const  [ name , setName ] = useState<string>('')
    const  [ email , setEmail ] = useState<string>('')
    const  [ message , setMessage ] = useState<string>('')
    const sendEmail= (e:SubmitEvent) => {
      e.preventDefault();
      const templateParams={
        to_name:'ishaq',
        from_name:name,
        message:message
      }

      emailjs.send('service_5pzeqpu', 'template_tk95wyi', templateParams, 'lThVKnOyWln4evgRo')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
    return (
        <form  onSubmit={ () => sendEmail} >
            <div className='user-info'>
                <label >Your name
                    <input 
                        type="text" 
                        placeholder='Name' 
                        name='name'
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                </label>
                <label >Your email
                    <input 
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                    type="text" 
                    placeholder='Email' 
                    name='email' 
                    required/>
                </label>

             </div>
      
            <label className='message'>Message
                <textarea 
                placeholder='Message' 
                name='message' 
                value={message}
                onChange={ e => setMessage(e.target.value)}
                required></textarea>
            </label>
            <Button  text="Send message" iconSrc={send} iconAlt='submit' iconNotDisabled={true} type='submit'/>
        </form>
    )
}

export default ContactForm