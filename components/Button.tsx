const Button = ({ children }: { children: string }) => {
  return (
    <button className="border bg-primary md:bg-transparent shadow-xl text-black md:text-primary rounded-lg px-8 py-3 text-md cursor-pointer relative overflow-hidden group z-0 font-semibold mt-6 border-primary not-dark:text-black not-dark:border-black">
      <a
        href="/"
      >
        <p className="transition-all duration-400 ease-in-out group-hover:text-background relative z-10">{children}</p>
        <div
          className="absolute h-full w-full -left-full bottom-0 bg-primary rounded-4xl transition-all duration-400 ease-in-out
          group-hover:left-0 group-hover:rounded-none z-0"
        />
      </a>
    </button>
  )
}

export default Button
