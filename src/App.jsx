import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import PaginaInicio from "./components/PaginaInicio/PaginaInicio"
import { CartProvider } from "./Context/CartContext"
import { NotificationProvider } from "./notification/NotificationService"
import CartView from "./components/CartView/CartView"
import Checkout from "./components/Checkout/Checkout"


// import { useEffect } from "react"
// import { addDoc, collection } from "firebase/firestore"
// import { db } from "./services/firebase/firebaseConfig"

function App() {

  //   useEffect(() => {
  //   const productos = [
  //       {id:'1' ,nombre: 'Mortal Kombat', precio: 51000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital', stock: 5, img:`https://cdn-mk1.mortalkombat.com/static/share.jpg` },
  //       {id:'2' ,nombre: 'God of War: Ragnarok', precio: 35000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5, img:`https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJx9I7dgsW3-LdZFMeNu7v41Jqrat3b06HQ8zKPvd--w0mHzNtCDm-AtEYrC-KDUe4TBzqKw` },
  //       {id:'3' ,nombre: 'Lego Marvel Super Hero 2', precio: 9000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`https://cdn.akamai.steamstatic.com/steam/apps/647830/capsule_616x353.jpg?t=1635187803`},
  //       {id:'4' ,nombre: 'Horizon Forbidden West', precio: 18000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5 ,img:`https://i.ytimg.com/vi/wQATS4HOxdo/maxresdefault.jpg`},
  //       {id:'5' ,nombre: 'Grand Theft Auto V', precio: 14000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png` },
  //       {id:'6' ,nombre: 'FC24', precio: 32000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`https://media.tycsports.com/files/2023/07/10/591496/ea-sports-fc24_862x485.webp?v=10` },
  //       {id:'7' ,nombre: 'Batman: Arkman Collection', precio: 9500, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`https://image.api.playstation.com/vulcan/ap/rnd/202306/0915/33a2bc694cae0b6ea1210602a36360427af8486f3b10c0d4.jpg` },
  //       {id:'8' ,nombre: 'God of War', precio: 16000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2020%2F09%2F17%2Fgame_cover%2F479791341600340811.jpg?auth=24298529a1c5d3b55be56495b364d58896ca3d4b8f2bb12bc979a90fc7536a6c&width=140&height=210&smart=true` },
  //       {id:'9' ,nombre: 'A Plague Tale: Requiem', precio: 24000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital', stock: 5,img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40Cbk0Q_XJhxgBWGHFP_Pw_ghK802UKfGSE_0lAQh9P93DtgGrY22mEuIchtOkn12yVg&usqp=CAU` },
  //       {id:'10', nombre: 'Resident Evil 4', precio: 23000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png` },
  //       {id:'11', nombre: 'Spider Man 2', precio: 20000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MarvelsSpiderMan2.jpg/250px-MarvelsSpiderMan2.jpg` },
  //       {id:'12', nombre: 'Assasins`s Creed: odyssey', precio: 15000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHlkEEsfFahKEuEcUoGdfKb8ENcssYdpNqIdplkVN6BcQsqjZCbZJzfcK1jy5p_K89V7Hs` },
  //       {id:'13', nombre: 'Alien Isolation: The Collection', precio: 16000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Alien_Isolation.jpg/220px-Alien_Isolation.jpg` }
  //   ]

  //   const productsCollection = collection(db, 'productos')
  //   productos.forEach(async prod => {
  //     console.log('addDoc')
  //     await addDoc(productsCollection, prod)
  //   })
  // }, [])

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/inicio" element={<PaginaInicio />} />
              <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a Play Mania'} />} />
              <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting={'Bienvenidos a Play Mania'} />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<Checkout/>}  />
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
