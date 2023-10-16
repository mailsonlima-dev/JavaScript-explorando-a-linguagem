//Vendo como NodeJS mostra um erro de console com letra maiuscula
console.log("Trabalhando com variavéis")

//JavaScrip é case sensitive, teste com variavel com "i" maiusculo e menusculo
idade = 30
Idade = 40
console.log(idade)

//Declaração de variavel 3 tipos, mas temos mais 1 tipo

//Declara uma variavel tanto local como global
var Nome1 = "Mailson"

//Variavel local de escopo de bloco
let Nome2 = "Luziene"

//Declara uma constate de escopo de bloco
const Nome3 = "Lima"

//Variavel GLOBAL - Cuidado, gera aviso de advertência
Nome4 = "Oliveira"

//Variavél com aspas simples: identifica que é uma string 
let nome4 = 'Luziene'
console.log('Variável com aspas simples: '+nome4)

//Utilizando aspas simples com numero vira string o valor é concatenado
let valor1 = 5;
let valor2 = 5;
//mostrando variaveis com aspas simples
console.log('Valor de soma de '+valor1+' + '+valor2+' = '+valor1+valor2);
console.log("Valro de soma de "+valor1+" + "+valor2+" = "+parseInt(valor1+valor2,10));

let soma = valor1 + valor2
console.log(soma)