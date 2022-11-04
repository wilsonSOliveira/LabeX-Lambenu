import Visa from "./imagens/Visa.jpg"
import Master from "./imagens/mastercard.png"
import { ContainerLogoFotter, Fotterstyle, Masterstyle, Visastyle } from "../../Styled";

export function Fottercomp() {
      return (
        <Fotterstyle >
          <ContainerLogoFotter>
          <h1>Labex</h1>
          <p>Ao infinito e além!!</p>
          </ContainerLogoFotter>
          <div>
            <Visastyle src={Visa} alt="Visa"/>
            <Masterstyle src={Master} alt="mastercard"/>
          </div>
        
        </Fotterstyle>
      );
    }