import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ img, categoria, nombre, precio,stock }) => {

    const handleOnAdd = (quantity) =>{
        console.log(quantity);
    }
    return (
        <article className="flex justify-around items-center">
            <div>
                <img src={img} className="w-[400px] h-[550px]"/>
            </div>
            <div className="text-center text-4xl">
            <h2 className="text-center inline-block border-b-2 border-[#40A2E3] text-[#40A2E3]">{nombre}</h2>
            <h3 className="pb-[15px] pt-3 border-[#40A2E3] text-[#40A2E3]">{categoria}</h3>
            <h4 className="pb-[10px] border-[#40A2E3] text-[#40A2E3]">${precio}</h4>
            <ItemCount stock={stock} onAdd={handleOnAdd}/>
            </div>
        </article>
    )
}

export default ItemDetail