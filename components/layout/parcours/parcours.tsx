import Header_parc from "./header";
import Formation from "./formation";

const formations = [
  {
    ecole: "Lycée Raymond Poincaré",
    diplome: "BTS SIO",
    periode: "sept. 2023 - juil. 2025",
    competences: {
      langages: ["JavaScript", "TypeScript", "PHP", "SQL", "Python"],
      frameworks: ["React", "Next.js", "Laravel"],
      outils: ["Git", "VS Code", "Docker"]
    }
  },
  {
    ecole: "Université de Lorraine",
    diplome: "",
    periode: "sept. 2022 - juin 2023",
    competences: {
      langages: ["Java", "Python", "JavaScript"],
      frameworks: [],
      outils: ["Eclipse", "PostgreSQL"]
    }
  },
  {
    ecole: "Lycée Raymond Poincaré",
    diplome: "Baccalauréat sciences et technologies de l'industrie et du développement durable",
    periode: "sept. 2021 - juin 2022",
    competences: {
      langages: ["Python", "C++"],
      outils: ["Arduino"]
    }
  },
  {
    ecole: "Lycée Jean Auguste Margueritte",
    diplome: "Baccalauréat sciences et technologies de l'industrie et du développement durable",
    periode: "sept. 2019 - juil. 2021"
  }
];

export default function Parcours() {
  return (
    <div className="flex flex-col gap-10 p-4 bg-gray-50 min-h-screen">
      <Header_parc />
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {formations.map((formation, index) => (
          <Formation key={index} {...formation} />
        ))}
      </div>
    </div>
  );
}
