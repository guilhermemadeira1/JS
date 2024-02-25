var dia = new Date;
var hora = dia.getHours()+1; //acertar hora

function carregar(){

    var msg = window.document.getElementById('mensagem')
    var i1 = window.document.querySelector('div#manha')
    var i2 = window.document.querySelector('div#tarde')
    var i3 = window.document.querySelector('div#noite')

    //var data = new Date
    //var hora = data.getHours()


    msg.innerHTML=`Agora são ${hora} horas.`

    if (hora>0 && hora<=12){

      msg.innerHTML=`Agora são ${hora}h da manhã`

      if(hora==12){
        msg.innerHTML=`Agora são meio-dia`
      }

       i1.style.visibility='visible'
       i2.style.display='none'
       i3.style.display='none'

       document.body.style.background='#fce889'

    }
    else if(hora>=12 && hora<=18){

      msg.innerHTML=`Agora são ${hora}h da tarde`

      i1.style.display='none'
      i2.style.visibility='visible'
      i3.style.display='none'
      
      document.body.style.background='#ed9a4e'
    }
    else{
      msg.innerHTML=`Agora são ${hora}h da noite`
      if(hora==0){
        msg.innerHTML=`Agora são meia-noite`
      }

      i1.style.display='none'
      i2.style.display='none'
      i3.style.visibility='visible'
      
      document.body.style.background='#1b242b'
    }
  }