//Calcular imposto de renda 15% de R$ 2.600,00 e  R$ 3.750 de 22.5%:

let Salario = 2599
let SalarioComDesconto = 0;
let Desconto = 0;

if(Salario >= 3750){
    Desconto = (Salario * 15) / 100;
    SalarioComDesconto = Salario - Desconto;
    console.log(" Seu salário de: "+Salario+" tem desconto de 22,5% de IR no valor de: "+Desconto+"\n Salário após desconto: "+ SalarioComDesconto);
}
else if(Salario >= 2600){
    Desconto = (Salario * 22.5) / 100;
    SalarioComDesconto = Salario - Desconto;
    console.log(" Seu salário de: "+Salario+" tem desconto de 15% de IR no valor de: "+Desconto+"\n Salário após desconto: "+ SalarioComDesconto);
}
else{
    console.log("Seu salário não tem descontos de IR: "+Salario);
}