import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'
import './CartShop.css'
import { useCart } from "../hooks/useCart.js";

function CartItem ({imagen, precio, nombre, quantity, addToCart, removeFromCart}) {
    return (
        <li className="cart-item">
            <div className="cart-item__img">
            <img className="imagen" src={imagen} alt={name} />
            <img className="imagen" src={imagen} alt={name} />
            </div>
            
            <div className="cart-item__cant">
                <h2>{nombre}</h2>
                <p>${precio}</p>
                <strong>cant: {quantity}</strong>
            </div>

            <div className='cart-item__cant'>
                <button className='addToCart' onClick={addToCart}>+</button>
                <button className='restToCart'>-</button>
            </div>

            <button className='cart-item__remove' onClick={removeFromCart}><RemoveFromCartIcon/></button>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart, removeFromCart} = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId} >
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />
            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem key={product._id}
                        addToCart={() => addToCart(product)}
                        removeFromCart={() => removeFromCart(product)}
                        {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}