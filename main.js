function Veiculo(){
    this.combustivel = combustivel;
    this.marca = marca;
    this.valor = valor;
}

function Carro(){
    this.portas = portas;
    this.cambio = cambio;
    this.tetoSolar = tetoSolar;

    Carro.call(this, combustivel, marca, valor);
}

function Moto(){
    this.cilindro = cilindro;
    this.V = V;
    this.potencia = potencia;

    Carro.call(this, combustivel, marca, valor);
}


const tesla = new  Carro("Eletrico", "Tesla", " R$ 389.000,00", "4 portas", "Automático", "Não");

const  hornet = new Moto("Gasolina", "Honda", "R$ 32.900,00", 600, "16V", "102 cv a 12000 rpm") 

const  yamaha = new Moto("Gasolina/Etanol", "Yamaha", "R$ 17.700,00", 149, "8V", "12,4 cv a 7.500 rpm") 