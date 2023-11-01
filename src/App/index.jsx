import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { NotFound } from '../Pages/NotFound';
import { SignIn } from '../Pages/SignIn';
import { NavBar } from '../Components/NavBar';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        {path: '/', element: <Home/>},
        {path: '/account', element: <MyAccount/>},
        {path: '/order', element: <MyOrder/>},
        {path: '/orders', element: <MyOrders/>},
        {path: '/signin', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
