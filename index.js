// Calculo aposentadoria
const Pessoa = {
    nome: 'Silvana',
    sexo: 'F',
    idade: 60,
    contribuicao: 25 
}

const tempoContrHomens = 35;
const tempoContrMulheres = 30;
const calculaAposentadoria = Pessoa.contribuicao+Pessoa.idade;

if(Pessoa.sexo==='F'){
    if(calculaAposentadoria >= 85 && Pessoa.contribuicao >= 30){
        console.log(`${Pessoa.nome}, você já pode se aposentar.`);
    } else {
        console.log(`${Pessoa.nome}, voce não pode se aposentar.`);
    }
} else {
    if(calculaAposentadoria >= 95 && Pessoa.contribuicao >= 35){
        console.log(`${Pessoa.nome}, voce já pode se aposentar`);
     } else {
         console.log(`${Pessoa.nome}, voce não pode se aposentar`);
     }
} 
