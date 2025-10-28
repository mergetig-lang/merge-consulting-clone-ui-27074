
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/352c4608-5552-4e4f-92c2-1c1ddff5b3c1.png",
    title: "CONSULTORIA EM GESTÃO DE PROCESSOS",
    subtitle: "AUTOMAÇÃO ROBÓTICA",
    description: "Transforme sua empresa com RPA, aperfeiçoamento de processos e estratégias inovadoras. Otimizamos operações, reduzimos custos e impulsionamos o crescimento."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80",
    title: "OTIMIZAÇÃO OPERACIONAL",
    subtitle: "EFICIÊNCIA MÁXIMA",
    description: "Maximize a produtividade da sua empresa através de processos otimizados e tecnologias avançadas de automação empresarial."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
    title: "TRANSFORMAÇÃO DIGITAL",
    subtitle: "INOVAÇÃO CORPORATIVA",
    description: "Lidere a transformação digital do seu setor com soluções personalizadas e consultoria especializada em processos empresariais."
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-royal-900 text-white overflow-hidden -mt-16 pt-16">
      {/* Carousel Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{background: "rgba(0, 0, 0, .85)"}}></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 flex items-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full text-sm font-medium mb-8 animate-fade-in border border-white/20">
            🚀 CONSULTORIA E TRANSFORMAÇÃO DIGITAL
          </div>
          
          {/* Dynamic Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            {slides[currentSlide].title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          
          {/* Dynamic Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            {slides[currentSlide].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl">
              <Play className="mr-3 h-6 w-6" />
              Assistir Vídeo
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-black hover:bg-white hover:text-royal-900 px-10 py-6 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl">
              Saiba Mais
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-400 scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-12 text-lg text-gray-300 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Online 24/7</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <span className="font-medium">+500 Projetos</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
              <span className="font-medium">Certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
