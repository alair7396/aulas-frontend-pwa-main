
import { useState } from "react";
import BotaoCustomizado from "../../comum/Componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/Componentes/Principal/Principal";
import './BotaoContador.css';

const BotaoContador = () => {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    }
    const decrementar = () => {
        setNumero(numero - 1);
    }

    return (
        <Principal titulo='botao contador' voltarPara='/'>
            <br />
            <br />
            <div className="soma"> soma<BotaoCustomizado
                aoClicar={incrementar}
                cor='primaria' />
            </div>

            {numero}
            <div className="subtrai">subtrai<BotaoCustomizado
                aoClicar={decrementar}
                cor='primaria' />

            </div>
            <div className="subtrai">
                <button onClick={decrementar} className="subtrai2"> subtrai</button>

            </div>



        </Principal>


    );
};

export default BotaoContador;