import React, { useEffect, useState } from 'react';

export const ShopingList = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Función para cargar los elementos del carrito desde localStorage
        const loadCartItems = () => {
            const items = JSON.parse(localStorage.getItem('cartItems')) || [];
            setCartItems(items);
        };

        // Cargar los elementos del carrito al montar el componente
        loadCartItems();

        // Función para manejar el evento de almacenamiento
        const handleStorageChange = (event) => {
            if (event.key === 'cartItems') {
                loadCartItems();
            }
        };

        // Escuchar cambios en el localStorage
        globalThis.addEventListener('storage', handleStorageChange);
    }, []);

    return (
        <div className="cart-list">
            <h2>Lista de Productos en el Carrito</h2>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                            <span>Cantidad: {item.count}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};