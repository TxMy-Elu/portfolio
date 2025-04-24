import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: Technology[];
  isLogo?: boolean;
}

export default function ProjectCard({ title, description, link, technologies, isLogo = false }: ProjectCardProps) {
  return (
    <Card className="bg-white hover:shadow-xl transition-all duration-300 h-[380px] flex flex-col">
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-center h-16">
          {isLogo ? (
            <Image
              src={title}
              alt={title}
              width={144}
              height={40}
              className="w-36 hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <h1 className="text-xl font-bold hover:scale-105 transition-transform duration-300">
              {title}
            </h1>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <Image 
              src="/icons/projets/share.svg" 
              alt="Visiter le site" 
              width={20}
              height={20}
              className="w-5 h-5" 
            />
          </a>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-700">{description}</p>
      </CardContent>

      <CardFooter className="bg-gray-100 p-4 mt-auto">
        <div className="w-full">
          <p className="text-sm text-gray-600 mb-2">Technologies :</p>
          <div className="flex gap-3">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={24}
                  height={24}
                  className="w-6 hover:scale-110 transition-transform duration-300"
                />
                {!tech.icon && <p>{tech.name}</p>}
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}