import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PaginaInicio = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = '/components/PaginaInicio/assets/fondo.png';
        image.onload = () => {
            setLoaded(true);
        };
    }, []);

    return (
        <main className={`bg-fondo bg-cover bg-center h-[450px] ${loaded ? '' : 'bg-transparent'}`}>
            <div className="flex flex-col justify-center pt-20 pl-28 text-22 text-left ">
                <Link to='/categoria/PS4' className="w-[45px] text-center relative group cursor-pointer">
                    <span className="relative text-color-principal">PS4</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-color-principal transition-all duration-1000 transform -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
                <Link to='/categoria/PS5' className="w-[45px] text-center relative group cursor-pointer">
                    <span className="relative text-color-principal">PS5</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-color-principal transition-all duration-1000 transform -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
                <Link to='/' className="w-[110px] text-center relative group cursor-pointer">
                    <span className="relative text-color-principal">Productos</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-color-principal transition-all duration-1000 transform -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
            </div>
        </main>
    )
}

export default PaginaInicio;
