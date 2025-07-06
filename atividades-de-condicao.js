// //questão 1
// let idade = 18;
// if(idade >= 18){
//     console.log("Maior de idade");

// }else{
//     console.log("Menor de idade");
// }

// questao 2

let numero = 3;

if(!numero || typeof numero != "number"){
    console.log ("Digite um numero válido");
    return;
}


if(numero > 0){
    console.log(`${numero} é positivo`);
}else if(numero < 0){
    console.log(`${numero} é negativo`);
}else{
    console.log(`é zero`);
}