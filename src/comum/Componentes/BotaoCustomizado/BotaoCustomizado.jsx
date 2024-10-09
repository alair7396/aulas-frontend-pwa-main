import './BotaoCustomizado.css';

const BotaoCustomizado = ({ aoClicar, children, cor }) => {
    const estilos = ['botao-customizado_root'];

    switch (cor) {
        case 'primario':
            estilos.push('botao-customizado_primario');
            break;
        case 'secundario':
            estilos.push('botao-customizado_secundario');
            break;
        default:
            estilos.push('botao-customizado_padrao');
            break;
    }

    return (
        <button className={estilos.join(' ')} onClick={aoClicar}>
            {children}
        </button>
    );
}

export default BotaoCustomizado;
