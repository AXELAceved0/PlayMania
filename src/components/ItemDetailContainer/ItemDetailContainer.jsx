// import ItemDetail from "../ItemDetail/ItemDetail"
import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import { getProductosById } from "../../asyncMock"


const ItemDetailContainer = () => {
    const [productos,setProductos] = useState(null)

    const {itemId} = useParams()

useEffect(() => {
    getProductosById(itemId)
    .then(response => {
        setProductos(response)
    })
}, [itemId])

    return(
        <div>
            <h1>Detalle del Producto</h1>
            {/* <ItemDetail {...productos} /> */}
        </div>
    )
}

export default ItemDetailContainer