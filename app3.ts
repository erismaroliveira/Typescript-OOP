import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Veloster', 3)
carro.acelerar()
carro.acelerar()

let moto = new Moto()
moto.acelerar()
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log(carro)
console.log(moto)
console.log(concessionaria.fornecerHorariosDeFuncionamento())