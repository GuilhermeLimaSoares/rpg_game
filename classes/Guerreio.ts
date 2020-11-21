import { Personagem } from './../../aula01-classes-construtores/Personagem';

export default class Guerreiro extends Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
        public forca: number,
        public agilidade: number,
        public destreza: number
        ){
        super(nome, energia, vida, ataque, defesa);
    }
}
