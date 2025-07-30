export class No {
    public valor: number;
    public pai: No | null = null;
    public esquerda: No | null = null;
    public direita: No | null = null;

    constructor(valor: number, pai: No | null = null) {
        this.valor = valor;
        this.pai = pai;
    }
}