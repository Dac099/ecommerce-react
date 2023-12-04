import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../../Context";

export const ProductCart = ({product}) => {
  const { 
    deleteProductInCart, 
  } = useContext(AppContext);

  return (
    <article
      className="w-full h-28 my-4 flex gap-2 rounded-md overflow-x-hidden cursor-pointer bg-slate-700"
    >
      <img 
        src={product.image} 
        alt={product.title} 
        className='w-1/6 object-cover'
      />

      <section
        className="w-5/6 pr-2"
      >
        <section>
          <p 
            className="w-max text-clip overflow-x-hidden text-slate-200 font-semibold"
          >
            {product.title}
          </p>

          <p
            className="font-bold text-orange-500 text-right text-2xl"
          >
            ${product.price}
          </p>
        </section>

        <button
          type="button"
          className="text-red-600 text-xl mt-4 float-right border-2 border-red-600 w-20 p-2 grid place-content-center rounded-md hover:bg-red-300 hover:text-red-800"
          onClick={() => {
            deleteProductInCart(product.id);
          }}
        >
          <MdDelete />
        </button>

      </section>
    </article>
  );
}