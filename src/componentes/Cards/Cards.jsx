import Link from "next/link";
import styles from "./Cards.module.css";
import Image from "next/image";

export default function Cards(props) {
  return (
    <div className={styles.container_cards}>
      <div className={styles.image_wrapper}>
        <Image
          src={props.imagem}
          alt={props.titulo}
          fill
          className={styles.imagem}
        />
      </div>
      <div  className={styles.container_card_textos}>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <Link className={styles.link} target="_blank" href={props.url}>
          {props.texto}
        </Link>
      </div>
    </div>
  );
}
