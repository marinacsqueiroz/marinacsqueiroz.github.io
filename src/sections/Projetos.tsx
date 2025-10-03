import React, { useState } from "react";
import { Button, Card, Carousel, Modal } from "react-bootstrap";
import UnBLogo from "../assests/unb.png";
import GoogleLogo from "../assests/google.png";
import OrionLogo from "../assests/grupo_orion_logo.jpg";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  pdf?: string;       // Google Drive preview URL
  github?: string;    // repo URL (ou seu perfil)
  badges?: string[];  // stacks do projeto (opcional)
};

const GitHubIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    role="img"
    aria-label="GitHub"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    style={{ verticalAlign: "-3px" }}
  >
    <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .297z" />
  </svg>
);

const ProjetosSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfTitle, setPdfTitle] = useState("");

  const projects: Project[] = [
    {
      title: "Graduation Thesis",
      description:
        "Assessing Gender and Race Biases in Automatic Facial Recognition Using Deep Learning Models. Using deep learning models and various facial recognition libraries in Python.",
      imageUrl: UnBLogo,
      pdf: "https://drive.google.com/file/d/1UtUj4WKvnZO1hprYyg7CIQxG3R2u0w3e/preview",
      // github: "https://github.com/marinacsqueiroz/graduation-thesis",
      badges: ["Python", "CNNs", "Face Recognition", "scikit-learn"],
    },
    {
      title: "Capstone Project — Google",
      description:
        "Bike-share analytics to convert casual riders into annual members using behavior patterns and engagement metrics.",
      imageUrl: GoogleLogo,
      pdf: "https://drive.google.com/file/d/17KlHx4Rxe77Tt4yrg192HytM8Gb4s4KW/preview",
      github: "https://github.com/marinacsqueiroz/CyclistAnalysis",
      badges: ["Python", "Pandas", "Data Viz", "A/B Thinking"],
    },
    {
      title: "Predictive Algorithms",
      description:
        "Forecasting building metrics (energy, water, maintenance) to optimize resources and operations.",
      imageUrl: OrionLogo,
      pdf: "https://drive.google.com/file/d/1OCbpqZkQnJCHn_TDaaet8ueiCR6iKAqN/preview",
      // github: "https://github.com/marinacsqueiroz/predictive-algorithms",
      badges: ["Time Series", "FastAI", "scikit-learn", "Flask"],
    },
  ];

  const handleOpenModal = (url?: string, title?: string) => {
    if (!url) return;
    setPdfUrl(url);
    setPdfTitle(title || "Project");
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const openGitHub = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const toExternalPdf = (preview?: string) =>
    preview ? preview.replace("/preview", "/view") : undefined;

  return (
    <section id="projetos" className="py-5 px-5">
      <h2>Projects</h2>

      <div className="carousel-container">
        {/* Texto à esquerda */}
        <div className="carousel-text">
          <div className="project-text">
            My projects encompass those from university, specialized courses, and professional
            experiences. Each has contributed to expanding my skills and knowledge, from academic
            challenges to practical work solutions. Click to see more.
          </div>
        </div>

        {/* Carousel à direita */}
        <div className="carousel-wrapper">
          <Carousel
            indicators
            controls
            interval={null}
            pause="hover"
            className="custom-carousel projects-carousel"
          >
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <Card
                  className="text-center custom-card project-card"
                  role="group"
                  aria-label={`${project.title} card`}
                  onClick={() => handleOpenModal(project.pdf, project.title)}
                >
                  {/* Logo pequena no topo */}
                  <Card.Img
                    variant="top"
                    src={project.imageUrl}
                    alt={`${project.title} logo`}
                    className="project-logo"
                    loading="lazy"
                  />

                  <Card.Title className="project-title">{project.title}</Card.Title>

                  {/* Badges da stack (opcional) */}
                  {project.badges?.length ? (
                    <div className="exp-stats mb-3" role="list">
                      {project.badges.map((b, i) => (
                        <div key={i} className="stat" role="listitem" aria-label={b}>
                          <div className="stat-value">{b}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}



                  <Card.Body className="project-body">
                    <Card.Text className="project-text">{project.description}</Card.Text>

                    <div className="project-actions d-flex gap-2 justify-content-center mt-3">
                      {project.github && (
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="btn-gh"
                          onClick={(e) => openGitHub(e, project.github)}
                          aria-label="Open GitHub repository"
                          title="Open GitHub repository"
                        >
                          <GitHubIcon /> <span className="ms-1">GitHub</span>
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Modal de PDF */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{pdfTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: "80vh", overflowY: "auto" }}>
            {pdfUrl ? (
              <iframe
                src={pdfUrl}
                title={`${pdfTitle} preview`}
                style={{ width: "100%", height: "80vh", border: 0 }}
                allowFullScreen
              />
            ) : (
              <p>No preview available.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {pdfUrl && (
            <Button
              variant="outline-secondary"
              onClick={() => {
                const ext = toExternalPdf(pdfUrl);
                if (ext) window.open(ext, "_blank", "noopener,noreferrer");
              }}
            >
              Open in new tab
            </Button>
          )}
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default ProjetosSection;
