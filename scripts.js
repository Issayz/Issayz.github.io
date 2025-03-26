const key = "d8939f898492c70ac214cca730b8b3ad"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)  
        .then(resposta => resposta.json()) // Apenas corrigi a interpolação da string  
        
    colocarDadosNaTela(dados)
}

function cliqueNoBotao () {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}
