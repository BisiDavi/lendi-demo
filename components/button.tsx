import styles from '../styles/button.module.scss'

export default function Button({className, text, icon}:ButtonProps) {
    return (        
        <button className={className} >
            {icon && <span> {icon} </span>}
            { text}
        </button>               
    )
}

interface ButtonProps{
    className?: any
    text: string
    icon?: string
}
