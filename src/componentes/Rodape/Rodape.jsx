import estilos from './Rodape.module.css'
export default function Rodape(props){
  return(
    <div className={estilos.rodape}>
      <p>{props.texto}</p>
      
    </div>
  )
}