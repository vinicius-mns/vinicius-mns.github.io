const contador = document.querySelectorAll('.ball').length
let x = []
let acerto = document.querySelector('#acertos')

for(let index = 0; index < contador; index += 1) { // percorre o (numero de bolas com cores sorteadas)[6]
    let pickColor = '' //cria uma string vazia
    for(let index2 = 0; index2 < 3; index2 += 1){ // faz 3 peticoes (123,123,123)
        let randomColor = (Math.random()*255).toFixed(0) // gera um aleatorios de 1 a 255, sem casa decimal
        pickColor += randomColor // adiciona esses numeros em um array
        if (index2 === 0 || index2 === 1){ // adiciona virgula 
        pickColor += ', '
        }          
    }
    x.push(pickColor) // adiona em um array, cada string / retornando ["111,111,111", "222,222,222", "333,333,333", "444,444,444", "555,555,555" "666,666,666"]

    document.querySelectorAll('.ball')[index].style.backgroundColor = `rgb(${x[index]})` // adiociona a cor a cada bola
}

const resposta = `rgb(${x[(Math.random()*6).toFixed(0)]})`
document.querySelector('#rgb-color').innerText = resposta

let contadorDeAcertos = 0

cor.addEventListener('click', function (event) {
    

    if ( event.target.style.backgroundColor === resposta) {
        document.querySelector('#answer').innerText = 'Acertou!'
        document.querySelector('#answer').style.backgroundColor = 'rgba(57, 203, 60, 0.51)'
        contadorDeAcertos = + 1 + parseInt (localStorage['acertos'])
    }else{
        document.querySelector('#answer').innerText = 'Errou!'
        document.querySelector('#answer').style.backgroundColor = 'rgba(192, 54, 54, 0.689)'
        contadorDeAcertos = 0
    }

    acerto.innerText += ' ' + contadorDeAcertos
    localStorage.setItem('acertos',contadorDeAcertos)


    setTimeout(function(){  window.location.reload() }, 2000);
   
})

document.querySelector('#reset-game').addEventListener('click', function() {
    window.location.reload()
})

// Boa sorte pro meu eu do futuro explicar esse codgo, sao quase 2 da manha e eu to morrendo de sono

