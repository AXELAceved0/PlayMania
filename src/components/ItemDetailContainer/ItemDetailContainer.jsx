import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const { itemId } = useParams()

    useEffect(() => {
        const productosDoc = doc(db, 'productos', itemId)

        console.log("Obteniendo datos del producto:", itemId);

        getDoc(productosDoc)
            .then(QueryDocumentSnapshot => {
                console.log("Datos del producto obtenidos:", QueryDocumentSnapshot.data());

                const data = QueryDocumentSnapshot.data()
                const productosAdapted = { id: QueryDocumentSnapshot, ...data }

                console.log("Producto adaptado:", productosAdapted);

                setProductos(productosAdapted)
            })
            .catch((error) => {
                console.error("Error al obtener datos del producto:", error);
                setError('Hubo un error cargando los productos')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if (loading) {
        return <h1 className="text-[50px] text-center mt-96">Cargando Productos...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <main>
            <div className="text-center mb-4">
                <h1 className="inline-block  border-b-2 border-[#40A2E3] text-[#40A2E3] text-[35px]">Detalle del Producto</h1>
            </div>
            <ItemDetail {...productos} />
        </main>
    )
}

export default ItemDetailContainer
