import Link from "next/link";
import Image from "next/image";
import { IBM_Plex_Sans_Thai } from 'next/font/google'

export default function Navbar() {
  return (
    <div className='flex flex-col h-screen bg-red-100 w-[15%]'>
        <div className="text-[#DAD9D9] bg-[#3C4454] h-[90%] w-full flex flex-col justify-between items-center">
            <div className="h-[40%] w-full">
                <div>
                    <div className='bg-[#D9D9D9] w-10 h-10 m-2 rounded-sm' />
                </div>
                <div className="align-center justify-center flex">
                    <div className="border-dashed border-b border-[#8F8181] w-[90%] h-1" />
                </div>
                <ul className='flex flex-col m-4'>
                <Link href="/profile" className = 'mt-4  text-[#DAD9D9]'>Profile</Link>
                <Link href="/market" className = 'mt-4  text-[#DAD9D9]'>Marketplace</Link>
                <Link href="/storefront" className = 'mt-4  text-[#DAD9D9]'>Your Storefront</Link>
                <Link href="/likes" className = 'mt-4  text-[#DAD9D9]'>Likes</Link>
                <Link href="/messages" className = 'mt-4  text-[#DAD9D9]'>Messages</Link>

                </ul>
            </div>
            <Image 
                src="/anteater.png"
                width={75}
                height={150}
                alt="asdf"
            />
        </div>
        <div className="text-[#FFFFFF] bg-[#484848] h-[10%] w-full" />
    </div>
  );
}