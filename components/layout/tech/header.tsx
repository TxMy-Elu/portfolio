import Image from "next/image";

export default function Header_tech() {
  return (
    <div className="flex justify-between items-center mt-5 w-full">
      <Image 
        src="/shapes/greek_line.svg" 
        alt="Ligne décorative grecque" 
        width={300}
        height={20}
        className="w-3xl" 
      />
      <h1 className="font-bold text-4xl">technologies</h1>
      <Image 
        src="/shapes/greek_line.svg" 
        alt="Ligne décorative grecque" 
        width={300}
        height={20}
        className="w-3xl" 
      />
    </div>
  );
}
