const key = "d8939f898492c70ac214cca730b8b3ad";

function colocarDadosNaTela(dados) {
    console.log(dados);
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        if (dados.cod === "404") {
            alert("Cidade não encontrada!");
            return;
        }

        colocarDadosNaTela(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    if (cidade.trim() !== "") {
        buscarCidade(cidade);
    }
}

// Adiciona o evento de pressionar Enter
document.querySelector(".input-cidade").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        cliqueNoBotao();
    }
});
