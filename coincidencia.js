function solucao(jogadas) {
    let count = 0;
    for (let number of jogadas){
        if (number === 0) count++; 
    }
    result = count === jogadas.length / 2
    console.log(result)
            
}
