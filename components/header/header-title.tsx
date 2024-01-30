import Link from 'next/link';

export default function HeaderTitle() {
  return (
    <div className='custom-font'>
      <Link href="/">
        <div className="flex justify-center mt-16 text-8xl">
          savvist
        </div>
      </Link >
    </div >
  )
}