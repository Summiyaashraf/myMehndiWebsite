"use client"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';
 


const navList = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  return (
    <nav className='fixed w-screen sm:grid-cols-1 px-20 top-5 z-50'>

      <div className='py-3 container flex items-start justify-between bg-transparent font-bold text-red-700 text-1.5xl rounded-md z-50'>
      <p >HENNA BY SUMIII</p>

      <ul className='flex justify-items-center gap-20'>
        {navList.map((nav) => {
          return (
            <li key={nav.title}>
              <Link className='text-muted-foreground hover:text-primary hover:underline' href={nav.href}>{nav.title}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Avatar />
        <Avatar>
  <AvatarImage src="" />
  <AvatarFallback>S</AvatarFallback>
</Avatar>
      </div>
      </div>
    </nav>
  );
}
