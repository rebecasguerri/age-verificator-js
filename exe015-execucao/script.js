function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res= document.querySelector('div#res')
   
   if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRor] VERIFIQUE OS DADOS E TENTE NOVAMENTE')

   }else{
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
          genero = 'homem'
          if (idade >0 && idade < 10){
             img.setAttribute('src', 'imagens/foto-crinca-H.jpg')
          }else if( idade < 21){
            img.setAttribute('src', 'imagens/foto-jovem-H.jpg')
          }else if (idade < 40 ){
            img.setAttribute('src', 'imagens/foto-adulto-H.jpg')
          }else{
            img.setAttribute('src', 'imagens/foto-idoso-H.jpg')
          }
            
      }else if (fsex [1].checked){
         genero= 'mulher'
         if (idade >0 && idade < 10){
            img.setAttribute('src', 'imagens/foto-crinca-M.jpg')
        }else if( idade < 21){
            img.setAttribute('src', 'imagens/foto-jovem-M.jpg')
        }else if (idade < 40 ){
            img.setAttribute('src', 'imagens/foto-adulto-M.jpg')
        }else{
            img.setAttribute('src', 'imagens/foto-idoso-M.jpg') 
        }

      } res.style.textAlign = 'center'
      img.style.padding = '5px'
      res.innerHTML = `Dectamos ${genero} com ${idade} anos. `
      res.appendChild(img)

   }
}