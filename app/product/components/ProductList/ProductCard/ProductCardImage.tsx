
import Image from 'next/image';
import 모남희 from '@/public/images/products/모남희.jpg';

interface ProductCardImageProps {
  name: string;
}

export default function ProductCardImage({ name }: ProductCardImageProps) {
  return (
    <Image src={모남희} alt={name} />
  );
};