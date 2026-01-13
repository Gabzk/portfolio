export const personalInfo = {
  name: "Gabriel Alves",
  role: "Desenvolvedor Full-Stack",
  location: "Brasil",
  email: "gabrielrodriguesalves693@gmail.com",
  bio: `Sou um desenvolvedor full-stack apaixonado por criar soluções web completas e escaláveis.
  Com experiência em desenvolvimento frontend e backend, busco sempre entregar código limpo,
  performático e com ótima experiência de usuário.`,
  aboutMe: `Minha jornada na programação começou com curiosidade e se transformou em paixão.
  Hoje, trabalho com tecnologias modernas para construir aplicações web que fazem a diferença.

  Acredito que um bom desenvolvedor full-stack precisa entender o sistema como um todo,
  desde a interface que o usuário interage até o banco de dados que armazena as informações.

  Quando não estou codando, gosto de descobrir novas tecnologias, jogar videogame e treinar musculação.`,
};

export const socialLinks = {
  github: "https://github.com/Gabzk",
  linkedin: "https://linkedin.com/in/gabriel-alves-068188207",
};

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Python", "REST APIs", "PostgreSQL", "Go"],
  tools: ["Git", "GitHub", "Docker", "Linux"],
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string; // URL da imagem ou path local
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  features: string[];
  links: {
    demo?: string;
    github?: string;
    frontend?: string;
    backend?: string;
  };
  highlighted: boolean;
}

export const projects: Project[] = [
  {
    id: "econnect-web",
    title: "Econnect",
    description:
      "Um agregador de notícias do planeta e meio ambiente. Desenvolvido com Python FastAPI no Backend e Next.js no Frontend.",
    longDescription: `Este é meu projeto principal que demonstra minhas habilidades como desenvolvedor full-stack.

    O projeto foi desenvolvido do zero, desde o design até o deploy, passando por todas as etapas
    do desenvolvimento de software.

    O desafio principal foi integrar o frontend com o backend de forma eficiente, garantindo
    uma boa experiência do usuário e performance da aplicação.`,
    image: "/econnect-preview.png", // Adicione sua imagem em /public
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI", "JWT Auth"],
      database: ["PostgreSQL"],
    },
    features: [
      "Autenticação completa (login, registro)",
      "Dashboard interativo com gráficos",
      "API RESTful documentada",
      "Design responsivo (mobile-first)",
    ],
    links: {
      demo: "https://econnect-api.onrender.com/",
      github: "https://github.com/Gabzk/econnect-web",
    },
    highlighted: true,
  },
];

export const contactInfo = {
  title: "Vamos Conversar?",
  description:
    "Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou quer bater um papo sobre tecnologia, entre em contato!",
  email: personalInfo.email,
};
