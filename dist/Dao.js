"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = '';
    }
    inserir(object) {
        console.log('lógica insert');
        return true;
    }
    atualizar(object) {
        console.log('lógica update');
        return true;
    }
    remover(id) {
        console.log('lógica delete');
        return Object();
    }
    selecionar(id) {
        console.log('lógica select');
        return Object();
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [Object()];
    }
}
exports.Dao = Dao;
