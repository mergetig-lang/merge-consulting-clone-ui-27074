import { ArrowLeft, Clock, TrendingUp, CheckCircle, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EficienciaOperacional = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-royal-900 to-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/lovable-uploads/352c4608-5552-4e4f-92c2-1c1ddff5b3c1.png)`,
            backgroundColor: 'rgba(0, 0, 0, .85)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="max-w-none mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              EFICIÊNCIA OPERACIONAL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maximizando a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> Eficiência Operacional</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme suas operações através de metodologias comprovadas e tecnologias inovadoras que geram resultados imediatos e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-none mx-auto">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-8 w-8 text-royal-600 mr-3" />
                  O que é Eficiência Operacional?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A eficiência operacional refere-se à capacidade de uma organização de maximizar sua produtividade enquanto minimiza desperdícios de recursos, tempo e custos. É o equilíbrio perfeito entre fazer as coisas certas e fazer as coisas da maneira certa.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Em um mercado cada vez mais competitivo, empresas que conseguem otimizar seus processos operacionais não apenas sobrevivem, mas prosperam, criando vantagens competitivas sustentáveis e gerando maior valor para seus stakeholders.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-royal-50 to-blue-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-8 w-8 text-royal-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Aumento de Produtividade</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Processos otimizados permitem que sua equipe produza mais em menos tempo, com menor esforço e maior qualidade.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Redução de Tempo</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Eliminação de gargalos e redundâncias, resultando em ciclos mais rápidos e entregas mais ágeis.
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Como Alcançar a Eficiência Operacional</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-royal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mapeamento de Processos</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Identificação e documentação detalhada de todos os processos existentes, criando uma visão clara do estado atual das operações.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-royal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Análise de Gargalos</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Identificação de pontos de estrangulamento que limitam a capacidade produtiva e desenvolvimento de estratégias para sua eliminação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-royal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Implementação de Tecnologias</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Adoção de ferramentas e sistemas que automatizam tarefas repetitivas e fornecem insights em tempo real para tomada de decisões.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-royal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Capacitação de Equipes</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Treinamento e desenvolvimento das equipes para maximizar o potencial humano e garantir a adoção efetiva das melhorias implementadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-royal-900 to-blue-900 rounded-3xl p-12 text-white mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Resultados Comprovados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">40%</div>
                    <div className="text-lg">Aumento de Eficiência</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">60%</div>
                    <div className="text-lg">Redução de Tempo</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-300 mb-2">35%</div>
                    <div className="text-lg">Economia de Custos</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pronto para Revolucionar suas Operações?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Nossa equipe de especialistas está pronta para ajudar sua empresa a alcançar níveis extraordinários de eficiência operacional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-royal-600 hover:bg-royal-700 text-white px-8 py-4 text-lg">
                    <Users className="mr-2 h-5 w-5" />
                    Agendar Consultoria
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white px-8 py-4 text-lg">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EficienciaOperacional;