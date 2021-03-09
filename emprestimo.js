function solucao(ganhos, serasaScore, mesesParaPagar) {
    if (serasaScore < 300){
      let juros = 0.03
      let parcela = ((ganhos * 3) + (ganhos * juros)) / mesesParaPagar
      console.log(parcela)
    }
      else if (serasaScore < 700){
      let juros = 0.09
      let parcela = ((ganhos * 3) + (ganhos * juros)) / mesesParaPagar
      console.log(parcela)
      }
      else if (serasaScore >= 700){
      let juros = 0.15
      let parcela = ((ganhos * 3) + (ganhos * juros)) / mesesParaPagar
      console.log(parcela)
      }
  }
  