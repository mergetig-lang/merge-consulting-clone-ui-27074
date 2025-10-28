
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Tag, Share2, BookOpen, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const RpaAutomacao = () => {
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
                Automação
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                RPA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              RPA: Revolucionando a Automação Empresarial
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Descubra como a Automação de Processos Robóticos está transformando 
              a eficiência operacional das empresas modernas.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>8 min de leitura</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Equipe Merge</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Tecnologia</span>
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
                    src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80"
                    alt="RPA Automation"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">O que é RPA?</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      A Automação de Processos Robóticos (RPA) é uma tecnologia revolucionária que utiliza 'bots' 
                      inteligentes para automatizar tarefas repetitivas e baseadas em regras. Esses bots digitais 
                      podem executar uma ampla variedade de atividades, desde o processamento de dados até a 
                      gestão de processos complexos.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-2xl mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Benefícios Principais</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span><strong>Redução de Custos:</strong> Até 80% de economia em processos automatizados</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span><strong>Precisão:</strong> Eliminação de erros humanos em tarefas repetitivas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span><strong>Velocidade:</strong> Processamento 24/7 sem interrupções</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                        <span><strong>Escalabilidade:</strong> Fácil expansão conforme demanda</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Como Implementamos RPA</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Nossa abordagem para implementação de RPA segue uma metodologia estruturada que garante 
                      resultados efetivos e sustentáveis:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold text-primary mb-2">1. Análise</h4>
                        <p className="text-gray-600 text-sm">Identificamos processos ideais para automação</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold text-primary mb-2">2. Design</h4>
                        <p className="text-gray-600 text-sm">Criamos a arquitetura dos bots</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold text-primary mb-2">3. Desenvolvimento</h4>
                        <p className="text-gray-600 text-sm">Programamos e testamos os robôs</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold text-primary mb-2">4. Implantação</h4>
                        <p className="text-gray-600 text-sm">Colocamos em produção e monitoramos</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Casos de Uso Comuns</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      O RPA pode ser aplicado em diversos setores e processos:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Financeiro</h4>
                        <p className="text-gray-600">Processamento de faturas, reconciliação bancária, relatórios financeiros</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Recursos Humanos</h4>
                        <p className="text-gray-600">Onboarding de funcionários, processamento de folha de pagamento</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Atendimento ao Cliente</h4>
                        <p className="text-gray-600">Processamento de pedidos, gestão de tickets de suporte</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Pronto para Automatizar?</h3>
                    <p className="mb-6 opacity-90">
                      Nossa equipe está pronta para ajudar você a implementar soluções RPA que 
                      transformarão seus processos empresariais.
                    </p>
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      Solicitar Consultoria
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/blog/orcamento" className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
                      alt="Orçamento"
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h4 className="font-bold text-gray-900 mb-2">Como Fazer um Orçamento Eficiente</h4>
                      <p className="text-gray-600 text-sm">Dicas para otimizar seu planejamento financeiro...</p>
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

export default RpaAutomacao;
