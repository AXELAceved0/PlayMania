import Imagen from "./assets/Imagen"

const productos = [
    { nombre: 'Mortal Kombat', precio: 51000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital', stock: 5, img:`${Imagen.mortalk}` },
    { nombre: 'God of War: Ragnarok', precio: 35000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5, img:`${Imagen.godragnarok}` },
    { nombre: 'Lego Marvel Super Hero 2', precio: 9000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.legomarvelhero}` },
    { nombre: 'Horizon Forbidden West', precio: 18000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5 ,img:`${Imagen.horizonfw}`},
    { nombre: 'Grand Theft Auto V', precio: 14000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.gtav}` },
    { nombre: 'FC24', precio: 32000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.fc24}` },
    { nombre: 'Batman: Arkman Collection', precio: 9500, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.batmancollection}` },
    { nombre: 'God of War', precio: 16000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.god}` },
    { nombre: 'A Plague Tale: Requiem', precio: 24000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital', stock: 5,img:`${Imagen.aplague}` },
    { nombre: 'Resident Evil 4', precio: 23000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital', stock: 5,img:`${Imagen.resident4}` },
    { nombre: 'Spider Man 2', precio: 20000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`${Imagen.spidermiles}` },
    { nombre: 'Assasins`s Creed: Mirage', precio: 27000, formato: 'digital', categoria: 'PS5', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`${Imagen.asassinmirage}` },
    { nombre: 'Alien Isolation: The Collection', precio: 16000, formato: 'digital', categoria: 'PS4', descripcion: 'Juego digital para tu consola favorita', stock: 5,img:`${Imagen.alien}` }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        } ,1000)
        })
}