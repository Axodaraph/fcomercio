import { ProductCard } from "./ProductCard";
import './App.css'


export function ProductSection({product}){
    console.log(product)
    const section = "Cárnicos"
    return (
        <section className="ov-productSection">
            <h2 className="ov-productSection-title">&#129385; {section} &#129385;</h2>
            <div className="ov-productSection-carrousel">
            {product.map(({name, price, imgURL, stock}) => (
                <ProductCard 
                key={name} 
                name={name}
                price={price}
                imagen={imgURL}  
                stock={stock}              
                >

                </ProductCard>
            ))
            }
            </div>
        </section>
    )

}