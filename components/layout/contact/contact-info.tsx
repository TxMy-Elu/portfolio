import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="backdrop-blur-sm bg-white/30 border border-gray-200 rounded-2xl p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 relative">
        Mes Coordonnées
        <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h2>

      <div className="grid gap-6">
        <a
          href="mailto:to.doguet@gmail.com"
          className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:bg-blue-50/50 transition-all duration-300 group"
        >
          <div className="bg-blue-500/10 p-3 rounded-lg">
            <FaEnvelope className="text-2xl text-blue-500" />
          </div>
          <span className="ml-4 font-medium text-gray-700 group-hover:text-blue-600">
            to.doguet@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/tom-doguet-7b8457271/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:bg-blue-50/50 transition-all duration-300 group"
        >
          <div className="bg-blue-600/10 p-3 rounded-lg">
            <FaLinkedin className="text-2xl text-blue-600" />
          </div>
          <span className="ml-4 font-medium text-gray-700 group-hover:text-blue-600">
            LinkedIn
          </span>
        </a>

        <a
          href="https://github.com/TxMy-Elu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-5 hover:bg-gray-50/50 transition-all duration-300 group"
        >
          <div className="bg-gray-800/10 p-3 rounded-lg">
            <FaGithub className="text-2xl text-gray-800" />
          </div>
          <span className="ml-4 font-medium text-gray-700 group-hover:text-gray-900">
            GitHub
          </span>
        </a>
      </div>
    </div>
  );
}
