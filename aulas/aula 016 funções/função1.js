//definir função para ver se o valor é par ou ímpar
function parimp(n){
    if (n%2==0){//se n for divsível por 2 é par, se não, ímpar
        return 'par'
    }
    else{
        return 'impar'
    }
}
let res = parimp(11) //chamada da função atribuindo valor 11 ao parãmetro(n)
console.log(`O valor é ${res}`)// função retorna 'impar'