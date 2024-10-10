import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import './Principal.css';

function Principal({ titulo, children }) {
    return (
        <main className='Principal_root'>
            <h1>{titulo}</h1>
            {children}
        </main>

    )
}

export default Principal;