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
    const navItems = [
        { href: "#accueil", label: "accueil" },
        { href: "#technologies", label: "technologies" },
        { href: "#projets", label: "projets" },
        { href: "#parcours", label: "parcours" },
        { href: "#contact", label: "contact" },
        { href: "#documents", label: "documents" }
    ];

    return (
        <div className="bg-gradient-to-r from-[#FFF1DF] from-0% to-[#DEECF5] to-58%">
            <div className="container mx-auto py-4 md:py-10 px-4">
                <header className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-8"
                    style={{fontFamily: "var(--font-syncopate)"}}>
                    <div className="text-xl md:text-4xl font-bold text-center lg:text-left">
                        DOGUET Tom
                    </div>
                    <nav className="w-full lg:w-auto">
                        <ul className="grid grid-cols-3 md:grid-cols-3 lg:flex items-center justify-end gap-4 lg:gap-8 text-xs md:text-base">
                            {navItems.map((item, index) => (
                                <li key={index} className="text-center">
                                    <a 
                                        href={item.href}
                                        className="hover:text-blue-600 transition-colors duration-300 font-medium tracking-wide"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <div className="flex flex-col gap-6 md:gap-10 mt-8 md:mt-10"
                    style={{fontFamily: "var(--font-syne)"}}>
                    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 md:gap-10">
                        <div className="flex flex-col gap-4 md:gap-10 w-full lg:w-auto">
                            <ProfileCard/>
                            <div className="flex flex-col gap-3 md:gap-5 max-w-xl">
                                <h1 className="text-xl md:text-3xl font-bold">À propos</h1>
                                <p className="text-base md:text-lg">
                                    Développeur web passionné, je conçois des interfaces modernes et performantes en m'appuyant sur des technologies comme&nbsp;
                                    <span className="font-bold text-blue-700">Laravel</span>,
                                    <span className="font-bold text-blue-700">&nbsp;Next.js</span>&nbsp;et
                                    <span className="font-bold text-blue-700">&nbsp;Tailwind CSS</span>.
                                    En constante évolution, je me forme aux outils récents pour allier
                                    <span className="font-semibold text-green-700">&nbsp;technique</span>,
                                    <span className="font-semibold text-purple-700">&nbsp;design</span>&nbsp;et
                                    <span className="font-semibold text-yellow-700">&nbsp;créativité</span>.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between max-w-3xl gap-3 md:gap-5">
                                <InfoCard icon="/icons/map-pin.svg" label="Localisation" value="Nancy, France" rotate="md:rotate-[-6deg]"/>
                                <InfoCard icon="/icons/briefcase.svg" label="Type" value="Alternance" rotate="md:rotate-[4deg]"/>
                                <InfoCard icon="/icons/search.svg" label="Statut" value="Recherche" rotate="md:rotate-[-3deg]"/>
                            </div>
                        </div>
                        <StatueWithGlow/>
                    </div>
                </div>
            </div>
        </div>
    );
}
