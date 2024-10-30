import { useNavigate } from "react-router-dom";

class ServicoCliente{

    listar(){
        const clientesDoLocalStorage=localStorage.getItem('clientes')
        if(clientesDoLocalStorage){
            return JSON.parse(clientesDoLocalStorage);
        }
        return[];
    }

    salvar(novoCliente){
        const clientesDoLocalStorage=this.listar();
        clientesDoLocalStorage.push(novoCliente);
        localStorage.setItem('clientes',JSON.stringify(clientesDoLocalStorage)
        );
    }
}

export default ServicoCliente;



//pagina cadastro cliente
//const ServicoCliente=new ServicoCliente():
//servicoCliente.salvar(novoCliente);



const navigate = useNavigate();
navigate('/lista-clientes')
