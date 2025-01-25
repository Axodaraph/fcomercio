import { useState } from "react";
import { ProductCard } from "./ProductCard";
import './App.css'

export function ProductSection(){
    const section = "Cárnicos"
    return (
        <section className="ov-productSection">
            <h2 className="ov-productSection-title">&#129385; {section} &#129385;</h2>
            <div className="ov-productSection-carrousel">
            <ProductCard  imagen="https://images.pexels.com/photos/5894143/pexels-photo-5894143.jpeg?auto=compress&cs=tinysrgb&w=600" name='Croquetas' price={500} category='Carnicos' stock={50}></ProductCard>
            <ProductCard  imagen="https://images.pexels.com/photos/17126515/pexels-photo-17126515/free-photo-of-close-up-of-sliced-meat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name='Carne troceada' price={1000} category='Carnicos' stock={50}></ProductCard>
            <ProductCard  imagen="https://images.pexels.com/photos/3877668/pexels-photo-3877668.jpeg?auto=compress&cs=tinysrgb&w=600" name='Hamburguesas' price={750} category='Carnicos' stock={50}></ProductCard>
            <ProductCard  imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuPRIdu_aHLe1WcHqkPFdUOumGHTtegiZpA&s" name='Salchichas' price={650} category='Carnicos' stock={50}></ProductCard>
            <ProductCard  imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ir0HIV7PrSF4z4kh6hZ0HiC5NKjDYZeb9SBchZKWFIEOGs-J67UZ_oO3U1B7oTgmZcQ&usqp=CAU" name='Pollo 10lb' price={3500} category='Carnicos' stock={24}></ProductCard>
            </div>
        </section>
    )

}