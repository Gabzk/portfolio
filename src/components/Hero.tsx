import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-emerald-400 font-medium mb-4 text-lg">
            Olá, eu sou
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {personalInfo.name}
            <span className="text-emerald-400">.</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            {personalInfo.role}
          </h2>

          {/* Bio */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projetos"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-300 w-full sm:w-auto"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-4 border-2 border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 font-semibold rounded-lg transition-colors duration-300 w-full sm:w-auto"
            >
              Entre em Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={28} aria-hidden="true" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} aria-hidden="true" />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={28} aria-hidden="true" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <a
              href="#sobre"
              className="text-gray-500 hover:text-emerald-400 transition-colors animate-bounce block"
              aria-label="Scroll para baixo"
            >
              <ArrowDown size={24} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
