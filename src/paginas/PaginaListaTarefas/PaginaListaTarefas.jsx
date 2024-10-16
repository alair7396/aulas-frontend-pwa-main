import { useState } from "react";
import BotaoCustomizado from "../../comum/Componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/Componentes/Principal/Principal";



const PaginaListaTarefas = () => {
    const [descricao, setDescricao] = useState('');
    const [tarefas, setTarefas] = useState([]);
    const adicinarLista = () => {
        setTarefas([...tarefas, descricao]);
        setDescricao('')
    }
    return (
        <Principal voltarPara='/'>
            <>
                <ul>
                    {tarefas.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <div><h1>Pagina Lista Tarefas</h1></div>
                <div><input type="text" value={descricao} onChange={(event) => {
                    setDescricao(event.target.value);




                }} />
                    <BotaoCustomizado aoClicar={adicinarLista}></BotaoCustomizado></div>

            </>
        </Principal>
    )
}
export default PaginaListaTarefas;