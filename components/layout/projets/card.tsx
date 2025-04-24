import { professionalProjects, personalProjects } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function Card_pro() {
  return (
    <div className="container mx-auto">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Professionnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Personnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
