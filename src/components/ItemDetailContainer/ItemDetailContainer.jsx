import { useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import { getProductosById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos,setProductos] = useState(null)

    const {itemId} = useParams()

useEffect(() => {
    getProductosById(itemId)
    .then(Result => {
        setProductos(Result)
    })
}, [itemId])

    return(
        <main>
            <h1>Detalle del Producto</h1>
            <ItemDetail {...productos} />
        </main>
    )
}

export default ItemDetailContainer