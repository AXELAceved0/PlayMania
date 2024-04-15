const Button = () => {
    return (
        <div>
            <button className="cursor-pointer bg-gris transition-colors flex items-center justify-center rounded-lg  hover:bg-slate-600 focus:ring-2 focus:ring-slate-400 duration-300 ">
                <i className="bi bi-cart text-2xl mr-1 p-1 ">0</i>
            </button>
        </div>
    )
}

export default Button
