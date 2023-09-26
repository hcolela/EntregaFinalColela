import './App.css'
import Categories from './components/categories/Categories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/products/ProductList'
import Navbar from './components/Navbar/Navbar'
import CategoriesProductList from './components/categories/CategoriesProductList'

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path = '/categories' element = {<Categories />} />
          <Route exact path = '/products' element = {<ProductList />} />
          <Route exact path = '/category/:categoryId' element = {<CategoriesProductList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
