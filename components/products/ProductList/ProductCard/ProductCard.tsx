"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCardImage from './ProductCardImage';
import ProductCardDescription from './ProductCardDescription';

axios.defaults.withCredentials = true;

export default function ProductCard() {
  const [productData, setProductData] = useState<any[]>([]);
  const [numberOfColumns, setNumberOfColumns] = useState<number>(4);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/products/');
        console.log('응답 받음:', response.data);
        setProductData(response.data);
      } catch (error) {
        console.error('오류 발생:', error);
      }
    }
    fetchData();
    
    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const width = window.innerWidth;
        let cols = 4;
        if (width < 768) {
          cols = 2;
        } else if (width < 1024) {
          cols = 3;
        }
        setNumberOfColumns(cols);
      }, 300);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex w-screen flex-wrap gap-20 items-center justify-center mt-20 grid-cols-${numberOfColumns}`}>
      {productData.map((product, index) => (
        <div key={index} className="w-60">
          <ProductCardImage name={product.title} url={product.img_url}/>
          <ProductCardDescription name={product.title} description={product.description} price={product.price} />
        </div>
      ))}
    </div>
  );
}


