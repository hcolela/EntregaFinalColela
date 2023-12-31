import './App.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import Navbar from './components/Navbar/Navbar'
import CategoriesProductList from './components/categories/CategoriesProductList'
import CartProvider from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/categories' element={<Categories />} />
            <Route exact path='/products' element={<ProductList />} />
            <Route exact path='/category/:categoryId' element={<CategoriesProductList />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
