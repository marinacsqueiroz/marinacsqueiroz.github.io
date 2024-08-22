import React from "react";
import Menu from "./components/Menu";
import MarinaSection from "./sections/Marina";
import ExperienciaSection from "./sections/Experiencia";
import ProjetosSection from "./sections/Projetos";

const App: React.FC = () => {
  return (
    <div className="background">
      <Menu />

    
        <MarinaSection />
        <ExperienciaSection />
        <ProjetosSection />


    </div>
  );
};

export default App;
