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
      date: "May 2023 – Aug 2025",
      location: "Brasília, Brazil",
      title: "DATA SCIENTIST & ANALYTICS | GRUPO ORION",
      description: [
        "Processed and analyzed large-scale datasets with PostgreSQL, Pandas, NumPy, and SQLAlchemy, improving query performance and reducing latency by 35%.",
        "Developed and maintained data pipelines to support predictive analytics projects, ensuring consistency and scalability of data workflows.",
        "Built and deployed forecasting and classification models with scikit-learn, PyTorch, and FastAI, improving accuracy of business predictions by 30%.",
        "Automated ingestion and reporting workflows with Python and Flask APIs, reducing manual work for stakeholders.",
        "Conducted exploratory data analysis with PostgreSQL, Python, Pandas, SQLAlchemy to support business insights.",
        "Worked within Agile/Scrum teams, collaborating closely with engineers and product managers to deliver data-driven features.",
        "Focused on Continuous Improvement, staying updated with industry trends and best practices to enhance data processes and technologies."
      ],
    },
    {
      date: "Jul 2022 – May 2023",
      location: "Brasília, Brazil",
      title: "JUNIOR DATA SCIENTIST & ANALYTICS | GRUPO ORION",
      description: [
        "Processed and analyzed large-scale datadsets with PostgreSQL, Pandas, NumPy, and SQLAlchemy, improving query performance and reducing latency by 35%.",
        "Developed and maintained data pipelines to support predictive analytics projects, ensuring consistency and scalability of data workflows.",
        "Built and deployed forecasting and classification models with scikit-learn, PyTorch, and FastAI, improving accuracy of business predictions by 30%.",
        "Automated ingestion and reporting workflows with Python and Flask APIs, reducing manual work for stakeholders.",
        "Conducted exploratory data analysis with PostgreSQL, Python, Pandas, SQLAlchemy to support business insights.",
        "Worked within Agile/Scrum teams, collaborating closely with engineers and product managers to deliver data-driven features.",
        "Focused on Continuous Improvement, staying updated with industry trends and best practices to enhance data processes and technologies",
      ],
    },
    {
      date: "Feb 2022 – Jul 2022",
      location: "Brasília, Brazil",
      title: "DATA SCIENCE & ANALYTICS INTERN | GRUPO ORION",
      description: [
        "Assisted in data preparation, ETL workflows, and quality checks for reporting and ML applications.",
        "Explored and tested the best AI models for predictions, improving accuracy by 70% by the end of the internship, ensuring an error rate between 5% and 20% during training.",
        "Migrated and processed historical data to improve model training.",
        "Conducted exploratory data analysis to support business planning.",
        "Implemented basic version control with Git/Azure DevOps, ensuring reproducibility of pipelines.",
      ],
    },


  ];

  const parallax = useParallax({
    scale: [0.5, 0.9, "easeOutBack"],
  });

  const parallax2 = useParallax({
    scale: [0.5, 0.9, "easeOutBack"],
  });
  const parallax3 = useParallax({
    scale: [0.5, 0.9, "easeOutBack"],
  });
  return (
    <section id="experiencia" className="py-5 px-5 ">
      <h2>Work Experience</h2>
      <div className="container-body">
        <div ref={parallax.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm custom-exp-card">
              <Card.Body>
                <Card.Subtitle className="mb-4 subtitle">
                  {content[0].date} | {content[0].location}
                </Card.Subtitle>
                <Card.Title className="mb-3  fs-2">{content[0].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[0].description.map((desc, i) => (
                      <li className="mb-1 fs-5 letter-spacing-custom" key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div ref={parallax2.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm custom-exp-card">
              <Card.Body>
                <Card.Subtitle className="mb-4 subtitle">
                  {content[1].date} | {content[1].location}
                </Card.Subtitle>
                <Card.Title className="mb-3  fs-2">{content[1].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[1].description.map((desc, i) => (
                      <li className="mb-1 fs-5 letter-spacing-custom" key={i}>{desc}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <div ref={parallax3.ref as React.RefObject<HTMLDivElement>}>
          <Col xs={12} className="timeline-item">
            <Card className="mt-4 shadow-sm custom-exp-card">
              <Card.Body>
                <Card.Subtitle className="mb-4 subtitle">
                  {content[2].date} | {content[2].location}
                </Card.Subtitle>
                <Card.Title className="mb-3  fs-2">{content[2].title}</Card.Title>
                <Card.Text>
                  <ul>
                    {content[2].description.map((desc, i) => (
                      <li className="mb-1  fs-5 letter-spacing-custom" key={i}>{desc}</li>
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
