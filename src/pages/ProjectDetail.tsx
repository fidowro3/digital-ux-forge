
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Define the project data type
interface ProjectData {
  id: string;
  title: string;
  roles: string[];
  stack: string[];
  description: string;
  tools: string[];
  images: string[];
}

// Mock project data - in a real app, this would come from an API or database
const projectsData: Record<string, ProjectData> = {
  'finance-app': {
    id: 'finance-app',
    title: 'APP DE FINANÇAS PESSOAIS',
    roles: ['UX Designer', 'Visual Designer'],
    stack: ['Mobile App', 'Finanças'],
    description: 'Este projeto envolveu um redesign completo de um aplicativo de finanças pessoais existente. O objetivo principal foi melhorar a usabilidade e aumentar o engajamento dos usuários através de uma interface mais intuitiva e recursos personalizados. A pesquisa com usuários revelou pontos de atrito significativos no fluxo de cadastro de transações e visualização de relatórios, que foram otimizados na nova versão. O redesign resultou em um aumento de 40% no tempo médio de sessão e uma redução de 25% nas taxas de abandono.',
    tools: ['Figma', 'Protopie', 'Miro', 'Usability Testing', 'Analytics'],
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'ecommerce-redesign': {
    id: 'ecommerce-redesign',
    title: 'REDESIGN DE E-COMMERCE',
    roles: ['UX Lead', 'Design System Manager'],
    stack: ['Web', 'E-commerce'],
    description: 'Redesign completo de uma plataforma de e-commerce para melhorar a experiência de compra e aumentar a taxa de conversão. O projeto envolveu uma análise profunda do funil de vendas, identificação de pontos de atrito, e criação de um novo sistema de design escalável que permitisse implementação rápida de novos recursos. O redesign resultou em um aumento de 35% na taxa de conversão e uma redução de 20% no tempo médio para conclusão de compra.',
    tools: ['Figma', 'React', 'Storybook', 'A/B Testing', 'Hotjar'],
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'healthcare-app': {
    id: 'healthcare-app',
    title: 'APP DE SAÚDE E BEM-ESTAR',
    roles: ['UX/UI Designer', 'Researcher'],
    stack: ['Mobile App', 'Healthcare'],
    description: 'Aplicativo para acompanhamento de saúde e bem-estar, com recursos de monitoramento de atividades e conexão com dispositivos wearables. O desafio foi criar uma interface que fosse acessível e fácil de usar para um público amplo, incluindo pessoas com pouca familiaridade tecnológica. Realizamos pesquisas extensivas com usuários e profissionais de saúde para entender necessidades específicas e padrões de uso. O resultado foi um aplicativo intuitivo com alta taxa de retenção e feedback positivo da comunidade médica.',
    tools: ['Sketch', 'Principle', 'UserTesting', 'Firebase', 'Swift'],
    images: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'ai-dashboard': {
    id: 'ai-dashboard',
    title: 'DASHBOARD DE IA PARA ANÁLISE DE DADOS',
    roles: ['Product Designer', 'Data Visualizer'],
    stack: ['Web App', 'Analytics'],
    description: 'Design de um dashboard para análise de dados com recursos de inteligência artificial, facilitando a interpretação de informações complexas. O projeto exigiu uma colaboração próxima com cientistas de dados e engenheiros de aprendizado de máquina para garantir que as visualizações fossem precisas e úteis. Focamos em criar uma interface que pudesse simplificar conceitos complexos de IA para usuários não técnicos, mantendo a profundidade necessária para análises avançadas.',
    tools: ['Figma', 'D3.js', 'Python', 'Tableau', 'Observable'],
    images: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'design-system': {
    id: 'design-system',
    title: 'SISTEMA DE DESIGN CORPORATIVO',
    roles: ['Design System Lead', 'UI Developer'],
    stack: ['Web', 'Component Library'],
    description: 'Criação de um sistema de design completo para uma empresa de tecnologia, garantindo consistência em todos os seus produtos digitais. O projeto incluiu o desenvolvimento de princípios de design, tokens, documentação detalhada e uma biblioteca de componentes. Trabalhamos em estreita colaboração com equipes de desenvolvimento para garantir a implementação técnica correta e manter a paridade entre design e código. O sistema resultante acelerou significativamente o tempo de desenvolvimento de novos recursos e produtos.',
    tools: ['Figma', 'React', 'Storybook', 'CSS Architecture', 'Documentation'],
    images: [
      'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  'prompt-engineering': {
    id: 'prompt-engineering',
    title: 'FERRAMENTA DE PROMPT ENGINEERING',
    roles: ['UX/UI Designer', 'AI Engineer'],
    stack: ['Web App', 'AI Tools'],
    description: 'Design de uma ferramenta para criação e teste de prompts para IA generativa, facilitando o trabalho de prompt engineers e não-especialistas. Este projeto inovador exigiu pesquisa extensiva sobre os modelos mentais dos usuários ao trabalhar com IA e como tornar as interfaces de prompt engineering mais acessíveis. Implementamos ciclos rápidos de teste e iteração para refinar a experiência e criar padrões de interação intuitivos para um campo em rápida evolução.',
    tools: ['Figma', 'React', 'OpenAI API', 'TypeScript', 'Vercel'],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80'
    ]
  }
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      if (slug && projectsData[slug]) {
        setProject(projectsData[slug]);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container-custom pt-32 pb-16">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-pulse w-full max-w-3xl">
            <div className="h-12 bg-secondary rounded-md mb-6 w-3/4"></div>
            <div className="h-6 bg-secondary rounded-md mb-4 w-1/2"></div>
            <div className="h-32 bg-secondary rounded-md mb-6 w-full"></div>
            <div className="h-64 bg-secondary rounded-md mb-6 w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container-custom pt-32 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
          <h1 className="text-3xl font-bold mb-4">Projeto não encontrado</h1>
          <p className="text-muted-foreground mb-8">O projeto que você está procurando não existe ou foi removido.</p>
          <Link to="/projects" className="btn btn-primary">
            <ArrowLeft size={20} />
            Voltar para Projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.roles.map((role, index) => (
                  <span key={index} className="text-lg text-muted-foreground">
                    {role}{index < project.roles.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <span 
                    key={index}
                    className="text-sm px-3 py-1 rounded-full bg-accent-neon-blue/10 text-accent-neon-blue"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full h-64 md:h-80 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-50 animate-neon-glow-blue">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path 
                      fill="none" 
                      stroke="#00FFFF" 
                      strokeWidth="2" 
                      d="M40,60 L40,140 L160,140 L160,60 L40,60 Z M40,85 L160,85 M65,60 L65,140 M115,60 L115,140 M40,115 L160,115" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
              Descrição
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6">
              Ferramentas
            </h2>
            <div className="flex overflow-x-auto scrollbar-hide py-4 gap-4 snap-x">
              {project.tools.map((tool, index) => (
                <div 
                  key={index}
                  className={`flex-none px-6 py-3 rounded-lg border-2 snap-start ${
                    index % 2 === 0 
                      ? "border-accent-neon-blue text-accent-neon-blue" 
                      : "border-accent-neon-magenta text-accent-neon-magenta"
                  }`}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">
            Visual
          </h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border border-muted">
                      <img 
                        src={image} 
                        alt={`${project.title} - Imagem ${index + 1}`} 
                        className="w-full aspect-video object-contain bg-background-secondary"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-12" />
            <CarouselNext className="right-2 lg:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Return Button Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-center">
            <Link 
              to="/projects" 
              className="btn btn-primary group relative flex items-center gap-2 transition-all"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              Voltar para Projetos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
