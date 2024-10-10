import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Cabecalho from './comum/Componentes/Cabecalho/cabecalho';
import Principal from './comum/Componentes/Principal/Principal';
import Rodape from './comum/Componentes/Rodape/rodape';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial'
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';

const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaInicial />,
  },
  {
    path: 'lista-produtos',
    element: <ListaProdutos />,
  }
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
