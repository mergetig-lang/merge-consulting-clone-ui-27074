
import { Link } from "react-router-dom";
import { Smartphone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl">merge</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Na Merge Solutions, somos especialistas em automação e consultoria, oferecendo soluções 
              inovadoras para otimizar processos e impulsionar o crescimento do seu negócio.
            </p>
            
            {/* Google Play Button */}
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Smartphone className="h-4 w-4" />
                <span>Obtenha no</span>
              </div>
              <div className="text-white font-semibold">Google Play</div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Termos e Condições
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Entre em Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Entre em contato</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">sheila.trony@associations.tech</p>
              <p className="text-gray-400 text-sm">(+55) 71 99125-5018</p>
              <p className="text-gray-400 text-sm">http://mergept.com.br/</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">© Merge • All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};
