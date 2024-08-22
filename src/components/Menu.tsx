import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top mb-5">
      <div className="container-fluid px-5 py-2">
        <a className="navbar-brand" href="#">MyWebsite</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#marina">Marina</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experiencia">Experiência</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos">Projetos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
