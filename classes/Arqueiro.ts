import { Personagem } from './../../aula01-classes-construtores/Personagem';

export default class Arqueiro extends Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
        public agilidade: number,
        public precisao: number
        ){
        super(nome, energia, vida, ataque, defesa);
    }
}
