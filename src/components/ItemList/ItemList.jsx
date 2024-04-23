import Item from "../Item/Item"

const ItemList = ({ productos }) => {
    return (
        <div className="flex flex-wrap content-center justify-between">
            {productos.map(productos => {
                return (
                    <Item key={productos.id} {...productos}/>
                )
            })}
        </div>
    )
}

export default ItemList