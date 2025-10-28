import { ArrowLeft, DollarSign, TrendingDown, Target, PieChart, Calculator, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ReducaoCustos = () => {
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
              <DollarSign className="h-4 w-4 mr-2" />
              REDUÇÃO DE CUSTOS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Estratégias Inteligentes de 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300"> Redução de Custos</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra como otimizar recursos e eliminar desperdícios sem comprometer a qualidade dos seus produtos e serviços.
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
                  <TrendingDown className="h-8 w-8 text-green-600 mr-3" />
                  A Importância da Redução Estratégica de Custos
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A redução de custos não se trata apenas de cortar gastos indiscriminadamente. É uma estratégia inteligente que visa otimizar recursos, eliminar desperdícios e aumentar a margem de lucro sem comprometer a qualidade ou a capacidade de crescimento da empresa.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Empresas que implementam estratégias eficazes de redução de custos conseguem reinvestir as economias geradas em inovação, expansão e desenvolvimento de talentos, criando um ciclo virtuoso de crescimento sustentável.
                </p>
              </div>

              {/* Key Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Calculator className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Análise Financeira</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Identificação precisa de onde e como os recursos estão sendo utilizados para tomar decisões baseadas em dados.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-royal-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-royal-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Foco Estratégico</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Priorização de áreas com maior potencial de economia sem impactar negativamente as operações críticas.
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Metodologia de Redução de Custos</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Auditoria Financeira Completa</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Análise detalhada de todos os centros de custo da empresa, identificando padrões de gastos e oportunidades de otimização.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mapeamento de Desperdícios</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Identificação de processos ineficientes, recursos subutilizados e gastos desnecessários que podem ser eliminados ou reduzidos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Negociação com Fornecedores</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Renegociação de contratos existentes e busca por fornecedores mais competitivos sem comprometer a qualidade dos produtos e serviços.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Automação de Processos</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Implementação de tecnologias que reduzem a necessidade de intervenção manual, diminuindo custos operacionais e aumentando a precisão.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoramento Contínuo</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Estabelecimento de métricas e indicadores para acompanhar o progresso das iniciativas de redução de custos e identificar novas oportunidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PieChart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custos Operacionais</h3>
                  <p className="text-gray-600">Redução média de 25-40% nos custos operacionais através de otimização de processos.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-royal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gastos Administrativos</h3>
                  <p className="text-gray-600">Otimização de despesas administrativas com foco em automação e digitalização.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PiggyBank className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recursos Financeiros</h3>
                  <p className="text-gray-600">Liberação de capital para investimentos estratégicos e crescimento.</p>
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-white mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Impacto Financeiro Comprovado</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-green-200 mb-2">30%</div>
                    <div className="text-lg">Redução de Custos Operacionais</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-200 mb-2">R$ 2,5M</div>
                    <div className="text-lg">Economia Média por Projeto</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-200 mb-2">6 meses</div>
                    <div className="text-lg">Tempo Médio de Retorno</div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Pronto para Otimizar seus Custos?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Nossa equipe de especialistas em gestão financeira está pronta para identificar oportunidades de economia na sua empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Análise Gratuita
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg">
                    Falar com Especialista
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

export default ReducaoCustos;