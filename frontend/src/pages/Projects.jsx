function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>Description of your first project.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p>Description of your second project.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p>Description of your third project.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects