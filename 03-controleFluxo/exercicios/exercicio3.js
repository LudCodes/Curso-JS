// Crie uma variável turno com os valores: "manhã", "tarde", "noite". Use o switch para mostrar a mensagem "Bom dia", "Boa tarde", "Boa noite" conforme o valor da variável.

let turno = "noite";

switch (turno) {
    case "manhã":
        console.log("Bom dia devs!");
        break;
    case "tarde":
        console.log("Boa tarde devs!");
        break;
    case "noite":
        console.log("Boa noite devs!"); 
        break;
    default:
        console.log("Turno não reconhecido.");
}