import { ProductSection } from './components/ProductSection.jsx';
import { NavBar } from './components/NavBar.jsx';
import './App.css';
import { CartProvider } from './context/cart.jsx';
import { Cart } from './components/Cart.jsx';
import { useFetchData } from './hooks/useFetchData.js';



function App() {
  const [data] = useFetchData();
  console.log(globalThis.localStorage)
  return (
    <CartProvider>
      <NavBar />
      <Cart/>
      <ProductSection product={data}/>
      {/* <div className='main'>
      {Object.entries(productsByCategory).map(([category, products]) => (
        <ProductSection key={category} product={products} category={category} />
      ))}
      </div> */}
      
    </CartProvider>
  )
}

export default App;