import Inputs from "./Inputs"
import Botao from "./Botao"
import './App.css'
import codeImg from "../assets/code-img.png"


function App() {

  return (
    <div className="cadastro">
    <div className="imagem" id="imgCode" onClick={() => {
      let imagemAnimada = document.getElementById("imgCode")
      let infos = document.getElementById("infos")
      let textoBem = document.getElementById("bem")
      let textoVindo = document.getElementById("vindo")

      imagemAnimada.classList.add("animado")

      infos.style.display = "block"
      infos.classList.add("animacaoForm")
      
      setTimeout(() =>       
      {
      textoBem.classList.add("bemAnimado")
      textoVindo.classList.add("vindoAnimado")}, 1000
    )



    }}>      
        <h1 className="bem" id="bem">Bem</h1>
          <img src={codeImg} alt="ImagemCodigo" />
        <h1 className="vindo" id="vindo">Vindo</h1>

    </div>
      <div className="infos" id="infos">
        <h1>Cadastre-se</h1>
        <Inputs />
        <Botao />
      </div>
    </div>
  )
}

export default App