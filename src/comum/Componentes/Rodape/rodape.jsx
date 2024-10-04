import './Rodape.css';

function Rodape(){
    const anoatual = new Date().getFullYear();

    return <footer className='Rodape_root'>Copyright © {anoatual} - Todos os direitos reservados - Alair.</footer>;
}

export default Rodape;