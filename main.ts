import Personagem from "./Personagem";
import prompt from "prompt-sync";

let person: Personagem = new Personagem("Sansa Stark", 100, 40, 20, 20);
let person2: Personagem = new Personagem("John Snow", 50, 10, 70, 25);
let person3: Personagem = new Personagem("Aria Stark", 100, 40, 20, 20);

let teclado = prompt();
let option: number = 0;
let getNome = prompt();
let personagemAtual = '';

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
             personagemAtual = getNome("Digite o nome do personagem atual: ")

            switch(personagemAtual) {
                case 'Sansa Stark': 
                    person.treinarAtacar();
                    console.log(person.status());
                
                case 'John Snow':
                    person2.treinarAtacar();
                    console.log(person2.status());
                case 'Aria Stark':
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
            let rest: number = person.batalhar();
            console.log(`Esta batalha custo ${rest} de energia`);

            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Ops! Morreu!");



function escolherPersonagem(nome: string) {

}