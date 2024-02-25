var idade = 17
if(idade== 1){
    console.log('Você tem 1 ano')
}else{
    console.log(`Você tem ${idade} anos`)
}

if(idade<16){ //1° condição
    console.log('Não vota')
}
else if(idade<18 || idade>=65) { //2° condição
    //o else if é a junção do else e do if indentado.
    
    //o else já parte do pressuposto de que a idade é maior que 16.

    //se idade for acima de 16 e abaixo de 18 OU se for a partir de 65, voto opcional. Se não, é obrigatório.

        console.log('Seu voto é: opcional')
}
else{ //a idade não sendo menor que 18,o voto será obrigatório.
        console.log('Seu voto é: obrigatório')
}
