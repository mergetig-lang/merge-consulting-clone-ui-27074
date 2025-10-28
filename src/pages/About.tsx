
import { Button } from "@/components/ui/button";
import { Phone, Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { TeamSection } from "@/components/sections/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header with background using the uploaded image */}
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
            <span className="hover:text-white transition-colors cursor-pointer">Serviços</span> 
            <span className="mx-2">→</span> 
            <span className="hover:text-white transition-colors cursor-pointer">Contato</span> 
            <span className="mx-2">→</span> 
            <span className="text-blue-300 font-semibold">Sobre</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-in">Sobre nós</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Conheça nossa história, missão e a equipe que transforma processos empresariais
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
              Sobre Nós
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Somos referência em gestão de processos
          </h2>
          
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Transformamos negócios através de soluções inovadoras em gestão de processos e automação, 
            sempre com foco na excelência e resultados sustentáveis.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8 animate-slide-in">
              <p className="text-gray-600 text-lg leading-relaxed">
                Utilizamos a plataforma CRM que é uma solução completa para organizar e fazer de informações, 
                aplicar rotinas e procedimentos eficientes com simplicidade e efetividade.
              </p>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:bg-blue-50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Target className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Eficiência Operacional</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A eficiência operacional pode ser alcançada através de diversas iniciativas, 
                      desde a otimização de processos até a implementação de tecnologias avançadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:bg-blue-50">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Lightbulb className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Gestão De Projetos</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Envolve a aplicação de conhecimentos, habilidades, ferramentas e técnicas 
                      para executar atividades de forma eficiente e eficaz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-lg py-6 px-8 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="text-lg py-6 px-8 rounded-xl hover:scale-105 transition-all duration-300 hover:bg-primary hover:text-white border-2 border-primary">
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="animate-scale-in">
              <img
                src="/lovable-uploads/352c4608-5552-4e4f-92c2-1c1ddff5b3c1.png"
                alt="Equipe trabalhando"
                className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Methodology */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Nossos Pilares
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=600&q=80"
                    alt="Visão"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center space-x-3">
                      <Eye className="h-8 w-8 text-white" />
                      <h3 className="text-2xl font-bold text-white">Visão</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    Impulsionamos processos e sistemas e tecnologias avançadas, buscando criar um futuro 
                    de excelência e superar limitações conforme Planejamento Estratégico do Instituto e 
                    seus Planos Organizativos.
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
                    alt="Metodologia"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center space-x-3">
                      <Target className="h-8 w-8 text-white" />
                      <h3 className="text-2xl font-bold text-white">Metodologia</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    Ser referência na melhoria contínua utilizando técnicas e 
                    metodologias de nossos clientes uma jornada sustentável e, 
                    um crescimento de tecnologia através de um plano sustentável.
                  </p>
                </div>
              </div>
            </div>

            <div className="group hover:scale-105 transition-all duration-500 cursor-pointer">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80"
                    alt="Missão"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="h-8 w-8 text-white" />
                      <h3 className="text-2xl font-bold text-white">Missão</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    Estreitar são nossos clientes e parceiros uma trajetória rica e tecnologia de forma que 
                    contribua para a transformação sustentável para o crescimento e 
                    desenvolvimento de seu produto empresarial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Carousel */}
      <TeamSection />
    </div>
  );
};

export default About;
