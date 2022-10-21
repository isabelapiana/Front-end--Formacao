export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    ehIgual(objeto) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto);
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
//# sourceMappingURL=negociacoes.js.map