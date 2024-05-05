import { useState, createContext} from "react";

export const CartContext = createContext(1)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart((prev) => [...prev, productToAdd]);
        } else {
            console.error("El producto ya está agregado");
        }
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const clearCart = () =>{
        setCart([])
    }

    const getTotalQuantity = () => {
        let acumulador = 0;

        cart.forEach(prod => {
            acumulador += prod.quantity;
        });

        return acumulador;
    };
    const totalQuantity = getTotalQuantity();

    const getTotal = () => {
        let acumulador = 0;

        cart.forEach(prod => {
            acumulador += prod.quantity * prod.precio;
        });
        return acumulador;
    };

    const total = getTotal();

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
