console.log("Trabalhando com Condicionais\n");

//Criando um Array com destinos disponíveis para viagem

const Destinos = new Array(
    "São Paulo",
    "Brasilia",
    "Rio de Janeiro",
    "Pará"
);

//Mostrando os destinos possívesi para cliente
console.log("Destinos possiveis: ");
console.log(Destinos);

const IdadePessoa1 = 15;
const EstarAcopanhado = true;

//Condiconal IF para ver se pessoal tem mais de 18 anos e retirar um destino disponível e alocar para cliente
if (IdadePessoa1 >= 18) {

    console.log("\n Você é maior de idade pode realizar compra");
    Destinos.splice(3, 1);
}
else if (EstarAcopanhado) {

        console.log("\n Você é menor de idade porem estar acompanado pode comprar");
        Destinos.splice(3, 1);
}
else {
    console.log("\n Você é menor de idade não pode comprar uma passagem");
};

//Mostar destinos disponíveis após compra ou não
console.log('\n Destinos Disponíves: ');
console.log(Destinos);