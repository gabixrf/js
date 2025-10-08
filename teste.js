
let base= parseFloat(prompt("Digite o valor da base."))
let altura= parseFloat(prompt("Digite o valor da altura."))

area= altura*base
console.log("A área deste retângulo é"+ area)



let nota1= parseFloat(prompt("Digite a nota 1."));
let nota2= parseFloat(prompt("Digite a nota 2."));
let nota3= parseFloat(prompt("Digite a nota 3"));

nota= nota1+nota2+nota3;
media= nota/3;
if(media>=6){
    console.log("Você passou.");
} else {
    console.log("Você reprovou.");
}


let produto= 200.00;
let valorDecimal= parseFloat(produto)/100;
let cupom=false;

if (cupom==true){
    console.log(parseFloat(produto+valorDecimal));
} else{
    console.log("Você não possui cupom.");
}




let num= parseInt(prompt("Digite um número."));

if(num % 2 ===0 ){
    console.log("Esse número é par.");
} else{
    console.log("Esse número é ímpar.");
}




let idade= parseInt(prompt("Digite a idade da primeira pessoa."));
let idade2= parseInt(prompt("Digite a idade da segunda pessoa."));

if (idade>idade2) {
    console.log("A pessoa um é mais velha.");
} else if (idade<idade2){
    console.log("A pessoa dois é mais velha");
} else{
    console.log("Elas possuem a mesma idade.");
}



let usuario= prompt("Digite o nome de usuario.")
let senha= prompt(parseInt("Digite a sua senha."))

if (usuario=='admin' & senha=='1234'){
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}



let nota= parseFloat(prompt("Digite a nota do aluno."));
let faltas= parseFloat(prompt("Digite a quantidade de faltas do aluno."));


if (nota>=6 & faltas<5){
    console.log("O aluno está aprovado.");
}else {
    console.log("O aluno está reprovado.");
}





let salario= parseFloat(prompt("Digite o seu salario."));
let valorDecimal1= parseFloat (salario)/100;
let valorDecimal2= parseFloat ((salario)/100)*5;
let salario1= valorDecimal1 + salario;
let salario2= valorDecimal2 + salario;

if (salario>2000){
    console.log("O seu salario sera de" +salario1);
} else {
    console.log("O seu salario sera de" +salario2);
}


let money= parseFloat(prompt("Digite o quanto de dinheiro você tem."));
let produto1= parseFloat(prompt("Diga o valor de um produto"));
let troco= money-produto1;
let falta= produto1-money

    if (money>produto1){
        console.log("Você pode comprar o produto e sobrará um troco de", troco);
    } else if(money==produto1) {
        console.log("Você consegue comprar o produto e não irá sobrar troco.");
    } else{
        console.log("Você não tem dinheiro suficiente para comprar o produto, falta", falta);
    }




let a= 25;
        let b=4;
        let soma = a+b; 
        let subtracao = a-b; 
        let divisao = a/b; 
        let multiplicacao = a*b; 
        let resto = a%b; 

        console.log("Soma:", soma)
        console.log("Subtração:", subtracao)
        console.log("Divisão:", divisao)
        console.log("Multiplicação:", multiplicacao)
        console.log("Resto:", resto)
