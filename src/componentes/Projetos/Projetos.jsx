import Cards from "../Cards/Cards";
import styles from "./Projeto.module.css";
export default function Projetos(props) {
  return (
    <section className={styles.container_projetos} id="projetos">
      <h2>{props.titulo}</h2>
      <div className={styles.container_card}>
        <Cards
          titulo="Lista compras"
          descricao="Projeto lista de compras tem o objetivo otimizar a vida dos usuarios nas compras do mes de sua casa, poupando tempo e dinheiro nas compras.Projeto construido com React + nextjs"
          url="https://lista-compras-mes.vercel.app/"
          texto="Lista Compras"
        />
        <Cards
          titulo="Agenda Online"
          descricao="Projeto Agenda online construido para otimizar suas tarefas do dia e organizando todo seu dia. projeto construido com react"
          url="https://agenda-online-omega.vercel.app/"
          texto="Agenda Online"
        />
        <Cards
          titulo="Otica Vida"
          descricao="Projeto construido atraves de estudos na plataforma Dev media. projeto construido com react"
          url="https://site-estudo-otica-vida.vercel.app/"
          texto="Otica Vida"
        />
        <Cards
          titulo="Plataforma Ead"
          descricao="Projeto está em construção, uma plataforma ead onde usuário podera ver diversos cursos online. projeto construido com react + nextjs"
          url="https://plataforma-ead-ten.vercel.app/"
          texto="Plataforma Ead"
        />
      </div>
    </section>
  );
}
