import {
  ArrowLeftRight,
  ArrowRight,
  Check,
  ClipboardCheck,
  Code,
  ExternalLink,
  Github,
} from "lucide-react";
import Image from "next/image";
import { type Project, projects } from "@/data/portfolio";

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const allTechs = [
    ...project.technologies.frontend,
    ...project.technologies.backend,
    ...project.technologies.database,
  ];

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-56 bg-linear-to-br from-gray-700 to-gray-800 overflow-hidden">
        {project.image && project.image !== "/projeto-preview.png" ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Code
                  size={40}
                  className="text-emerald-400"
                  aria-hidden="true"
                />
              </div>
              <p className="text-gray-500 text-sm">Preview do Projeto</p>
            </div>
          </div>
        )}

        {/* Full-Stack Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Full-Stack
          </span>
        </div>

        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              <Github size={16} aria-hidden="true" />
              Código
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {allTechs.slice(0, 5).map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
            {allTechs.length > 5 && (
              <TechBadge>+{allTechs.length - 5}</TechBadge>
            )}
          </div>
        </div>

        {/* Architecture Diagram - Simple Visual */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">
            Arquitetura
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 text-center p-2 bg-blue-500/10 rounded-lg border border-blue-500/30">
              <p className="text-blue-400 text-xs font-medium">Frontend</p>
              <p className="text-gray-400 text-xs mt-1">
                {project.technologies.frontend[0]}
              </p>
            </div>
            <div className="text-gray-600">
              <ArrowLeftRight size={24} aria-hidden="true" />
            </div>
            <div className="flex-1 text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
              <p className="text-emerald-400 text-xs font-medium">Backend</p>
              <p className="text-gray-400 text-xs mt-1">
                {project.technologies.backend[0]}
              </p>
            </div>
            <div className="text-gray-600">
              <ArrowLeftRight size={24} aria-hidden="true" />
            </div>
            <div className="flex-1 text-center p-2 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <p className="text-purple-400 text-xs font-medium">Database</p>
              <p className="text-gray-400 text-xs mt-1">
                {project.technologies.database[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 mt-8">
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <ClipboardCheck
          size={24}
          className="text-emerald-400"
          aria-hidden="true"
        />
        Funcionalidades Principais
      </h3>
      <ul className="grid md:grid-cols-2 gap-3">
        {project.features.map((feature) => (
          <li
            key={feature.slice(0, 30)}
            className="flex items-start gap-3 text-gray-300"
          >
            <Check
              size={20}
              className="text-emerald-400 mt-0.5 shrink-0"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      {/* Long Description */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-white mb-3">
          Sobre o Projeto
        </h4>
        <div className="space-y-3">
          {project.longDescription.split("\n\n").map((paragraph) => (
            <p
              key={paragraph.slice(0, 50)}
              className="text-gray-400 leading-relaxed"
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const highlightedProject = projects.find((p) => p.highlighted);

  return (
    <section id="projetos" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Projetos
              <span className="text-emerald-400">.</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Confira meu projeto full-stack que demonstra minhas habilidades em
              desenvolvimento frontend e backend.
            </p>
          </div>

          {/* Featured Project */}
          {highlightedProject && (
            <div className="max-w-2xl mx-auto">
              <ProjectCard project={highlightedProject} />
              <ProjectDetails project={highlightedProject} />
            </div>
          )}

          {/* Other Projects Grid */}
          {projects.filter((p) => !p.highlighted).length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-white mb-8 text-center">
                Outros Projetos
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((p) => !p.highlighted)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </div>
          )}

          {/* CTA for more projects */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">
              Mais projetos em breve! Acompanhe meu GitHub.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              Tem um projeto em mente? Vamos conversar
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
