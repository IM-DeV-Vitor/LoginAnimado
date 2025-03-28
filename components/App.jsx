import Inputs from "./Inputs"
import Botao from "./Botao"
import './App.css'
import codeImg from "../../../Assets/code-img.png"


function App() {

  return (
    <div className="cadastro">
    <div className="imagem" id="imgCode" onClick={() => {
      let imagemAnimada = document.getElementById("imgCode")
      let infos = document.getElementById("infos")
      let textoBem = document.getElementById("bem")
      let textoVindo = document.getElementById("vindo")

      imagemAnimada.classList.add("animado")

      infos.style.display = "block";
      infos.classList.add("animacaoForm")



      textoBem.classList.add("bemAnimado")
      textoVindo.classList.add("vindoAnimado")
    }}>      
        <h2 className="bem" id="bem">Bem</h2>
          <img src={codeImg} alt="ImagemCodigo" />
        <h2 className="vindo" id="vindo">Vindo</h2>

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