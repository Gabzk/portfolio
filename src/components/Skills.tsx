import { Monitor, Server, Settings } from "lucide-react";
import { skills } from "@/data/portfolio";

interface SkillCategoryProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

function SkillCategory({ title, items, icon }: SkillCategoryProps) {
  return (
    <div className="bg-gray-700/50 rounded-2xl p-6 hover:bg-gray-700/70 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Tecnologias
              <span className="text-emerald-400">.</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo para construir aplicações
              web completas, do frontend ao backend.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <SkillCategory
              title="Frontend"
              items={skills.frontend}
              icon={<Monitor size={24} aria-hidden="true" />}
            />

            {/* Backend */}
            <SkillCategory
              title="Backend"
              items={skills.backend}
              icon={<Server size={24} aria-hidden="true" />}
            />

            {/* Tools */}
            <SkillCategory
              title="Ferramentas"
              items={skills.tools}
              icon={<Settings size={24} aria-hidden="true" />}
            />
          </div>

          {/* Full-Stack Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-full">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-gray-300 font-medium">
                Desenvolvedor Full-Stack pronto para novos desafios
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
