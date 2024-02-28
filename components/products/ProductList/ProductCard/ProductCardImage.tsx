
import Image from 'next/image';
import 모남희 from '@/public/images/products/모남희.jpg';
import Link from 'next/link';

interface ProductCardImageProps {
  id?: string;
  name: string;
}

export default function ProductCardImage({ id, name }: ProductCardImageProps) {
  return (
    <Link href={`/products/${id}`}>
      <Image src={모남희} alt={name} />
    </Link>
  );
};