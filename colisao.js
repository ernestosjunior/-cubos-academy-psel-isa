function solucao(velocidade, aceleracao, distanciaObjeto) {
    let distancia = - velocidade * velocidade / (2 * aceleracao);
      if (distanciaObjeto < distancia){
          console.log("COLISAO A FRENTE")
      }
      else if (distancia === distanciaObjeto){
          console.log("NAO ACELERE")
      }
      else if (distanciaObjeto > distancia){
          console.log("CAMINHO SEGURO")
      }
  }
  