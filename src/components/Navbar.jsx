import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className='flex justify-between items-center h-20 max-w-6xl mx-auto px-5 text-white'>

      <NavLink to="/">
        <img src="/logo.png" className="h-14"/>
      </NavLink>

      <div className='flex items-center space-x-6 font-medium'>
        
        <NavLink to="/">Home</NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />

            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 
              bg-green-600 text-xs w-5 h-5 flex justify-center 
              items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            }
          </div>
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar
