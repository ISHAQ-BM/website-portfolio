import './Icon.css'

type Props={
    iconSrc:string,
    iconAlt:string
}

const Icon = ({iconSrc,iconAlt}:Props) => {
  return (
    <img className="icon" src={iconSrc} alt={iconAlt} />
  )
}

export default Icon