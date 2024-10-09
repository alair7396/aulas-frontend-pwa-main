import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

function Principal() {
    return (
        <main className='Principal_root'>
            Principal
            <BotaoCustomizado
                cor='primario'
                aoClicar={() => alert('clicou no botao')}>
                Botão Primário
            </BotaoCustomizado >
            <BotaoCustomizado
                cor='secundario'
                aoClicar={() => alert('clicou no botao')}>
                Botão Secundário
            </BotaoCustomizado >
            <BotaoCustomizado
                aoClicar={() => alert('clicou no botao')}>
                Padrão
            </BotaoCustomizado >
        </main>

    )
}

export default Principal;