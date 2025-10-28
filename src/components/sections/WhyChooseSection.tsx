
import { Zap, DollarSign, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Consultores em gestão de processos podem analisar e otimizar as operações internas da sua empresa, identificando gargalos e implementando melhorias que geram resultados imediatos.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=600&q=80",
      stats: "Até 40% mais eficiência"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Processos eficientes fornecem informações rápidas e precisas, facilitando decisões baseadas em dados e análises que reduzem desperdícios e otimizam recursos.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80",
      stats: "Economia de 30% nos custos"
    },
    {
      icon: Lightbulb,
      title: "Tecnologias Inovadoras",
      description: "Consultores em gestão de processos analisam e otimizam operações internas, identificando gargalos e propondo melhorias através de tecnologias de ponta.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
      stats: "ROI em 6 meses"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-400/30">
            ⭐ NOSSOS DIFERENCIAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que optar por uma 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> consultoria especializada</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformamos empresas através de metodologias comprovadas e tecnologias inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 h-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-sm font-medium">
                        {benefit.stats}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 hover:shadow-xl group-hover:shadow-blue-500/25"
                    onClick={() => {
                      const blogRoutes = ['/blog/eficiencia-operacional', '/blog/reducao-custos', '/blog/tecnologias-inovadoras'];
                      window.location.href = blogRoutes[index] || '/blog/eficiencia-operacional';
                    }}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
