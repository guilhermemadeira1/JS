var botão = document.querySelector('input#gerartab')

botão.addEventListener('click',gerartabuada)

function gerartabuada(){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if(num.value.length == 0){
        window.alert('Digite um número.')
    }
    else{
        let n = Number(num.value)
        let c = 1
        var msg = document.getElementById('msg')

        tab.innerHTML = ''//limpar tabuada toda vez que gerar uma
        let mult = n*c

        while(c<=10){
             var item = document.createElement('option') //criar elemento <option>
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            c++
            tab.appendChild(item)
            //append.Child() colocar o elemento item dentro da tag select com id tabuada.
        }
        msg.style.padding = '5px'
        msg.innerHTML= `<strong>Tabuada de ${mult}</strong>`
    }
}