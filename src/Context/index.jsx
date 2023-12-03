import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [ productsInCart, setProductsInCart ] = useState([]);
  const [ productDetails, setProductDetails ] = useState(null);
  const [ showProductsInCart, setShowProductsInCart ] = useState(false);

  const addCartProduct = (product) => {
    const products = [...productsInCart];
    products.push(product);
    console.log(products)
    setProductsInCart(products);
  }

  return (
    <AppContext.Provider
      value={{
        addCartProduct,
        productsInCart,
        productDetails, 
        setProductDetails,
        showProductsInCart,
        setShowProductsInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}