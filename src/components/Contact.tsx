import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contactInfo, personalInfo, socialLinks } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {contactInfo.title}
              <span className="text-emerald-400">.</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              {contactInfo.description}
            </p>
          </div>

          {/* Contact Info - Centralizado */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                Entre em Contato
              </h3>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700/70 transition-colors group mb-4"
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-colors">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localização</p>
                  <p className="text-white font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-gray-400 text-sm mb-4 text-center">
                  Me encontre também em
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={24} aria-hidden="true" />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
