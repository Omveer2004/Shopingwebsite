import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import Cart from "./Pages/Cart";

function App() {
  return (
    <div >
      <div className='bg-slate-900 w-full fixed top-0 left-0 z-50'>
        <Navbar />
      </div>
      <div className='mt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
