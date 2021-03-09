function solucao(produtos, valorMaximo, avaliacaoMinima) {
    let produtosAprovados=[]
    for (let i in produtos) {
        if (produtos[i].valor <= valorMaximo && produtos[i].avaliacao >= avaliacaoMinima){
           produtosAprovados.push(produtos[i])  
        }
    
    }
  console.log(produtosAprovados)
}
  