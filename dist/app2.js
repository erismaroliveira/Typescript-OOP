"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* ---- Criar carros ---- */
let carroA = new Carro_1.default('Dodge journey', 4);
let carroB = new Carro_1.default('Veloster', 3);
let carroC = new Carro_1.default('Cerato', 4);
/* ---- Montar lista de carros da concessionaria ---- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* ---- Exibir lista de carros ---- */
console.log(concessionaria.mostrarListaDeCarros());
/* ---- Comprar o carro ---- */
let cliente = new Pessoa_1.default('João', 'Veloster');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
