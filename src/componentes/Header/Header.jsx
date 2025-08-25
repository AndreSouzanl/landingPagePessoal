import Link from "next/link"
import estilos from "./Header.module.css"
export default function Header(props){
  return(
    <header className={estilos.header}>
      <div className={estilos.header_container}>
        <div>
           <h1>{props.nome}</h1>
        </div>
        <nav className={estilos.links_navegacao}>
        <Link href={'#sobre'}>Sobre Mim</Link>
        <Link href={'#projetos'}>Projetos</Link>
        <Link href={'#sobre'}>Tecnologias</Link>
        </nav>
      </div>

    </header>
  )
}