const celulas = document.querySelectorAll(".celula")
let fimDoJogo = false
let jogando = true

const jogadorX = "X"
const jogadorO = "O"
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

let seletorDificuldade = document.getElementById("dificuldade")

let gameMode = seletorDificuldade.options[seletorDificuldade.selectedIndex].value


seletorDificuldade.addEventListener("change", () => {

    gameMode = seletorDificuldade.options[seletorDificuldade.selectedIndex].value
    
})

document.addEventListener("click", (event) => {
    if (event.target.matches(".celula") && jogando == true) {
        jogar(event.target.id, jogadorX)
        setTimeout(() => {
            switch (gameMode) {
                case 'Fácil':
                    facil()
                    break
                case 'Médio':
                    medio(jogadorO)
                    break
                default:
                    break
            }
        } , 500)
    }
})

function facil() {
    const posicoesDisponiveis = []

    for (index in celulas) {

        if (!isNaN(index)) {

            if (!celulas[index].classList.contains("X") && !celulas[index].classList.contains("O")) {
                posicoesDisponiveis.push(index)
            }

        }

    }
    const posicaoAleatoria = Math.floor(Math.random() * posicoesDisponiveis.length)

    if (!fimDoJogo) {
        jogar(posicoesDisponiveis[posicaoAleatoria], jogadorO)
    }

}

function medio(turno){

    if (document.getElementById("2").classList == "celula" && jogando == true) {
        document.getElementById("2").classList.remove("celula")
        document.getElementById("2").classList.add("O")
        document.getElementById("2").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    } else if(document.getElementById("6").classList == "celula" && jogando == true){
        document.getElementById("6").classList.remove("celula")
        document.getElementById("6").classList.add("O")
        document.getElementById("6").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    } else if(document.getElementById("8").classList == "celula" && jogando == true){
        document.getElementById("8").classList.remove("celula")
        document.getElementById("8").classList.add("O")
        document.getElementById("8").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    } else if(document.getElementById("7").classList == "celula" && jogando == true){
        document.getElementById("7").classList.remove("celula")
        document.getElementById("7").classList.add("O")
        document.getElementById("7").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    }else if(document.getElementById("4").classList == "celula" && jogando == true){
        document.getElementById("4").classList.remove("celula")
        document.getElementById("4").classList.add("O")
        document.getElementById("4").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    }else if(document.getElementById("0").classList == "celula" && jogando == true){
        document.getElementById("0").classList.remove("celula")
        document.getElementById("0").classList.add("O")
        document.getElementById("0").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    }else if(document.getElementById("5").classList == "celula" && jogando == true){
        document.getElementById("5").classList.remove("celula")
        document.getElementById("5").classList.add("O")
        document.getElementById("5").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    } else if(document.getElementById("1").classList == "celula" && jogando == true){
        document.getElementById("1").classList.remove("celula")
        document.getElementById("1").classList.add("O")
        document.getElementById("1").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    } else if(document.getElementById("3").classList == "celula" && jogando == true){
        document.getElementById("3").classList.remove("celula")
        document.getElementById("3").classList.add("O")
        document.getElementById("3").textContent = "O"

        checarVencedor(turno)
        checarEmpate(turno)
    }

}

function jogar(id, turno) {
    const celula = document.getElementById(id)
    celula.textContent = turno
    celula.classList.remove("celula")
    celula.classList.add(turno)
    checarVencedor(turno)
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
    } 
}

function checarEmpate() {
    let x = 0
    let o = 0

    for (index in celulas) {

        if (!isNaN(index)) {

            if (celulas[index].classList.contains(jogadorX)) {
                x++
            }

            if (celulas[index].classList.contains(jogadorO)) {
                o++
            }

        }

    }
    return x + o === 9 ? true : false
}

function encerrarJogo(vencedor = null) {
    fimDoJogo = true
    
    const telaEscura = document.getElementById("tela-escura")
    const h2 = document.createElement("h2")

    telaEscura.style.display = "block"
    telaEscura.appendChild(h2)

    if (vencedor) {
        h2.innerHTML = `Jogador ${vencedor}`
    } else {
        h2.innerHTML = "Empate"
    }

    jogando = false

}

function resetar() {
    location.reload()
}

document.getElementById("botaoResetar").addEventListener("click", resetar)