'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Footer from './Footer';
const Sidebar = ({user}: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className=" flex mb-12 cursor-pointer item-center gap-2">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" className='size-[24px] max-xl:size-14'  />
        <h1 className='sidebar-logo'>Coinnect</h1>
        </Link>
        {sidebarLinks.map((item)=>{
          const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
          return (
            <Link className={cn('sidebar-link',{'bg-bank-gradient': isActive})} href={item.route} key={item.label}> <div className='relative size-6'> <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0':isActive})}></Image> </div> 
            <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label} </p>
            </Link>
          )

        })}
      </nav>
      <Footer user={user}/>
    </section>
  );
}

export default Sidebar