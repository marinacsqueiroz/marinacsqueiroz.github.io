import React from "react";
import Menu from "./components/Menu";
import MarinaSection from "./sections/Marina";
import ExperienciaSection from "./sections/Experiencia";
import ProjetosSection from "./sections/Projetos";
import Footer from "./sections/Footer";

const App: React.FC = () => {
  return (
    <div className="background">
      <Menu />

    
        <MarinaSection />
        <ExperienciaSection />
        <ProjetosSection />

            <Footer /> {/* 👈 adiciona o rodapé */}

    </div>
  );
};

export default App;
