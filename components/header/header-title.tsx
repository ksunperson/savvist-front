import Link from 'next/link';
import Image from 'next/image';

export default function HeaderTitle() {
  return (
    <div className='custom-font relative'>
      <Link href="/">
        <div className="flex justify-center mt-16 text-8xl">
          savvist
        </div>
      </Link >
      <div className="flex justify-start mt-32 ml-16">
        <Image src="/images/Gesturing ok.png" width={100} height={100} alt="Gesturing ok" />
        <Image src="/images/Chat bubble.png" width={700} height={50} alt="Chat bubble" />
      </div>
      <div className="flex justify-start mt-32 ml-16">
        <Image src="/images/Gesturing ok.png" width={100} height={100} alt="Gesturing ok" />
        <Image src="/images/Chat bubble.png" width={700} height={50} alt="Chat bubble" />
      </div>
      <div className="flex justify-start mt-32 ml-16">
        <Image src="/images/Gesturing ok.png" width={100} height={100} alt="Gesturing ok" />
        <Image src="/images/Chat bubble.png" width={700} height={50} alt="Chat bubble" />
      </div>
    </div >
  )
}