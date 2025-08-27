"use client";

import { useState } from "react";
import Cards from "../Cards/Cards";
import styles from "./Projeto.module.css";
import dados from "@/data/projetos";

export default function Projetos(props) {
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(4);
  function verMais() {
    setQuantidadeVisivel((prev) =>
      prev + 1 > dados.length ? dados.length : prev + 1
    );
  }
  function verMenos() {
    setQuantidadeVisivel(4);
  }
  return (
    <section className={styles.container_projetos} id="projetos">
      <h2>{props.titulo}</h2>

      <div className={styles.container_button}>
        {quantidadeVisivel < dados.length ? (
          <button className={styles.ver_mais} onClick={verMais}>
            Ver mais
          </button>
        ) : (
          dados.length > 4 && (
            <button className={styles.ver_mais} onClick={verMenos}>
              Ver menos
            </button>
          )
        )}
      </div>

      <div className={styles.container_card}>
        {dados.slice(0, quantidadeVisivel).map((projeto, index) => (
          <Cards
            key={index}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            url={projeto.url}
            texto={projeto.texto}
          />
        ))}
      </div>
    </section>
  );
}
