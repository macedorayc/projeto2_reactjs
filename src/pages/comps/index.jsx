import './index.scss';
import {useState} from 'react';

import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemMeta';
import ItemPlano from '../../components/itemPlano';
import CartaoFilme from '../../components/cartaoFilme';

export default function Comps() {
    const [novameta, setnovameta] = useState('');
    const [listametas, setlistametas] = useState([]);
    const [editando, seteditando] = useState(-1);

    const [plano, setplano] = useState('');
    const [situacao, setsituacao] = useState('');
    const [cor, setcor] = useState('');
    const [listaplanos, setlistaplanos] = useState([]);

    const [nomeFilme, setNomeFilme] = useState('');
    const [classificacaoFilme, setClassificacaoFilme] = useState('');
    const [urlFilme, setUrlFilme] = useState('');
    const [listaFilmes, setListaFilmes] = useState([]);


    function adicionarmeta() {

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

    function adicionarFilme() {
        if (nomeFilme == '' || classificacaoFilme == '' || urlFilme == '') {
            alert('Preencha todos os campos')
            return;
        }

    let novoFilme = {
    nome: nomeFilme,
    classificacao: classificacaoFilme,
    url: urlFilme
    }

    setListaFilmes([...listaFilmes, novoFilme]);
    setNomeFilme('');
    setClassificacaoFilme('');
    setUrlFilme('');
    }



    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo="ReactJs | Componentes" />

            <div className='secao filmes'> 
                <h1> Catálogo de Filmes </h1>

                <div className='entradas'> 
                    <input type='text' placeholder='Nome do Filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)}/>
                    <input type='text' placeholder='Classificação' value={classificacaoFilme} onChange={e => setClassificacaoFilme(e.target.value)}/>
                    <input type='text' placeholder='URL da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)}/>
                    <button onClick={adicionarFilme}>Adicionar</button>
                </div>

                <div className='Lista'>
                {listaFilmes.map(item =>
                <CartaoFilme item={item}/>
                )}

                </div>

            </div>

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
                        <ItemPlano item={item}/>
                    )}

                </div>

            </div>

            <div className='secao'>
                <h1> Transformando o Contador em Componente </h1>
                <Contador titulo="passos" inicio="0"fim="20"/>
                <Contador titulo="erros"/>

            </div>

            <div className='secao metas'>
                <h1> Transformando os Itens da lista de metas em Componentes</h1>

                <div className='entrada'>
                    <input type='text' placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novameta} onChange={e => setnovameta (e.target.value)} />
                    <button onClick={adicionarmeta}> Adicionar </button>
                </div>


                <ul>
                {listametas.map((item, pos) =>
                    <ItemMeta
                    item={item}
                    pos={pos}
                    alterarmeta={alterarmeta}
                    removermeta={removermeta}
                    />
                )}
                </ul>
                

            </div>


        </div>
    )
}