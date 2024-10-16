import { useNavigate } from 'react-router-dom';
import BotaoCustomizado from '../../comum/Componentes/BotaoCustomizado/BotaoCustomizado';
import Principal from '../../comum/Componentes/Principal/Principal';
import './PaginaInicial.css';
import BotaoContador from '../BotaoContador/BotaoContador';



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
            <BotaoCustomizado
                aoClicar={() => navigate('/pagina-tarefa')}>
                pagina
            </BotaoCustomizado >
            <BotaoCustomizado
                aoClicar={() => navigate('/botao-contador')}>
                contador
            </BotaoCustomizado >





        </Principal>
    );
}
export default PaginaInicial;