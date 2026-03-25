const veiculos = []

class Veiculo {
    #id; #marca; #modelo; #preco; #disponivel

    constructor(id, marca, modelo, preco){

        if (!marca || marca.length<2 || !modelo || modelo.length<2 || preco<=0){
            return console.error('Ocorreu um erro')
        }

        this.#id = id;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#preco = preco;
        this.#disponivel = true;
        veiculos.push(id, marca, modelo, preco, true)

    }

    getId(){
        return this.#id
    }

    getMarcaModelo(){
        return {marca: this.#marca, modelo: this.#modelo}
    }

    getPreco(){
        return this.#preco
    }

    setPreco(preco){
        return this.#disponivel == true ? this.#preco = preco : console.error('Erro ao setar preço')
    }

    getAvailability(){
        return this.#disponivel
    }

    vender(){
        if (this.#disponivel == true){
            this.#disponivel = false
            console.log('Veiculo vendido!')
        }
        else{
            console.log('Erro ao vender')
        }
    }

    retornar(){
        return this.#disponivel == false ? this.#disponivel = true : console.error('Ocorreu um erro')
    }

    exibirDados(){
        return {
            id: this.#id,
            marca: this.#marca,
            modelo: this.#modelo,
            preco: this.#preco,
            disponivel: this.#disponivel
        }
    }

}

class Carro extends Veiculo {
    constructor(id, marca, modelo, preco, portas){
        if (portas<=0){
            console.error("Ocorreu um erro")
        }
        
        super(id, marca, modelo, preco)
        this.portas = portas 
    }

}

class Moto extends Veiculo {
    constructor(id, marca, modelo, preco, cilindradas){
        if (cilindradas <= 0 || cilindradas < 50 && cilindradas > 2000){
            console.error('Ocorreu um erro')
        }

        super(id, marca, modelo, preco)
        this.cilindradas = cilindradas

    }

}

const c1 = new Carro(1, 'Ford', 'KA', 45000, 4)
console.log(c1.exibirDados())

c1.setPreco(40000)
console.log(c1.exibirDados())

c1.vender()
console.log(c1.exibirDados())

c1.retornar()
console.log(c1.exibirDados())

const m1 = new Moto(1, 'Royal Enfield', 'Hunter 350', 25000, 350)
console.log(m1.exibirDados())

m1.vender()
m1.vender()

m1.setPreco(0)
