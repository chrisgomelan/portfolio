import { CardFlip } from "@/components/mvpblocks/card-flip";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll";
import { projects } from "@/data/project";

function Projects() {
  return (
    <section id="projects" className="min-h-screen flex justify-center items-center justify-center py-12 sm:py-16 md:py-20">
      <FadeInOnScroll className="w-full mx-auto text-center px-3 sm:px-4 md:px-6">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">
          Featured Projects
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 place-items-center">
            {projects.filter(project => project.featured).map(project => (
            <CardFlip
              key={project.id}
              title={project.title}
              subtitle={project.company}
              description={project.description}
              features={project.features}
              live={project.live}
              image={project.image}
            />
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  )
}

export default Projects