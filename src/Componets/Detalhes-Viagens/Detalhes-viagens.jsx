import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Appstyled, CarddivStyle, Cardstyle } from "../../Styled";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";



export function DetalhesViagem() {
  const navigate = useNavigate()
  const pathParams=useParams()
  const [trip,setTrip]=useState([])
  const[loading,setloading]=useState(false)

 useEffect(()=>{
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trip/${pathParams.id}`,{
      headers: {
        auth: localStorage.getItem("token")
  }
}).then((resposta)=>{
  setTrip(resposta.data.trip)
})
.catch((error)=>{
  alert("Ocorreu um erro, tente novamente")
})
  },[escolheCandidato])
  
  function escolheCandidato (id,decisao) {
    setloading(true)
    const body={
      approve:decisao
    }
    axios
    .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/trips/${pathParams.id}/candidates/${id}/decide`,body,{
      headers:{
        auth:localStorage.getItem("token")
      }
    }).then((resposta)=>{
      alert("Candidato reprovado com sucesso!")
      setloading(false)
    }).catch((error)=>{
      setloading(false)
      alert("Ocorreu um erro, tente novamente")
    })

  }

  function mapTrip () {
    const tripMap = trip.candidates && trip.candidates.map((item)=>{
      const aprovar=true
      const reprovar=false
      return (<Cardstyle>
          <p>Nome: {item.name}</p>
          <p>Idade: {item.age}</p>
          <p>Profissão: {item.profession}</p>
          <p>País: {item.country}</p>
          <p>Mensagem: {item.applicationText}</p>
          <button onClick={()=>escolheCandidato(item.id,aprovar)}>aprovar candidato</button>
          <p></p>
          <button onClick={()=>escolheCandidato(item.id,reprovar)}>reprovar candidato</button>
          </Cardstyle>)
        })
     
    return tripMap
  }
  
    return (
      <Appstyled >
        <Headercomp/>
        {loading?"...Loading":<CarddivStyle>
        Viagem: {trip.name}
        {mapTrip()}
        </CarddivStyle>}
        <Fottercomp/>
        
      </Appstyled>
    );
  }
  
