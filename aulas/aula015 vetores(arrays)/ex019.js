var numtxt = document.querySelector("input#inputnum")
var num = Number(numtxt)
var botãoAd = document.querySelector("input#Ad")
var botãoFin = document.querySelector("input#Fin")
var botãoLimp = document.querySelector('input#Limp')
var msg = document.querySelector("div#mensag")
var caixaVal = document.querySelector("select#caixaDeVal")
var lista = []

botãoAd.addEventListener("click", adicionar)
botãoFin.addEventListener("click",finalizar)
botãoLimp.addEventListener("click", limpar)

function é_num1a100(n){
    //n = numtxt.value em adicionar()

    if (Number(n) >=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}

function está_naLista(n,l){
    //n = numtxt.value, l = lista, em adicionar()
    if (l.indexOf(Number(n)) != -1){
        // index -1 = valor não encontrado no vetor
         return true
    }
    else{
        return false
    }
}


function adicionar(){
 
    //parâmetros (n) e (n,l):
    if(é_num1a100(numtxt.value) && !está_naLista(numtxt.value, lista)){
  
        lista.push(Number(numtxt.value))//adicionar valor na lista

        let Val = document.createElement('option')
    
        Val.setAttribute('value','')
        Val.setAttribute('id', 'val')
        //adicionar atributo value às options e definir texto vazio
        Val.text = `valor ${numtxt.value} adicionado`
        //atribuir texto às options com valor de num em seguida
    
        caixaVal.appendChild(Val)
        //adicionar valor(option) na caixa de valores

    }
    else if(está_naLista(numtxt.value, lista)){
        alert(`Valor ${numtxt.value} já encontrado na lista`)
    }
    else if(numtxt.value.length == 0){
        //.length mostra o número de caracteres em strings
        alert('Formulário vazio')
    }
    else{
        alert(`Valor inválido`)
    }
     //ao adicionar apagar e selecionar input
     numtxt.value = ''
     numtxt.focus()
 
     //limpar div de texto
     msg.innerHTML = ''
     //tornar div msg invisível
     msg.style.display = 'none'
}

function finalizar(){

    if(lista.length == 0){
        alert("Adicione valores")
    }
    else{
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let totalVal = lista.length

        for(let pos in lista){
            soma += lista[pos]//somar todos os valores da lista

            if (lista[pos] < menor){
                menor= lista[pos]
            }
            if (lista[pos] > maior){
                maior= lista[pos]
            }
        }
        let media = soma/totalVal

        msg.innerHTML += 
        `<p> Ao todo, temos ${totalVal} valores</p>
        <p>O menor valor é ${menor}</p>
        <p>O maior valor é ${maior}</p>
        <p>A soma de todos os valores é ${soma}
        <p>A média de todos os valores é ${media}`

        //tornar div msg visível
        msg.style.display = 'block'
    }
}
function limpar(){
    
    location.reload()
}