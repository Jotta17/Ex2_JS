/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

*/

let listStudents = [
    {
        name: 'Junior',
        n1: 7.5,
        n2: 8,
    },
    {
        name:'Sophie',
        n1: 5,
        n2: 2,
    },
    {
        name:'Epaminondas',
        n1: 7.3,
        n2: 9,
    },
    {
        name:'Rosana',
        n1: 8,
        n2: 3,
    },
]

function calculationAverage (n1, n2){
 let average = (n1 + n2)/2
 return average

}
for(student of listStudents){
    averageInd = calculationAverage(student.n1, student.n2)
    let approvedOrNot = averageInd < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : "Parabéns pela sua aprovação"

    alert(`A média de ${student.name} é ${averageInd}.
    ${approvedOrNot}`)
}



