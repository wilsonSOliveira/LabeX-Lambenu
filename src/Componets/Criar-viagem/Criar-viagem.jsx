import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appstyled, Formulariostyle, InputMensagem } from "../../Styled";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";


export function CriarViagem() {
  const navigate = useNavigate()
  const[loading,setloading]=useState(false)
  const [viagem, setViagem] = useState("")
  const [planeta, setPlaneta] = useState("")
  const [data, setData] = useState("")
  const [descricao, setDescricao] = useState("")
  const [duracao, setDuracao] = useState("")

  function pegaViagem(e) {
    setViagem(e.target.value)
  }
  function pegaPlaneta(e) {
    setPlaneta(e.target.value)
  }
  function pegaData(e) {
    setData(e.target.value)

  }
  function pegaDescricao(e) {
    setDescricao(e.target.value)
  }
  function pegaDuracao(e) {
    setDuracao(e.target.value)
  }

  const novaViagem = (event) => {
    event.preventDefault()
    setloading(true)
    const body = {
      name: viagem,
      planet: planeta,
      date: data,
      description: descricao,
      durationInDays: duracao
    }
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips", body, {
        headers: {
          auth: localStorage.getItem("token")
        }
      }).then((resposta) => {
        setloading(false)
        alert("Sua vaigem foi cadastrada com sucesso!")
        setData("")
        setDescricao("")
        setDuracao("")
        setPlaneta("")
        setViagem("")
      })
      .catch((error) => {
        setloading(false)
        alert("Ocorreu um erro, tente novamente")
      })
  }
  return (
    <Appstyled>
      <Headercomp />
      {loading?"...Loading":<div>
        <Formulariostyle onSubmit={novaViagem}>
          <p>Viagem: </p>
          <input
            onChange={pegaViagem}
            value={viagem}
            placeholder="escreva aqui..."
            pattern={"^.{5,}"}
            title="O nome da viagem deve ter o minimo de 5 caracteres"
            required
          />
          <p>Planeta: </p>
          <select onChange={pegaPlaneta} required >
            <option value={""}>Selecione um planeta: </option>
            <option value={"Mercurio"}>Mercurio</option>
            <option value={"Marte"}>Marte</option>
            <option value={"Venus"}>Venus</option>
            <option value={"Jupter"}>Jupter</option>
            <option value={"Saturno"}>Saturno</option>
            <option value={"Uranio"}>Uranio</option>
            <option value={"Netuno"}>Netuno</option>
            <option value={"Plutao"}>Plutão</option>
          </select>
          <p>Data: </p>
          <input
            onChange={pegaData}
            type={"date"}
            min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + new Date().getDate()}
            required
            title="Selecione uma data"
          />
          <p>Duração em dias: </p>
          <input
            onChange={pegaDuracao}
            value={duracao}
            type={"text"}
            placeholder="escreva aqui..."
            required
            pattern={"^[5-9][0-9]|[0-9]{3,}$"}
            title="O campo deve conter apenas numeros, o valor minino é 50"
          />
          <p>Descrição: </p>
          <InputMensagem
            onChange={pegaDescricao}
            value={descricao}
            placeholder="escreva aqui..."
            pattern={"^.{30,}"}
            title="A descrição da viagem deve ter o minimo de 30 caracteres"
            required
          />
          <button >enviar</button>
        </Formulariostyle>
      </div>}
      <Fottercomp />
    </Appstyled>
  );
}

