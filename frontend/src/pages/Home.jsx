import { Boxes } from "@/components/ui/background-boxes"

function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <Boxes className="absolute inset-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Christian Gomelan
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-100 mx-auto">
          I'm a software developer specializing in building exceptional digital experiences. Explore my projects and get in touch!
        </p>
        <a href="#projects" className="inline-block p-6 text-lg font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-md transition">
          View My Projects
        </a>
      </div>
    </section>
  )
}

export default Home