import Header from "@/components/layout/header/header";
import Tech from "@/components/layout/tech/tech";
import Projets from "@/components/layout/projets/projets";
import Parcours from "@/components/layout/parcours/parcours";
import Contact from "@/components/layout/contact/contact";
import Documents from "@/components/layout/documents/documents";
import Veille from "@/components/layout/veille/veille";

export default function Home() {
  return (
    <>
      <Header />
      <Tech />
      <Projets />
      <Parcours />

      <Contact />

      <Documents />
    </>
  );
}
