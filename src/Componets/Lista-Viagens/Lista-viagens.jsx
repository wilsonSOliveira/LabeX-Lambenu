import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Appstyled, CarddivStyle, Cardstyle } from "../../Styled";
import { irParaFormularioViagem } from "../Cordenação/Cordenacao";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";





export function ListaViagens() {
  const navigate = useNavigate()
  const [vigens, setViagens]=useState([])
  const[loading,setloading]=useState(false)

  

  useEffect(()=>{
    setloading(true)
    axios.
    get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips")
    .then((resposta)=>{
    setViagens(resposta.data.trips)
    setloading(false)
  })
    .catch((erro)=>{
      alert("Ocorreu um erro, tente novamente!")
      setloading(false)
    })
  },[]);
  
  function mostraViagens ( ) {
    const viagensMap =vigens.map((item)=>{
      
      return<Cardstyle key={item.id}>
        <div>Nome: {item.name}</div>
        <div>Descrição: {item.description}</div>
        <div>Planeta: {item.planet}</div>
        <div>Duração: {item.durationInDays}</div>
        <div>Data: {item.date}</div>
        <button onClick={()=>irParaFormularioViagem (navigate,item.id)}>candidatar</button>
        </Cardstyle>
      })
      return viagensMap
  }
    return <Appstyled >
      <Headercomp/>
      
      <CarddivStyle>
        {loading? "...Loading":mostraViagens()}
        </CarddivStyle>
        <Fottercomp/>
      </Appstyled>
    ;
  }
  
