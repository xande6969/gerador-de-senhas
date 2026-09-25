const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

const forcaSenha = document.querySelector(".forca")
forcaSenha.classList.add('media')

//forcaSenha.classList.add('media')

campoSenha.value = 'aqui vai ser a senha'

let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let letrasMinusculas = 'abcdefghilklmnopqrstuvwxyz'

let numero ="123456789"

let simbolos = "!@#$%&*"

let tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

//check box [37]= maisculas
//check box [41]=simbolos
//numeros [45] numeros
// minusculas


const botoes = document.querySelectorAll('.parametro-senha__botao')


botoes[0].onclick = diminuir;

function diminuir(){

  if(tamanhoSenha > 0){
     tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
     geraSenha()
  }



}

botoes[1].onclick = aumentar;

function aumentar(){
    if (tamanhoSenha < 20) {
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


}


function geraSenha(){
    
    let alfabeto = ''

    
    if(checkbox[0].checked){
       alfabeto = alfabeto + letrasMaiusculas
    }
    
     if(checkbox[1].checked){
       alfabeto = alfabeto + letrasMinusculas
    }
    
     if(checkbox[2].checked){
       alfabeto = alfabeto + numero
    }
    
     if(checkbox[3].checked){
       alfabeto = alfabeto + simbolos
    }


    let senha = ''

    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio)
            senha = senha + alfabeto[numeroAleatorio]
    }
    campoSenha.value = senha;
    classificarSenha()
}


//função para classificar a senha
function classificarSenha(){

    forcaSenha.classList.remove('forte', 'media', 'fraca')

    if(tamanhoSenha > 11){
        forcaSenha.classList.add('forte')
        }else if (tamanhoSenha < 7){
            forcaSenha.classList.add('fraca')
        }else{
            forcaSenha.classList.add('media')
        }
}