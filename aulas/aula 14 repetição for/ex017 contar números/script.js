let txti = document.getElementById('inicio')
let txtf = document.getElementById('fim')
let txtp = document.getElementById('passo')
let botão = document.getElementById('contar')
let msg = document.querySelector('div#mensagem')

/*let i = Number(txti.value)
let f = Number(txtf.value)
let p = Number(txtp.value) assim não funciona*/

botão.addEventListener('click',contar)

function contar(){ 
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)

    if(txti.value.length ==0 || txtf.value.length == 0 || txtp.value.length == 0){
        msg.innerHTML='Impossível contar. Insira os valores'
        window.alert('[Erro] Valores faltando')   
    }
    if(p<=0){
        window.alert('O número de passos não pode ser 0. Consideraremos passo = 1')
        p = 1
        // p = 1 pra não dar erro no navegador ao colocar 0 na estrutura de repetição.
    }
    if(p>f){
      window.alert('O número de passos não pode ultrapassar o valor de chegada.')
      p = 1
    }
    else{  
        msg.innerHTML='Contando:<br>'//<br> pula linha
       
        /*variáveis dentro da função*/

      if(i<f){
        //ordem crescente
        for(let contador = i; contador<=f; contador+=p){ /*contador = contador + p*/    
                msg.innerHTML += ` ${contador} \u{27A1}`//emoji seta.
        //+= faz concatenação 
        }
       msg.innerHTML +=  `\u{1F3C1}`//U+1F3C1 emoji bandeira       
      }
      else if(i>f){
      //ordem decrescente
        for(let contador= i; contador>=f; contador-=p){
            msg.innerHTML += ` ${contador} \u{27A1}`//emoji seta.
          } 
            msg.innerHTML += ` \u{1F3C1}`// emoji de bandeira fora da estrutura de repetição.
        }
    }
}
