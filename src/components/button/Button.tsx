import Icon from '../icon/Icon'

type Props={
    text:string,
    iconNotDisabled:boolean
    iconSrc:string,
    iconAlt:string,
    type?: "button" | "submit" | "reset"
    
}

const Button = ({text,iconNotDisabled,iconSrc,iconAlt,type}:Props) => {
  return (
    <button type={type}>
        {text}
        {iconNotDisabled && <Icon iconSrc={iconSrc} iconAlt={iconAlt} />}
    </button>
  )
}

export default Button