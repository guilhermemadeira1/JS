/*se não definirmos os valores na chamada, eles reberão valor (undefined)*/

function soma(n1=0,n2=0){/*caso n1 ou n2 não forem definidos, ambos receberão valor = 0*/
    return n1+n2
}
console.log(soma(1))/*colocar apenas 1 valor, a função soma retorna um valor NaN(não número)*/

/*1+0 = 1*/