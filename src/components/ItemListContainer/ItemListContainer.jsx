import { useEffect, useState } from "react"
import { getProductos, getProductosByCategoria } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {

        const asyncFunction = categoriaId ? getProductosByCategoria : getProductos

        asyncFunction(categoriaId)
            .then(result => {
                setProductos(result);
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoriaId])

    return (
        <main>
            <h1 className="text-center">{greeting}</h1>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer