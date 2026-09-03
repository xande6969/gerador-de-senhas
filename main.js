const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

campoSenha.value = 'aqui vai ser a senha'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas = 'abcdefghilklmnopqrstuvwxyz'

let numero "123456789"

let simbolos "!@#$%&*"

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')


botoes[0].onclick = diminuir;

function diminuir(){
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha()
}

botoes[1].onclick = aumentar;

function aumentar(){
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
}
geraSenha()

function geraSenha(){
    let sennha = ""

    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * 26;
        numeroAleatorio = Math.floor(numeroAleatorio)
            senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha;
}