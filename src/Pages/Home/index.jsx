import { Card } from "../../Components/Card";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { ProductDetails } from "../../Components/ProductDetails";
import styles from './styles.module.css';

export function Home(){
  const { productDetails } = useContext(AppContext);
  const [ products, setProducts ] = useState([]);
  const [ error, setError ] = useState();
  const API_URL = 'https://fakestoreapi.com';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/products`);
        
        if(!res.ok){
          throw new Error('There is a Network error');
        }
        
        const items = await res.json();

        setProducts(items)

      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <p className="text-center text-xl font-semibold mb-5 text-orange-600">Home</p>
      <section className={styles.grid}>
        {
          products?.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))
        }
      </section>
      
      {productDetails &&
        createPortal(
          <section className="fixed z-10 top-0 left-0 w-full h-screen bg-slate-900/90 grid place-content-center">
            <ProductDetails product={productDetails}/>
          </section>,
          document.getElementById('details')
        )
      }
    </div>
  );
}