import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"

const Button = () => {

    const {totalQuantity} = useContext(CartContext)

    return (
        <div>
            <Link to={'/cart'} className="cursor-pointer bg-gris transition-colors flex items-center justify-center rounded-lg  hover:bg-slate-600 focus:ring-2 focus:ring-slate-400 duration-300 ">
                <i className="bi bi-cart text-2xl mr-1 p-1 ">{totalQuantity}</i>
            </Link>
        </div>
    )
}

export default Button
