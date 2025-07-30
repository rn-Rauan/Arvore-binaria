import { ArvoreBinaria } from "./Arvore";

const arvore = new ArvoreBinaria();

const valores = [50, 30, 70, 20, 40, 60, 80];
for (const v of valores) {
    arvore.inserir(v);
}

console.log("\n=== Exibições ===");
arvore.exibirEmLargura();
arvore.exibirPreOrdem();
arvore.exibirEmOrdem();
arvore.exibirPosOrdem();

console.log("\n=== Altura ===");
console.log("Altura da árvore:", arvore.altura());

console.log("\n=== Contagem ===");
console.log("Total de elementos:", arvore.contarElementos());

console.log("\n=== Ancestrais ===");
arvore.exibirAncestrais(20);
arvore.exibirAncestrais(70);
arvore.exibirAncestrais(100);

console.log("\n=== Descendentes ===");
arvore.exibirDescendentes(30);
arvore.exibirDescendentes(70);
arvore.exibirDescendentes(20);

console.log("\n=== Nível de elementos ===");
console.log("Nível do 50:", arvore.nivelDoElemento(50));
console.log("Nível do 30:", arvore.nivelDoElemento(30));
console.log("Nível do 20:", arvore.nivelDoElemento(20));
console.log("Nível do 100:", arvore.nivelDoElemento(100));

console.log("\n=== Estritamente Binária ===");
console.log("É estritamente binária?", arvore.ehEstritamenteBinaria());