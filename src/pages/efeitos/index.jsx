import './index.scss';
import { useState, useEffect } from 'react';

import Cabecalho from '../../components/cabecalho';



export default function Efeitos() {
    const [mencao, setMencao] = useState('');
    const [sitMencao, setSitMencao] = useState('-');

    useEffect(() => {
        avaliarMencao();

    }, [mencao])


    function avaliarMencao() {
       if (mencao == 'P') {
        setSitMencao('Plenamente Satisfatório');
       }
       else if (mencao == 'S') {
        setSitMencao('Satisfatório');
       }
       else if (mencao == 'NS') {
        setSitMencao('Não Satisfatório');
    }
    else  {
        setSitMencao ('Invalido')
    }
    }


    return (
        <div className='pagina-efeitos pagina'> 
        <Cabecalho titulo="ReactJS | Efeitos" />

        <div className='secao'>
            <h1> Situação Aluno</h1>

            <div  className='sit-aluno'>
                <div>{sitMencao}</div>

                <div>
                    <label> Menção: </label>
                    <input type='text' value={mencao} onChange={e => setMencao (e.target.value)} />
                </div>

            </div>

            <div className='secao'>
                <h1> Notas Aluno </h1>

                <div className='metas-aluno'>
                    <div className='entradas'>
                        <input type='text' />
                        <input type='text' />
                        <input type='text' />
                    </div>
                    <div className='media'>
                        <label> Média: </label>
                        <div> 0.0 </div>
                        
                    </div>
                    <div className='media-situacao'>
                        <label> Sit.:  </label>
                        <div> Aprovado </div>
                    </div>

                </div>

            </div>


        
        </div>
    </div>
    )
}