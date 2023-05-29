
function jokenpo_pedra() { 

    let computador = jogadaComputador();
    let pontosJogador  = 0; 
    let pontosMaquina = 0; 

    switch(computador) { 
        case "Pedra": 
            alert("Empate A maquina jogou " + computador);
            break; 
        case "Papel":
            alert("Você perdeu! A maquina jogou " + computador);
            pontosMaquina++; 
            break;
        case "Tesoura": 
            alert("Você ganhou! A maquina jogou " + computador);
            pontosJogador++; 
            break;       
    }
}

function jokenpo_papel() { 
    let computador = jogadaComputador();
    let pontosJogador  = 0; 
    let pontosMaquina = 0; 

    switch(computador) { 
        case "Papel": 
            alert("Empate! A maquina jogou " + computador);
            break; 
        case "Pedra":
            alert("Você ganhou! A maquina jogou " + computador);
            pontosJogador++;
            break;
        case "Tesoura": 
            alert("Você perdeu! A maquina jogou " + computador);
            pontosMaquina++; 
            break;       
    }
}

function jokenpo_tesoura() { 

    let computador = jogadaComputador();
    let pontosJogador  = 0; 
    let pontosMaquina = 0; 

    switch(computador) { 
        case "Tesoura": 
            alert("Empate A maquina jogou " + computador);
            break; 
        case "Pedra":
            alert("Você perdeu! A maquina jogou " + computador);
            pontosMaquina++; 
            break;
        case "Papel": 
            alert("Você ganhou! A maquina jogou " + computador);
            pontosJogador++;
            break;       
    }
}
function jogadaComputador() { 
    let jogadas = ["Pedra","Papel","Tesoura"];
    var randomIndex = Math.floor(Math.random() * jogadas.length);
    return jogadas[randomIndex];
}