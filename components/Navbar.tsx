
const Navbar = () => {
  return (
    <nav className="h-[6vh] w-fit px-8 rounded-full flex items-center mt-4 absolute top-0 left-1/2 -translate-x-1/2 shadow-xl backdrop-blur-xs text-foreground border border-black/5">
      <ul className="flex items-center gap-8 text-sm">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/inspiration">Inspirations</a>
        </li>
        <li>
          <a href="/fontfind">Font Find</a>
        </li>
        <li>
          <a href="/">Moodboard</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
