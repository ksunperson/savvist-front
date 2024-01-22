import Link from 'next/link';

export default function ShopNowButton() {
  return (
    <div className="flex justify-center mt-10">
      <Link href="/product">
        <button className="text-my-green bg-my-pink hover:bg-slate-50
      font-semibold py-3 px-4  rounded-lg">
          shop now
        </button>
      </Link>
    </div>
  )
}