import { ProductCard } from "./ProductCard";
import '../App.css'
import { useCart } from "../hooks/useCart";
import {AddToCartIcon, RemoveFromCartIcon}  from "../components/Icons"


export function ProductSection({product=[] }){
    const {cart, addToCart, removeFromCart} = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item._id === product._id)
      }

    const list = product
    return (
        <section className="ov-productSection">
            <h2 className="ov-productSection-title">Nuestras Ofertas</h2>
                <ul className="ov-productSection-carrousel">
                {list.map((product) => {
                const isProductInCart = checkProductInCart(product)

                return (
                    <li className="ov-productCard" key={product.nombre}>
                
                <img className="ov-productCard-img" src={product.imagen} alt={product.nombre} />
                <h2 className="ov-productCard-name">{product.nombre}</h2>
                
                <div className="ov-productCard-info">
                    <p className="precio">${product.precio}</p>
                    <p>Disponible: {product.stock}</p>
                </div>
                
                
                <button className="ov-productCard-shoping" style={{backgroundColor: isProductInCart ? 'transparent' : '#5DB996', color: isProductInCart ? 'red' : '#222'}} onClick={() => isProductInCart? removeFromCart(product) : addToCart(product)}>
                  {
                    isProductInCart ?
                    <RemoveFromCartIcon/>
                    : <AddToCartIcon />
                  }
                </button>
            </li>
                )
                
            }
                 
            )
            }
                </ul>
        </section>
    )

}