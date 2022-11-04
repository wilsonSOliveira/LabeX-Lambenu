import { useNavigate } from "react-router-dom";
import { irParaAdminHome, irParaAdminLogin, irParaHome, irParaListaViagens } from "../Cordenação/Cordenacao";
import Logo from "./imagens/icone.jpg"
import { Headerstyle, Logostyle ,ContainerLogo, Buttonsdiv} from "../../Styled"


export function Headercomp() {
    const navigate = useNavigate()
      return (
        <Headerstyle >
          <ContainerLogo>
          <Logostyle src={Logo} alt= "ir para home" onClick={()=>irParaHome(navigate)}/>
          <h1>Labex</h1>
          </ContainerLogo>
          <Buttonsdiv>
          <button onClick={()=>irParaAdminLogin(navigate)}>Login</button>
          </Buttonsdiv>
        </Headerstyle>
      );
    }