import { useContext } from "react";
import { AppContext } from "../../Context";
import { TbMoodSadFilled } from "react-icons/tb";
import { ProductCart } from "../ProductCart";

export const ShoppingCart = () => {
  const {
    showProductsInCart, 
    setShowProductsInCart, 
    productsInCart,
    setProductsInCart 
  } = useContext(AppContext);

  return (
    <aside
      className={`fixed z-10 top-14 w-1/3 h-screen rounded-lg p-2 backdrop-blur-md bg-black/50 transition-all duration-200 ${showProductsInCart ? 'right-0' : '-right-full'}`}
    >
      <section className="flex justify-between items-center px-2">
        <p 
          className="text-xl text-orange-400 font-semibold"
        >
          Shopping Cart
        </p>

        <button 
          type="button"
          className="text-orange-300 font-bold text-xl w-20 h-10 rounded-md hover:bg-orange-300 hover:text-orange-900"
          onClick={() => {
            setShowProductsInCart(false);
          }}
        >
          x
        </button>
      </section>

      <hr className="my-4 border-slate-700"/>

      {productsInCart.length < 1
        ?
          <article>
            <p 
              className="text-center font-bold text-2xl"
            >
              Shopping cart empty
            </p>

            <TbMoodSadFilled 
              className="text-9xl text-center w-full mt-20 text-orange-300"
            / >
          </article>
        :
          productsInCart.map(product => (
            <ProductCart 
              key={product.id}
              product={product}
            />
          ))
      }
    </aside>
  );
}