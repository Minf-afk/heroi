let nomeHeroi = "Icaro";
let experienciaHeroi = 100000;
let rankHeroi = ""; 

if (experienciaHeroi < 1000) {
    rankHeroi = "Ferro";
} else if (experienciaHeroi <= 2000) {
    rankHeroi = "Bronze";
} else if (experienciaHeroi <= 5000) {
    rankHeroi = "Prata";
} else if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000) {
    rankHeroi = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    rankHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    rankHeroi = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    rankHeroi = "Imortal";
} else if (experienciaHeroi >= 10001) {
    rankHeroi = "Radiante";
}

console.log("O herói " + nomeHeroi + " é do rank " + rankHeroi);