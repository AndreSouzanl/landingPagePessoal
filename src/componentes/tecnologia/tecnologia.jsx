import styles from "./tecnologia.module.css";
export default function Tecnologia() {
  return (
    <div className={styles.container} id="tecnologia">
      <h1>Linguagem Estudadas</h1>

      <div className={styles.container_linguagens}>
        <div className={styles.container_frontend}>
          <h2>Front End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className={styles.container_backend}>
          <h2>Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Banco de Dados SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
