const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        background: "#080808",
      }}
    >
      <a
        href="https://github.com/marinacsqueiroz"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 15px" }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          width="40"
          height="40"
        />
      </a>

      <a
        href="https://linkedin.com/in/marinacslucchesi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "0 15px" }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn"
          width="40"
          height="40"
        />
      </a>

      <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#555" }}>
        © {new Date().getFullYear()} Marina Queiroz
      </p>
    </footer>
  );
};

export default Footer;
