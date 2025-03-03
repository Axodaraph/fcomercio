import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'
import './CartShop.css'
import { useCart } from "../hooks/useCart.js";

function CartItem ({imagen, precio, nombre, quantity, addToCart, removeFromCart, restToCart}) {
    return (
        <li className="cart-item">
            <div className="cart-item__img">
            <img src={imagen} alt={nombre} />
            </div>
            
            <div className="cart-item__info">
                <h2>{nombre}</h2>
                <p>${precio}</p>
                <strong>cant: {quantity}</strong>
            </div>

            <div className='cart-item__cant'>
                <button className='addToCart' onClick={addToCart}>+</button>
                <button className='restToCart' onClick={restToCart}>-</button>
            </div>

            <button className='cart-item__remove' onClick={removeFromCart}><RemoveFromCartIcon/></button>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart, removeFromCart, restToCart, setDisplay, display} = useCart()

    function changeDisplay () {
        setDisplay(!display)
    }

    return (
        <>  
            <input type="checkbox" id={cartCheckboxId} hidden />
            <label onClick={changeDisplay} className="cart-button" htmlFor={cartCheckboxId} >
            </label>
            
            <aside className="cart" style={
                {
                    display: display? "flex" : "none"
                }
            }>
                <ul>
                    {cart.map(product => (
                        <CartItem key={product._id}
                        addToCart={() => addToCart(product)}
                        restToCart={() => restToCart(product)}
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