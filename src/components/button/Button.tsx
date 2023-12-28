import Icon from '../icon/Icon'
import './Button.css'

type Props={
    text:string,
    iconDisabled:boolean
    iconSrc:string,
    iconAlt:string
    
}

const Button = ({text,iconDisabled,iconSrc,iconAlt}:Props) => {
  return (
    <button >
        {text}
        {iconDisabled && <Icon iconSrc={iconSrc} iconAlt={iconAlt} />}

    </button>
  )
}

export default Button