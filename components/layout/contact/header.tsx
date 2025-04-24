import Image from "next/image";

export default function Header_cont() {
  return (
    <div className="relative py-12 w-full">
      <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-8">
        <div className="h-[2px] bg-black flex-grow" />
        <div className="mx-8">
          <h1 className="font-bold text-5xl uppercase tracking-wider relative">
           contact
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </h1>
        </div>
        <div className="h-[2px] bg-black flex-grow" />
      </div>
    </div>

    
  );
}
