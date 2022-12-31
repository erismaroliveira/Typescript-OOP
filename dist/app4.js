"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
const Dao_1 = require("./Dao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
let dao = new Dao_1.Dao(); // Generics
let dao2 = new Dao_1.Dao(); // Generics
let concessionaria = new Concessionaria_1.default('', []);
let pessoa = new Pessoa_1.default('', '');
dao.inserir(concessionaria);
dao2.atualizar(pessoa);
