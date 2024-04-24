import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

const CardWidget = () => {
    return(
        <>
        <Link to='/inicio'>
        <img style={{width: 100 ,height: 100,textAlign:"center"}} src={logo} alt="Logo" />
        </Link>
        </>
    )
}

export default CardWidget