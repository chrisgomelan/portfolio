import { IconBrandJavascript, IconBrandReact, IconBrandNodejs, IconBrandPython, IconBrandTailwind, IconBrandHtml5, IconBrandCpp, IconBrandPhp, IconBrandMysql, IconBrandLaravel, IconBrandBootstrap, IconBrandGit, IconBrandGithub, IconBrandFigma, IconSchool, IconBriefcase } from "@tabler/icons-react";
import {experiences, education} from "../data/project.js";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll.jsx";
function About() {
  const languages = [
    { icon: IconBrandHtml5, name: "HTML", color: "text-orange-500" },
    { icon: IconBrandJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: IconBrandPhp, name: "PHP", color: "text-indigo-600" },
    { icon: IconBrandCpp, name: "C++", color: "text-blue-600" },
    { icon: IconBrandMysql, name: "MySQL", color: "text-orange-600" },
  ];

  const frameworks = [
    { icon: IconBrandReact, name: "React", color: "text-blue-400" },
    { icon: IconBrandTailwind, name: "Tailwind", color: "text-cyan-400" },
    { icon: IconBrandLaravel, name: "Laravel", color: "text-red-600" },
    { icon: IconBrandBootstrap, name: "Bootstrap", color: "text-purple-600" },
  ];

  const tools = [
    { icon: IconBrandGit, name: "Git", color: "text-orange-600" },
    { icon: IconBrandGithub, name: "Github", color: "text-gray-700" },
    { icon: IconBrandFigma, name: "Figma", color: "text-pink-500" },
  ];


  return (
    <section id="about" className="min-h-[50vh] sm:min-h-[40vh] md:min-h-[40vh] sm:p-8 md:p-8 flex items-center justify-center py-8 sm:py-12 md:py-16">
      <FadeInOnScroll className="max-w-5xl gap-4 mx-auto text-center px-3 sm:px-4 flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-3/4 left-about flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>
          <p className="mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-[400] text-gray-600 text-start">
            "Hi I'm Christian - a passionate full-stack developer dedicated to crafting scalable and efficient web solutions. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into seamless user experiences."
          </p>
          <img src="/christian.png" alt="Christian's Profile" className="mx-auto rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover mb-4 sm:mb-6 md:mb-8" />
          
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start">

            {languages.map((tech) => {  
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group relative">
                  <div className="flex items-center justify-center rounded-full border-2 border-[#716A5C] w-10 h-10 sm:w-12 sm:h-12 p-1 sm:p-2 dark:bg-neutral-800 cursor-pointer transition-transform group-hover:scale-110">
                  <IconComponent size={32} className={`${tech.color} sm:w-[40px]`} />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}

            {frameworks.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group relative">
                  <div className="flex items-center justify-center rounded-full border-2 border-[#716A5C] w-10 h-10 sm:w-12 sm:h-12 p-1 sm:p-2 dark:bg-neutral-800 cursor-pointer transition-transform group-hover:scale-110">
                    <IconComponent size={32} className={`${tech.color} sm:w-[40px]`} />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}

            {tools.map((tech) => {
              const IconComponent = tech.icon;
              return (
                <div key={tech.name} className="group relative">
                  <div className="flex items-center justify-center rounded-full border-2 border-[#716A5C] w-10 h-10 sm:w-12 sm:h-12 p-1 sm:p-2 dark:bg-neutral-800 cursor-pointer transition-transform group-hover:scale-110">
                    <IconComponent size={32} className={`${tech.color} sm:w-[40px]`} />
                  </div>
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
           
        </div>
        <div className="w-full md:w-full exp-educ-container">
            <div className="flex items-center mb-4 sm:mb-6 gap-2 sm:gap-3 md:gap-5">
                <IconSchool size={32} className="text-black-600 p-1 bg-[#D6D6D6] border-2 border-black rounded w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Education</h3>
            </div>
            <div className="w-full right-about-education mb-4 sm:mb-6">
                {education.map((edu) => (
                  <div key={edu.id} className="mb-4 sm:mb-6 text-start">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{edu.institution} - {edu.location}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
            </div>

            <div className="flex items-center mb-4 sm:mb-6 gap-2 sm:gap-3 md:gap-5">
                  <IconBriefcase size={32} className="text-black-600 p-1 bg-[#D6D6D6] border-2 border-black rounded w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"/>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Experiences</h3>
            </div>
            <div className="w-full right-about-experiences">
                {experiences.map((exp) => (
                  <div key={exp.id} className="mb-4 sm:mb-6 text-start">
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold">{exp.position}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">{exp.company} - {exp.location}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{exp.startDate} - {exp.endDate ? exp.endDate : "Present"} ({exp.duration})</p>
                    <ul className="list-disc list-inside mt-2 text-xs sm:text-sm md:text-base text-gray-700">
                      {exp.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500">Technologies: {exp.technologies.join(", ")}</p>
                  </div>
                ))}
            </div>

        </div>
      </FadeInOnScroll>
    </section>
  )
}

export default About