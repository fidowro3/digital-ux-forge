
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Contact Header */}
      <section className="pt-32 pb-16 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contato</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tem um projeto em mente ou gostaria de conversar sobre oportunidades de colaboração?
              Entre em contato comigo através do formulário abaixo ou utilize as informações de contato direto.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Informações de Contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent-neon-blue/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">+55 (11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent-neon-magenta/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">contato@uxuidesigner.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent-neon-blue/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Localização</h3>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent-neon-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent-neon-magenta/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent-neon-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 rounded-full bg-secondary hover:bg-accent-neon-magenta/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-card p-8 rounded-lg border border-muted">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Envie uma Mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Optional) */}
      <section className="py-12">
        <div className="container-custom">
          <div className="h-80 bg-muted rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground">Mapa será carregado aqui</p>
                <p className="text-sm">Google Maps ou outro provedor de mapas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Qual é o seu processo de trabalho?</h3>
                <p className="text-muted-foreground">
                  Meu processo de trabalho é dividido em quatro etapas principais: Descoberta, 
                  Design, Desenvolvimento e Entrega. Cada fase envolve colaboração contínua com o cliente.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Quanto tempo leva para completar um projeto?</h3>
                <p className="text-muted-foreground">
                  O tempo varia de acordo com a complexidade do projeto. Um site simples pode levar 
                  2-4 semanas, enquanto um aplicativo complexo pode levar 2-3 meses ou mais.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Você trabalha remotamente?</h3>
                <p className="text-muted-foreground">
                  Sim, trabalho remotamente com clientes de todo o mundo. Utilizo ferramentas de 
                  comunicação e colaboração para manter todos alinhados durante o processo.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Quais informações você precisa para iniciar um projeto?</h3>
                <p className="text-muted-foreground">
                  Para iniciar, precisamos discutir seus objetivos, público-alvo, requisitos funcionais, 
                  prazos e orçamento. Quanto mais informações você puder fornecer, melhor será o resultado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
