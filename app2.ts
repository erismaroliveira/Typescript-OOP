import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* ---- Criar carros ---- */
let carroA = new Carro('Dodge journey', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('Cerato', 4)

/* ---- Montar lista de carros da concessionaria ---- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* ---- Exibir lista de carros ---- */
console.log(concessionaria.mostrarListaDeCarros())

/* ---- Comprar o carro ---- */
let cliente = new Pessoa('João', 'Veloster')
console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())
