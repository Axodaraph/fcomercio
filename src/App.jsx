import { ProductSection } from './components/ProductSection.jsx';
import { NavBar } from './components/NavBar.jsx';
import './App.css';
import { CartProvider } from './context/cart.jsx';
import { Cart } from './components/Cart.jsx';
import {products as initialProducts} from './mocks/Product.json'
import { useFilters } from './hooks/useFilters.js';



function App() {
  console.log(initialProducts)
  const { filteredProducts } = useFilters()
  const filtredProducts = filteredProducts(initialProducts)
  console.log(filtredProducts)
  return (
    <CartProvider>
      <NavBar />
      <Cart/>
      
      <ProductSection product={filtredProducts}/>      
    </CartProvider>
  )
}

export default App;