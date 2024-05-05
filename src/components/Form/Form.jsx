const Form = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="inline-block text-[40px] text-cyan-5inline-block  border-b-2 border-[#40A2E3] text-[#40A2E3] text-[35px]00">Checkout</h1>
            </div>
            <h2 className="flex justify-center items-center">
                <div>
                    <input type="text" name="nombre" placeholder="Nombre" />
                    <input type="text" name="apellido" placeholder="Apellido" />
                    <input type="number" name="celular" placeholder="Celular" />
                    <input type="text" name="email" placeholder="Email" />
                </div>
            </h2>
        </div>
    )
}

export default Form