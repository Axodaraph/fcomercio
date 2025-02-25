import { useState, useEffect } from "react";
import { getProduct } from "../getProduct.js";

export function useProduct () {
    const categories = [
      'Cárnicos', 'Lácteos', 'Cereales', 'Enlatados', 
      'Panaderia', 'Bebidas', 'Condimentos', 'Snacks'
    ];
  
    const [productsByCategory, setProductsByCategory] = useState({});
  
    useEffect(() => {
      const fetchProducts = async () => {
        const products = {};
  
        for (const category of categories) {
          try {
            const data = await getProduct(category.toLowerCase());
            if (data.length > 0) {
              products[category] = data; // Guarda los productos por categoría
            }
          } catch (error) {
            console.error(`Error fetching ${category}:`, error);
          }
        }
  
        setProductsByCategory(products); // Almacena todos los productos encontrados
      };
  
      fetchProducts();
    }, []); // Solo se ejecuta una vez al montar el componente
  
    return {productsByCategory};
  }