// // declaracoes e variaveis
// //var, let e const
// // const é um valor constante, nao pode ser alterado
// var nome = "fiap";
// console.log(nome);

// var nome ="teste";
// console.log(nome);

// if(true){
//  let apelido = "fiapinho";
//  console.log(apelido)
// }
 
//  const taxajuros= 0.05;
//  console.log(taxajuros);
//  //taxajuros=1.5;
// var exemplo = "ola-dev";
// console.log(typeof exemplo)
// let exemplo1= "ola-dev-let";
// console.log(exemplo1)
// const exemplo2="ola-dev-const";
// console.log(exemplo2)
// let exemplo3=10;
// console.log(exemplo3);
// let exemplo4= true
// console.log(typeof exemplo4);
// let exemplo5= {nome1:"teste"};
// console.log(typeof exemplo5)
// let exemplo6=["Java","C#","PHP"];
// console.log(exemplo6)
// //valor undefined
// let exemplo7;
// console.log(exemplo7)
// let exepmlo8= null;
// console.log(exepmlo8)
// // Operadores aritmeticos
// const valor1= 10;
// const valor2= 20;

// console.log(valor1 + valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);
// console.log(valor1 / valor2);
// //operadores logicos
// // = atribuicao
// // == comparação
// // === valor e tipo (estritamente igual)
// // && = E (todas condicoes tem q ser verdadeira)
// // || = OU (uma das condicoes tem q ser verdadeira)
// console.log(valor1 < valor2);
// console.log(valor1 > 10 || valor2  < 10);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);
// //exercicio 1
// const p = 20;
// const v = 10;
// console.log(p);
// console.log(v);
// const valorfinal = (p - v);
// console.log("valor final =", valorfinal);
// //Crie uma condição que verifique se o valor de 
// //a é estritamente igual a 20 e se b é maior ou igual a 10.
// //O console deve retornar true
// let a = 20;
// let b = 20;
// let compare = (a === 20 && b >= 10);
// console.log(compare)
// //Verificação de Segurança (Login e Token)
// //No banco, para autorizar uma transação, precisamos que o usuário esteja logado e que o token de segurança seja válido.
// var user_login = true
// var user_pass = true
// if (user_login && user_pass == true){
//     console.log("transação autorizada")

// };
// //forma lat
// const usuario_logado=20;
// const tempo_token=10;

// const transacao= (usuario_logado ===20 && tempo_token >= 10);
// console.log("transação autorizada", transacao);



//estrutura condicional

//if

if(true){
console.log("verdadeiro")
}
let nome = "fiap"
if(nome == "fiap"){
    console.log('correto')
}
// if/else

let nome1 = "fiap"
if (nome1 == 'fiap'){
    console.log('nome correto parabens otario')
} else{
    console.log('nome incorreto')
}
//if encadeado/ aninhado
let age = 59;

if (age <= 13){
    console.log('é de menor ainda mlk')
} else if (age>13 && age <=18){
console.log('é um adolescente q n toma banho')
} else if (age >18 && age <=59){
    console.log('é um adulto que nao e tao bom assim, e um fracassado')
}else{
    console.log('é um idoso, ja ta na hora ne seu velho caquetico')
}

//switch case
let pratos = 'salada';
switch(pratos){
     case "macarrao":
        console.log('a melhor massa fdps')
        break;
     case 'salada':
        console.log('odeio affs rs jurrooooooo')
        break;
     case 'lasanha':
        console.log('segunda. feira.')
        break;
     default:
        console.log ('n tem nd desses bagulho de loko aq mlk')
}

// ternario
let valor = 100;
let resultado = valor ==100 ? "valor certo": "valor errado pobre nojento"
console.log(resultado)
// if é ?, : é else
 let user="dev"
 let logado= user =='dev'? 'usuario logado': 'usuario deslogado'
 console.log(logado)

 //estrutura de repeticao
 // o laco de repeticao e usado quando
 //sabemos quantas vezes o codigo vai ser executado
 for(let i=1; i<=5;i++){
    console.log('valor',i);
 }

 const linguagens= ['java', 'phyton', 'C#','php'];
 for(let i = 0;i<linguagens.length;i++){
    console.log('Linguagem', i+1,":",linguagens[i])
 }
const techs = ['JS','HTML', 'CSS'];

for(let tec of techs){
    console.log('Estudando:', tec)
}
//com objetos
const carros= {marca:'Volks', modelo:'fusca', ano:1980}
for(let dados in carros){
    console.log(dados,':',carros[dados])
}
//while - usamos quando nao sabemos a qntdade de vezes que o codigo sera executado
let num=1;
while(num <=10){
    console.log('contagem', num);
    num++
}
//declarando variavel indefinida
let num1;
//enqt numero nao for 0 ele mantem o codigo executando
while(num !== '0'){
    num = prompt('digite um numero ou 0 para sair:')
    console.log('voce digitou', num)
}
