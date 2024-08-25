import React from "react";
import { Card, Carousel } from "react-bootstrap";

const ProjetosSection: React.FC = () => {
  const projects = [
    {
      title: "Projeto 1",
      description: "Descrição breve do Projeto 1.",
      imageUrl: "url-da-imagem-1.jpg",
      link: "https://link-do-projeto-1.com",
    },
    {
      title: "Projeto 2",
      description: "Descrição breve do Projeto 2.",
      imageUrl: "url-da-imagem-2.jpg",
      link: "https://link-do-projeto-2.com",
    },
    {
      title: "Projeto 3",
      description: "Descrição breve do Projeto 3.",
      imageUrl: "url-da-imagem-3.jpg",
      link: "https://link-do-projeto-3.com",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section id="projetos" className="py-5 px-5">
      <div className="container">
        <h2>Projetos</h2>
        <p>Bem-vindo à seção de Projetos!</p>
        <Carousel indicators={true} controls={true} className="custom-carousel">
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Card className="text-center custom-card">
                  <Card.Img
                    variant="top"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <Card.Body>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjetosSection;
