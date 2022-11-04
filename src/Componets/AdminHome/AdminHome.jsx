import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appstyled, CarddivStyle, Cardstyle } from "../../Styled";
import { irParaCriarViagem, irParaDetalhesViagem } from "../Cordenação/Cordenacao";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";

export function AdminHome() {
  const navigate = useNavigate()
  const [vigens, setViagens] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    
    axios.
      get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips")
      .then((resposta) => {
        
        setViagens(resposta.data.trips)
      })
      .catch((erro) => {
        alert("ocorreu um erro tente novamente")
        
      })
  }, [deletarViagem]);

  function deletarViagem(id) {
    setloading(true)
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips/${id}`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then(() => {
        alert("Viagem deletada com sucesso!")
        setloading(false)
      })
      .catch((error) => {
        alert("ocorreu um erro tente novamente")
        setloading(false)
      })
  }

  function mostraViagens() {
    const viagensMap = vigens.map((item) => {

      return <Cardstyle key={item.id}>
        <div>Nome: {item.name}</div>
        <div>Descrição: {item.description}</div>
        <div>Planeta: {item.planet}</div>
        <div>Duração: {item.durationInDays}</div>
        <div>Data: {item.date}</div>
        <button onClick={() => irParaDetalhesViagem(navigate, item.id)}>Detalhes</button>
        <p></p>
        <button onClick={() => deletarViagem(item.id)}>Deletar  </button>
      </Cardstyle>
    })
    return viagensMap
  }
  return <Appstyled>
    <Headercomp />
    {loading?"...Loading":<CarddivStyle>
      {mostraViagens()}
      <button onClick={() => irParaCriarViagem(navigate)}>Criar viagem</button>
    </CarddivStyle>}
    <Fottercomp />
  </Appstyled>
    ;
}

