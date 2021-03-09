function solucao(stringCorrompida) {
	let frase = stringCorrompida
    let result1 = frase.replace("!", "")
    let result2 = result1.replace("@","")
    let result3 = result2.replace("#","")
    let result4 = result3.replace("$","")
    let result5 = result4.replace("%","")
    let result6 = result5.replace("&","")
    let result7 = result6.replace("*","")
    let result8 = result7.replace("(","")
    let result9 = result8.replace(")","")
    console.log(result9)
}


