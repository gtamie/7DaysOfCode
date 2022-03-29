const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade?");
const email = prompt("Qual o seu email?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const mensagem = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`;
alert(mensagem);
const resposta1 = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (resposta1 == 1){
    const resposta2 = prompt(`Muito bom! Vamos aprender mais sobre ${linguagem}! Gostaria de inscrever-se na nossa newsletter? Responda com o número 1 para SIM ou 2 para NÃO`);
    if (resposta2 == 1){
        alert("Parabéns! Você está inscrite na nossa newsletter!");
    } else {
        alert("Você não está inscrite na nossa newsletter!");
    }
}
if (resposta1 == 2){
    const resposta2 = prompt(`Que pena! Mas vamos aprender mais sobre ${linguagem}! Gostaria de inscrever-se na nossa newsletter? Responda com o número 1 para SIM ou 2 para NÃO`);
    if (resposta2 == 1){
        alert("Parabéns! Você está inscrite na nossa newsletter!");
    } else {
        alert("Você não está inscrite na nossa newsletter!");
    }
}