function Home() {
  return (
    <section id="home" className="">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Christian Gomelan
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          I'm a software developer specializing in building exceptional digital experiences. Explore my projects and get in touch!
        </p>
        <a
          href="#projects"
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          View My Projects
        </a>
      </div>
    </section>
  )
}

export default Home