import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appstyled, Formulariostyle, InputMensagem } from "../../Styled";
import { irParaListaViagens } from "../Cordenação/Cordenacao";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";
import { Paises } from "./Paises";



export function FormularioViagem(props) {
  const navigate = useNavigate()
  const pathParams=useParams()
  const[nome,setNome]=useState("")
  const[idade,setIdade]=useState("")
  const[profissao,setprofissao]=useState("")
  const[pais,setPais]=useState("")
  const[mensagem,setMensagem]=useState("")
  const[loading,setloading]=useState(false)

const candidatos=(event)=>{
  event.preventDefault()
  setloading(true)
  const body={
    name: nome,
    age: idade,
    applicationText: mensagem,
    profession: profissao,
    country: pais
  }
  axios
  .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips/${pathParams.id}/apply`,body)
  .then((resposta)=>{
    irParaListaViagens(navigate)
    setNome("")
    setIdade("")
    setMensagem("")
    setprofissao("")
    setPais("")
    alert("Parabens!! Você se cadastrou com sucesso")
    setloading(false)
  })
  .catch((error)=>{
    alert("Ops, aconteceu algo errado, tente novamente")
    setloading(false)
  })
  
}

const pegaNome = (e) =>{
  setNome(e.target.value)
}
const pegaIdade = (e) =>{
  setIdade(e.target.value)
}
const pegaProfissao = (e) =>{
  setprofissao(e.target.value)
}
const  pegaPais= (e) =>{
  setPais(e.target.value)
  console.log(pais)
}
const pegaMensagem = (e) =>{
  setMensagem(e.target.value)
}


    return (<Appstyled>
      <Headercomp/>
      {loading?"...Loading":<Formulariostyle onSubmit={candidatos}>
        Nome:
        <input 
        value={nome} 
        onChange={pegaNome}
        pattern={"^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}"}
        title="O campo deve conter o minimo de 3 letras"
        required 
        />
        Idade:
        <input
        value={idade} 
        onChange={pegaIdade}  
        type={"text"}
        pattern={"[1][8-9]|[2-9][0-9]"}
        title={"o campo deve conter apenas numeros, a idade minima é 18 anos"}
        required
        />
        Profissão:
        <input value={profissao} 
        onChange={pegaProfissao} 
        required 
        pattern={"^.{10,}"}
        title="O campo deve conter o minimo de 10 caracteres"
        />
        País:
        <Paises pegaPais={pegaPais}/>
        Mensagen:
        <InputMensagem
        value={mensagem} 
        onChange={pegaMensagem} 
        pattern={"^.{30,}"}
        title="O campo deve conter o minimo de 30 caracteres"
        required 
        />
        <button >enviar</button>
        </Formulariostyle>}
      <Fottercomp/>
      </Appstyled>
    );
  }
  
