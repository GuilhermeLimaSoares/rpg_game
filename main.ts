import prompt from "prompt-sync";
import Arqueiro from "./classes/Arqueiro";
import Guerreiro from "./classes/Guerreio";
import Magico from "./classes/Magico";

let person: Magico = new Magico("Sansa Stark", 100, 409, 20, 20, 60, 90);
let person2: Guerreiro = new Guerreiro("John Snow", 50, 230, 70, 25, 50, 23);
let person3: Arqueiro = new Arqueiro("Aria Stark", 100, 405, 20, 20, 24, 13);

let teclado = prompt();
let option: number = 0;
let getNome = prompt();
let personagemAtual = "";

while (option != 9 || person.isDead()) {
  console.log("+========= Personagem =============+");
  console.log("|1. Treinar ataque                 |");
  console.log("|2. Treinar defesa                 |");
  console.log("|3. Descansar                      |");
  console.log("|4. Entrar em batalha              |");
  console.log("|8. Imprimir atributos             |");
  console.log("|9. Sair                           |");
  console.log("+==================================+");

  option = +teclado("Escolha uma ação: ");

  switch (option) {
    case 1:
      personagemAtual = getNome("Digite o nome do personagem atual: ");

      switch (personagemAtual) {
        case "Sansa Stark":
          person.treinarAtacar();
          console.log(person.status());

        case "John Snow":
          person2.treinarAtacar();
          console.log(person2.status());
        case "Aria Stark":
          person3.treinarAtacar();
          console.log(person3.status());
      }

      break;
    case 2:
      person.treinarDefesa();
      console.log(person.status());
      break;
    case 3:
      let horas: number = +teclado("Digite o número de horas: ");
      person.descansar(horas);
      console.log(person.status());
      break;
    case 4:
      let batalhadores = [];
      batalhadores[0] = teclado("Digite o nome do primeiro lutador: ");
      batalhadores[1] = teclado("Digite o nome do segundo lutador : ");
      console.log(batalhadores);
      batalha(
        retornarPersonagem(batalhadores[0]),
        retornarPersonagem(batalhadores[1])
      );
      break;
    case 8:
      personagemAtual = teclado("Digite o nome do personagem atual: ");

    if (personagemAtual == "Sansa Stark") {
        console.log(person.status());
    } else if(personagemAtual == "John Snow"){
        console.log(person2.status());
    } else {
        console.log(person3.status());
    }
      break;
    default:
      break;
  }
}
console.log("Ops! Morreu!");

function retornarPersonagem(personagem: any) {
  if (personagem == "Sansa Stark") {
    console.log("personagem nome: ", person.nome);
    return person;
  } else if (personagem == "John Snow") {
    console.log("personagem nome: ", person2.nome);
    return person2;
  } else {
    console.log("personagem nome: ", person3.nome);
    return person3;
  }
}

function batalha(lutador1: any, lutador2: any) {
  if (lutador1.getPoderTotal > lutador2.getPoderTota) {
    console.log('Lutador 1 venceu!');
    lutador2.vida = lutador2.vida - (lutador1.getPoderTotal() - lutador2.getPoderTotal());
    console.log(`${lutador2.nome} perdeu ${lutador1.getPoderTotal() - lutador2.getPoderTotal()} de vida`);
  
  } else {
    console.log("Lutador 2 venceu!");
    lutador1.vida = lutador1.vida - (lutador2.getPoderTotal() - lutador1.getPoderTotal());
    console.log(`${lutador1.nome} perdeu ${lutador2.getPoderTotal() - lutador1.getPoderTotal()} de vida`);
  
  }
}
