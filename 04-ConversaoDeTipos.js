console.log("Conversão de Tipos");

console.log("idade" + 3); // aqui ele não tenta realizar a soma e sim concatenar.

// Tenta fazer operação matematica porem encontra uma string e retorna a NaN (Not an Number)
console.log("idade" - 2); 
console.log("idade" / 2);
console.log("idade" * 2);

//CONVERSÃO DE TIPOS: Para resolver problema da concatenação em JS foi criado essas duas funções.
console.log("Convertendo uma String em Inteiro")
console.log(parseInt("2") + 2); // convertendo texto em inteiro
console.log(parseFloat("2.5") + 2); // Convertendo texto em ponto flutuante
