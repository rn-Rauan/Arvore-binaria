import { No } from "./No";

export class ArvoreBinaria{
    raiz: No | null = null;

    inserir(valor: number): void {
        this.raiz = this.insercaoRecursiva(this.raiz, valor, null);
    }

    private insercaoRecursiva(atual: No | null, valor: number, pai: No | null): No {
        if (atual == null) {
            return new No(valor, pai);
        }

        if (valor < atual.valor) {
            atual.esquerda = this.insercaoRecursiva(atual.esquerda, valor, atual);

        } else if (valor > atual.valor) {
            atual.direita = this.insercaoRecursiva(atual.direita, valor, atual);
        }

        return atual;
    }


    buscar(valor: number): boolean {
        return this.buscarNo(this.raiz, valor) != null;
    }

    private buscarNo(no: No | null, valor: number): No | null {
        if (no == null || no.valor == valor) return no;

        if (valor < no.valor) return this.buscarNo(no.esquerda, valor);

        return this.buscarNo(no.direita, valor);
    }

    exibirEmLargura(): void {
        if (!this.raiz) return;

        const fila: No[] = [this.raiz];
        const valores: number[] = [];
        while(fila.length > 0) {
            const noAtual = fila.shift();
            valores.push(noAtual!.valor);

            if(noAtual?.esquerda) fila.push(noAtual.esquerda);
            if(noAtual?.direita) fila.push(noAtual.direita);
        }

        console.log("Valores em largura: " + valores.join(" "));
    }

    exibirPreOrdem(): void {
        const resultado = this.preOrdemLista(this.raiz);
        console.log("Pré-ordem:", resultado.join(" "));
    }

    private preOrdemLista(no: No | null, lista: number[] = []): number[] {
        if (no) {
            lista.push(no.valor);
            this.preOrdemLista(no.esquerda, lista);
            this.preOrdemLista(no.direita, lista);
        }
        return lista;
    }

    exibirEmOrdem(): void {
        const resultado = this.emOrdem(this.raiz);
        console.log("Em ordem:", resultado.join(" "));
    }

    private emOrdem(no: No | null, lista: number[] = []): number[] {
        if (no) {
            this.emOrdem(no.esquerda, lista);
            lista.push(no.valor);
            this.emOrdem(no.direita, lista);
        }
        return lista;
    }

    exibirPosOrdem(): void {
        const resultado = this.posOrdem(this.raiz);
        console.log("Pós-ordem:", resultado.join(" "));
    }

    private posOrdem(no: No | null, lista: number[] = []): number[] {
        if (no) {
            this.posOrdem(no.esquerda, lista);
            this.posOrdem(no.direita, lista);
            lista.push(no.valor);
        }
        return lista;
    }

    altura(): number {
        return this.buscarAltura(this.raiz);
    }

    private buscarAltura(no: No | null): number {
        if (no == null) return -1;
        return 1 + Math.max(this.buscarAltura(no.esquerda), this.buscarAltura(no.direita));
    }

    contarElementos(): number {
        return this.contar(this.raiz);
    }

    private contar(no: No | null): number {
        if (no == null) return 0;
        return 1 + this.contar(no.esquerda) + this.contar(no.direita);
    }

    exibirAncestrais(valor: number): void {
        const lista: number[] = [];
        const encontrado = this.buscarAncestrais(this.raiz, valor, lista);

        if (!encontrado) {
            console.log("Elemento não encontrado.");
            return;
        }

        console.log("Ancestrais:", lista.join(" "));
    }

    private buscarAncestrais(no: No | null, valor: number, lista: number[]): boolean {
        if (no == null) return false;
        if (no.valor == valor) return true;

        if (this.buscarAncestrais(no.esquerda, valor, lista)) {
            lista.push(no.valor);
            return true;
        }

        if (this.buscarAncestrais(no.direita, valor, lista)) {
            lista.push(no.valor);
            return true;
        }

        return false;
    }


    exibirDescendentes(valor: number): void {
        const no = this.buscarNo(this.raiz, valor);
        if (!no) {
            console.log("Elemento não encontrado.");
            return;
        }

        const descendentes = this.listarDescendentes(no, []);
        console.log("Descendentes:", descendentes.join(" "));
    }

    private listarDescendentes(no: No | null, lista: number[]): number[] {
        if (no) {
            if (no.esquerda || no.direita) {
                if (no != this.buscarNo(this.raiz, no.valor)) {
                    lista.push(no.valor);
                }
            }
            if (no.esquerda) this.listarDescendentes(no.esquerda, lista);
            if (no.direita) this.listarDescendentes(no.direita, lista);
        }
        return lista;
    }

    nivelDoElemento(valor: number): number {
        return this.nivel(this.raiz, valor, 0);
    }

    private nivel(no: No | null, valor: number, nivel: number): number {
        if (no == null) return -1;
        if (no.valor == valor) return nivel;

        const esquerda = this.nivel(no.esquerda, valor, nivel + 1);
        if (esquerda != -1) return esquerda;

        return this.nivel(no.direita, valor, nivel + 1);
    }

    ehEstritamenteBinaria(): boolean {
        return this.verificarBinaria(this.raiz);
    }

    private verificarBinaria(no: No | null): boolean {
        if (no == null) return true;

        if ((no.esquerda == null && no.direita != null) || (no.esquerda != null && no.direita == null)) {
            return false;
        }

        return this.verificarBinaria(no.esquerda) && this.verificarBinaria(no.direita);
    }

    
} 