import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import styles from "./Rodape.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/andre-luiz-de-souza-b9574927b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          href="https://wa.me/5531984055730"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={styles.icon} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} | Desenvolvido por <span>André Luiz de Souza</span>
      </p>
    </footer>
  );
}
