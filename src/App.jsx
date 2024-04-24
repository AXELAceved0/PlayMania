import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import PaginaInicio from "./components/PaginaInicio/Paginanicio"

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<PaginaInicio/>}/>
        <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a Play Mania'} />} />
        <Route path="/categoria/:categoriaId" element={ <ItemListContainer greeting={'Bienvenidos a Play Mania'}/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer  />} />
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
