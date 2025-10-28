
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cog, Bot, TrendingUp, ArrowRight } from "lucide-react";

const consultancyData = {
  "gestao-processos": {
    title: "Gestão de Processos",
    description: "Otimização completa dos processos empresariais para máxima eficiência e produtividade.",
    content: "Nossa consultoria em gestão de processos analisa, mapeia e otimiza todos os fluxos de trabalho da sua empresa. Identificamos gargalos, eliminamos redundâncias e implementamos melhorias que geram resultados mensuráveis. Com metodologias comprovadas e ferramentas avançadas, transformamos a operação da sua empresa.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Redução de até 40% no tempo de execução",
      "Eliminação de retrabalho",
      "Padronização de procedimentos",
      "Melhoria na qualidade dos resultados"
    ]
  },
  "automacao-rpa": {
    title: "Automação RPA",
    description: "Implementação de robôs de software para automatizar tarefas repetitivas e liberar sua equipe.",
    content: "A Automação por Processos Robóticos (RPA) revoluciona a forma como sua empresa executa tarefas repetitivas. Nossos bots trabalham 24/7, sem erros, executando processos com precisão absoluta. Desde entrada de dados até geração de relatórios, automatizamos tudo que consome tempo da sua equipe.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Economia de até 80% no tempo de execução",
      "Zero erros humanos",
      "Operação 24/7 sem interrupções",
      "ROI comprovado em 6 meses"
    ]
  },
  "otimizacao-operacional": {
    title: "Otimização Operacional",
    description: "Estratégias avançadas para maximizar a eficiência e reduzir custos operacionais.",
    content: "Nossa abordagem de otimização operacional combina análise de dados, lean management e tecnologia para criar operações de alta performance. Redesenhamos fluxos, implementamos KPIs inteligentes e criamos sistemas de monitoramento que garantem melhoria contínua.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Redução de 30% nos custos operacionais",
      "Aumento de 50% na produtividade",
      "Melhoria na satisfação do cliente",
      "Decisões baseadas em dados"
    ]
  }
};

export const ConsultancySection = () => {
  const [activeTab, setActiveTab] = useState("gestao-processos");
  const currentData = consultancyData[activeTab as keyof typeof consultancyData];

  const tabs = [
    { id: "gestao-processos", label: "Gestão de Processos", icon: Cog },
    { id: "automacao-rpa", label: "Automação RPA", icon: Bot },
    { id: "otimizacao-operacional", label: "Otimização Operacional", icon: TrendingUp }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            💼 NOSSOS SERVIÇOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubra a Consultoria que Transforma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções personalizadas para elevar sua empresa ao próximo nível de eficiência e inovação
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-16">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                  activeTab === tab.id
                    ? "bg-royal-800 hover:bg-royal-900 text-white shadow-xl"
                    : "border-2 border-royal-200 text-royal-800 hover:bg-royal-50"
                }`}
              >
                <IconComponent className="mr-3 h-5 w-5" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <img
                src={currentData.image}
                alt={currentData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-royal-900/20"></div>
            </div>

            {/* Content */}
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {currentData.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {currentData.content}
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {currentData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-royal-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-royal-800 hover:bg-royal-900 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Solicitar Consultoria
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
