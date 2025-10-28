import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export const FAQSection = () => {
  const faqs = [{
    question: "O que é RPA (Robotic Process Automation)?",
    answer: "RPA é uma tecnologia que permite automatizar tarefas repetitivas e baseadas em regras através de 'bots' de software, liberando sua equipe para atividades mais estratégicas."
  }, {
    question: "Como a consultoria pode melhorar meus processos?",
    answer: "Nossa consultoria analisa seus processos atuais, identifica gargalos e oportunidades de melhoria, implementando soluções personalizadas para otimizar eficiência e reduzir custos."
  }, {
    question: "Qual o tempo de implementação das soluções?",
    answer: "O tempo varia conforme a complexidade do projeto, mas geralmente projetos de RPA podem ser implementados entre 4-12 semanas, enquanto consultorias de processo levam de 2-6 meses."
  }, {
    question: "Quais são os benefícios da automação de processos?",
    answer: "Os principais benefícios incluem: redução de erros humanos, aumento da velocidade de execução, disponibilidade 24/7, redução de custos operacionais e liberação da equipe para atividades estratégicas."
  }, {
    question: "Vocês oferecem suporte pós-implementação?",
    answer: "Sim, oferecemos suporte completo pós-implementação incluindo monitoramento, manutenção, atualizações e treinamento contínuo da sua equipe."
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wide mb-2 block">
              Ajuda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aqui estão as respostas para as perguntas mais comuns sobre nossos 
              serviços de consultoria e automação de processos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* FAQ Accordion */}
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 px-6">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>

            {/* Side Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <img alt="Profissional pensativo" className="w-full h-80 object-cover rounded-2xl shadow-lg" src="/lovable-uploads/82b6188d-3d69-4cd7-a9be-6bd3ea6ac8ea.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};