import Link from "next/link";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.container_cards}>
      <h3>{props.titulo}</h3>
      <p>{props.descricao}</p>
      <Link className={styles.link} target="_blank" href={props.url}>
        {props.texto}
      </Link>
    </div>
  );
}
