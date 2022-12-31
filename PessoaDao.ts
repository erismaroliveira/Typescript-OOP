import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {

    nomeTabela?: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('lógica insert')
        return true
    }

    atualizar(object: Pessoa): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): Pessoa {
        console.log('lógica delete')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        console.log('lógica select')
        return new Pessoa('', '')
    }

    selecionarTodos(): [Pessoa] {
        console.log('lógica getAll')
        return [new Pessoa('', '')]
    }
}