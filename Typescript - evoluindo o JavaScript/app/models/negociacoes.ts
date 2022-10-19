import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { //ReadonlyArray - quando quero disponibilizar uma lista apenas de leitura (não permite adição ou remoção)
        return this.negociacoes;
    }

}
