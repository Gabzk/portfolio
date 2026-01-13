import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sobre Mim
              <span className="text-emerald-400">.</span>
            </h2>
            <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-64 aspect-2/3">
                <Image
                  src={"/gabriel.jpg"}
                  fill
                  className="rounded-2xl object-cover"
                  alt="foto de perfil"
                  sizes="256px"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-3">
              <div className="space-y-4">
                {personalInfo.aboutMe.split("\n\n").map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 50)}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
