import ProductCardImage from './ProductCardImage';
import ProductCardDescription from './ProductCardDescription';

export default function ProductCard() {
  const productData = [
    { name: '모남희', description: '모남희 키링(브레드)', price: '82,000' },
    { name: '모남희', description: '모남희 키링(화이트)', price: '80,000' },
    { name: '모남희', description: '모남희 키링(레드)', price: '90,000' },
    { name: '모남희', description: '모남희 키링(화이트)', price: '83,000' },
  ];

  return (
    <div className="flex w-screen flex-row gap-20 items-center justify-center mt-20">
      {productData.map((product, index) => (
        <div key={index} className="w-60">
          <ProductCardImage name={product.name} />
          <ProductCardDescription name={product.name} description={product.description} price={product.price} />
        </div>
      ))}
    </div>
  );
};