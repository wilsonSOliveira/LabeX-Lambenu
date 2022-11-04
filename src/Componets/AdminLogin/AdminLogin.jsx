import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Appstyled, Loginstyled } from "../../Styled";
import { irParaAdminHome } from "../Cordenação/Cordenacao";
import { Fottercomp } from "../Home-Pagina/Fotter-comp";
import { Headercomp } from "../Home-Pagina/Header-comp";




export function AdminLogin() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const[loading,setloading]=useState(false)

  const pegaUsuario = (event) => {
    setUsuario(event.target.value)
  }

  const pegaSenha = (event) => {
    setSenha(event.target.value)
  }

  const pegaToken =(event)=>{
    event.preventDefault()
    setloading(true)
    const body={
      email:usuario,
      password:senha
    }
    axios.
    post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/wilson-santos-alves/login",body)
    .then((resposta)=>{
      setloading(false)
      localStorage.setItem("token",resposta.data.token)
      irParaAdminHome(navigate)
    })
    .catch((error)=>{
      setloading(false)
      alert("Ocorreu um erro, verique seu email/senha e tente novamente")
    })
      
    
  }


    return (
      <Appstyled >
        <Headercomp/>
        {loading?"...Loading":<Loginstyled onSubmit={pegaToken}>
          <h3>Email:</h3>
        <input
        value={usuario} 
        onChange={pegaUsuario} 
        placeholder="usuario" 
        type={"email"}
        required 
        title="Email invalido"
        />
        <h3>Senha:</h3>
        <input  
        required 
        value={senha}
        onChange={pegaSenha} 
        placeholder="senha" 
        type={"password"}
        pattern={"^.{3,}"} 
        title="A senha deve ter o minimo de 3 caracteres"
        />
        <p></p>
        <button>enviar</button>
        </Loginstyled>}
        <Fottercomp/>
        </Appstyled>
    );
  }

