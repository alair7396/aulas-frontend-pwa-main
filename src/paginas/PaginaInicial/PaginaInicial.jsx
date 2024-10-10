import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/Componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/Componentes/Principal/Principal';
import './PaginaInicial.css';

const PaginaInicial = () => {
    const navigate = useNavigate();



    return (
        <Principal titulo='Principal'>
            <BotaoCustomizado
                cor='primario'
                aoClicar={() => navigate('/lista-produtos')}>
                Lista Produtos
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
        </Principal>
    );
}
export default PaginaInicial;