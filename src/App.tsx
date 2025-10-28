
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RpaAutomacao from "./pages/blog/RpaAutomacao";
import Orcamento from "./pages/blog/Orcamento";
import MergeHorizontes from "./pages/blog/MergeHorizontes";
import EficienciaOperacional from "./pages/blog/EficienciaOperacional";
import ReducaoCustos from "./pages/blog/ReducaoCustos";
import TecnologiasInovadoras from "./pages/blog/TecnologiasInovadoras";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/blog/rpa-automacao" element={<RpaAutomacao />} />
              <Route path="/blog/orcamento" element={<Orcamento />} />
              <Route path="/blog/merge-horizontes" element={<MergeHorizontes />} />
              <Route path="/blog/eficiencia-operacional" element={<EficienciaOperacional />} />
              <Route path="/blog/reducao-custos" element={<ReducaoCustos />} />
              <Route path="/blog/tecnologias-inovadoras" element={<TecnologiasInovadoras />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
