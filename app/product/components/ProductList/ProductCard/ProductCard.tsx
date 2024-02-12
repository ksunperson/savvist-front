"use client"

import { useEffect, useState } from 'react';
import ProductCardImage from './ProductCardImage';
import ProductCardDescription from './ProductCardDescription';

export default function ProductCard() {
  const productData = [
    { name: '모남희', description: '모남희 키링(브레드)', price: '82,000' },
    { name: '모남희', description: '모남희 키링(화이트)', price: '80,000' },
    { name: '모남희', description: '모남희 키링(레드)', price: '90,000' },
    { name: '모남희', description: '모남희 키링(화이트)', price: '83,000' },
  ];

  const [numberOfColumns, setNumberOfColumns] = useState<number>(4);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      // handleResize: 현재 창의 크기 가져와서 적절한 cols 값으로 설정
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

    handleResize(); // 초기 렌더링 시 한번 호출
    window.addEventListener('resize', handleResize); // 리사이즈 이벤트 핸들러 등록

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 핸들러 제거
    };
  }, []);

  return (
    // grid-cols는 numberOfColumns에 따라 resizing
    <div className={`flex w-screen flex-wrap gap-20 items-center justify-center mt-20 grid-cols-${numberOfColumns}`}>
      {productData.map((product, index) => (
        <div key={index} className="w-60">
          <ProductCardImage name={product.name} />
          <ProductCardDescription name={product.name} description={product.description} price={product.price} />
        </div>
      ))}
    </div>
  );
};