import Header from "@/componentes/Header/Header";
import estilos from "./page.module.css";
import Sobre from "@/componentes/Sobre/Sobre";
import Projetos from "@/componentes/Projetos/Projetos";
import Rodape from "@/componentes/Rodape/Rodape";

export default function Home() {
  return (
    <div className={estilos.containerPrincipal}>
      <Header nome="Dev Souza" />
      <main className={estilos.main}>
        <Sobre
          subtitulo="Sobre Mim"
          descricao=" Me chamo André Luiz de souza casado, tenho uma filha, trabalho a 21 anos com funcionário publico, e sou apaixonado por tecnologia. Iniciei meus estudos em 2021, quando entrei na faculdade Ampli Pitágoras onde cursei Análise e Desenvolvimento de Sistemas, concluindo o curso em 22 de agosto de 2023. Paralelamente, também estudei Desenvolvimento de Aplicativos Móveis, na faculdade Unicessumar, curso que já finalizei com êxito.
         "
        />
        <Projetos titulo="Meus Projetos" />
       
      </main>
      <Rodape texto="Desenvolvido por Dev Souza" />
    </div>
  );
}
