import { useState, useContext } from "react";
import { AppContext } from "../../Context";

export const Card = ({product}) => {
  const [ showDetails, setShowDetails ] = useState(false);
  const { addCartProduct, setProductDetails } = useContext(AppContext);

  return (
    <article 
      className="cursor-pointer rounded-lg w-full h-72 relative overflow-hidden"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      >
      <img 
        onClick={() => setProductDetails(product)}
        src={product.image} 
        alt={product.title} 
        className="rounded-lg object-cover w-full h-full"
      />

      <section 
        className={`absolute bottom-0 w-full rounded-bl-lg rounded-br-lg rounded-tl-xl rounded-tr-xl h-40 bg-slate-600/80 flex flex-col justify-between transition-transform duration-300 ${showDetails ? 'translate-y-0': 'translate-y-11'}`}
      >
        <p 
          className={`text-center text-lg mt-1 ${showDetails ? 'text-slate-300 font-semibold' : 'text-slate-900'}`}          
        >
          {product.title}
        </p>

        <section className="flex justify-between py-2 px-3">
          <p className="text-xl text-orange-500">
            ${product.price}
          </p>

          <span className="bg-orange-100/50 text-slate-950 py-1 px-2 rounded-2xl text-xs uppercase tracking-wide">{product.category}</span>

          <button 
            type="button"
            className="bg-orange-100/50 h-5 w-5 grid place-content-center text-center pl-[1px] pb-[2px] font-black text-white rounded-full text-lg hover:bg-orange-300 hover:text-orange-950"
            onClick={() => {
              addCartProduct(product);
              setShowDetails(false);
            }}
          >
            +
          </button>
        </section>
      </section>

    </article>
  );
}