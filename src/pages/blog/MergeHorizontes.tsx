
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Tag, Share2, BookOpen, TrendingUp, Compass, Lightbulb, Rocket, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MergeHorizontes = () => {
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
                Inovação
              </span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                Merge
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Descubra a Merge e AMPLIE seus horizontes!
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              A Merge não é apenas uma ponte, mas também amplia nossos horizontes de maneiras 
              emocionantes e verdadeiramente transformadoras.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>10 min de leitura</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>Equipe Merge</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Inovação</span>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    alt="Crescimento e inovação empresarial"
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">

                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">A Filosofia Merge</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Na Merge, acreditamos que a verdadeira transformação empresarial acontece quando diferentes 
                      elementos se unem harmoniosamente. Nossa abordagem vai além da consultoria tradicional - 
                      criamos pontes entre tecnologia e processos, entre equipes e objetivos, entre o presente 
                      e o futuro da sua empresa.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-2xl mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">Diferenciais Únicos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl">
                        <Compass className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold mb-2">Visão Ampliada</h4>
                        <p className="text-gray-600 text-sm">
                          Identificamos oportunidades que transformam obstáculos em vantagens competitivas
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl">
                        <Rocket className="h-8 w-8 text-primary mb-3" />
                        <h4 className="font-bold mb-2">Crescimento Acelerado</h4>
                        <p className="text-gray-600 text-sm">
                          Metodologia proprietária que combina inovação tecnológica com estratégias de mercado
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que escolher a Merge?</h3>
                    <div className="space-y-4">
                      {[
                        "Experiência comprovada em mais de 500 projetos de sucesso",
                        "Metodologia exclusiva que une tecnologia e estratégia",
                        "Equipe multidisciplinar com especialistas certificados",
                        "Foco em resultados mensuráveis e ROI garantido",
                        "Suporte contínuo durante todo o processo de transformação",
                        "Parcerias estratégicas com líderes tecnológicos globais"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Pilares de Atuação</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Nossa metodologia está fundamentada em três pilares principais que garantem 
                      resultados consistentes e transformação sustentável:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                        <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold text-primary mb-2">Inovação</h4>
                        <p className="text-gray-600 text-sm">Implementamos tecnologias avançadas adaptadas à sua realidade</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold text-primary mb-2">Pessoas</h4>
                        <p className="text-gray-600 text-sm">Valorizamos o capital humano, capacitando equipes para o sucesso</p>
                      </div>
                      <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow text-center">
                        <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h4 className="font-semibold text-primary mb-2">Resultados</h4>
                        <p className="text-gray-600 text-sm">Comprometimento total com resultados concretos e mensuráveis</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Cases de Sucesso</h3>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Ao longo dos anos, a Merge já transformou centenas de empresas de diversos segmentos:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Setor Financeiro</h4>
                        <p className="text-gray-600">Redução de 70% no tempo de processamento de documentos</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Varejo</h4>
                        <p className="text-gray-600">Aumento de 45% na eficiência operacional</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Saúde</h4>
                        <p className="text-gray-600">Melhoria de 60% na qualidade dos dados clínicos</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Manufatura</h4>
                        <p className="text-gray-600">Otimização que resultou em economia de R$ 2,3 milhões anuais</p>
                      </div>
                      <div className="border-l-4 border-primary pl-6">
                        <h4 className="font-semibold text-gray-900">Serviços</h4>
                        <p className="text-gray-600">Automação que liberou 40% do tempo da equipe para atividades estratégicas</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-4">Pronto para ampliar seus horizontes?</h3>
                    <p className="mb-6 opacity-90">
                      Nossa equipe está pronta para ajudar você a descobrir oportunidades que 
                      transformarão sua empresa de forma emocionante e verdadeiramente inovadora.
                    </p>
                    <Button className="bg-white text-primary hover:bg-gray-100">
                      Iniciar Jornada de Transformação
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MergeHorizontes;
