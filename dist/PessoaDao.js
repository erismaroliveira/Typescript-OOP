"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.default('', '');
    }
    selecionar(id) {
        console.log('lógica select');
        return new Pessoa_1.default('', '');
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [new Pessoa_1.default('', '')];
    }
}
exports.PessoaDao = PessoaDao;
