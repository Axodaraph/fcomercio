import { ProductSection } from './ProductSection';
import { NavBar } from './NavBar';
import { ShopingList } from './ShopingList'
import './App.css';
import { getProduct } from './getProduct';
import { useEffect, useState } from 'react';

function App() {
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
  console.log(productsByCategory)
  return (
    <>
      <NavBar />
      <div className='main'>
      {Object.entries(productsByCategory).map(([category, products]) => (
        <ProductSection key={category} product={products} category={category} />
      ))}
      </div>
      <ShopingList/>
    </>
  )
}

export default App;