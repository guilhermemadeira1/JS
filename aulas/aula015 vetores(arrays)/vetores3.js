let valores = [4,3,2,1]
for(let pos in valores){ /*para cada (pos) em (valores) executar bloco "console.log(valores[pos])"*/
  console.log(valores[pos])/*essa estrutura for faz a variável (pos) armazenar automaticamente o valor dos índices do vetor
  pois é uma estrutura de repetição feita para vetores em javascript*/
}
let pos = valores.indexOf(0) /*o método indexOf() mostra o valor da posição do elemento indicado nos parênteses.*/
console.log(`O valor está na posição ${pos}`)/*se o valor não for encontrado, o indexOf() vai retornar o valor -1.*/
