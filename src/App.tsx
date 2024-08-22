import React from "react";
import Menu from "./components/Menu";
import MarinaSection from "./sections/Marina";
import ExperienciaSection from "./sections/Experiencia";
import ProjetosSection from "./sections/Projetos";

const App: React.FC = () => {
  return (
    <div className="background">
      <Menu />

      <main className="background">
        <MarinaSection />
        <ExperienciaSection />
        <ProjetosSection />
      </main>

    </div>
  );
};

export default App;
