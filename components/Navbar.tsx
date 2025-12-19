"use client"
import { navlinks } from "@/data/navlinks";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { memo } from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav
      className="h-[6vh] w-fit px-4 md:px-6 rounded-full flex items-center mt-4 absolute top-0 left-1/2 -translate-x-1/2
     text-foreground border border-r-primary/10 border-t-0 border-b-primary/20 border-l-primary/10 bg-blue-100/20 shadow-xl backdrop-blur-xl"
    >
      <ul className="flex items-center gap-6 md:gap-8 text-sm">
        {
          navlinks.map(({ id, label, href }) => {
            return (
              <li key={id} className={`${pathname === href ? 'font-bold' : 'font-normal'}`}>
                <Link href={href}>{label}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default memo(Navbar);
