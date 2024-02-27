console.log('Atribuição de variaveis');

var Nome = "Mailson";
const SobreNome = "Lima";

//Formas de imprimir no console log
console.log("Meu nome: "+ Nome +" "+ SobreNome);
console.log('Meu nome: '+ Nome +" "+ SobreNome);

//Outra forma imprimir
console.log(`Meu nome: ${Nome} ${SobreNome}`);

//const NomeCompleto = Nome + SobreNome;
//console.log(`Meu nome: ${NomeCompleto}`);

//da erro porque já foi declardo como const
console.log("Tentando sobrescrever variavel----");
var Nome2 = Nome + SobreNome; //Altere as variaveis entre let e var veja erros dados
console.log(`Meu nome: ${Nome2}`);

let Idade; //declarando variaveis
Idade = 35; // atribuindo valor e declarando como como global
Idade = Idade + 1;
console.log(`Idade: ${Idade}`);
