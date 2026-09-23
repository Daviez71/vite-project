import ProjectCard from "./ProjectCard";
import ekostayImg from "../assets/ekostay.png";
import recipeImg from "../assets/recipe-app.png";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
      <p className="mt-3 max-w-2xl text-gray-600">
        A selection of things I've built recently.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <ProjectCard
          image={ekostayImg}
          title="EkoStay"
          description="EkoStay is a hotel booking site I designed and built with React, complete with room browsing, filtering, a photo gallery, and a full multi-step booking experience. I focused on clean UI, smooth interactivity, and making sure it works just as well on mobile as on desktop."
          stack={["React", "Tailwind CSS", "React Router"]}
          liveUrl="https://hotel-management-site-zeta.vercel.app/"
          codeUrl="https://github.com/Daviez71/hotel-management-site"
        />
        <ProjectCard
          image={recipeImg}
          title="Recipe App"
          description="A recipe discovery web app with a fast, responsive interface for browsing meals. Users can view detailed recipes and save their favourites for later, with a clean experience across desktop and mobile."
          stack={['React', 'Tailwind CSS']}
          liveUrl="https://recipe-app-liart-rho.vercel.app/"
          codeUrl="https://github.com/Daviez71/recipe-app"
        />
      </div>
    </section>
  );
}

export default Projects;