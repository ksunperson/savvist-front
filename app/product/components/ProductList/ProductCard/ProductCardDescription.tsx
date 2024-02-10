
interface ProductCardDescriptionProps {
  name: string;
  description: string;
  price: string;
}

export default function ProductCardDescription({ name, description, price }: ProductCardDescriptionProps) {
  return (
    <div>
      <p className="mt-4 text-xs text-neutral-400">{name}</p>
      <p className="mt-2 text-sm ">{description}</p>
      <p className="mt-1 text-sm font-bold">{price}</p>
    </div>
  );
};