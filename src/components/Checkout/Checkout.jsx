import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import Form from "../Form/Form"
import { collection, query, where, documentId, getDocs, writeBatch,addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: '',
                    email: '',
                    phone: ''
                },
                item: cart,
                total
            }


            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'productos'), where(documentId(), 'in', ids));



            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot

            

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)

                clearCart()
                setOrderId(id)
            } else {
                console.log('no hay productos');
            }
        } catch (error) {
            console.error('Hubo un error al generar su orden:');
        } finally {
            setLoading(false);
        }
        
    }

    if (loading) {
        return <h1>Procesando orden...</h1>;
    }
    
    if (orderId) {
        return <h1>Tu orden ha sido creada. ID de la orden: {orderId}</h1>;
    }
    
    return (
        <div>
            <Form />
            <button onClick={createOrder}>Generar orden de compra</button>
        </div>
    );
}    

export default Checkout