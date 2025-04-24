import Image from "next/image";
import ProfileCard from "./ProfileCard";
import InfoCard from "./InfoCard";

function StatueWithGlow() {
    return (
        <div className="relative flex items-center justify-center w-2xl max-w-full">
            <svg width="0" height="0"
                style={
                    {position: 'absolute'}
            }>
                <filter id="drop-shadow-beige">
                    <feDropShadow dx="20" dy="20" stdDeviation="15" floodColor="#FFF1DF"/>
                </filter>
            </svg>

            <Image 
                src="/illustrations/greek_nbg.png" 
                alt="Personnage grec"
                width={500}
                height={500}
                style={{
                    filter: "url(#drop-shadow-beige)"
                }}
                className="w-2xl"
            />

        </div>
    );
}

export default function Header() {
    return (
        <div className="bg-gradient-to-r from-[#FFF1DF] from-0% to-[#DEECF5] to-58%">
            <div className="py-10 px-4 md:px-20">
                <div className="w-full flex justify-between items-center"
                    style={
                        {fontFamily: "var(--font-syncopate)"}
                }>
                    <div className="text-4xl font-bold w-2/3">
                        DOGUET Tom
                    </div>
                    <nav className="w-1/3 flex items-center justify-end gap-x-8 text-2xl font-medium tracking-wide">
                        <h1><a href="#accueil" className="hover:text-blue-600 transition-colors duration-300">accueil</a></h1>
                        <h1><a href="#technologies" className="hover:text-blue-600 transition-colors duration-300">technologies</a></h1>
                        <h1><a href="#projets" className="hover:text-blue-600 transition-colors duration-300">projets</a></h1>
                        <h1><a href="#parcours" className="hover:text-blue-600 transition-colors duration-300">parcours</a></h1>
                        <h1><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">contact</a></h1>
                        <h1><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">documents</a></h1>
                    </nav>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-10"
                    style={
                        {fontFamily: "var(--font-syne)"}
                }>
                   
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col gap-10">
                            <ProfileCard/>
                            <div className="flex flex-col gap-5 max-w-xl">
                                <h1 className="text-3xl font-bold">À propos</h1>
                                <p className="text-lg">
                                    Développeur web passionné, je conçois des interfaces modernes et performantes en m’appuyant sur des technologies comme&nbsp;
                                    <span className="font-bold text-blue-700">
                                        Laravel</span>,
                                    <span className="font-bold text-blue-700">
                                    &nbsp;Next.js</span>
                                    &nbsp;  et
                                    <span className="font-bold text-blue-700">
                                    &nbsp; Tailwind CSS</span>.
                                                                                                                                                            En constante évolution, je me forme aux outils récents pour allier
                                    <span className="font-semibold text-green-700">
                                    &nbsp; technique</span>,
                                    <span className="font-semibold text-purple-700">
                                    &nbsp;design</span>
                                    &nbsp; et
                                    <span className="font-semibold text-yellow-700">
                                    &nbsp;créativité</span>.
                                </p>
                            </div>
                            <div className="flex justify-between max-w-3xl gap-5">
                                <InfoCard icon="/icons/map-pin.svg" label="Localisation" value="Nancy, France" rotate="rotate-[-6deg]"/>
                                <InfoCard icon="/icons/briefcase.svg" label="Type" value="Alternance" rotate="rotate-[4deg]"/>
                                <InfoCard icon="/icons/search.svg" label="Statut" value="Recherche" rotate="rotate-[-3deg]"/>
                            </div>
                        </div>
                        <StatueWithGlow/>
                    </div>
                </div>
            </div>
        </div>
    );
}
