
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Tag, Share2, BookOpen, TrendingUp, Calculator, Target, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Orcamento = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with background */}
      <section 
        className="relative text-white py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .85), rgba(0, 0, 0, .85)), url('/lovable-uploads/352c4608-5552-4e4f-92c2-1c1ddff5b3c1.png')`
        }}
      >
        <div className="container mx-auto px-4">
          <Link to="/servicos" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 group">
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para Serviços
          </Link>
          
          <div className="max-w-none">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Consultoria
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                Orçamento
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Faça um Orçamento Personalizado
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Juntos somos mais fortes - vamos transformar sua empresa para melhor 
              através de soluções customizadas.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>6 min de leitura</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Equipe Merge</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Consultoria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-none mx-auto">
            {/* Floating Action Bar */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-3">
              <Button size="icon" variant="outline" className="rounded-full bg-white shadow-lg hover:bg-primary hover:text-white">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-white shadow-lg hover:bg-primary hover:text-white">
                <TrendingUp className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Featured Image */}
                <div className="mb-12">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                    alt="Consultoria personalizada"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">

                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Por que solicitar um orçamento?</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Cada empresa é única, com desafios específicos e oportunidades particulares. Por isso, 
                      oferecemos consultoria personalizada que se adapta às suas necessidades reais, garantindo 
                      soluções eficazes e investimento otimizado.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-2xl mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Benefícios Principais</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl">
                        <Calculator className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold mb-2">Análise Detalhada</h4>
                        <p className="text-gray-600 text-sm">
                          Diagnóstico completo dos processos atuais para identificar oportunidades e calcular ROI
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl">
                        <Target className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold mb-2">Soluções Customizadas</h4>
                        <p className="text-gray-600 text-sm">
                          Propostas sob medida que atendem exatamente às suas necessidades e orçamento
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">O que está incluso no orçamento?</h3>
                    <div className="space-y-4">
                      {[
                        "Análise completa dos processos atuais",
                        "Identificação de oportunidades de automação",
                        "Proposta técnica detalhada",
                        "Cronograma de implementação",
                        "Estimativa de ROI e benefícios",
                        "Suporte pós-implementação",
                        "Treinamento da equipe interna"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Como funciona o processo?</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Nossa abordagem para orçamento personalizado segue uma metodologia estruturada que garante 
                      resultados efetivos e transparência total:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                          1
                        </div>
                        <h4 className="font-semibold text-primary mb-2">Contato Inicial</h4>
                        <p className="text-gray-600 text-sm">Entre em contato conosco através do formulário ou WhatsApp</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                          2
                        </div>
                        <h4 className="font-semibold text-primary mb-2">Diagnóstico</h4>
                        <p className="text-gray-600 text-sm">Reunião para entender suas necessidades e analisar processos</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                          3
                        </div>
                        <h4 className="font-semibold text-primary mb-2">Proposta</h4>
                        <p className="text-gray-600 text-sm">Apresentação da proposta personalizada com orçamento detalhado</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Pronto para solicitar seu orçamento?</h3>
                    <p className="mb-6 opacity-90">
                      Nossa equipe está pronta para ajudar você a desenvolver soluções que 
                      transformarão seus processos empresariais com total transparência de investimento.
                    </p>
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      Solicitar Orçamento Agora
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/blog/rpa-automacao" className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=600&q=80"
                      alt="RPA Automação"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 mb-2">RPA: Revolucionando a Automação</h4>
                      <p className="text-gray-600 text-sm">Descubra como a automação pode transformar seus processos...</p>
                    </div>
                  </div>
                </Link>
                
                <Link to="/blog/merge-horizontes" className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                      alt="Merge Horizontes"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 mb-2">Amplie seus Horizontes com a Merge</h4>
                      <p className="text-gray-600 text-sm">Descubra como expandir suas possibilidades...</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Orcamento;
