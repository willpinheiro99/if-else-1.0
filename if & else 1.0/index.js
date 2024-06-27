
let fome = prompt("Você está com fome? (sim/não)")
let dinheiro = prompt("Você tem dinheiro?  (sim/não)")
let aberto = prompt("O restaurante está aberto?  (sim/não)")


if (fome === "não" || dinheiro === "não") {
    console.log(prompt("Hoje a janta será em casa"));
}
else if (fome === "sim" && dinheiro === "sim" && aberto === "sim")
{
    console.log(prompt("Seja bem-vindo ao nosso restaurante. Aqui está o cardápio."))
}

else if (fome === "sim" && dinheiro === "sim" && aberto === "não")
    {
        console.log(prompt("Peça um delivery em outro restaurante."));
    } 

