
import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Project data
const projects = [
  {
    id: 'finance-app',
    title: 'App de Finanças Pessoais',
    description: 'Redesign completo de um aplicativo de finanças pessoais, com foco em melhorar a usabilidade e engajamento dos usuários.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    tags: ['UX/UI Design', 'Mobile App', 'Finanças'],
    color: 'blue' as const
  },
  {
    id: 'ecommerce-redesign',
    title: 'Redesign de E-commerce',
    description: 'Redesign completo de uma plataforma de e-commerce, melhorando a jornada de compra e aumentando a taxa de conversão.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['UX Research', 'E-commerce', 'Web Design'],
    color: 'magenta' as const
  },
  {
    id: 'healthcare-app',
    title: 'App de Saúde e Bem-estar',
    description: 'Aplicativo para acompanhamento de saúde e bem-estar, com recursos de monitoramento de atividades e conexão com dispositivos wearables.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    tags: ['Healthcare', 'Mobile Design', 'UX/UI'],
    color: 'blue' as const
  },
  {
    id: 'ai-dashboard',
    title: 'Dashboard de IA para Análise de Dados',
    description: 'Design de um dashboard para análise de dados com recursos de inteligência artificial, facilitando a interpretação de informações complexas.',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    tags: ['Data Visualization', 'AI', 'Dashboard'],
    color: 'magenta' as const
  },
  {
    id: 'design-system',
    title: 'Sistema de Design Corporativo',
    description: 'Criação de um sistema de design completo para uma empresa de tecnologia, garantindo consistência em todos os seus produtos digitais.',
    imageUrl: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80',
    tags: ['Design System', 'Documentação', 'Componentes'],
    color: 'blue' as const
  },
  {
    id: 'prompt-engineering',
    title: 'Ferramenta de Prompt Engineering',
    description: 'Design de uma ferramenta para criação e teste de prompts para IA generativa, facilitando o trabalho de prompt engineers e não-especialistas.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['AI Tools', 'Prompt Engineering', 'SaaS'],
    color: 'magenta' as const
  }
];

const Projects: React.FC = () => {
  return (
    <>
      {/* Projects Header */}
      <section className="pt-32 pb-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Projetos</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Uma seleção dos meus trabalhos mais recentes em UX/UI Design, 
              Prompt Engineering e Design Systems. Cada projeto representa 
              um desafio único e uma solução centrada no usuário.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                color={project.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tem um projeto em mente?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estou sempre aberto a novos desafios e oportunidades para criar experiências digitais 
              inovadoras. Vamos conversar sobre como podemos trabalhar juntos.
            </p>
            <a href="/contact" className="btn btn-primary">
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
