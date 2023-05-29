# front-ii-digital-house


alert("Você ganhou!" + "Você tem" + VitoriasPlayer + "pontos"); 


case JogadaPlayer == "tesoura" && jogadaMaquina == "papel": 
            VitoriasPlayer++;
            alert("A máquina jogou " + jogadaMaquina + "\n" + " Você ganhou!" + "Você tem" + VitoriasPlayer + " pontos");  
            VitoriasPlayer == 2 ? alert("Você alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
            break
        case jogadaMaquina == "tesoura" && JogadaPlayer == "papel": 
            VitoriasMaquina++;
            alert("Você perdeu!"); 
            VitoriasMaquina == 2 ? alert("A máquina alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
            break
        case JogadaPlayer == "papel" && jogadaMaquina == "pedra": 
            VitoriasPlayer++;
            alert("A máquina jogou " + jogadaMaquina + "\n" + " Você ganhou!" + "Você tem" + VitoriasPlayer + " pontos");   
            VitoriasPlayer == 2 ? alert("Você alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
            break 
        case JogadaPlayer == "pedra" && jogadaMaquina == "papel":
            VitoriasMaquina++;
            alert("Você perdeu!"); 
            VitoriasPlayer == 2 ? alert("Você alcançou duas vitorias e é o vencedor") : alert("Próxima partida!");
            break 