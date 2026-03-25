const data = require('./dados.json')

//Transformação dos dados

const nomes = data.map((c) => {
    return {nome: c.nome}
})

// console.log(nomes)

const lista2 = data.map((p) => {
    return {nome: p.nome, preco: p.preco, qtd: p.quantidade, valor: p.preco*p.quantidade}
})

// console.log(lista2)

const maior500 = data.filter((p) => p.preco > 500)
// console.log(maior500)

const menor5 = data.filter((p) => p.quantidade < 5)
// console.log(menor5)


//Análise de Dados

const total = data.reduce((acc, p) => {
    return acc + p.preco
},0)
// console.log('Valor total: R$' + total)

const estEletro = data.reduce((acc, p) => {
    if (p.categoria === 'Eletronico'){
        return acc + p.preco
    }
    return acc
},0)
// console.log('Valor total dos Eletronicos: R$' + estEletro)

const mais10 = data.reduce((acc, p) => {
    if (p.quantidade > 10){
        return acc + p.preco
    }
    return acc
},0)
// console.log('Valor total Qtd > 10: R$' + mais10)

const maior = lista2.reduce((a,b) => a.valor > b.valor ? a : b)
// console.log(maior)

const menor = lista2.reduce((a,b) => a.valor < b.valor ? a : b)
// console.log(menor)

const maisC = lista2.reduce((a,b) => a.preco > b.preco ? a : b)
// console.log(maisC)

const maisB = lista2.reduce((a,b) => a.preco < b.preco ? a : b)
// console.log(maisB)

const maiorQuantidade = data.reduce((a,b) => a.quantidade > b.quantidade ? a : b)
// console.log(maiorQuantidade)

const menorQuantidade = data.reduce((a,b) => a.quantidade < b.quantidade ? a : b)
// console.log(menorQuantidade)

const media = data.map((p) => {
    

})

// console.log(media)