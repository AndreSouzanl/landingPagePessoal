import styles from "./Sobre.module.css"

export default function Sobre(props) {
  return (
    <section className={styles.container} id="sobre">
      <h2>{props.subtitulo}</h2>
      <p>{props.descricao}</p>
    </section>
  );
}
