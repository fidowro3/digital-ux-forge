
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem muito curta (mínimo 10 caracteres)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to a server
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por entrar em contato. Responderei em breve.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-foreground mb-2">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-secondary border ${errors.name ? 'border-red-500' : 'border-muted'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-neon-blue`}
          />
          {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-foreground mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-secondary border ${errors.email ? 'border-red-500' : 'border-muted'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-neon-blue`}
          />
          {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-foreground mb-2">Assunto</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-secondary border ${errors.subject ? 'border-red-500' : 'border-muted'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-neon-blue`}
        />
        {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-foreground mb-2">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-secondary border ${errors.message ? 'border-red-500' : 'border-muted'} rounded-md focus:outline-none focus:ring-2 focus:ring-accent-neon-blue resize-none`}
        ></textarea>
        {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full md:w-auto"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
};

export default ContactForm;
