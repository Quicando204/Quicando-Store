const botoes = document.querySelectorAll(".botao")
const carrinhoContagem = document.querySelector("#contador")

const produtos = [{id: 1,nome: "Teclado", preco: 50}, {id: 2, nome: "Mouse", preco: 20}, {id: 3, nome: "Monitor", preco: 300}, {id: 4, nome: "Notebook", preco: 1200}]

let carrinho = []
let contador = 0
botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        const id = Number(botao.dataset.id)

        contador ++
        carrinhoContagem.innerHTML = contador

        const idEncontrado = produtos.find((produto) => {
            return produto.id === id 
        })

        carrinho.push(idEncontrado)

        function mostrarProduto (id) {
            const listaDoCarrinho = document.querySelector("#lista-carrinho")

            listaDoCarrinho.innerHTML = ''

            carrinho.forEach((produto) => {
                listaDoCarrinho.innerHTML += `<h3> ${produto.nome} </h3><p> ${produto.preco}€</p>
                <button>Remover</button>`
            })

        }

        function mostrarValorTotalDoCarrinho(){
            const valorTotal = document.querySelector("#total")

            const somaTotal = carrinho.reduce((acc,curr) => acc + curr.preco,0 )

            valorTotal.innerHTML = `${somaTotal}€ `
        }

        

     

        mostrarProduto(id)
        mostrarValorTotalDoCarrinho()
       
    })
})