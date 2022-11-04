import styled from "styled-components"
import Backheader from "./Componets/Home-Pagina/imagens/backheader.jpg"

// herder:
export const Headerstyle=styled.header`
    border: 1px solid;
    background-color: #a5ced1;
    max-height:100px ;
    display: flex ;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-image:url(${Backheader});

`
export const Logostyle=styled.img`
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`
export const ContainerLogo=styled.div`
display: flex;
align-items: center;
gap: 10px;
h1{
  color: white;
  letter-spacing: 5px;
}
`
export const Buttonsdiv=styled.div`
  display: flex;
  flex-direction: column;
  button{
    width: 150px;
  }
`

// fotter:
export const Fotterstyle=styled.footer`
    border: 1px solid;
    background-color: #a5ced1;
    max-height:100px ;
    display: flex ;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background-image:url(${Backheader});

`
export const Visastyle=styled.img`
  height: 60px;
  
  
`
export const Masterstyle=styled.img`
  height: 70px;
  border-radius: 20%;
  
`
export const ContainerLogoFotter=styled.div`
display: flex;
align-items: center;
gap: 10px;
h1{
  color: white;
  letter-spacing: 15px;
  font-size: 80px;
  margin: 0;
}
p{
  color: white;
 font-size: 20px;
}
`
// home:
export const Appstyled=styled.div`
 display: grid;
 align-content: space-between;
 width: 100%;
 min-height: 100vh;
 height: 100%;
 background-color: #a192927a;
`
export const Homestyled=styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
 align-items: center;
    justify-items: center;
img{
  max-height: 250px;
  border-radius: 10%
}
div{
  width: 150px;
  font-size: 20px;
  
}
`
export const TextoHome=styled.div`
  display: flex;
  flex-direction: column;
  button{
    width: 150px;
  }
`
// lista-viagens,Home admin
export const CarddivStyle=styled.div`
  display: grid;
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`

export const Cardstyle=styled.div`
  border: 1px solid;
  background-color: white;
  border-radius: 1em;
  box-shadow: 4px 2px 8px 3px #7a7979;
  padding: 10px 20px;
  gap: 10px;
  div{
    margin: 5px;
  }
`
// Formularios Candidatos,Criar viagem:
export const Formulariostyle=styled.form`
  display:flex;
  flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 30px;
    input{
      width: 280px;
    }
`
export const InputMensagem=styled.input`
  height: 40px;
`
// login
export const Loginstyled=styled.form`
padding: 20px;
`