import Image from "next/image";

export default function Header_tech() {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 
        className="text-3xl md:text-4xl font-bold text-center relative pb-4 mb-6"
        style={{ fontFamily: "var(--font-syncopate)" }}
      >
        TECHNOLOGIES
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
      </h2>
      <p className="text-slate-600 text-center max-w-2xl" style={{ fontFamily: "var(--font-syne)" }}>
        Les technologies et outils que j'utilise pour créer des applications web modernes et performantes.
      </p>
    </div>
  );
}
