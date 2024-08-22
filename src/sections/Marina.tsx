import React from "react";
import "../styles/custom.scss"; // Ajuste o caminho se necessário
import myImage from "../assests/path.png";
import { colors } from "../styles/colors";

const MarinaSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: colors.secondaryColor,
      }}
    >
      <div className=""></div>
      <section id="experiencia" className="py-5 px-5 bg-primary-color mt-5">
        <h2>How do I get here?</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={myImage}
            alt="My Image"
            style={{ width: "80vw", height: "110vh" }}
            className="responsive-image"
          />
        </div>
      </section>
    </div>
  );
};

export default MarinaSection;
