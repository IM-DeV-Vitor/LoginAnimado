function enviar_dados() {
    console.log("Funcionou")
}

function Botao(){
    return (
        <button onClick={enviar_dados} className="btn">Enviar</button>
    )
}

export default Botao