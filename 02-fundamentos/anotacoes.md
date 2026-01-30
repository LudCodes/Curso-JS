## Fundamentos da linguagem

### Variáveis
São caixinhas que guardam coisas(informações), para serem usadas depois ou alterar valores.

- **Como criar uma variável:**
```js
    let nome = "Ludmila";
```
- **Como mostrar o que tem dentro da variável:**
```js
    console.log(nome);
```
❗O JS olha dentro da "caixinha" e mostra o conteúdo

### Tipos de Dados
- **Number:** Guarda números
```js
    let idade = 20;
```
- **String:** Guarda textos 
```js
    let cidade = Brasília;
```
- **Boolean:** Indica se o valor é verdadeiro(true) ou falso(false)
```js
    let estudando = true;
```
- **Undefined:** Criou a caixinha, mas não colocou nada dentro ainda.
```js
    let idade;
```
- **NULL:** Você decidiu deixar vazio.
```js
    let idade = null;
```
❗O JavaScript é uma linguagem não tipada ou seja, ela não te obriga a declarar o tipo da variável

### VAR, LET E CONST (muito importante)

- let → pode mudar

```js
let idade = 20;
idade = 21;
```

- const → NÃO pode mudar

```js
    const nome = "Ludmila";
```
📌 Use const sempre que o valor NÃO precisar mudar.

- ⚠️ var → Antigo, confuso, pode dar problema.

### Operadores e Expressões
Operadores são símbolos ou palavras que dizem ao programa o que fazer com valores ou variáveis. Expressão é qualquer combinação de valores e operadores que resultam em um valor final.

#### Operadores Aritméticos

| Operador | Descrição | Exemplo |
|----------|----------|----------|
| + | Adição  | let result = 5 + 3  |
| -  | Subtração | let result = 10 - 6 |
| * | Multiplicação  | let result = 5 * 3  |
| /  | Divisão | let result = 10 / 2 |
| % | Módulo(resto)  | let result = 10 % 3  |
| **  | Exponenciação | let result = 10 ** 2 |

#### Operadores de Comparação

| Operador | Descrição | Exemplo |
|----------|----------|----------|
| == | igual a (comparação)  | let isEqual = (x == y) |
| === | igual a (valor e formato) | |
| !== | Diferente de  | let isNotEqual = (x !== y)  |
| >  | maior que | let isGreater = (x > y) |
| < | menor que | let isLess = (x < y) |
| >=  | maior ou igual a | let isGreaterOrEqual = (x == y) |
| <>=  | menor ou igual a | let isLessOrEqual = (x == y) |

#### Operadores Lógicos

| Operador | Descrição | Exemplo |
|----------|----------|----------|
| && | AND logico | if(condicao1 && condicao2) |
| "||" | OR logico | if(condicao1 || condicao2) |
| ! | NOT logico  | if(!condicao)  |

### Coerção de Tipos
- Exemplo
```js
    "10" + 5 
```
→ Resutado: "105"
❗ texto + número = texto