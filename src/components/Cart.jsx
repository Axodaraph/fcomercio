import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'
import './CartShop.css'
import './Table.css'
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

function PriceTable ({cart}) {
    let totalPrice = 0

    return (
        <section className="main-tables-container">
                <div className="main-currency-table">
                    <p className="currency-table--title"></p>
                    <div className="currency-table--container">
                        <table>
                            <thead>
                            <tr>
                                <th className="table__top-left">Producto</th>
                                <th className="table__right">Precio</th>
                                <th>Cantidad</th>
                                <th className="table__top-right table__right">Costo</th>
                            </tr>
                            </thead>
                            
                            {
                                cart.map(product => {
                                    totalPrice += product.precio * product.quantity

                                    return(<tr key={product.nombre}>
                                    <td>{product.nombre}</td>
                                    <td className="table__right">$ {product.precio}</td>
                                    <td>{product.quantity}</td>
                                    <td className="table__right">$ {product.precio * product.quantity}</td>
                                    </tr>)
                                }
                                   
                                     
                                )
                            }
                            <tr>
                                <td className="table__botttom-left">Precio Total</td>
                                <td></td>
                                <td></td>
                                <td className="table__bottom-right table__right">$ <strong>{totalPrice}</strong></td>
                            </tr>
                            {console.log(totalPrice)}
                        </table>
                    </div>
                </div>
                
                
                {/* <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Coste</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(product => (
                <tr>
                    <td>{product.nombre}</td>
                    <td>$ {product.precio}</td>
                    <td>{product.quantity}</td>
                    <td>$ {product.precio * product.quantity}</td>
                </tr>
                ))}
            </tbody>
        </table> */}
            </section>
                    
        
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

                <PriceTable cart={cart}></PriceTable>
            </aside>
        </>
    )
}