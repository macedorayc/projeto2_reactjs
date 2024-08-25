import './index.scss'
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import {tratarNumero} from '../../utils/conversao';
import { calculartotalingresso } from '../../services/ingresso'


export default function VarEstado() {
    const [contador, setContador] = useState(0)
    const [tituloS2, setTituloS2] = useState('Oie');
    const [tituloS3, setTituloS3] = useState('Escolha um item');
    const [marcouOpcaoS4, setmarcouOpcaoS4] = useState(false);
    const [tituloS5, setTituloS5] = useState('Oie');
    const [descricaoS5, setDescricaoS5] = useState('Oie');

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    const [qtding, setqtding] = useState(0);
    const [meiaing, setmeiaing] = useState(0);
    const [cupom, setcupom] = useState(0);
    const [totaling, settotaling] = useState(0);

    const [novameta, setnovameta] = useState('');
    const [listametas, setlistametas] = useState([]);
    const [editando, seteditando] = useState(-1);

    const [plano, setplano] = useState('');
    const [situacao, setsituacao] = useState('');
    const [cor, setcor] = useState('');
    const [listaplanos, setlistaplanos] = useState([]);


//let contador = 0
    function aumentar() {
//contador = contador + 1;

        if (contador < 10) {
            setContador(contador + 1)
        }

//alert(contador)
    }

    function diminuir() {
//contador = contador - 1;

        setContador(contador-1)
    }
    
//exemplo function normal
    function alterarTituloS3(e) {
        let novoValor = e.target.value;
        setTituloS3(novoValor);
    }
//function simplificado no onChange={(e) => setmarcouOpcaoS4 (e.target.checked)}
        

    function alterarTituloS5() {
        setTituloS5(descricaoS5)
    }

    function somar() {
        let soma = tratarNumero(num1) + tratarNumero(num2);
        setRes(soma);
    }

//function exportada de pasta ingresso.js
    function calcularingresso() {
        let tot = calculartotalingresso(qtding, meiaing, cupom);
        settotaling(tot);
    }

    function adicionarmeta() {
        //listametas.push(novameta);

        if(novameta !== '') {

            if (editando === -1) {
            setlistametas([...listametas, novameta]);
            setnovameta('');

            }
            else {
                listametas [editando] = novameta;
                setlistametas([...listametas]);
                setnovameta('');
                seteditando(-1);
            }

        }

    }

    function teclaApertada(e) {
       if (e.key === 'Enter') {
        adicionarmeta();

       }
    }

    function removermeta(pos) {
        listametas.splice(pos, 1);
        setlistametas([...listametas]);
    }

    function alterarmeta(pos) {
        setnovameta(listametas[pos])
        seteditando(pos);
    }

    function adicionarplano() {
        let novoplano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setlistaplanos([...listaplanos, novoplano])

        setplano('')
        setsituacao('')
        setcor('')

    }







    return (
        <div className='pagina-varestado pagina'>
            <Cabecalho titulo= "ReactJs| Variável de Estado"/>


            <div className='secao planos'>
                <h1> Meus planos atuais </h1>

                <div className='entrada'>
                    <input type='text' placeholder='Meu plano aqui' value={plano} onChange={e => setplano(e.target.value)}/>
                    <input type='text' placeholder='Situação do plano aqui' value={situacao} onChange={e => setsituacao(e.target.value)}/>
                    <input type='text' placeholder='Cor de identificação' value={cor} onChange={e => setcor(e.target.value)}/>
                    <button onClick={adicionarplano}> Adicionar plano </button>
                </div>

                <div className='lista'>
                    {listaplanos.map(item =>
                        <div className='plano'>
                            <div className='cor' style={{backgroundColor: item.tema}}>&nbsp;</div>
                            <div>
                            <h1> {item.titulo} </h1>
                            <h2>{item.tempo}</h2>
                        </div>
                    </div> 
                    )}

                </div>

            </div>



            <div className='secao metas'>
                <h1> Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type='text' placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novameta} onChange={e => setnovameta (e.target.value)} />
                    <button onClick={adicionarmeta}> Adicionar </button>
                </div>

                 {/*jeito array para acrescentar informaçoes*/}

                <ul>
                {listametas.map((item, pos) =>
                    <li key={pos}>
                    <i className='fa fa-pen-to-square' onClick={() => alterarmeta(pos)}></i> &nbsp;
                    <i className='fa fa-trash-can' onClick={() => removermeta(pos)}></i> &nbsp;
                    {item}</li>
                )}
                </ul>

                  {/* jeito normal:
                    <ul>
                    <li> Se tornar pleno em uma empresa</li>
                    <li> Dar entrada no meu carro</li>
                </ul>*/}
                

            </div>




            <div className='secao ingresso'>
                <h1>Venda de Ingresso</h1>
                <div className='entrada'>
                    <div>
                        <label>Quantidade:</label>
                        <input type='text' value={qtding} onChange={e => setqtding(e.target.value)}/>
                    </div>
                    <div>
                        <label>Meia Entrada</label>
                        <input type='checkbox' checked={meiaing} onChange={e => setmeiaing(e.target.checked)}/>
                    </div>
                    <div>
                        <label>Cupom:</label>
                        <input type='text' value={cupom} onChange={e => setcupom(e.target.value)}/>
                    </div>
                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcularingresso}> Calcular </button>
                    </div>
                        <hr/>
                        <div>
                            O total é R$ {totaling}
                        </div>

                </div>

            </div>



            <div className='secao  calculadora'>
                <h1>Calculadora</h1>
                <div className='entrada'>
                    <input type='text' value={num1} onChange={e => setNum1(e.target.value)}/>
                    <input type='text' value={num2} onChange={e =>setNum2(e.target.value)}/>
                    <div> = </div>
                    <div className='res'> {res} </div>

                </div>
                <button onClick={somar}> Somar </button>

            </div>



            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                    {contador}
                    <button onClick={diminuir}> - </button>
                </div>

                <div className='secao'>
                    <h1> {tituloS2} </h1>
                    <input type='text'  value={tituloS2} onChange={e => setTituloS2(e.target.value)}/>
                </div>

                <div className='secao'>
                    <h1> {tituloS3} </h1>
                    <select onChange={alterarTituloS3}>
                        <option>Selecione</option>
                        <option>Javascript</option>
                        <option>Html/Css</option>
                        <option>ReactJS</option>
                    </select>
                </div>

                <div className='secao'>
                    <h1> Programar é lindezinha? {marcouOpcaoS4 ? 'Sim' : 'Não'} </h1>
                    <input type='checkbox' checked={marcouOpcaoS4} onChange={(e) => setmarcouOpcaoS4 (e.target.checked)} /> Programar é lindezinha?
                </div>

                <div className='secao'>
                    <h1> {tituloS5} </h1>

                    <input type='text' value={descricaoS5} onChange={e => setDescricaoS5 (e.target.value)} />

                    <button onClick={alterarTituloS5}> Alterar </button>

                </div>

            </div>

        </div>
    )
}