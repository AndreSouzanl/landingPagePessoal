import estilos from "./Rodape.module.css";
export default function Rodape(props) {
  return (
    <div className={estilos.rodape}>
      <div className={estilos.redes_sociais}>
        <p>Desenvolvido por Dev Souza</p>
        <span>© 2024 Dev Souza. Todos os direitos reservados.</span>
      </div>
    </div>
  );
}
