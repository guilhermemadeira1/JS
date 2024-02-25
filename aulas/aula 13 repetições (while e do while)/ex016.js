
//----Sem estrutura de repetição:

console.log('Passo 1')
console.log('Passo 2')
console.log('Passo 3')
console.log('Passo 4')
console.log('Passo 5')
console.log('Passo 6')

//----Com estrutura de repetição:

//Com teste lógico 'while()' no início e bloco{} no final:

var contador = 1

while(contador>=6){//teste lógico
    console.log(`Passo ${contador}`)
    contador++ //valor atual da variável contador + 1.
}//bloco

//----Com teste lógico 'while()' no final e bloco no início usando do{}.]

var contador = 1

do{//bloco
    console.log(`Passo ${contador}`)
    contador+=1 //valor atual da variável contador + 1.
}
while(contador<=6)//teste lógico
