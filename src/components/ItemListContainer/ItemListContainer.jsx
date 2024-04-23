import { useEffect, useState } from "react"
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
            .then(result => {
                setProductos(result);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <main>
            <h1 className="text-center">{greeting}</h1>
            <ItemList productos={productos} />
        </main>
    )
}

export default ItemListContainer