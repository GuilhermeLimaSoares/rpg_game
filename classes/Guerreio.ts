import { Personagem } from './../Personagem';

export default class Guerreiro extends Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
        public forca: number,
        public agilidade: number
        ){
        super(nome, energia, vida, ataque, defesa);
    }

    getPoderTotal(){
        return this.energia + this.ataque + this.defesa + this.forca + this.agilidade;
    }
}
