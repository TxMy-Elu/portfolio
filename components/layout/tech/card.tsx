import Image from "next/image";
import { Card, CardTitle, CardContent} from "@/components/ui/card";

export default function Card_tech() {
  return (
    <div className="flex justify-center gap-8">
      <Card className="w-auto bg-gray-100 p-6 hover:shadow-lg transition-all duration-300  shadow-lg shadow-zinc-500">
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1">
            <CardTitle className="text-2xl bg-[#F49DEB] rounded-sm mx-auto p-2 rotate-[4deg] shadow-md mb-8 text-center">
              Développement
            </CardTitle>

            <CardContent className="p-4">
              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-6">
                  <Image
                    src="./icons/tech/lg/laravel-2.svg"
                    alt="Laravel"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/lg/react-2.svg"
                    alt="React"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/lg/next-js.svg"
                    alt="Next.js"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center gap-6">
                  <Image
                    src="./icons/tech/lg/tailwindcss.svg"
                    alt="Tailwind"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/lg/java-14.svg"
                    alt="Java"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/lg/python-5.svg"
                    alt="Python"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </CardContent>
          </div>

          <CardContent className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/avatars/photo_cv.jpg" 
                alt="TD" 
                width={192}
                height={192}
                className="w-48 h-48 object-cover"
              />
            </div>
          </CardContent>
        </div>
      </Card>

      <Card className="w-auto bg-gray-100 p-6 hover:shadow-lg transition-all duration-300  shadow-lg shadow-zinc-500">
        <div className="flex justify-between items-start gap-8">
          <CardContent className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/avatars/photo_cv.jpg" 
                alt="TD" 
                width={192}
                height={192}
                className="w-48 h-48 object-cover"
              />
            </div>
          </CardContent>

          <div className="flex-1">
            <div className="flex flex-col mb-12">
              <CardTitle className="text-2xl bg-[#E0C6B0] rounded-sm mx-auto p-2 rotate-[4deg] shadow-md w-full text-center">
                Outils & Contrôle de Version
              </CardTitle>
              <CardTitle className="text-2xl bg-[#E0C6B0] rounded-sm mx-auto p-2 rotate-[-4deg] shadow-md mt-8 text-center">
                Bases de Données
              </CardTitle>
            </div>

            <CardContent className="p-4">
              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-6">
                  <Image
                    src="./icons/tech/outils/visual-studio-code-1.svg"
                    alt="Visual Studio Code"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/outils/intellij-idea-1.svg"
                    alt="IntelliJ IDEA"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/outils/github-icon-1.svg"
                    alt="GitHub"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-center gap-6">
                  <Image
                    src="./icons/tech/outils/git-icon.svg"
                    alt="Git"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="./icons/tech/outils/mysql-3.svg"
                    alt="MySQL"
                    width={56}
                    height={56}
                    className="w-14 hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
