import { ArrowUp, Github, Heart, Linkedin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo / Name */}
            <a
              href="#inicio"
              className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-emerald-400">.</span>
            </a>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="#inicio"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Sobre
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Skills
              </a>
              <a
                href="#projetos"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Projetos
              </a>
              <a
                href="#contato"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Contato
              </a>
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} {personalInfo.name}. Todos os direitos
                reservados.
              </p>

              {/* Built with */}
              <p className="text-gray-500 text-sm flex items-center gap-2">
                Feito com
                <Heart size={16} className="text-red-500" aria-hidden="true" />e
                <span className="text-emerald-400 font-medium">Next.js</span>
              </p>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="mt-8 text-center">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors text-sm"
            >
              <ArrowUp size={16} aria-hidden="true" />
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
