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

      <h2>Projects</h2>
      <div className="carousel-container">
        <div className="carousel-text">
          <div className='custom-text'>My projects encompass those from university, specialized courses, and professional experiences. Each has contributed to expanding my skills and knowledge, from academic challenges to practical work solutions. </div>
        </div>
        <div className="carousel-wrapper">
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
      </div>


    </section>
  );
};

export default ProjetosSection;
