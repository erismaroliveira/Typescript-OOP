import Carro from './Carro'

export default class Pessoa {
    private nome?: string
    private carroPreferido?: string
    private carro?: Carro

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string | undefined {
        return this.nome
    }

    public dizerCarroPreferido(): string | undefined {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro | undefined {
        return this.carro
    }
}