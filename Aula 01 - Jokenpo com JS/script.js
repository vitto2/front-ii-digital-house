let VitoriasPlayer = 0; 
let VitoriasMaquina = 0; 

function jogadaComputador() { 
    let jogadas = ["pedra","papel","tesoura"];
    var randomIndex = Math.floor(Math.random() * jogadas.length);
    return jogadas[randomIndex];
}



while(VitoriasPlayer || VitoriasMaquina != 2) { 

    let jogadaMaquina = jogadaComputador(); 
    let JogadaPlayer = prompt("Pedra, Papel ou Tesoura?"); 

    if(JogadaPlayer == "pedra" && jogadaMaquina == "tesoura") { 
        VitoriasPlayer++; 
        alert("A máquina jogou " + jogadaMaquina + "\n" + " Você ganhou!" + "Você tem" + VitoriasPlayer + " pontos");  
        VitoriasPlayer == 2 ? alert("Você alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    } else if(JogadaPlayer == "tesoura" && jogadaMaquina == "pedra"){ 
        VitoriasMaquina++;
        alert("A máquina jogou " + jogadaMaquina +" Você perdeu!" + "tem" + VitoriasMaquina + " pontos"); 
        VitoriasMaquina == 2 ? alert("A máquina alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    } else if(JogadaPlayer == "tesoura" && jogadaMaquina == "papel"){ 
        VitoriasPlayer++; 
        alert("A máquina jogou " + jogadaMaquina + "\n" + " Você ganhou!" + "Você tem" + VitoriasPlayer + " pontos");  
        VitoriasPlayer == 2 ? alert("Você alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    } else if(JogadaPlayer == "papel" && jogadaMaquina == "tesoura") { 
        VitoriasMaquina++;
        alert("A máquina jogou " + jogadaMaquina +" Você perdeu!" + "tem" + VitoriasMaquina + " pontos"); 
        VitoriasMaquina == 2 ? alert("A máquina alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    } else if(JogadaPlayer == "papel" && jogadaMaquina == "pedra") { 
        VitoriasPlayer++; 
        alert("A máquina jogou " + jogadaMaquina + "\n" + " Você ganhou!" + "Você tem" + VitoriasPlayer + " pontos");  
        VitoriasPlayer == 2 ? alert("Você alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    } else if(JogadaPlayer == "pedra" && jogadaMaquina == "papel") { 
        VitoriasMaquina++;
        alert("A máquina jogou " + jogadaMaquina +" Você perdeu!" + "tem" + VitoriasMaquina + " pontos"); 
        VitoriasMaquina == 2 ? alert("A máquina alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    }else if(JogadaPlayer == jogadaMaquina) { 
        alert("Vocês empataram!"); 
        VitoriasMaquina == 2 ? alert("A máquina alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
    }

    if(VitoriasMaquina == 2 || VitoriasPlayer == 2) { 
        VitoriasPlayer = 0; 
        VitoriasMaquina = 0; 
    }
}

