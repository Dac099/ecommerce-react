import { AppContext } from "../../Context";
import { useContext, useState, useEffect } from "react";

export const ProductDetails = ({product}) => {
  const { setProductDetails, addCartProduct } = useContext(AppContext);
  const rate = Math.ceil(product.rating.rate);
  const rating = new Array(rate).fill('⭐');
  const [ growCard, setGrowCard ] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGrowCard(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <article
      className={`max-w-[380px] min-w-[280px] p-2 bg-slate-600 rounded-lg duration-200 transition-all ${growCard ? 'scale-100' : 'scale-0'}`}
    > 
      <button 
        type="button"
        className="text-xl font-bold text-orange-500 float-right  w-10  mb-5 hover:scale-150"
        onClick={() => {
          setGrowCard(false);
          setTimeout(() => {
            setProductDetails(null);
          }, 200)
        }}
      >
        x
      </button>

      <section className="w-full h-[450px] bg-white rounded-lg">
        <img 
          src={product.image} 
          alt={product.title}
          className='rounded-xl w-full max-h-[400px] object-fill'
        />
      </section>

      <section className="p-2 bg-slate-400/30 mt-2 rounded-lg">
        <p className="text-center text-2xl mb-2">{product.title}</p>

        <section className="flex justify-between items-center">
          <p
            className="bg-white/60 px-2 rounded-md text-orange-900"
          >
            {product.category}
          </p>

          <div className="flex items-center">
            {<span className="text-xs text-slate-100 mr-1">({product.rating.count})</span>}
            
            {rating.map((rate, index) => (
              <span key={index}>⭐</span>
            ))}
          </div>
        </section>

        <p className="text-orange-400 font-bold text-xl text-right mt-5">${product.price}</p>

        <button
          type="button"
          className="bg-orange-100 px-2 rounded-md text-orange-950 font-semibold hover:bg-orange-300"
          onClick={() => addCartProduct(product)}
        >
          Add to cart
        </button>
        
      </section>

    </article>
  );
}