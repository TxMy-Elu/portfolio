import Image from "next/image";
import { Card, CardTitle, CardContent } from "@/components/ui/card";

export default function Card_tech() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
      {/* Carte Développement */}
      <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
        <CardTitle className="text-3xl font-bold mb-8 text-center relative">
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg inline-block transform hover:scale-105 transition-transform duration-300">
            Développement
          </span>
        </CardTitle>

        <div className="grid grid-cols-2 gap-12">
          <CardContent className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { src: "./icons/tech/lg/laravel-2.svg", alt: "Laravel" },
                { src: "./icons/tech/lg/react-2.svg", alt: "React" },
                { src: "./icons/tech/lg/next-js.svg", alt: "Next.js" },
                { src: "./icons/tech/lg/tailwindcss.svg", alt: "Tailwind" },
                { src: "./icons/tech/lg/java-14.svg", alt: "Java" },
                { src: "./icons/tech/lg/python-5.svg", alt: "Python" }
              ].map((tech, index) => (
                <div key={index} className="group relative">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={64}
                    height={64}
                    className="transform group-hover:scale-110 transition-all duration-300 p-2 bg-white rounded-lg shadow-md"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    {tech.alt}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/avatars/photo_cv.jpg"
                alt="TD"
                width={300}
                height={300}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Carte Outils & Base de données */}
      <Card className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200">
        <div className="space-y-6">
          <CardTitle className="text-3xl font-bold text-center space-y-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg inline-block transform hover:scale-105 transition-transform duration-300">
              Outils & Contrôle de Version
            </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-lg inline-block transform hover:scale-105 transition-transform duration-300 block">
              Bases de Données
            </span>
          </CardTitle>

          <div className="grid grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/avatars/photo_cv.jpg"
                  alt="TD"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <CardContent className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { src: "./icons/tech/outils/visual-studio-code-1.svg", alt: "VS Code" },
                  { src: "./icons/tech/outils/intellij-idea-1.svg", alt: "IntelliJ" },
                  { src: "./icons/tech/outils/github-icon-1.svg", alt: "GitHub" },
                  { src: "./icons/tech/outils/git-icon.svg", alt: "Git" },
                  { src: "./icons/tech/outils/mysql-3.svg", alt: "MySQL" }
                ].map((tool, index) => (
                  <div key={index} className="group relative">
                    <Image
                      src={tool.src}
                      alt={tool.alt}
                      width={64}
                      height={64}
                      className="transform group-hover:scale-110 transition-all duration-300 p-2 bg-white rounded-lg shadow-md"
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      {tool.alt}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
