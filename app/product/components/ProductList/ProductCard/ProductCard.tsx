import Image from "next/image";
import 모남희 from '@/public/images/products/모남희.jpg';

const ProductCard = () => {
  const productData = [
    { name: '모남희', description: '모남희 키링(브레드)', price: '82,000' },
    { name: '모남희', description: '모남희 키링(화이트)', price: '80,000' },
    { name: '모남희', description: '모남희 키링(레드)', price: '90,000' },
    { name: '모남희', description: '모남희 키링(화이트)', price: '83,000' },
    // { name: '모남희1', description: '모남희 키링(브레드)', price: '82,000' },
    // { name: '모남희1', description: '모남희 키링(화이트)', price: '80,000' },
    // { name: '모남희1', description: '모남희 키링(레드)', price: '90,000' },
    // { name: '모남희1', description: '모남희 키링(화이트)', price: '83,000' },
  ];

  return (
    <div className="flex w-screen flex-row gap-20 items-center justify-center mt-20">
      {/* <div className="grid grid-cols-4 gap-20 items-center justify-center mt-20"> */}
      {productData.map((product, index) => (
        <div key={index} className="w-60">
          <Image src={모남희} alt={product.name} />
          <p className="mt-4 text-xs text-neutral-400">{product.name}</p>
          <p className="mt-2 text-sm ">{product.description}</p>
          <p className="mt-1 text-sm font-bold">{product.price}</p>
        </div>
      ))
      }
    </div >
  );
}

export default ProductCard;
