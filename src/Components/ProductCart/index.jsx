export const ProductCart = ({product}) => {
  return (
    <article
      className="w-full h-20 my-4 flex gap-2 rounded-md overflow-x-hidden cursor-pointer bg-slate-700 hover:border-2 hover:border-orange-700"
    >
      <img 
        src={product.image} 
        alt={product.title} 
        className='w-1/6 object-cover'
      />

      <section
        className="w-5/6 pr-2"
      >
        <p 
          className="w-max text-clip overflow-x-hidden text-slate-200 font-semibold"
        >
          {product.title}
        </p>

        <p
          className="font-bold text-orange-500 text-right"
        >
          ${product.price}
        </p>
      </section>
    </article>
  );
}