import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="h-[6vh] w-fit px-4 md:px-6 rounded-full flex items-center mt-4 absolute top-0 left-1/2 -translate-x-1/2 shadow-xl backdrop-blur-xs text-foreground border border-black/5">
      <ul className="flex items-center gap-6 md:gap-8 text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/inspirations">Inspirations</Link>
        </li>
        <li>
          <Link href="/fontpair">FontPair</Link>
        </li>
        <li>
          <Link href="/moodboard">Moodboard</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
