
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Design de Experiência & 
                <span className="block mt-2">
                  <span className="neon-text-blue">UX</span>/<span className="neon-text-magenta">UI</span> Designer
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Transformando ideias em experiências digitais intuitivas e impactantes, com foco em soluções centradas no usuário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn btn-primary">
                  Ver Projetos
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Entre em Contato
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-fade-in-right">
              <div className="relative">
                <div className="aspect-square rounded-full bg-gradient-to-br from-accent-neon-blue/20 to-accent-neon-magenta/20 flex items-center justify-center p-8">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                      alt="Designer trabalhando em um projeto UX/UI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-lg neon-border-blue animate-neon-glow-blue">
                  <span className="text-lg font-heading font-bold">UX/UI Designer</span>
                </div>
                <div className="absolute -top-4 -left-4 bg-background p-3 rounded-lg neon-border-magenta animate-neon-glow-magenta">
                  <span className="text-lg font-heading font-bold">AI Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Expertise</h2>
            <p>Minhas principais áreas de atuação e conhecimentos técnicos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-lg border border-muted hover:neon-border-blue transition-all duration-300">
              <div className="h-16 w-16 rounded-lg bg-accent-neon-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">UX/UI Design</h3>
              <p className="text-muted-foreground">
                Criação de interfaces intuitivas e atraentes, com foco na experiência do usuário e usabilidade.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-muted hover:neon-border-magenta transition-all duration-300">
              <div className="h-16 w-16 rounded-lg bg-accent-neon-magenta/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Prompt Engineering</h3>
              <p className="text-muted-foreground">
                Desenvolvimento de prompts eficientes para IA generativa, obtendo resultados precisos e criativos.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-muted hover:neon-border-blue transition-all duration-300">
              <div className="h-16 w-16 rounded-lg bg-accent-neon-blue/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
                  <path d="M7 8h1" />
                  <path d="M16 8h1" />
                  <path d="M7 12h1" />
                  <path d="M16 12h1" />
                  <path d="M7 16h1" />
                  <path d="M16 16h1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Design Systems</h3>
              <p className="text-muted-foreground">
                Criação e manutenção de sistemas de design escaláveis para garantir consistência em produtos digitais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="section-heading">
            <h2>Projetos em Destaque</h2>
            <p>Conheça alguns dos trabalhos mais recentes e relevantes da minha trajetória profissional</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-lg overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="App de Finanças Pessoais" 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent-neon-blue/20 text-accent-neon-blue">
                    UX/UI Design
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent-neon-blue/20 text-accent-neon-blue">
                    Mobile App
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">App de Finanças Pessoais</h3>
                <Link to="/projects/finance-app" className="btn btn-primary mt-4">
                  Ver Detalhes
                </Link>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden group relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Redesign de E-commerce" 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-accent-neon-magenta/20 text-accent-neon-magenta">
                    UX Research
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-accent-neon-magenta/20 text-accent-neon-magenta">
                    E-commerce
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Redesign de E-commerce</h3>
                <Link to="/projects/ecommerce-redesign" className="btn btn-secondary mt-4">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="btn btn-primary">
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-neon-blue/5 to-accent-neon-magenta/5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para criar algo incrível juntos?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Vamos transformar sua ideia em uma experiência digital excepcional que encante seus usuários.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
