import { useState } from "react";

export function ProductCard({imagen, name = "Picadillo", price= 0, stock= 0}){
    const [isShoping, setIsShoping] = useState(false)
    const [count, setCount] = useState(1);   
    
    const shopingMore = isShoping ? 'ov-productCard-shoping-more is-shoping' : 'ov-productCard-shoping-more'
    const shopingLess = isShoping ? 'ov-productCard-shoping-less is-shoping' : 'ov-productCard-shoping-less'

    console.log('hola')

    

    const handleClick = () => {
        if(isShoping == false){
            setIsShoping(!isShoping)
            // Guardar en localStorage
            saveToLocalStorage(name, price, count);
        }
    }
    const handleIncrement = () => {
        setCount(count + 1);
        updateLocalStorage(name, count + 1);
      };

    const handleDecrement = () => {
        if(count < 2 ){
            setIsShoping(!isShoping)
            removeFromLocalStorage(name)
        }else{
            setCount(count - 1);
            updateLocalStorage(name, count - 1)
        }
            
        
        
      };

    const text = isShoping ? count : 'agregar al carrito'

    
    
    // Funciones para manejar el localStorage
    const saveToLocalStorage = (name, price, count) => {
        const currentItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        currentItems.push({ name, price, count });
        localStorage.setItem('cartItems', JSON.stringify(currentItems));
    };

    const updateLocalStorage = (name, newCount) => {
        const currentItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedItems = currentItems.map(item => 
            item.name === name ? { ...item, count: newCount } : item
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const removeFromLocalStorage = (name) => {
        const currentItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedItems = currentItems.filter(item => item.name !== name);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };
    
    return(
        <article className="ov-productCard">
            <img className="ov-productCard-img" src={imagen} alt="" />
            <h2 className="ov-productCard-name">{name}</h2>
            <div className="ov-productCard-info">
                <p className="precio">${price}</p>
                <p>Disponible: {stock}</p>
            </div>
            <div className="ov-productCard-shoping" onClick={handleClick}>
                <button className={shopingMore} onClick={handleIncrement}></button>
                {text}
                <button className={shopingLess} onClick={handleDecrement}></button>
            </div>
        </article>
    )
}