import { FaFileAlt, FaFileContract } from "react-icons/fa";

export default function DocumentsPro() {
  return (
    <div className="backdrop-blur-sm bg-white/30 border border-gray-200 rounded-2xl p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
        Documents Professionnels
        <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h2>

      <div className="grid gap-6">
        <a
          href="/documents/CV_Tom_Doguet.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:bg-blue-50/50 transition-all duration-300 group"
        >
          <div className="bg-blue-500/10 p-3 rounded-lg">
            <FaFileAlt className="text-2xl text-blue-500" />
          </div>
          <span className="ml-4 font-medium text-gray-700 group-hover:text-blue-600">
            Curriculum Vitae
          </span>
        </a>

        <a
          href="/documents/rapport_stage_1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:bg-blue-50/50 transition-all duration-300 group"
        >
          <div className="bg-blue-600/10 p-3 rounded-lg">
            <FaFileContract className="text-2xl text-blue-600" />
          </div>
          <span className="ml-4 font-medium text-gray-700 group-hover:text-blue-600">
            Rapport de Stage 1
          </span>
        </a>

        <a
          href="/documents/rapport_stage_2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:bg-blue-50/50 transition-all duration-300 group"
        >
          <div className="bg-blue-600/10 p-3 rounded-lg">
            <FaFileContract className="text-2xl text-blue-600" />
          </div>
          <span className="ml-4 font-medium text-gray-700 group-hover:text-blue-600">
            Rapport de Stage 2
          </span>
        </a>
      </div>
    </div>
  );
}