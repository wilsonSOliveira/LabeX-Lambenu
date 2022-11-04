export const irParaHome = (navigate) =>{
navigate("/")
}

export const voltarPagina = (navigate) =>{
    navigate(-1)
}

export const irParaListaViagens =(navigate)=>{
    navigate("/listaViagens")
}

export const irParaDetalhesViagem =(navigate,id)=>{
    navigate(`/detalheViagem/${id}`)
}
export const irParaCriarViagem =(navigate)=>{
    navigate("/criarViagem")
}
export const irParaAdminLogin =(navigate)=>{
    navigate("/adminLogin")
}
export const irParaAdminHome =(navigate)=>{
    navigate("/adminHome")
}
export const irParaFormularioViagem =(navigate,id)=>{
    navigate(`/formularioViagem/${id}`)
}