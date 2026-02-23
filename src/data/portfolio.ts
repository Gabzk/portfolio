export const personalInfo = {
  name: "Gabriel Alves",
  role: "Desenvolvedor Backend",
  location: "Brasil",
  email: "gabrielrodriguesalves693@gmail.com",
  bio: `Sou um desenvolvedor focado em backend, apaixonado por arquitetar e criar APIs, serviços robustos e soluções escaláveis, garantindo performance e confiabilidade na camada de dados.`,
  aboutMe: `Minha jornada na programação me levou rapidamente a me aprofundar no desenvolvimento backend.
  Hoje, trabalho principalmente com Python, Django, Node.js e ferramentas modernas para construir sistemas que suportam a lógica de negócio de aplicações complexas.

  Acredito que um bom desenvolvedor backend precisa dominar modelagem de dados, otimização de consultas e pensar sempre em escalabilidade e segurança estrutural.

  Quando não estou codando, gosto de descobrir novas tecnologias, jogar videogame e treinar musculação.`,
};

export const socialLinks = {
  github: "https://github.com/Gabzk",
  linkedin: "https://linkedin.com/in/gabriel-alves-068188207",
};

export const skills = {
  backend: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "PostgreSQL", "SQLite"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
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
      "Um agregador de notícias do planeta e meio ambiente. API robusta em Python FastAPI integrada a um frontend em Next.js.",
    longDescription: `Projeto full-stack que destaca minhas habilidades em construção de APIs eficientes. O backend foi desenvolvido em Python com FastAPI, focado em performance e tipagem forte.

    Possui autenticação completa via JWT Auth, integração segura com banco de dados PostgreSQL e documentação automática da API.

    Utiliza Docker e Docker Compose para orquestração de containers, garantindo ambientes de desenvolvimento e produção consistentes.`,
    image: "/econnect-preview.png",
    technologies: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI", "JWT Auth", "Docker"],
      database: ["PostgreSQL"],
    },
    features: [
      "Autenticação completa (login, registro) com JWT",
      "API RESTful documentada",
      "Containerização com Docker",
      "Orquestração com Docker Compose em Dev e Prod",
    ],
    links: {
      github: "https://github.com/Gabzk/econnect-web",
    },
    highlighted: true,
  },
  {
    id: "encurtador-django",
    title: "Encurtador de URL API",
    description:
      "API REST desenvolvida em Django e DRF para encurtamento de URLs, orientada a testes (TDD).",
    longDescription: `Uma API veloz e eficiente para gerar e gerenciar URLs curtas. O projeto foi desenvolvido com forte ênfase em TDD (Test-Driven Development) garantindo estabilidade e código limpo.

    Destaca-se pelo uso de gerenciamento moderno de pacotes com uv e empacotamento completo em Docker.
    
    Implementa redirecionamento HTTP nativo e validações robustas das propriedades do link original.`,
    image: "/encurtador-preview.png",
    technologies: {
      frontend: [],
      backend: ["Python", "Django", "Django REST Framework", "Docker", "uv"],
      database: ["SQLite"],
    },
    features: [
      "Cobertura ampla de testes (TDD)",
      "Redirecionamento HTTP 302 otimizado",
      "Gerenciamento de dependências ultra-rápido com uv",
      "Ambiente totalmente dockerizado",
    ],
    links: {
      github: "https://github.com/Gabzk/encurtador-django",
    },
    highlighted: false,
  },
  {
    id: "tramite-flow",
    title: "Tramite Flow",
    description:
      "Sistema de gestão de processos focado em controle de acesso seguro e histórico completo de auditoria usando Django.",
    longDescription: `Uma aplicação backend altamente voltada à segurança de acessos e controle de um fluxo de trabalho corporativo.
    
    Desenvolvida em Django e DRF, implementa rotas dinâmicas bloqueadas ou permitidas dependendo do Perfil do usuário (Técnicos, Analistas, Administradores).

    As transações no banco de dados são blindadas (transaction.atomic) para garantir consistência das trilhas de auditoria (status de processos e ações de usuários) contra falsificações.

    Conta com documentação interativa OpenAPI gerada nativamente.`,
    image: "/tramite-preview.png",
    technologies: {
      frontend: [],
      backend: ["Python", "Django", "Django REST", "Simple JWT", "drf-spectacular"],
      database: ["SQLite"],
    },
    features: [
      "Roteamento dinâmico de permissões por perfil",
      "Auditoria automática e atômica com decorators transacionais",
      "Autenticação de API robusta com Simple JWT",
      "Documentação nativa OpenAPI (Swagger)",
    ],
    links: {
      github: "https://github.com/Gabzk/tramite-flow",
    },
    highlighted: false,
  },
];

export const contactInfo = {
  title: "Vamos Conversar?",
  description:
    "Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia ou quer bater um papo sobre tecnologia, entre em contato!",
  email: personalInfo.email,
};
