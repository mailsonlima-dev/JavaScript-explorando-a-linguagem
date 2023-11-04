console.log(`Trabalhando com Listas`);

// Nome de Estados da federação Brasileira
// trabalhar metodo sem listas como exemplo

//Declarando os Estados
const SaoPaulo = `São Paulo`;
const Para = `Pará`;
const Maranhao = `Maranhão`;

//Imprimindo os Estados
console.log(`Destinos possíveis:`);
console.log(SaoPaulo, Para, Maranhao); //pode separar as variaveis com virgula

// Criando uma lista array
console.log(`Criando lista com Array`);

//Declarando Array e atribuindo valores
const ListaDeDestinos = new Array(
    `São Paulo`,
    `pará`,
    `Maranhão`
);

console.log(`Lista de Destinos com Array:`);
console.log(ListaDeDestinos); //imprimindo o Array

//Adicionando itens em um Array após criado
ListaDeDestinos.push(`Tocantins`);

console.log(ListaDeDestinos); //Imprimindo lista de destinos atualizada

//Tentando sobrescrever o Array lista com número
//ListaDeDestinos = 2; //Não é possível sobrescrever devido mesmo ser tipo const.

//Removendo itens de uma lista
ListaDeDestinos.splice(1,1); //removendo splice(possição, quantidade iten)
console.log(ListaDeDestinos);

ListaDeDestinos.pop(2); //remover a possição do tem 
console.log(ListaDeDestinos);

ListaDeDestinos.pop(); //se não passado valor remove ultimo item 
console.log(ListaDeDestinos);