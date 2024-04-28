// import { useContext, useState } from "react"
// import { CartContext } from "../../Context/CartContext"
// import { getDocs, collection, query, where, documentId, QuerySnapshot ,writeBatch,addDoc} from "firebase/firestore"
// import { db } from "../../services/firebase/firebaseConfig"
// import { Await } from "react-router-dom"



// const Checkout = () => {

//     const [loading, setLoading] = useState(false)
//     const [orderId, setOrderId] = useState(null)
//     const { cart, total, clearCart } = useContext(CartContext)

//     const createOrder = async (useData) => {
//         try {
//             const objOrder = {
//                 buyer: {
//                     name: '',
//                     email: '',
//                     phone: ''
//                 },
//                 item: cart,
//                 total
//             }


//             const batch = writeBatch(db)
//             const outOfStock = []
//             const ids = cart.map(prod => prod.id)

//             const productsCollection = query(collection(db, 'productos'), where(documentId(), 'in', ids))

//             const QuerySnapshot = await getDocs(productsCollection)
//             const { docs } = QuerySnapshot

//             docs.forEach(doc => {
//                 const data = doc.data()
//                 const stockDb = data.stock

//                 const productAddedToCart = cart.find(prod => prod.id === doc.id)
//                 const prodQuantity = productAddedToCart.quantity

//                 if (stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity })
//                 } else {
//                     outOfStock.push({ id: doc.id, ...data })
//                 }
//             })

//             if (outOfStock.length === 0) {
//                 batch.commit()

//                 const orderCollection = collection(db, 'orders')
//                 const { id } = await addDoc(orderCollection, objOrder)

//                 clearCart()
//                 setOrderId(id)
//             } else {
//                 console.log('no hay productos');
//             }
//         } catch (error) {
//             console.log('hubo un error en su pedido');
//             console.log('Hubo un error en su pedido:', error);

//         } finally {
//             setLoading(false)

//         }
//     }

//     if (loading) {
//         return <h1>Orden siendo generada</h1>
//     }

//     if (orderId) {
//         return <h1>el ID de su orden es: {orderId}</h1>
//     }



//     return (
//         <div>
//             <h1>Checkout</h1>
//             <h2>
//                 <div>
//                     <input type="text" name="nombre" placeholder="Nombre" />
//                     <input type="text" name="apellido" placeholder="Apellido" />
//                     <input type="number" name="celular" placeholder="Celular" />
//                     <input type="text" name="email" placeholder="Email" />
//                 </div>
//             </h2>
//             <button onClick={createOrder}>Generar orden de compra</button>
//         </div>
//     )
// }

// export default Checkout