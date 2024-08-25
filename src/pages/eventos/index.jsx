import './index.scss';

import Cabecalho from '../../components/cabecalho';


export default function Eventos() {

    function clicou() {
        alert('Oie, o usuário acaba de clicar');
    }

    function movimentouMouse() {
        alert('Oie, o usuário acaba de movimentar o mousee')
    }

    function alterouValor(e) {
        let novoValor = e.target.value; //string
        alert('Oie, o usuário acaba de alterar o valor do input/select para:' + novoValor)
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked; //boolean
        alert ('Oie, o usuário acaba de alterar o valor de input[checkbox/radio] para:' + novoValor)
    }




    return(
        <div className='pagina-eventos pagina'>
            <Cabecalho titulo= "ReactJs| Eventos"/>

            <section className='secao'>
                <h1>Entendendo Eventos</h1>

                <p onClick={clicou} onMouseMove={movimentouMouse}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus dolorem maxime impedit illum non voluptates repellendus incidunt totam eos at quaerat excepturi aliquam ea aliquid et quis, laboriosam ad tenetur.</p>

                <input onChange={alterouValor} type='text' placeholder='Digite aqui alguma coisa'/>

                <textarea onChange={alterouValor} placeholder='Digite aqui'>
                </textarea>

                <select onChange={alterouValor}>
                    <option>Selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>
                </select>

                <div className='grupo'>
                    <input type='checkbox' onChange={alterouCheck}/> Opção 1
                    <input type='checkbox'/> Opção 2 
                </div>
                <div className='grupo'>
                    <div>
                    <input type='radio' name='gpo'/> Opção 1
                    </div>
                    <div>
                    <input type='radio' name='gpo'/> Opção 2
                    </div>
                </div>

                <button onClick={clicou}> Clique aqui</button>

            </section>

        </div>
    )
}