import { NavLink, Outlet } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa6";
import { Layout } from "../Layout";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { createPortal } from "react-dom";
import { ShoppingCart } from "../ShoppingCart";

export function NavBar(){
  const activeStyle = 'underline underline-offset-4';
  const { 
    productsInCart, 
    setShowProductsInCart, 
    showProductsInCart 
  } = useContext(AppContext);

  return (
    <>
      <nav className='flex justify-between flex-wrap items-center py-3 px-2 bg-slate-900 text-indigo-200 text-sm'>
        {/* Left side of the Navbar */}
        <ul className='flex items-center flex-wrap gap-3'>
          <li>
            <NavLink to={'/'} className='font-bold text-lg mr-4 text-orange-600'>
              FakeStore 
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              Home 
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/electronics'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              Electronics 
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/Toys'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              Jewelery 
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/clothes'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              {`Men's clothing `}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/furnitures'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              {`"women's clothing"`} 
            </NavLink>
          </li>
        </ul>
        
        {/* Right side of the navbar */}
        <ul className='flex items-center flex-wrap   gap-3'>
          <li>
            <NavLink 
              to={'/account'}
              className={({isActive}) => (
                isActive
                ? `flex items-center gap-1 ${activeStyle}`
                : 'flex items-center gap-1 bg-red'          
              )}
            >
              <FaUserAstronaut />
              <p>Dac099</p>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/orders'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              My orders
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={'/signin'}
              className={({isActive}) => isActive ? activeStyle : ''}
            >
              Sign In
            </NavLink>
          </li>
          <li className='flex items-center gap-1 ml-3'>
            <BsCart 
              onClick={() => {
              setShowProductsInCart(!showProductsInCart);
              }}
              className="hover:cursor-pointer"
            /> 
            
            {productsInCart.length}
          </li>
        </ul>
      </nav>
      
      <Layout>
        <Outlet />
      </Layout>

      {
        createPortal(
          <ShoppingCart/>,
          document.getElementById('details')
        )
      }
    </>
  );
}