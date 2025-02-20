import { ProductCard } from "./ProductCard";
import './App.css'


export function ProductSection({product=[] , category = "Misceláneas"}){
    const list = product
    return (
        <section className="ov-productSection">
            <h2 className="ov-productSection-title">🍞 {category} 🍞 </h2>
            <div className="ov-productSection-carrousel">
            {list.map(({nombre, precio, imagen, stock}) => (
                <ProductCard 
                key={nombre} 
                name={nombre}
                price={precio}
                imagen={imagen}  
                stock={stock}              
                >

                </ProductCard>
            ))
            }
            </div>
        </section>
    )

}