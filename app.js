alert("Seja bem vindo ao jogo de adivinhar o número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1 )
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("Chute um número de 1 a 100");

  if (chute == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > chute) {
      alert("Seu chute é menor do que o número secreto");
    } else {
      alert("Seu chute é maior do que o número secreto");
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Isso!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);
