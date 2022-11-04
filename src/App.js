import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AdminHome } from "./Componets/AdminHome/AdminHome";
import { AdminLogin } from "./Componets/AdminLogin/AdminLogin";
import { CriarViagem } from "./Componets/Criar-viagem/Criar-viagem";
import { DetalhesViagem } from "./Componets/Detalhes-Viagens/Detalhes-viagens";
import { FormularioViagem } from "./Componets/Formularios-de-viagem/Formulario-de-viagem";
import { HomePagina } from "./Componets/Home-Pagina/Home-pagina";
import { ListaViagens } from "./Componets/Lista-Viagens/Lista-viagens";

const Appstyled=styled.div`
margin: 0;
`


function App() {
  return (<Appstyled>
    <BrowserRouter>
    <Routes>
      <Route index element ={<HomePagina/>}/>
      <Route path = "adminLogin" element ={<AdminLogin/>}/>
      <Route path = "adminHome" element ={<AdminHome/>}/>
      <Route path = "listaViagens" element ={<ListaViagens/>}/>
      <Route path = "formularioViagem/:id" element ={<FormularioViagem/>}/>
      <Route path = "criarViagem" element ={<CriarViagem/>}/>
      <Route path = "detalheViagem/:id" element ={<DetalhesViagem/>}/>
      </Routes>
    </BrowserRouter>
    </Appstyled>
  );
}

export default App;
