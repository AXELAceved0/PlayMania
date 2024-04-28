import { useState } from "react"

const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () =>{
        if(count > 1){
            setCount (prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }
    return (
        <article>
            <div>
            <h3 className='text-center inline-block border-b-2 border-[#40A2E3] text-[#40A2E3]'>{count}</h3>
            </div>
            <button onClick={decrement} className="text-color-secundario hover:text-color-principal transition hover:duration-900 focus:text-color-secundario ">-</button>
            <button onClick={() => onAdd(count)} className="p-[20px] text-color-secundario hover:text-color-principal transition hover:duration-900 focus:text-color-secundario "> Agregar al Carrito</button>
            <button onClick={increment} className="text-color-secundario hover:text-color-principal transition hover:duration-900 focus:text-color-secundario   ">+</button>
        </article>
    )
}

export default ItemCount