import { ArrowLeft, Lightbulb, Cpu, Rocket, Zap, Bot, Cloud, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TecnologiasInovadoras = () => {
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
              <Lightbulb className="h-4 w-4 mr-2" />
              TECNOLOGIAS INOVADORAS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              O Futuro dos Negócios com 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"> Tecnologias Inovadoras</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme sua empresa com as mais avançadas soluções tecnológicas que revolucionam processos e criam vantagens competitivas.
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
                  <Rocket className="h-8 w-8 text-purple-600 mr-3" />
                  A Era da Transformação Digital
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Vivemos em uma era de mudanças tecnológicas aceleradas, onde empresas que abraçam a inovação não apenas sobrevivem, mas lideram seus mercados. As tecnologias inovadoras não são mais um diferencial competitivo - elas são uma necessidade para o sucesso empresarial.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa missão é ajudar empresas a navegar neste cenário tecnológico complexo, identificando e implementando soluções que geram valor real e resultados mensuráveis.
                </p>
              </div>

              {/* Technology Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Bot className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Inteligência Artificial</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Automação inteligente, análise preditiva e tomada de decisões baseada em machine learning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Cloud className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Cloud Computing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Infraestrutura escalável, segura e flexível que se adapta às necessidades do seu negócio.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">IoT & Mobile</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Conexão inteligente de dispositivos e aplicações móveis que revolucionam a experiência do usuário.
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossa Abordagem Tecnológica</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnóstico Tecnológico</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Avaliação completa da infraestrutura tecnológica atual e identificação de oportunidades de modernização e otimização.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Estratégia de Inovação</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Desenvolvimento de roadmap tecnológico alinhado aos objetivos de negócio e às tendências do mercado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Implementação Gradual</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Execução por fases para minimizar riscos e garantir que cada etapa gere valor antes de avançar para a próxima.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Capacitação e Treinamento</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Preparação das equipes para utilizar efetivamente as novas tecnologias e maximizar seu potencial.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Suporte e Evolução Contínua</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Monitoramento constante e atualizações para garantir que as soluções permaneçam atuais e eficazes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <Cpu className="h-10 w-10 text-purple-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Automação de Processos</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Implementação de RPA (Robotic Process Automation) e workflows inteligentes que eliminam tarefas repetitivas e reduzem erros humanos.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Redução de 80% no tempo de execução</li>
                    <li>• Eliminação de erros manuais</li>
                    <li>• Disponibilidade 24/7</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="h-10 w-10 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">Analytics Avançado</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ferramentas de Business Intelligence e análise de dados que transformam informações em insights acionáveis.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Dashboards em tempo real</li>
                    <li>• Análise preditiva</li>
                    <li>• Tomada de decisão baseada em dados</li>
                  </ul>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Transformação Digital Comprovada</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-purple-200 mb-2">300%</div>
                    <div className="text-lg">Aumento de Produtividade</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-200 mb-2">6 meses</div>
                    <div className="text-lg">ROI Médio</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-200 mb-2">95%</div>
                    <div className="text-lg">Satisfação dos Clientes</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pronto para a Transformação Digital?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Nossa equipe de especialistas em tecnologia está pronta para levar sua empresa ao próximo nível de inovação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                    <Rocket className="mr-2 h-5 w-5" />
                    Iniciar Transformação
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg">
                    Conversar com Especialista
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

export default TecnologiasInovadoras;