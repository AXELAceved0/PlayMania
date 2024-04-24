import CardWidget from "../CardWidget/CardWidget";
import Button from "../Button/Button";
import { Link } from "react-router-dom"; 


const NavBar = () => {
    return (
        <header className="bg-black flex justify-between items-center py-4 px-6 border-b-4 border-color-principal ">
            <div>
                <CardWidget />
            </div>
            <div className="flex space-x-4 text-2xl cursor-pointer ">
                <Link to='/inicio' className="text-color-principal relative group">
                    <span className="relative">Inicio</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-500 transform -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
                <Link to='/' className="text-color-principal relative group">
                    <span className="relative">Productos</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-500 transform -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
                <Link className="text-color-principal relative group">
                    <span className="relative">Contacto</span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-500 transform -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"></span>
                </Link>
            </div>
            <Button />
        </header>
    );
};

export default NavBar;



