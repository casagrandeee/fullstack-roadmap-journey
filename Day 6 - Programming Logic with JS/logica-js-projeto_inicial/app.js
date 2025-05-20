alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto =  parseInt(Match.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}!`);
    //se chute for igual, maior ou menor
    if (chute == numeroSecreto) {
        break;
    } else{ 
        if (numeroSecreto < chute) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
if (tentativas > 1){
    alert(`Isso aí! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
}else{
   alert(`Isso aí! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} tentativa.`);
}








