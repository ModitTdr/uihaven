import Button from "@/components/Button"

const page = () => {
  return (
    <section className="text-center h-[90vh] flex flex-col items-center justify-center gap-6 mx-6">
      <div>
        <h1 className="text-md sm:text-xl md:text-4xl font-medium text-primary">UIHAVEN</h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
          The ultimate place to start <span className="text-primary">designing elegant designs.</span>
        </h2>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground">
        Find your design inspiration, create moodboard, match perfect fonts and start designing.
      </p>
      <Button>Get Started</Button>
    </section>

  )
}

export default page
