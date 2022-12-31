//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
import { Dao } from './Dao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()

let dao: Dao<Concessionaria> = new Dao<Concessionaria>() // Generics
let dao2: Dao<Pessoa> = new Dao<Pessoa>() // Generics

let concessionaria = new Concessionaria('', [])
let pessoa = new Pessoa('', '')

dao.inserir(concessionaria)

dao2.atualizar(pessoa)