const Item = ({nombre,img, precio,categoria}) => {
    return (
        <div className="rounded-lg  box-border text-center  transition duration-1000 hover:scale-500 hover:shadow-2xl hover:shadow-slate-900 m-5 border-solid border-[1px] border-green ">
            <img src={img} className="w-[250px] h-[350px] rounded-t-lg" />
            <h2 className="text-[20px]">{nombre}</h2>
            <h3 className="p-[6px]">{categoria}</h3>
            <h4 className="p-[5px]">${precio}</h4>
            <a className="inline-block text-[20px] text-color-principal cursor-pointer transition-colors duration-2000 hover:text-color-secundario hover:duration-1000">Ver Detalle</a>
        </div>
    )
}

export default Item