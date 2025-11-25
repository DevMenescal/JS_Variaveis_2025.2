// CRIAÇÃO DE VAIÁVEIS

// 1 - VARIÁVEIS

// Variáveis do tipo let: Recebe um valor mutável, ou seja, poder ser mudado no código posteriormente.

let primeiroNome = "Gustavo"

// console.log(primeiroNome);

primeiroNome = "Eduardo"

console.log(primeiroNome);

// Variáveis do tipo const: Recebe um valor imutável, ou seja, não poder ser mudado o código posteriormente.

const idade = 43

console.log(idade);

// idade = 44, ao tentar alterar o valor de uma variável constante o código quebra, com erro.

console.log(typeof primeiroNome);

console.log(typeof idade);

// Ao nomear variáveis, lembre-se: NÃO é permitido iniciar o nome de uma variável com NÚMEROS OU CARACTERES ESPECIAIS.

// EXEMPLOS:

// let 2teste = "inválido"

// let @teste = "inválido"

// Como toda boa regra a mesma possuí exceção: Os únicos caracteres que podemos utilizar antes das variáveis são:
// underline: _
// cifrão: $

let _teste = "válido"

let $teste = "válido"

console.log(_teste);
console.log($teste);

// DICA: Para nomear variáveis, é aconselhado utilizar o modelo "Camel Case" ex.:

let nomeFulano = "Fulano"

const anoNascimento = "1982"

const nomeCompleto = "Gustavo Menescal"

console.log(nomeFulano, anoNascimento, nomeCompleto);

// EMPTY VALUES

/* 
* Temos duas palavras reservadas, que pertecem a estre grupo de dados: undefined e null.
* Undefined é geralmente visto quando utilizamos um código que ainda não foi definido.
* Já o null, costuma a ser imposto pelos programadores para determinar que ainda não há um valor. (valor nulo)
*/

// DECLARANDO VARIÁVEIS COM EMPTY VALUES

let variavelNull = null // atribuindo o valor null para esta variavel.

let variavelQualquer // mão foi atibuido valor para esta variável.

console.log(variavelNull);

console.log(variavelQualquer);


// EXEMPLOS DE USO DE VARIÁVEIS

// 1 - CONCATENAÇÃO COM STRINGS

let nomezito = "Severino Aurélio"

let idadezita = 78

let gostaDeProgramacao = true

let filmeFavorito = "Emanuelle"

let gameFavorito = "Dominó com os parças"

console.log("O Sr.: " + nomezito + " com a idade de: " + idadezita + " gosta de programação? " + gostaDeProgramacao + " , diz que seu filme favorito é: " + filmeFavorito + " e seu jogo favorito é: " + gameFavorito + ".");

// 2 - OPERAÇÕES ARITMÉTICAS COM AS VARIÁVEIS

let x = 20 

let y = 30

let soma = x + y

console.log("O resultado da soma entre as variáveis x e y é: " + soma);

let subtracao = y - x

console.log(subtracao);

let mutiplicacao = x * y

console.log(mutiplicacao);

let divisao = y / x

console.log(divisao);


// 3- COMPARANDO VARIÁVEIS

x = 5
y = 10

console.log(x < y);
console.log(x === y);
console.log(x !== y);


// INTERPOLAÇÃO (TEMPLATE STRINGS)
/*
* A interpolação é um recurso semelhante a concatenação;
* Mas nos permite escrever tudo na mesma string;
* Para funcionar, tudo deve ser escrito entre crases ``.
* Podemos executar o código JS com ${algum código}.
*/

// EXEMPLO 01

let produto = "Maçãs"
let quantidade = 10
let precoUnitario = 2.5
let  total = quantidade * precoUnitario

// Ao invés disso (Concatenação):

console.log("Você comprou: " + quantidade + " " + produto + " por " + total + " reais.");

// Use isso (Interpolação):

console.log(`Você comprou: ${quantidade} ${produto} por ${total} reais.`);


// EXEMPLO 02

const animal1 = "gatos"

const animal2 = "cachorros"

let qtdGatos = 4

let qtdCachorros = 5

let totalAnimais = qtdGatos + qtdCachorros

let frase = `Minha vozinha caquética prefere ${animal1}, do que ${animal2}, porém ela é uma acumuladoras. Possuí ${qtdGatos} gatos e ${qtdCachorros} cachorros. No total, são: ${totalAnimais} bichos.`

console.log(frase);

// EXEMPLO 3

// let estudarJS = window.prompt("E aí feio, como é estudar JS?")

// window.alert(`O resultado da sua resposta é: ${estudarJS}`)

// CONVERTENDO VALORES DE UMA VARIÁVEL

// DE STRING PARA NÚMEROS

// Para número inteiros utilizamos o ParseInt()
// (*Dica) Quando aparece na cor azul, é numero. Já a coir branca é string. (NO CONSOLE)

let stringNumero = "42"
let numero  = parseInt(stringNumero)

console.log(stringNumero);
console.log(numero);

// Usando o parseFloat(), para números flutuantes (números quebrados)

let stringNumeroQuebrado = "3.14"
let numeroQuebrado = parseFloat(stringNumeroQuebrado)

console.log(numeroQuebrado);

// Utilizando o number() * Mais indicado para o uso no dia a dia.

let stringNumero22 = "22"
let numero22 = Number(stringNumero22)
console.log(numero22);

// Utilizar o operador "+" antes do nome da variável que vai ser transformada.

let stringNumero1 = "1991"
let numeroConvertido1 = +stringNumero1

console.log(numeroConvertido1);

// CONVERTENDO NÚMEROS PARA STRINGS

// USANDO toString()

let numero666 = 666
let stringNumero666 = numero666.toString()
console.log(stringNumero666);

// USANDO o String()

let numero33 = 33
let stringNumero33 = String(numero33)
console.log(stringNumero33);
