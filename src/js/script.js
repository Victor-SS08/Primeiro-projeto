// declaracoes e variaveis
//var, let e const
// const é um valor constante, nao pode ser alterado
var nome = "fiap";
console.log(nome);

var nome ="teste";
console.log(nome);

if(true){
 let apelido = "fiapinho";
 console.log(apelido)
}
 
 const taxajuros= 0.05;
 console.log(taxajuros);
 //taxajuros=1.5;
var exemplo = "ola-dev";
console.log(typeof exemplo)
let exemplo1= "ola-dev-let";
console.log(exemplo1)
const exemplo2="ola-dev-const";
console.log(exemplo2)
let exemplo3=10;
console.log(exemplo3);
let exemplo4= true
console.log(typeof exemplo4);
let exemplo5= {nome1:"teste"};
console.log(typeof exemplo5)
let exemplo6=["Java","C#","PHP"];
console.log(exemplo6)
//valor undefined
let exemplo7;
console.log(exemplo7)
let exepmlo8= null;
console.log(exepmlo8)
// Operadores aritmeticos
const valor1= 10;
const valor2= 20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);
//operadores logicos
// = atribuicao
// == comparação
// === valor e tipo (estritamente igual)
// && = E (todas condicoes tem q ser verdadeira)
// || = OU (uma das condicoes tem q ser verdadeira)
console.log(valor1 < valor2);
console.log(valor1 > 10 || valor2  < 10);
console.log(valor1 == valor2);
console.log(valor1 === valor2);
//exercicio 1
const p = 20;
const v = 10;
console.log(p);
console.log(v);
const valorfinal = (p - v);
console.log("valor final =", valorfinal);
//Crie uma condição que verifique se o valor de 
//a é estritamente igual a 20 e se b é maior ou igual a 10.
//O console deve retornar true
let a = 20;
let b = 20;
let compare = (a === 20 && b >= 10);
console.log(compare)
//Verificação de Segurança (Login e Token)
//No banco, para autorizar uma transação, precisamos que o usuário esteja logado e que o token de segurança seja válido.
var user_login = true
var user_pass = true
if (user_login && user_pass == true){
    console.log("transação autorizada")

};
//forma lat
const usuario_logado=20;
const tempo_token=10;

const transacao= (usuario_logado ===20 && tempo_token >= 10);
console.log("transação autorizada", transacao);
