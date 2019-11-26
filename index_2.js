// Objetos


const alunosTurmaA = [
    {
        nome: "Simão",
        nota: 9.8
    },
    {
        nome: "Davenir",
        nota: 6
    },
    {
        nome: "Fernando",
        nota: 10
    },
    {
        nome: "Bariccelo",
        nota: 10
    }
]

const alunosTurmaB = [
    {
        nome: "Rodolfo",
        nota: 5
    },
    {
        nome: "David",
        nota: 8
    },
    {
        nome: "Carlos",
        nota: 7
    }
]

function calculaMedia(alunos){
    let soma = 0;
    for ( let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota;
    }
    
     const media = soma / alunos.length;
     return media;
}

const media1 = calculaMedia(alunosTurmaA)
const media2 = calculaMedia(alunosTurmaB)

function enviaMessage(media, turma){
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
}

enviaMessage(media1, "Turma A");
enviaMessage(media2, "Turma B");
