import React, { useState } from "react";
import { Button, Card, Carousel, Modal } from "react-bootstrap";
import UnBLogo from "../assests/unb.png";
import GoogleLogo from "../assests/google.png"
import OrionLogo from "../assests/grupo_orion_logo.jpg"

const ProjetosSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");

  const handleOpenModal = (pdfUrl: string, title: string) => {
    setPdfUrl(pdfUrl); // Define o URL do PDF
    setShowModal(true);
    setPdfTitle(title);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const projects = [
    {
      title: "Graduation Thesis",
      description:
        "Assessing Gender and Race Biases in Automatic Facial Recognition Using Deep Learning Models. Using deep learning models and various facial recognition libraries in Python.",
      imageUrl: UnBLogo,
      width: "2vw",
      height: "auto",
      pdf: "https://drive.google.com/file/d/1UtUj4WKvnZO1hprYyg7CIQxG3R2u0w3e/preview", // URL do PDF para o modal
    },
    {
      title: "Clapstone Project Google",
      description: "Analysis of bike-share data to develop strategies for converting casual users into annual members by understanding behavior patterns and engagement metrics.",
      imageUrl: GoogleLogo,
      width: "2vw",
      height: "auto",
      pdf: "https://drive.google.com/file/d/17KlHx4Rxe77Tt4yrg192HytM8Gb4s4KW/preview",
    },
    {
      title: "Predictive Algorithms" ,
      description: "The project involves creating models to forecast building performance metrics like energy use and maintenance needs, aiming to optimize resource management and enhance operational efficiency.",
      imageUrl: OrionLogo,
      width: "2vw",
      height: "auto",
      pdf: "https://drive.google.com/file/d/1OCbpqZkQnJCHn_TDaaet8ueiCR6iKAqN/preview",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section id="projetos" className="py-5 px-5">
      <h2>Projects</h2>
      <div className="carousel-container">
        <div className="carousel-text">
          <div className="custom-text">
            My projects encompass those from university, specialized courses,
            and professional experiences. Each has contributed to expanding my
            skills and knowledge, from academic challenges to practical work
            solutions. Click to see more.
          </div>
        </div>
        <div className="carousel-wrapper">
          <Carousel
            indicators={true}
            controls={true}
            className="custom-carousel"
          >
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <Card
                  className="text-center custom-card"
                  onClick={() => handleOpenModal(project.pdf, project.title)}
                >
                  <Card.Img
                    variant="top"
                    src={project.imageUrl}
                    style={{ width: project.width, height: project.height }}
                  />
                  <Card.Title style={{ fontSize: "5vh" }}>
                    {project.title}
                  </Card.Title>
                  <Card.Body>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{pdfTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: "80vh", overflowY: "auto" }}>
            <iframe src={pdfUrl} style={{ width: "100%", height: "80vh" }} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ProjetosSection;
