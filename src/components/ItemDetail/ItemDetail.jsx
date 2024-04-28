import { useState,useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import {CartContext} from "../../Context/CartContext"
import { useNotification } from "../../notification/hook/useNotification"
import { Link } from "react-router-dom"


const ItemDetail = ({id, img, nombre, precio, categoria, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const {addItem } = useContext(CartContext);

    const {showNotification} = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,nombre,precio,quantity
        }

        showNotification('success', `Se agrego al Carrito: ${quantity} ${nombre}`)
        setQuantity(quantity)

        addItem(objProductToAdd)
    }
    return (
        <article className="flex justify-around items-center">
            <div>
                <img src={img} className="w-[400px] h-[550px]"/>
            </div>
            <div className="text-center text-4xl">
            <h2 className="text-center inline-block border-b-2 border-[#40A2E3] text-[#40A2E3]">{nombre}</h2>
            <h3 className="pb-[15px] pt-3 border-[#40A2E3] text-[#40A2E3]">{categoria}</h3>
            <h4 className="pb-[10px] border-[#40A2E3] text-[#40A2E3]">${precio}</h4>
            {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <Link to={'/Cart'} className="p-[20px] text-color-secundario hover:text-color-principal transition hover:duration-900 focus:text-color-secundario  ">Finalizar Compra</Link>}
            </div>
        </article>
    )
}

export default ItemDetail