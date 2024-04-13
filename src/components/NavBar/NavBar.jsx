import CardWidget from "../CardWidget/CardWidget";
import Button from "../Button/Button";

const NavBar = () => {
    return (
        <header className="bg-black flex justify-between items-center py-4 px-6">
            <div>
                <CardWidget />
            </div>
            <div className="flex space-x-4 text-xl">
                <nav className="text-color-principal">Inicio</nav>
                <nav className="text-color-principal">Productos</nav>
                <nav className="text-color-principal">Contacto</nav>
            </div>
            <Button />
        </header>
    );
};

export default NavBar;