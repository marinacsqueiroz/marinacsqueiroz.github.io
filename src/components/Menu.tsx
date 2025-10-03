import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-menu fixed-top mb-5">
      <div className="container-fluid px-5 py-2">
        <div className="custom-name-menu">Marina Lucchesi</div>
        <div className="custom-font-sub-menu">Mechatronic Engineer</div>
        <div className="vertical-bar"></div>
        <div className="custom-font-sub-menu">Data Scientist</div>
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
              <a className="nav-link custom-font-menu" href="#marina">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font-menu" href="#experiencia">Work Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-font-menu" href="#projetos">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
