import { Boxes } from "@/components/ui/background-boxes"
import { TextType } from "@/components/ui/text-type";
import { FadeInOnScroll } from "../components/ui/fade-in-on-scroll";
function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <Boxes className="absolute inset-0" />
      <FadeInOnScroll className="relative z-10 text-center px-3 sm:px-4 md:px-6">
        <h1 className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          <TextType
text={["Hey, I'm Christian.", "Crafting scalable web solutions", "Let's build something exceptional together"]}
            typingSpeed={40}
            deletingSpeed={20}
            pauseDuration={1500}
            loop={true}
            showCursor={true}
            cursorCharacter={"|"}
            textColors={["#FFFFFF"]}
          />
        </h1>
        <p className="mb-6 sm:mb-8 md:mb-12 max-w-2xl text-sm sm:text-base md:text-lg text-gray-100 mx-auto">
          Full-stack developer turning ideas into interactive experiences. Passionate about clean code and great design.        </p>
        <a href="#projects" className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-slate-600 hover:bg-slate-700 text-white rounded-md transition">
          View My Projects
        </a>
      </FadeInOnScroll>
    </section>
  )
}

export default Home