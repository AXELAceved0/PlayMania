import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/hook/useNotification"

const ItemListContainer = ({ greeting }) => {

    const { showNotification } = useNotification()
    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(() => {

        const productosCollection = categoriaId ? (
            query(collection(db, 'productos'), where('categoria', '==', categoriaId))
        ) : ( collection(db, 'productos')
    )


        getDocs(productosCollection)
            .then(querySnapshot => {
                const productosAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })
                setProductos(productosAdapted)

            })
            .catch(() => {
                showNotification('Hubo un error cargando los productos')
            }, [categoriaId])
    })

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