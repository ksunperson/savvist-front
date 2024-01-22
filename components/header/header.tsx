import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/">
        <div className="flex justify-center mt-16 text-8xl">
          savvist
        </div>
      </Link>
    </div>
  )
}