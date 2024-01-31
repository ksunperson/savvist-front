import Link from 'next/link';

export default function HomeBrowseBtn() {
  return (
    <div className="flex justify-center mt-10 custom-font">
      <Link href="/product">
        <button className="bg-my-green  text-white
 py-3 px-4 rounded-lg">
          shop now
        </button>
      </Link>
    </div>
  )
}