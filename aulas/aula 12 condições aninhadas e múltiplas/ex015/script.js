function verificar(){
    var dataatual= new Date()
    var anoatual = dataatual.getFullYear()

    var anonasc = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')


    if(anonasc.value.length == 0 || anonasc.value > anoatual){
        window.alert('[ERRO] Insira um ano válido.')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(anonasc.value)
        var gênero = '' //recebe string vazia
        var imagem = document.createElement('img') //cria e armazena o elemento de imagem na variável.
        imagem.setAttribute('id','foto')


        if(fsex[0].checked){ //se o primeiro estiver marcado.
            gênero= 'homem'

            if (idade>= 0 && idade<11){
                //criança
            imagem.setAttribute('src','menino.png')
            }
            else if(idade<21){
            //jovem
            imagem.setAttribute('src','homem-jovem.png')
            }
            else if(idade<60){
            //adult0
            imagem.setAttribute('src','homem-adulto.png')
            }
            else{
            //idoso
            imagem.setAttribute('src','idoso.png')

            }
        }

        else if(fsex[1].checked){ //se o segundo estiver marcado.
            gênero= 'mulher'

            if(idade>=0 && idade<11){
            //criança
            imagem.setAttribute('src','menina.png')
            }
            else if(idade<21){
            //jovem
            imagem.setAttribute('src','mulher-jovem.png')
            }
            else if(idade<60){
            //adulta
            imagem.setAttribute('src','mulher-adulta.png')
            }
            else{
            //idosa
            imagem.setAttribute('src','idosa.png')
            }
        }
       
        res.style.textAlign= 'center'
        if(idade>=0 && idade<11){

            if(gênero=='homem'){
                 res.innerHTML= `Detectamos um menino com ${idade} anos de idade.`
            }
            else if(gênero=='mulher'){
                res.innerHTML= `Detectamos uma menina com ${idade} anos de idade.`
            }
        }
        else if(idade<21){

            if(gênero=='homem'){
                res.innerHTML=`Detectamos um rapaz com ${idade} anos de idade`
            }
            else if(gênero=='mulher'){
                res.innerHTML=`Detectamos uma moça com ${idade} anos de idade.`
            }
        }
        else if(idade<60){

            if(gênero=='homem'){
                res.innerHTML=`Detectamos um homem com ${idade} anos de idade.`
            }
            else if(gênero=='mulher'){
                res.innerHTML=`Detectamos uma mulher com ${idade} anos de idade.`
            }
        }
        else{

            if(gênero=='homem'){
                res.innerHTML=`Detectamos um idoso com ${idade} anos de idade.`
            }
            else if(gênero=='mulher'){
                res.innerHTML=`Detectamos uma idosa com ${idade} anos de idade.`
            }

        }
        res.appendChild(imagem)
        if(fsex[0].checked){
            document.body.style.background='#92bce8'
        }
        else if(fsex[1].checked){
            document.body.style.background='#ebb2be'
        }


    }
}
function selecionar(){
    var res = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex')
    res.style.textAlign='center'

    if(fsex[0].checked){
        res.innerHTML= 'Você selecionou: sexo masculino.'
    }
    else if(fsex[1].checked){
        res.innerHTML='Você selecionou: sexo feminino.'
    }

}


