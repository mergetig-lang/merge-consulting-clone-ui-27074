
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesSection = () => {
  const services = [
    {
      id: "rpa-automacao",
      title: "RPA é uma tecnologia que utiliza 'bots' para automatizar tarefas.",
      description: "Otimizamos processos através de automação inteligente, permitindo que sua equipe foque em atividades estratégicas de maior valor.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=600&q=80",
      buttonText: "Saiba Mais"
    },
    {
      id: "orcamento",
      title: "Faça um orçamento",
      description: "Juntos somos mais fortes, podemos transformar a vida da sua empresa para melhor.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      buttonText: "Saiba Mais"
    },
    {
      id: "merge-horizontes",
      title: "Descubra a Merge e AMPLIE seus horizontes!",
      description: "A Merge não apenas uma ponte, mas também amplia nossos horizontes de maneiras emocionantes e verdadeiramente transformadoras.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      buttonText: "Saiba Mais"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="text-primary font-medium text-sm uppercase tracking-wide">
            Nossos Serviços
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Como podemos te ajudar
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Oferecemos uma variedade de serviços para atender às suas necessidades. Confira alguns dos serviços 
          que disponibilizamos:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link to={`/blog/${service.id}`}>
                  <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:scale-105">
                    {service.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
