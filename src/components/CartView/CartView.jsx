import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1 className="text-center">
                <span className="inline-block text-[40px] text-cyan-5inline-block  border-b-2 border-[#40A2E3] text-[#40A2E3] text-[35px]00">CartView</span>
            </h1>
            <section>
                {
                    cart.map(prod => {
                        return (
                            <article className="m-2" key={prod.id}>
                                <h2 className="text-[30px] text-color-secundario pt-2" >{prod.nombre}</h2>
                            </article>
                        );
                    })
                }
            </section>
            <div className="text-center">
                <Link className=" text-color-secundario hover:text-color-principal transition hover:duration-900 focus:text-color-secundario text-[40px] " to='/checkout'>Ir al Checkout</Link>
            </div>
        </div>
    );
};

export default CartView;
