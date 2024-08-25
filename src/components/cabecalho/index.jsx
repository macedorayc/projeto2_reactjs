import './index.scss';




export default function Cabecalho(props) {

    return(
      <header className='comp-cabecalho'>
      <h1 classname="titulo"> 
        {props.titulo ?? 'ReactJs'}
      </h1>
      </header>
    )
}