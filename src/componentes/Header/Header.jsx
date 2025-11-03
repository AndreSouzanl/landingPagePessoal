import Link from "next/link";
import estilos from "./Header.module.css";
import { FaLaptopCode } from "react-icons/fa";

export default function Header(props) {
  return (
    <header className={estilos.header}>
      <div className={estilos.header_container}>
        <div className={estilos.logo}>
          <FaLaptopCode  size={36} stroke={1} />
          <h1>{props.nome}</h1>
        </div>
        <nav className={estilos.links_navegacao}>
          <Link href={"#sobre"}>Sobre Mim</Link>
          <Link href={"#projetos"}>Projetos</Link>
          <Link href={"#tecnologia"}>Tecnologias</Link>
        </nav>
      </div>
    </header>
  );
}
