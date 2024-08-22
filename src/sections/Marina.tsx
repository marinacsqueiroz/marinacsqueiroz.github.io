import React from "react";
import "../styles/custom.scss"; // Ajuste o caminho se necessário

const MarinaSection: React.FC = () => {
  return (
    <section id="marina" className="py-5 px-5 custom-margin-top  bg-primary">
      <div className="container">
        <h2>Marina</h2>
        <p>Bem-vindo à seção da Marina!</p>
      </div>
    </section>
  );
};

export default MarinaSection;