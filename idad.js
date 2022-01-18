function verificar() {
  var Data = new Date()
  var Ano = Data.getFullYear()
  var Tano = document.getElementById('TextAno')
  var res = document.getElementById('Result')
  res.style.textAlign = 'center'

  if (Tano.value.length == 0 || Tano.value > Ano) {
    window.alert(`[Erro] O ano "${Tano.value}" não é valido, por favor Tente novamente :) [Erro]`)

  } else {

    var Fsex = document.getElementsByName('sex')
    var idade = Ano - Number(Tano.value)
    res.innerHTML = `Idade cauculada: ${idade} Ano(s)`
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

  if (Fsex[0].checked) {
        gênero = 'Homem'

      if (idade >= 0 && idade < 15) {
          //criança
          img.setAttribute('src', 'IMG/Menino.png')
      } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'IMG/Homem.png')
      } else {
          //idoso
          img.setAttribute('src', 'IMG/Idoso.png')
      }

    } else if (Fsex[1].checked) {
      gênero = 'mulher'
      if (idade >= 0 && idade < 18) {
        //criança
        img.setAttribute('src', 'IMG/Menina.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'IMG/Mulher.png')
      } else {
        //idosa
        img.setAttribute('src', 'IMG/Idoso.png')
      }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s)`
    res.appendChild(img)
  }
}