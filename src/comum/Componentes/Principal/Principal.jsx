import { Link } from 'react-router-dom';
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

function Principal({ voltarPara, titulo, children }) {
    return (
        <main className='Principal_root'>
            <div className='principal_titulo'>
                {voltarPara && <Link to='/'>Voltar</Link>
                }

                <h1>{titulo}</h1>
            </div>

            {children}
        </main>

    )
}

export default Principal;