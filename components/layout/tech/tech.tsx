import Header_tech from "./header";
import TechGrid from "./TechGrid";

export default function Tech() {
  return (
    <div id="technologies" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <Header_tech />
        <TechGrid />
      </div>
    </div>
  );
}
