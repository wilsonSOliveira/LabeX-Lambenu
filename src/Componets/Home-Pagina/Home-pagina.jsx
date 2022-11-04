import { useNavigate } from "react-router-dom";
import { Appstyled, Homestyled, TextoHome } from "../../Styled";
import {irParaListaViagens } from "../Cordenação/Cordenacao";
import { Fottercomp } from "./Fotter-comp";
import { Headercomp } from "./Header-comp";
import Imghome from "./imagens/imagenHome2.jpg"



export function HomePagina() {
  const navigate = useNavigate()
  



    return (<Appstyled>
      <Headercomp/>
      <Homestyled >
        <img src={Imghome} alt="Astronauta"/>
        <TextoHome>
          <p>Somo uma empresa especializada em realizar o sonho da população em ir para o espaço</p>
        <button onClick={()=>irParaListaViagens(navigate)}>Click aqui e confira!</button>
        </TextoHome>
        </Homestyled>
        <Fottercomp/>
      </Appstyled>
    );
  }
