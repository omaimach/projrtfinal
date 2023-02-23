import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Signup from './componenets/login/Signup';
import Signin from './componenets/login/Signin';
import Profile from './componenets/login/Profile';
import HomePage from './componenets/pages/HomePage';
import Navbar from './componenets/nav/Navbar';
import ProductDetails from './componenets/products/ProductDetails';
import NewProduct from './componenets/products/NewProducts'
import About from './componenets/pages/About'
import EditProduct from './componenets/products/EditProducts'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/newProduct' element={<NewProduct />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      {/* <Route path='/editProduct' element={<EditProduct />} /> */}
    </Routes>

    </BrowserRouter> 
    </div>
  );
}

export default App;

      