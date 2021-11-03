const celulas = document.querySelectorAll(".celula")
let checarTurno = true
const jogadorX = "X"
const jogadorO = "O"
let jogando = true

const combinacoes = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula") && jogando == true) {
        jogar(event.target.id)
    }
})

document.getElementById("tituloVencedor").style.display = "none"

function jogar(id) {
    const celula = document.getElementById(id)
    turno = checarTurno ? jogadorX : jogadorO
    celula.textContent = turno
    celula.classList.remove("celula")
    celula.classList.add(turno)
    checarVencedor(turno)  

    if (turno == jogadorX) {
        document.getElementById("indicadorJogador").innerHTML = "<p>O</p>"
    } else {
        document.getElementById("indicadorJogador").innerHTML = "<p>X</p>"
    }

    document.getElementById("indicar")
}

function checarVencedor(turno) {
    const vencedor = combinacoes.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno)
        })
    })

    if (vencedor) {
        encerrarJogo(turno)
        jogando = false
    } else if (checarEmpate()) {
        encerrarJogo()
        jogando = false
    } else {
        checarTurno = !checarTurno
    }

}

function checarEmpate(){
    let x  = 0
    let o = 0

    for (index in celulas){

        if(!isNaN(index)){
            if(celulas[index].classList.contains(jogadorX)){
                x++
            }
    
            if(celulas[index].classList.contains(jogadorO)){
                o++
            }
        }

    }

    return x + o === 9 ? true : false
}

function encerrarJogo(vencedor = null){

    const telaEscura = document.getElementById("tela-escura")
    telaEscura.style.display = "block"

    document.getElementById("tituloVencedor").style.display = "flex"
    document.getElementById("tituloVencedor").style.justifyContent = "center"
    document.getElementById("tituloVencedor").style.alignContent = "center"
    document.getElementById("tituloVencedor").style.marginTop = "5px"

    // if (vencedor) {
    //     document.getElementById("resultadoVencedor").innerHTML = `Jogador ${vencedor}`

    //     document.getElementById("tituloIndicador").style.display = "none"
    //     document.getElementById("indicadorJogador").style.display = "none"

    // const telaEscura = document.getElementById("tela-escura")
    const h2 = document.createElement("h2")

    telaEscura.style.display = "block"
    telaEscura.appendChild(h2)

    if (vencedor) {
        document.getElementById("resultadoVencedor").innerHTML = `Jogador ${vencedor}`
        document.getElementById("tituloIndicador").style.display = "none"
        document.getElementById("indicadorJogador").style.display = "none"

        // h2.innerHTML = `Jogador ${vencedor}`
    } else {
        document.getElementById("resultadoVencedor").innerHTML = "Empate"
        document.getElementById("tituloIndicador").style.display = "none"
        document.getElementById("indicadorJogador").style.display = "none"

        // h2.innerHTML = "Empate"
    }

}

function resetar(){
    location.reload()
}

document.getElementById("botaoResetar").addEventListener("click", resetar)

