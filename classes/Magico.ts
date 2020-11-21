import { Personagem } from './../../aula01-classes-construtores/Personagem';

export default class Magico extends Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
        public intelecto: number,
        public agilidade: number
        ){
        super(nome, energia, vida, ataque, defesa);
    }
}
