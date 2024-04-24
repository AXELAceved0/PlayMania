import Imagen from "./assets/Imagen"

const productos = [
    {id:'1' ,nombre: 'Mortal Kombat', precio: 51000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital', stock: 5, img:`${Imagen.mortalk}` },
    {id:'2' ,nombre: 'God of War: Ragnarok', precio: 35000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5, img:`${Imagen.godragnarok}` },
    {id:'3' ,nombre: 'Lego Marvel Super Hero 2', precio: 9000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.legomarvelhero}` },
    {id:'4' ,nombre: 'Horizon Forbidden West', precio: 18000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5 ,img:`${Imagen.horizonfw}`},
    {id:'5' ,nombre: 'Grand Theft Auto V', precio: 14000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.gtav}` },
    {id:'6' ,nombre: 'FC24', precio: 32000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.fc24}` },
    {id:'7' ,nombre: 'Batman: Arkman Collection', precio: 9500, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.batmancollection}` },
    {id:'8' ,nombre: 'God of War', precio: 16000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.god}` },
    {id:'9' ,nombre: 'A Plague Tale: Requiem', precio: 24000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital', stock: 5,img:`${Imagen.aplague}` },
    {id:'10', nombre: 'Resident Evil 4', precio: 23000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.resident4}` },
    {id:'11', nombre: 'Spider Man 2', precio: 20000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`${Imagen.spidermiles}` },
    {id:'12', nombre: 'Assasins`s Creed: Mirage', precio: 27000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`${Imagen.asassinmirage}` },
    {id:'13', nombre: 'Alien Isolation: The Collection', precio: 16000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`${Imagen.alien}` }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        } ,1000)
        })
}

export const getProductosById = (itemId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos.find(prod => prod.id === itemId))
    },1000)
})
}

export const getProductosByCategoria = (categoriaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoriaId))
        },1000)
    })
} 