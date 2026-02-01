## Controle de Fluxo

Imagine que o JavaScript é uma criança que você está ensinando a decidir:
- Se estiver chovendo → pegue o guarda-chuva
- Senão → saia sem guarda-chuva

⁜ Isso é controle de fluxo.

---

### if -- "SE" (SE isso for verdade, faça isso.)

- Estrutura base
```js
    if (condição){
        //Código que roda se a condição for verdadeira
    }
```

- Exemplo1 - true
```js
   let idade = 20;

if (idade >= 18) {
  console.log("Você é maior de idade");
}
```
- Exemplo2 - false
```js
   let idade = 15;

if (idade >= 18) {
  console.log("Você é maior de idade");
}
```
→ Se true, o código executa
→ Se false, o código é ignorado

### else -- "SENÃO" (O else acontece quando o if não passa.)

- Estrutura base
```js
if (condição){
    //código se for verdadeiro
}else {
    //código se for falso
}
```
- Exemplo
```js
   let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade");
}else {
    console.log("Você é menor de idade")
}
```
→ Agora o JS sempre vai tomar uma decisão

### else if -- "SENÃO SE" (Usado quando exisre várias possibilidades)

- Estrutura base
```js
if (condição1){
    //código se a condição 1 for verdadeiro
}else if (condição2) {
    //código se a condição 2 for verdadeira
} else {
    //código se todas as condições forem falsas.
}
```

- Exemplo
```js
let nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```
→ O JavaScript lê o código de cima para baixo. Quando encontra uma condição verdadeira, ele para.

---

### Estrutura de decisão (Switch case)
É como um menu de escolhas usado para dizer ao computador: "Olhe para esse valor e escolha um caminho entre várias opções possíveis."

- Estrutura base
```js
switch (valor) {
    case opcao1:
        //código
        break;
    case opcao2:
        //código
        break;
    default:
        //código
}
```
1. `switch (valor)` 

```js
switch (cor)
```


👉🏾O JS pega **apenas esse valor** e compara com cada `case`



- O switch usa comparação **estrita (===).**
- O tipo e valor precisam ser iguais.

2. `case` (os caminhos possíveis)
```js
case "vermelho":
```
Significa: “Se o valor for exatamente isso, faça o código abaixo”

3. `break` 
```js
break;
```
Significa: “Pare aqui. Não execute os próximos casos”

4. `default` (caso nenhuma bata)
```js
default:
```
Funciona como um `else`. “Se nenhum for igual, execute isso.”

Exemplo 1
```js
let cor = "azul";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelho");
    break;

  case "azul":
    console.log("A cor é azul");
    break;

  case "verde":
    console.log("A cor é verde");
    break;

  default:
    console.log("Cor desconhecida");
}

//console: A cor é azul
```

Exemplo 2 (com `if, else if` )
```js
//com if

if (dia === 1) {
  console.log("Domingo");
} else if (dia === 2) {
  console.log("Segunda");
} else if (dia === 3) {
  console.log("Terça");
}
```
```js
//com switch

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
}
```

Exemplo 3 (fazendo sozinha)
```js
let fruta = "maça"

switch (fruta) {
	case "uva":
		console.log("Vamos fazer um suco de uva")
		break;
		
	case "maça + banana":
		console.log("Vamos fazer uma vitamina de maça com banana")
        break;
        
    case "banana":
    case "morango":
    	console.log("Vamos fazer uma vitamina de banana")
        break;
        
	default:
    	console.log("Você não trouxe nenhuma fruta.")
}
//Você não trouxe nenhuma fruta
```

💡Você pode ter mais de uma case dentro de um mesmo escopo.



💡É possível concatenar dentro das cases


