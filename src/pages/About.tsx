
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  // Experience data
  const experiences = [
    {
      position: "Lead UX/UI Designer",
      company: "Tech Solutions Inc.",
      period: "2021 - Presente",
      description: "Liderando uma equipe de designers, responsável pelo design e estratégia de produtos digitais da empresa. Implementação de um sistema de design unificado e processos de design centrados no usuário."
    },
    {
      position: "Senior UX Designer",
      company: "Digital Innovation Co.",
      period: "2018 - 2021",
      description: "Responsável pelo design de experiência do usuário para aplicativos móveis e web, condução de pesquisas com usuários e prototipagem. Colaboração direta com desenvolvedores e stakeholders."
    },
    {
      position: "UI Designer",
      company: "Creative Agency",
      period: "2015 - 2018",
      description: "Design de interfaces para websites e aplicativos, criação de identidade visual para produtos digitais e desenvolvimento de styleguides para clientes."
    }
  ];
  
  // Education data
  const education = [
    {
      degree: "Mestrado em Design de Interação",
      institution: "Universidade de Design",
      period: "2017 - 2019"
    },
    {
      degree: "Graduação em Design Digital",
      institution: "Instituto de Tecnologia e Design",
      period: "2012 - 2016"
    },
    {
      degree: "Certificação em UX Research",
      institution: "Nielsen Norman Group",
      period: "2018"
    }
  ];
  
  // Skills data
  const skills = [
    { name: "UX Design", level: 95 },
    { name: "UI Design", level: 90 },
    { name: "Figma", level: 95 },
    { name: "Adobe Creative Suite", level: 85 },
    { name: "Design Systems", level: 90 },
    { name: "Prompt Engineering", level: 80 },
    { name: "User Research", level: 85 },
    { name: "Prototipagem", level: 90 }
  ];

  return (
    <>
      {/* About Header */}
      <section className="pt-32 pb-16 bg-background-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Designer de UX/UI" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 bg-background neon-border-magenta">
                  <p className="text-lg font-heading font-bold">6+ anos de experiência</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Sobre Mim</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Designer de UX/UI apaixonado por criar experiências digitais que combinam estética e 
                funcionalidade. Com mais de 6 anos de experiência na indústria, especializado em design 
                centrado no usuário, design systems e, mais recentemente, prompt engineering para IA.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Minha abordagem é baseada em empatia, pesquisa e iteração constante. Acredito que o 
                melhor design é aquele que resolve problemas reais dos usuários de forma elegante e intuitiva.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn btn-primary">
                  Ver Meus Projetos
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Entre em Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experiência Profissional</h2>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-muted">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-neon-blue"></div>
                <div className="mb-1">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent-neon-blue/10 text-accent-neon-blue mb-2">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{exp.position}</h3>
                <p className="text-accent-neon-magenta font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Formação & Certificações</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-accent-neon-blue">{edu.institution}</p>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Habilidades & Competências</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${index % 2 === 0 ? 'bg-accent-neon-blue' : 'bg-accent-neon-magenta'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Minha Filosofia de Design</h2>
            <p className="text-xl leading-relaxed mb-12">
              "Acredito que o bom design deve ser <span className="neon-text-blue">invisível</span>, 
              permitindo que os usuários atinjam seus objetivos sem fricção. Cada elemento deve ter um 
              <span className="neon-text-magenta"> propósito</span> e contribuir para uma experiência 
              coesa e significativa."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-accent-neon-blue/10 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.9 4.9 14.2 14.2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Clareza</h3>
                <p className="text-muted-foreground">
                  Interfaces claras e objetivas, eliminando elementos desnecessários e focando no essencial.
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-accent-neon-magenta/10 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Consistência</h3>
                <p className="text-muted-foreground">
                  Padrões visuais e de interação coerentes, reduzindo a carga cognitiva para os usuários.
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-accent-neon-blue/10 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Empatia</h3>
                <p className="text-muted-foreground">
                  Design centrado nas necessidades reais dos usuários, com foco na acessibilidade e inclusão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-neon-blue/5 to-accent-neon-magenta/5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estou disponível para projetos freelance, consultoria em UX/UI e oportunidades de colaboração.
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

export default About;
