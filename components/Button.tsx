import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode
  variant?: "default" | "outline" | "disabled"
  size?: "sm" | "md" | "lg" | "icon"
}
const Button = ({ children, variant = "default", size = "md", className, ...props }: ButtonProps) => {

  const base = "font-semibold rounded-lg shadow-md cursor-pointer relative overflow-hidden group z-0 transition-all duration-250 ease-in-out hover:scale-95"
  const variantStyle = {
    default: "bg-primary/90 text-white",
    outline: "border border-primary text-primary",
    disabled: "bg-slate-400 text-slate-50 cursor-not-allowed"
  }
  const sizeStyles = {
    icon: "p-1.5",
    sm: "px-4 h-9 text-sm rounded-md",
    md: "px-6 h-10 text-md",
    lg: "px-6 h-11 sm:px-8 sm:h-12 text-md",
  }

  return (
    <button {...props}
      className={twMerge(
        clsx(
          base,
          variantStyle[variant],
          sizeStyles[size],
          className
        )
      )}
    >
      <p className="transition-all duration-400 ease-in-out group-hover:text-white relative z-10 flex items-center gap-1.5">
        {children}
      </p>
      <div
        className={`absolute h-full w-full -left-full bottom-0 ${variant == 'disabled' ? 'bg-slate-500' : 'bg-primary'} rounded-4xl transition-all duration-400 ease-in-out
          group-hover:left-0 group-hover:rounded-none z-0`}
      />
    </button>
  )
}

export default Button
