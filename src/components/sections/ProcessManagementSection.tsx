import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight, MessageCircle } from "lucide-react";
export const ProcessManagementSection = () => {
  return <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-royal-100 text-royal-800 rounded-full text-sm font-medium mb-6">
            🏆 SOBRE NÓS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Somos referência em 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-blue-600"> gestão de processos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 projetos realizados com excelência e inovação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img src="/lovable-uploads/352c4608-5552-4e4f-92c2-1c1ddff5b3c1.png" alt="Análise de dados e processos empresariais" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">500+</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Projetos</p>
                  <p className="font-bold text-gray-900">Concluídos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Eficiência Operacional */}
            <div className="group p-6 rounded-2xl bg-gray-50 hover:bg-royal-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-royal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Eficiência Operacional
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A eficiência operacional pode ser alcançada através de diversas iniciativas, 
                    desde a otimização da automação de processos até a implementação de tecnologias avançadas 
                    que transformam completamente a forma como sua empresa opera.
                  </p>
                </div>
              </div>
            </div>

            {/* Gestão de Projetos */}
            <div className="group p-6 rounded-2xl bg-gray-50 hover:bg-royal-50 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Gestão De Projetos
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Envolve a aplicação de conhecimentos, habilidades, ferramentas e técnicas 
                    para executar atividades e cumprir os requisitos do projeto com excelência, 
                    garantindo resultados dentro do prazo e orçamento estabelecidos.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="border-2 border-royal-600 text-royal-600 hover:bg-royal-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Phone className="mr-3 h-5 w-5" />
                  <span className="flex items-center space-x-2">
                    <span>Entre em Contato</span>
                    <span className="text-sm opacity-75">(+55) 71 99125-5018</span>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};