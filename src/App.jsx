import { ProductSection } from './ProductSection'
import { NavBar } from './NavBar'
import './App.css'




function App() {
  const productos = [
    {
      name: 'Picadillo',
      price: '300',
      imgURL: 'https://images.pexels.com/photos/5894143/pexels-photo-5894143.jpeg?auto=compress&cs=tinysrgb&w=600',
      stock: 50
    },
    {
      name: 'Carne picada',
      price: '1000',
      imgURL: 'https://images.pexels.com/photos/17126515/pexels-photo-17126515/free-photo-of-close-up-of-sliced-meat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      stock: 50
    },
    {
      name: 'Hamburguesas',
      price: '650',
      imgURL: 'https://images.pexels.com/photos/3877668/pexels-photo-3877668.jpeg?auto=compress&cs=tinysrgb&w=600',
      stock: 50
    },{
      name: 'Salchichas',
      price: '500',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuPRIdu_aHLe1WcHqkPFdUOumGHTtegiZpA&s',
      stock: 50
    }
  ]

  return (
    <>
      <NavBar/>
      <ProductSection product={productos}/>
    </>
  )
}

export default App
