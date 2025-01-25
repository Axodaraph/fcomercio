import { useState } from "react";

export function ProductCard({imagen, name = "Picadillo", price= 0, category = "Misceláneas", stock= 0, }){
    const [isShoping, setIsShoping] = useState(false)
    const [count, setCount] = useState(1);   
    
    const shopingMore = isShoping ? 'ov-productCard-shoping-more is-shoping' : 'ov-productCard-shoping-more'
    const shopingLess = isShoping ? 'ov-productCard-shoping-less is-shoping' : 'ov-productCard-shoping-less'

    const handleClick = () => {
        if(isShoping == false)
            setIsShoping(!isShoping)
        
    }
    const handleIncrement = () => {
        setCount(count + 1);
      };

    const handleDecrement = () => {
        if(count < 2 ){
            setIsShoping(!isShoping)
        }else{
            setCount(count - 1);
        }
            
        
        
      };

    const text = isShoping ? count : 'agregar al carrito'
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