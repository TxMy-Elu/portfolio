interface FormationProps {
  ecole: string;
  diplome: string;
  periode: string;
  competences?: {
    langages?: string[];
    frameworks?: string[];
    outils?: string[];
  };
}

export default function Formation({ ecole, diplome, periode, competences }: FormationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-gray-800">{ecole}</h3>
      <p className="text-lg text-gray-700 mt-2">{diplome}</p>
      <p className="text-gray-600 mt-1">{periode}</p>
      
      {competences && (
        <div className="mt-4 space-y-3">
          {competences.langages && competences.langages.length > 0 && (
            <div>
              <p className="font-medium text-gray-700">Langages :</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {competences.langages.map((langage, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {langage}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {competences.frameworks && competences.frameworks.length > 0 && (
            <div>
              <p className="font-medium text-gray-700">Frameworks :</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {competences.frameworks.map((framework, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {competences.outils && competences.outils.length > 0 && (
            <div>
              <p className="font-medium text-gray-700">Outils :</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {competences.outils.map((outil, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {outil}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
