import Header from "@/components/layout/header/header";
import Tech from "@/components/layout/tech/tech";
import Projets from "@/components/layout/projets/projets";
import Parcours from "@/components/layout/parcours/parcours";
import Contact from "@/components/layout/contact/contact";
import Documents from "@/components/layout/documents/documents";

export default function Home() {
  return (
    <>
      <Header />
      <Tech />
      <Projets />
      <Parcours />
      <div className="flex flex-col md:flex-row justify-center gap-6 p-4">
        <div className="w-full md:w-1/2">
          <Contact />
        </div>
        <div className="w-full md:w-1/2">
          <Documents />
        </div>
      </div>
    </>
  );
}
