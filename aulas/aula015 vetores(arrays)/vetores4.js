let vetor = [1,3,4,2]
vetor.sort() /*organizar em ordem crescente*/
vetor.push(5) /*adicionar valor depois da última posição*/

for(p in vetor){/*mostrar o vaalor de cada posição (p) no vetor*/
    console.log(`O valor ${vetor[p]} está na posição ${p}`)
}
console.log(`--------------------------------`)
console.log(`O primeiro valor do vetor é ${vetor[0]}\ne o último é ${vetor[vetor.length-1]}.\nO vetor tem ${vetor.length} posições`)
console.log(`--------------------------------`)

let val = 7
let pos = vetor.indexOf(val) /*mostrar índice do valor do vetor com base no valor da variável (val)*/

if(pos != -1){ /*valor vetor.indexOf(val) não encontrado retorna -1*/
    console.log(`O valor ${val} está na posição ${pos}`)
}
else{
    console.log(`O valor não foi identificado.`)
}
