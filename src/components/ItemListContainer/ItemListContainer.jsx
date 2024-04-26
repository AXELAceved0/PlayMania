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
            <div className="text-center">
            <h1 className="inline-block  border-b-2 border-[#40A2E3] text-[#40A2E3] text-[30px]">{greeting}</h1>
            </div>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer