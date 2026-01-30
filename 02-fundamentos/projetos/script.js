const nome = "Ludmila";
const idade = 20;
let universitaria = true;

console.log("Nome: " + nome);
console.log("idade: " + idade);
console.log("É universitaria? " + universitaria);

const maiorIdade = idade >= 18;
if (maiorIdade) {
    console.log(nome + " é maior de idade.");
} else {
    console.log(nome + " é menor de idade.");
}