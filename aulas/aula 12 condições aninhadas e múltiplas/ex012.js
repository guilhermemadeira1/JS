var hora = 1

if(hora>=5 && hora<=12){
    console.log('Bom dia!')
}
else if(hora>=13 && hora<=18){
    console.log('Boa tarde!')
}
else if(hora>=19 && hora<=23){
    console.log('Boa noite!')
}
else if(hora<=4){
    console.log('Boa madrugada!')
}

if(hora==1){
    console.log(`Agora são 1:00 hora.`)
}
else if(hora>1 && hora<=9){
    console.log(`Agora são 0${hora}:00 horas`)
}
else{
    console.log(`Agora são ${hora}:00 horas.`)
}
