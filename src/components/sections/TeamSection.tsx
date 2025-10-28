import { useState, useEffect } from "react";
import { Linkedin, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const teamMembers = [{
    name: "Sheila Trony",
    role: "Gerente de projetos",
    image: "/lovable-uploads/bf334921-5da6-49b3-bad6-f1539be8f782.png",
    linkedin: "#",
    github: "#",
    description: "Especialista em gestão estratégica com mais de 10 anos de experiência em projetos corporativos."
  }, {
    name: "Yuri Cardoso",
    role: "Web Developer",
    image: "/lovable-uploads/fcf2d883-2fd3-40e9-8f9e-62d679b55824.png",
    linkedin: "#",
    github: "#",
    description: "Desenvolvedor full-stack focado em soluções inovadoras e tecnologias modernas."
  }, {
    name: "Eduardo Mansu",
    role: "Programador",
    image: "/lovable-uploads/42717de4-21bd-4c4d-a77c-16d0fd952cde.png",
    linkedin: "#",
    github: "#",
    description: "Especialista em automação e desenvolvimento de sistemas robustos e escaláveis."
  }, {
    name: "Mateus Alves",
    role: "Programador",
    image: "/lovable-uploads/1e38044c-566b-49bc-97c3-74934e36d204.png",
    linkedin: "#",
    github: "#",
    description: "Desenvolvedor backend com expertise em arquitetura de software e performance."
  }, {
    name: "Pedro Barreiro",
    role: "Programador",
    image: "/lovable-uploads/951000ea-bcc5-435f-b31b-1976c6e8c042.png",
    linkedin: "#",
    github: "#",
    description: "Frontend developer apaixonado por UX/UI e experiências digitais excepcionais."
  }, {
    name: "Hugo",
    role: "Redes",
    image: "/lovable-uploads/3619275b-92fe-4db5-83cc-f391676b231d.png",
    linkedin: "#",
    github: "#",
    description: "Especialista em infraestrutura de rede e segurança da informação."
  }];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages);
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);
  const getCurrentMembers = () => {
    const start = currentIndex * itemsPerPage;
    return teamMembers.slice(start, start + itemsPerPage);
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
            Nossa Equipe
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">Conheça Nossos Especialistas</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossa equipe é composta por profissionais altamente qualificados e experientes. Trabalhamos 
            juntos para oferecer as melhores soluções em gestão de processos e automação, sempre focados em atender 
            as necessidades dos nossos clientes e parceiros.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          {/* Navigation Buttons */}
          <Button variant="outline" size="icon" onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border-2 hover:scale-110">
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button variant="outline" size="icon" onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border-2 hover:scale-110">
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Team Members Grid */}
          <div className="px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentMembers().map((member, index) => <div key={`${currentIndex}-${index}`} className="group animate-fade-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Social Links - Appear on hover */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href={member.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={member.github} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({
            length: totalPages
          }).map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />)}
          </div>
        </div>
      </div>
    </section>;
};