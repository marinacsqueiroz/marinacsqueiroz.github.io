import React from "react";
import { Card, Col } from "react-bootstrap";
import { useParallax } from "react-scroll-parallax";
import "../styles/custom.scss"; // Ajuste o caminho se necessário

type Stat = { label: string; value: string; note?: string };

interface Experience {
  date: string;
  location: string;
  title: string;          // cargo + empresa (e/ou descrição curta)
  subtitle?: string;      // ex.: “Startup Cortex SaaS: IoT & Data Analytics Platform”
  description: string[];  // responsabilidades/atividades
  achievements?: string[]; // resultados (métricas)
  badges?: string[];      // tecnologias principais
  stats?: Stat[];         // números de impacto para mini-cards
}

const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(true);
  const { ref } = useParallax({
    scale: [0.97, 1],
    opacity: [0, 1],
    translateY: [16, 0],
    easing: "easeOutCubic",
  });

  const visibleDesc = expanded ? item.description : item.description.slice(0, 4);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <Col xs={12} className="timeline-item">
        <Card className="mt-4 shadow-sm custom-exp-card exp-card">
          <Card.Body>
            <Card.Subtitle className="mb-3 subtitle">
              {item.date} | {item.location}
            </Card.Subtitle>

            <Card.Title className="mb-1 fs-2 exp-title">{item.title}</Card.Title>
            {item.subtitle && (
              <div className="mb-3" style={{ color: "#b8b8b8", fontWeight: 600 }}>
                {item.subtitle}
              </div>
            )}

            {item.badges?.length ? (
              <ul className="exp-badges mb-3" aria-label="Technologies used">
                {item.badges.map((b, i) => (
                  <li key={i} className="badge">{b}</li>
                ))}
              </ul>
            ) : null}

            {item.stats?.length ? (
              <div className="exp-stats mb-3" role="list">
                {item.stats.map((s, i) => (
                  <div key={i} className="stat" role="listitem" aria-label={s.label}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">
                      {s.label}{s.note ? ` · ${s.note}` : ""}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <Card.Text>
              <ul className="exp-bullets">
                {visibleDesc.map((desc, i) => (
                  <li className="mb-1 fs-5 letter-spacing-custom bullet" key={i}>
                    {desc}
                  </li>
                ))}
              </ul>
            </Card.Text>

            {item.description.length > 4 && (
              <button
                className="exp-toggle"
                onClick={() => setExpanded(v => !v)}
                aria-expanded={expanded}
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}

            {item.achievements?.length ? (
              <>
                <hr style={{ opacity: 0.15 }} />
                <h5 className="mb-2" style={{ letterSpacing: ".5px" }}>Achievements</h5>
                <ul className="exp-bullets">
                  {item.achievements.map((a, i) => (
                    <li className="mb-1 fs-5 bullet" key={i}>{a}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

const ExperienciaSection: React.FC = () => {
  const content: Experience[] = [
    {
      date: "May 2023 – Aug 2025",
      location: "Brasília, Brazil",
      title: "Data Scientist — Grupo Orion",
      subtitle: "Startup Cortex SaaS: IoT & Data Analytics Platform",
      badges: [
        "Python", "SQL", "ETL/ELT",
        "FastAI", "scikit-learn", "PyTorch",
        "Flask (REST APIs)",
        "Data Modeling & KPIs",
        "Power BI", "React + TypeScript",
        "Azure DevOps (CI/CD)", "Azure Functions", "App Service", "Storage"
      ],
      stats: [
        { label: "CI/CD errors", value: "-87%" },
        { label: "Ops time (finance)", value: "-95%" },
        { label: "Cleaning quality", value: "+70%" },
        { label: "Monthly savings", value: "R$30k" },
      ],
      description: [
        "Developed and deployed ML models for time series forecasting (FastAI Tabular, scikit-learn, PyTorch) to predict hourly building consumption (energy, water, access-entry).",
        "Designed and maintained ETL/ELT pipelines in Python and SQL to ingest, clean, and transform structured and unstructured data.",
        "Developed RESTful APIs with Flask to integrate ML models and serve data for internal users.",
        "Built and optimized data models and KPI frameworks to support analytics and reporting.",
        "Created dashboards and BI tools (Power BI, React + TypeScript frontend, Python backend) for self-service analytics.",
        "Conducted statistical analysis and forecasting to provide insights on resource usage, operational efficiency, and financial outcomes.",
        "Collaborated with product managers, engineers, and business stakeholders to align data infrastructure with company needs.",
        "Implemented CI/CD workflows in Azure DevOps, ensuring reproducibility and reducing merge/deployment errors by 87%.",
        "Deployed cloud-native services with Azure Functions, App Service, and Storage (transferable expertise to GCP/AWS).",
        "Worked in Agile sprints and Scrum (Azure DevOps) to deliver scalable data solutions in a fast-paced startup environment."
      ],
      achievements: [
        "Combined real-time access data with ML predictions to optimize cleaning staff allocation, cutting monthly costs by R$30,000 and improving restroom cleanliness quality by 70%.",
        "Automated financial workflows for cost allocation, reducing operational time by 95% and significantly improving financial operations."
      ]
    },
    {
      date: "Jul 2022 – May 2023",
      location: "Brasília, Brazil",
      title: "Junior Data Scientist — Grupo Orion",
      badges: [
        "Python", "PostgreSQL", "SQL Server", "Pandas", "NumPy",
        "scikit-learn", "PyTorch", "KPIs & Reporting",
        "Flask (APIs)", "Azure DevOps", "Agile/Scrum"
      ],
      stats: [
        { label: "Model accuracy", value: "+30%" },
        { label: "Integration time", value: "-90%" }
      ],
      description: [
        "Supported product analytics and reporting by modeling relational datasets (PostgreSQL, SQL Server) and developing KPI frameworks.",
        "Contributed to the design of KPIs and reporting metrics, supporting data-driven decision-making.",
        "Supported product and operations teams with ad-hoc analysis and visualization.",
        "Built and validated ML/statistical models (scikit-learn, PyTorch) for classification, regression, and forecasting.",
        "Worked in Agile sprints and Scrum (Azure DevOps) to deliver scalable data solutions in a fast-paced startup environment.",
        "Focused on Continuous Improvement, staying updated with industry trends and best practices to enhance data processes and technologies."
      ],
      achievements: [
        "Improved model accuracy by 30%, enabling more reliable predictions.",
        "Developed and maintained REST API integrations with Python & Flask, reducing integration time by 90%."
      ]
    },
    {
      date: "Feb 2022 – Jul 2022",
      location: "Brasília, Brazil",
      title: "Data Scientist Intern — Grupo Orion",
      badges: ["Python", "ETL", "EDA", "Git", "Azure DevOps"],
      stats: [
        { label: "Data quality", value: "95%", note: "for training/testing" }
      ],
      description: [
        "Collaborated with senior analysts and engineers to support KPI development and validation.",
        "Assisted in data cleaning, preparation, and product reporting pipelines, ensuring reliable inputs for analysis.",
        "Migrated and processed historical data to improve model training.",
        "Conducted exploratory data analysis to support business planning.",
        "Implemented basic version control with Git/Azure DevOps, ensuring reproducibility of pipelines."
      ],
      achievements: [
        "Cleaned and processed data using Z-score and targeted extraction, achieving 95% data quality for model training and testing."
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-5 px-5">
      <h2>Work Experience</h2>
      <div className="container-body">
        {content.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienciaSection;
