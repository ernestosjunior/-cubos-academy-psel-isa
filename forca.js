function solucao(palpite, palavra) {
    let cont = 0;
      for (var i = 0; i < palavra.length; i++) {
          if (palavra[i] === palpite){
          cont = cont + 1
          }
          
      }
      console.log(cont)
  }
      