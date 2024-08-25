import React, { useRef } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

interface Experience {
  date: string;
  location: string;
  title: string;
  description: string[];
}

const ExperienciaSection: React.FC = () => {
  const content: Experience[] = [
    {
      date: "02/07/2022 – 10/01/2022",
      location: "Brasília, Brazil",
      title: "SOFTWARE DEVELOPMENT INTERN | GRUPO ORION",
      description: [
        "Front-end web development (React, Javascript, Typescript and CSS). Web pages developed for clients. Dashboards, login screen, menu, filters. Frontend interaction with API and backend.",
        "Machine learning development, analysis and data processing (tensorflow, Python). Prediction for data obtained with company sensors.",
        "Skills developed: proactivity, group work, leadership, organization and punctuality (delivery within the established deadlines).",
      ],
    },
    {
      date: "10/01/2022 – 02/28/2023",
      location: "Brasília, Brazil",
      title: "JUNIOR DATA SCIENTIST | GRUPO ORION",
      description: [
        "Actively sought new technology trends and implemented process automation to streamline workflows and improve efficiency.",
        "Developed an AI using Fast.ai for predicting consumables in a building.",
        "Utilized Python programming language for project development and implementation.",
      ],
    },
    {
      date: "02/28/2023 – CURRENT",
      location: "Brasília, Brazil",
      title: "DATA SCIENTIST | GRUPO ORION",
      description: [
        "Responsible for researching new applications of AI for data study.",
        "Conduct mathematical analysis of data to derive insights and inform decision-making processes.",
        "Lead and manage a team of data analysts, overseeing data-related projects and ensuring their successful execution.",
        "Continuously explore advancements in AI and implement innovative solutions to enhance data analysis capabilities.",
        "Collaborate with cross-functional teams to integrate data-driven strategies into various aspects of the business.",
      ],
    },
    {
      date: "05/01/2023 – CURRENT",
      location: "Brasília, Brazil",
      title: "SENIOR MANAGER OF NEW TECHNOLOGIES | GRUPO ORION",
      description: [
        "Oversee the development of software and hardware products, as well as operational and data analysis aspects.",
        "Lead the product development lifecycle, from ideation to execution, ensuring alignment with organizational goals and market demands.",
        "Manage cross-functional teams to drive innovation and deliver high-quality products on time and within budget.",
        "Implement data-driven approaches to optimize operations and enhance decision-making processes across the organization.",
        "Continuously assess emerging technologies and trends to identify opportunities for product enhancement and operational improvement.",
      ],
    },
  ];

  const parallax = useParallax({
    scale: [1, 0.7, "easeInQuad"],
  });

  const parallax2 = useParallax({
    scale: [1, 0.7, "easeInQuad"],
  });
  const parallax3 = useParallax({
    scale: [1, 0.7, "easeInQuad"],
  });
  const parallax4 = useParallax({
    scale: [1, 0.7, "easeInQuad"],
  });
  return (
    <section id="experiencia" className="py-5 px-5 ">
      <h2>Work Experience</h2>
      <div className="container-body">
        <div ref={parallax.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm inner-border-card">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {content[0].date} | {content[0].location}
                </Card.Subtitle>
                <Card.Title>{content[0].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[0].description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div ref={parallax2.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm inner-border-card">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {content[1].date} | {content[1].location}
                </Card.Subtitle>
                <Card.Title>{content[1].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[1].description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div ref={parallax3.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm inner-border-card">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {content[2].date} | {content[2].location}
                </Card.Subtitle>
                <Card.Title>{content[2].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[2].description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div ref={parallax4.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm inner-border-card">
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {content[3].date} | {content[3].location}
                </Card.Subtitle>
                <Card.Title>{content[3].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[3].description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaSection;
