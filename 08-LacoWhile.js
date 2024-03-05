//Vendas de passagem utilizando
//Array, IF, else if, brank e do while

let EstadosDisnponiveis = new Array(
    "Pará",
    "Tocantins",
    "Maranhão",
    "Amazonas",
);

let Passagem = "Maranhão";
let Contador = 0;


console.log(EstadosDisnponiveis.length);

//Laço varrendo o array e imprimindo os Estados
while(Contador <= EstadosDisnponiveis.length){
    
    if(Passagem == EstadosDisnponiveis[Contador]){
        console.log("Destino: " + EstadosDisnponiveis[Contador] + " foi reservado para compra");
        EstadosDisnponiveis.splice(EstadosDisnponiveis[Contador],1);
        break;
    }
    Contador++;
    //length: mostra tamanho do array
};
console.log("Passagens disponíveis:");
console.log(EstadosDisnponiveis);
