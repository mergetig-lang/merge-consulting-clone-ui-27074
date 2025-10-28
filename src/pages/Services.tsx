
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, DollarSign, Lightbulb, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      title: "RPA é uma tecnologia que utiliza 'bots' para automatizar tarefas.",
      description: "Utilizamos bots inteligentes para executar diversas atividades, desde o processamento de dados até a gestão de processos complexos, a implementação de tecnologia avançadas.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=600&q=80",
      buttonText: "Saiba Mais",
      link: "/blog/rpa-automacao",
      badge: "Automação"
    },
    {
      title: "Faça um orçamento",
      description: "Juntos somos mais fortes, podemos transformar a vida da sua empresa para melhor.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      buttonText: "Saiba Mais",
      link: "/blog/orcamento",
      badge: "Consultoria"
    },
    {
      title: "Descubra a Merge e AMPLIE seus horizontes!",
      description: "A Merge não apenas uma ponte, mas também amplia nossos horizontes de maneiras emocionantes e verdadeiramente transformadoras.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      buttonText: "Saiba Mais",
      link: "/blog/merge-horizontes",
      badge: "Inovação"
    }
  ];

  const whyChooseServices = [
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Consultores em gestão de processos podem analisar e otimizar as operações internas da sua empresa.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=600&q=80",
      stats: "85% de melhoria"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Processos eficientes fornecem informações rápidas e precisas, facilitando decisões baseadas em dados e análises.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      stats: "60% de economia"
    },
    {
      icon: Lightbulb,
      title: "Tecnologias Inovadoras",
      description: "Consultores em gestão de processos analisam e otimizam operações internas, identificando gargalos e propondo melhorias.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
      stats: "100% personalizadas"
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
            <span className="text-blue-300 font-semibold">Serviços</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in">Nossos Serviços</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Soluções completas para transformar seus processos empresariais
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Como podemos te ajudar
          </h2>
          
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Oferecemos uma variedade de serviços para atender às suas necessidades. Confira alguns dos serviços 
            que disponibilizamos para transformar sua empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="group hover:scale-105 transition-all duration-500 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {service.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl py-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-sm">
              Diferenciais
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Por que optar por uma consultoria especializada
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossos serviços são projetados para maximizar resultados e minimizar custos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyChooseServices.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="group hover:scale-105 transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {benefit.title}
                              </h3>
                              <span className="text-blue-200 text-sm font-semibold">
                                {benefit.stats}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {benefit.description}
                      </p>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl hover:scale-105 transition-all duration-300">
                        Saiba Mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
