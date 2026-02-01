## Estrutura de Repetição (`for, while, do-while`)
Elas servem para **repetir um bloco de código** sem precisar escrever a mesma coisa várias vezes.

> “Enquanto algo for verdadeiro, continue repetindo.”
> 

### `for` -- Quando você sabe quantas vezes vai repetir

-Estrutura base
```js
for (início; condição; passo) {
  // código
}
```

| Parte | O que faz |
| --- | --- |
| Início | cria o contador |
| condição | decide se continua |
| passo | atualiza o contador |

Exemplo simples:
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//console:
//1
//2
//3
//4
//5
```

Como funciona:
```js
i começa em 1
1 <= 5? sim → mostra 1
i vira 2
2 <= 5? sim → mostra 2
...
5 <= 5? sim → mostra 5
6 <= 5? não → para
```
Exemplo com `array`

```js
let frutas = ["maça","banana","pera","uva"];

for (let i = 0; i < frutas.length; i++){
	console.log(frutas[2]);
}

//pera
//pera
//pera
//pera

```
❗Ele repete a quantidade de vezes compativel com a quantidade de variaveis;

| Código      | O que faz              | Exemplo | Resultado |
| ----------- | ---------------------- | ------- | --------- |
| `i = i + 1` | Soma 1 ao valor        | `i = 5` | `i = 6`   |
| `i += 1`    | Soma 1 (atalho)        | `i = 5` | `i = 6`   |
| `i++`       | Soma 1 automaticamente | `i = 5` | `i = 6`   |


#### Quando usar `for`

- Quando você sabe o início e o fim
- Quando percorre listas (arrays)
- Quando usa contador (`i`)

### `while` — quando NÃO sabe quantas vezes vai repetir

- Estrutura base
```js
while (condição) {
	//codigo
}
```

Exemplo simples:

```js
let energia = 5;

while (energia > 0) {
	console.log("Atacando");
	energia--;
}	
```
Como funciona:
```js
energia > 0? sim → ataca
energia vira 4
energia vira 3
...
energia vira 0
0 > 0? não → para

//console:
//Atacando
//Atacando
//Atacando
//Atacando
//Atacando
```

Exemplo pratico

```js
let senha = "1234";
let tentativa = "";

while (tentativa !== senha) {
  tentativa = prompt("Digite a senha:");
}
console.log("Acesso liberado");
```


☝🏾 O loop continua até acertar a senha


#### Quando usar `while`

- Quando depende de uma condição
- Quando a repetição não tem número fixo

### `do...while` —  Quando o código **precisa rodar pelo menos uma vez**.

-Estrutura base
```js
do {
	//código
} while (condição);
```
→ A condição é verificada depois


Exemplo simples

```js
let numero =6;

do {
console.log(numero);
}while (numero <=5);

//console: 6
```

→ mesmo sendo falso é executado pelo menos uma vez 

Exemplo prático
```js
let opcao;

do {
  opcao =Number(prompt("Digite 1 para sair"));
}while (opcao !==1);

console.log("Programa encerrado");

```
→ O menu aparece pelo menos uma vez.
 

→ Loops servem para **automatizar repetição**
→ Evitam código repetido
→ São essenciais em **arrays, jogos, desafios e sistemas**
