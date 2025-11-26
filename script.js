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

/* CONHECENDO ESTRUTURAS CONDICIONAIS

- Programas que são executados de cima para baixo;
- Com estas estruturas podemos alterar o fluxo de execução;
- O caminho dependerá das condições e comparações.*/

// USANDO IF

// if: Executar um bloco de código, se uma condição for verdadeira.

// SINTAXE: if (condição) {}

// EXEMPLO 01

let idadeMaria = 71

let idadeJoao = 63

if(idadeMaria>idadeJoao){
    console.log("Exemplo de if: Ih rapaz, a Maria é mais velha que o João.");
}

// EXEMPLO 02

let usuario = "Gustavo"

if(usuario == "Gustavo"){
    console.log(`Fala meu camarada ${usuario}, seu casca de bala.`);
}

// USANDO O ELSE IF

// else if: Adiciona uma nova condição, se a condição anterior for falsa.

/* SINTAXE

if (condicao){
}
else if (condicao){
}

*/

// EXEMPLO 01

let logadoTiktok = true

if(logadoTiktok == true){
    console.log("Bem-vindo meu caro desocupado!");
}
else if(logadoTiktok == false){
    console.log("Até que enfim, foi lavar a louça.");
}

// EXEMPLO 02

let nomeUsuaria = "Alice"

if (nomeUsuaria == "Claudia"){
    console.log("Seja bem-vinda, Claudia. Vamos estudar?");
}
else if (nomeUsuaria == "Helena"){
    console.log("Seja bem-vinda, Helena. Vamos estudar?");
}
else if (nomeUsuaria == "Alice"){
    console.log("Seja bem-vinda, Alice. Vamos estudar? ");
    
}

// USANDO O ELSE

/*
else: Executa um bloco de código, se todas as condições anteriores forem falsas.

SINTAXE:

if (condicao){
}
else if (condicao){
}
else {
}

*/

// if e else, só temos 1, no início e outro no final.
// else if, eu posso ter vários ao longo da comparação.

// EXEMPLO 01

let corEscolhida = "Preta"

if (corEscolhida == "Branca"){
    console.log("Ótima escolha! Seu possante será branco.");
}
else if (corEscolhida == "Vermelha"){
    console.log("Caraca feio, teu carro vai ser vermelho!");
}
else{
    console.log("Poxa, só temos duas cores disponíveis no momento. Escolha Branca ou Vermelha.");
}

// EXEMPLO 02

const nota = 69;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("Reprovado");
}

// OPERADORES LÓGICOS

/*
Os operadores lógicos servem para unir duas ou mais comparações.
O resultado final é booleano.
Os operadores são:
&& - AND - E - true se ambos os dois lados forem verdadeiros.
|| - OR - OU - true se pelo menos um dos lados for verdadeiro.
! - NOT - NÃO - este operador inverte a comparação.
*/

// EXEMPLO 01 - && - AND - E

let nomeUsuario1 = "Paulo"
let senhaUsuario1 = 1234

if (nomeUsuario1 == "Paulo" && senhaUsuario1 == 1234){
    console.log("Login efetuado com sucesso!!!");
}
else{
    console.log("Usuário ou senha inválidos.");
}

// EXEMPLO 02 - || - OR - OU

let temDinheiro = false
let temCartao = false

if(temDinheiro == true || temCartao == true){
    console.log("Pode efetuar a compra.");
}
else{
    console.log("Tá liso feio?!?");
}

// EXEMPLO 3 - ! - NOT - NÃO

let estaChovendo = true

if(!estaChovendo){
    console.log("Parece que não está chovendo, que tal uma voltinha de bike?");
}
else {
    console.log("Ih, tá chovendo agora. Melhor deixar isso para depois.");
}

// EXEMPLO 04 - COM && E ||

let idadeParticipante = 20
let temDocumento = true

if (idadeParticipante <= 17 && temDocumento){
    console.log("Menor de idade, mas pode participar do evento.");
}
else if (idadeParticipante <= 17 || !temDocumento){
    console.log("Não pode participar.");
}
else {
    console.log("Pode participar.");  
}

// ESTUTURA CONDICIONAL: SWITCH
/*
- O switch pode ser utilizado para organização de um excesso de else if.
- Cada if seria um case;
- Para cada case, temos de adicionar um break;
- E temos o default, que funciona como um else.

SINTAXE

switch (expressao){
case valor 1:
break

case valor 2:
break

default(Código a ser executado se nenhum dos casos anteriores for correspondido) 
}
*/

// EXEMPLO 01 - Verificar o valor da variável job.

const job = "Engenheiro"

switch (job) {
    case "Programador":
        console.log("Você é programador.");
        break;
    case "Advogado":
        console.log("Você é um advogado.");
        break;
    case "Engenheiro":
        console.log("Você é engenheiro.");
        break;
    default:
        console.log("Profissão não encontrada.");
        break;
}

// EXEMPLO 02 - DIAS DA SEMANA

let dia = 4

switch (dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido!");
}


// INCREMENTO E DECREMENTO: São usados para aumentar ou diminuir o valor de uma variável numérica em +1 ou -1.

// Antes da variável: Quando você usa o operador de incremento ou decremento antes da variável (++variavel ou --variavel), a mudança é feita de forma imediata.

// INCREMENTO

let contagemMais = 5

let resultadoMais = ++contagemMais * 2

console.log(`O resultadoMais ficou: ${resultadoMais}`);
console.log(`O contagemMais ficou: ${contagemMais}`);

// DECREMENTO

let contagemMenos = 5

let resultadoMenos = --contagemMenos * 2

console.log(`O resultadoMenos ficou: ${resultadoMenos}`);
console.log(`O contagemMenos ficou: ${contagemMenos}`);

// Depois da variável: Quando você usa o operador de incremente e decremento depois da variável (variavel++ ou variavel--), o valor incial da variável é usado em qualquer expressão, aí somente depois que é efetuado a mudança.

// INCREMENTO

let contagemMais2 = 6

let resultadoMais2 = contagemMais2++ * 2

console.log(`O resultadoMais2 ficou: ${resultadoMais2}`);
console.log(`O contagemMais2 ficou: ${contagemMais2}`);

// DECREMENTO

let contagemMenos2 = 5

let resultadoMenos2 = contagemMenos2-- * 2

console.log(`O resultadoMenos2 ficou: ${resultadoMenos2}`);
console.log(`O contagemMenos2 ficou: ${contagemMenos2}`);

