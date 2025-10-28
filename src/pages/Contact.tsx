
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Obrigado pelo contato. Retornaremos em breve.",
    });
    
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Edifício Modelo - R. Francisco Drumond, 41 - Centro, Camaçari - BA, 42800-063",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(71) 2137-1247",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@merge.com.br",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: "Segunda - Sábado: 8:00am - 18:00pm",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header with background using uploaded image */}
      <section 
        className="relative text-white py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .85)), url('/lovable-uploads/352c4608-5552-4e4f-92c2-1c1ddff5b3c1.png')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <nav className="text-sm text-blue-200 mb-6 animate-fade-in">
            <span className="hover:text-white transition-colors cursor-pointer">Início</span> 
            <span className="mx-2">→</span> 
            <span className="hover:text-white transition-colors cursor-pointer">Sobre</span> 
            <span className="mx-2">→</span> 
            <span className="hover:text-white transition-colors cursor-pointer">Serviços</span> 
            <span className="mx-2">→</span> 
            <span className="text-blue-300 font-semibold">Contato</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in">Entre em Contato</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Estamos prontos para transformar sua empresa. Fale conosco!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="xl:col-span-1 space-y-8">
              <div className="text-center xl:text-left">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
                  Fale Conosco
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
                  Vamos conversar sobre seu projeto
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Estamos sempre à procura de novos clientes e parceiros. 
                  Se você estiver interessado em trabalhar conosco, entre em 
                  contato através de uma das opções abaixo.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="group hover:scale-105 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color.replace('text-', 'bg-').replace('-600', '-100')} group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className={`h-7 w-7 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.info}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Envie sua mensagem</h3>
                  <p className="text-blue-100">Preencha o formulário e entraremos em contato em breve</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-semibold">Nome da Empresa *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-2 border-gray-200 focus:border-primary rounded-xl py-3 px-4 transition-all duration-300"
                        placeholder="Digite o nome da sua empresa"
                      />
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold">Seu Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-2 border-gray-200 focus:border-primary rounded-xl py-3 px-4 transition-all duration-300"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-semibold">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-2 border-gray-200 focus:border-primary rounded-xl py-3 px-4 transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-semibold">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 border-2 border-gray-200 focus:border-primary rounded-xl py-3 px-4 transition-all duration-300"
                        placeholder="(00) 0000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-semibold">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 border-gray-200 focus:border-primary rounded-xl py-3 px-4 transition-all duration-300"
                      placeholder="Qual o motivo do seu contato?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-semibold">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 border-2 border-gray-200 focus:border-primary rounded-xl py-3 px-4 transition-all duration-300 resize-none"
                      placeholder="Descreva detalhadamente como podemos ajudá-lo..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white text-lg py-4 px-8 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-3 h-5 w-5" />
                        Enviar Mensagem
                      </div>
                    )}
                  </Button>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center text-primary text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Seus dados estão seguros e não serão compartilhados com terceiros.</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
