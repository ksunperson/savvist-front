
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardImageProps {
  id?: string;
  name: string;
  url: string;
}

export default function ProductCardImage({ id, name,url }: ProductCardImageProps) {
  return (
    <Link href={`/products/${id}`}>
      <Image src={`http://localhost:5000/${url}`} width={300} height={300} alt={name} />
    </Link>
  );
};
