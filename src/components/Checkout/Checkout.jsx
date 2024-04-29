import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"

const Checkout = () => {

    const [loading,setLoading] = useState(false)
    const [orderId, setOrderId]= useState(null)
    const { cart, total , clearCart} = useContext(CartContext)

    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    nombre: "",
                    email: "",
                    numero: "",

                },
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)

            const productosCollections = query(collection(db, 'productos'), where(documentId(), 'in', ids))

            const querySnapshot = await getDocs(productosCollections)
            const { docs } = querySnapshot

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock

                const productoAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'order')
                const { id } = await addDoc(orderCollection, objOrder)

                clearCart()
                setOrderId(id);
            } else {
                console.error('NO hay productos en stock');
            }
        } catch (error) {
            console.error('Hubo un error en su orden');
        } finally {
            setLoading(false)
            console.log('Hubo un error en su orden');
        }

    }

    if(loading){
        return <h1>Su order esta siendo generada...</h1>
    }

    if(orderId){
        return <h1>Su codigo id es: {orderId} </h1>
    }

    return (
        <div>
            <div className="text-center">
            <h1 className="inline-block text-[40px] text-cyan-5inline-block  border-b-2 border-[#40A2E3] text-[#40A2E3] text-[35px]00">Checkout</h1>
            </div>
            <h2 className="flex justify-center items-center">
                <div>
                    <input type="text" name="nombre" placeholder="Nombre" />
                    <input type="text" name="apellido" placeholder="Apellido" />
                    <input type="number" name="celular" placeholder="Celular" />
                    <input type="text" name="email" placeholder="Email" />
                </div>
            </h2>
            <button onClick={createOrder}>Generar orden de compra</button>
        </div>
    )
}

export default Checkout