function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('Imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas:)`
  if (hora >= 5 && hora < 11) {
    //BOM DIA!!!
    img.src = 'IMG/Manhã.Radio.Png.png'
    document.body.style.background = 'rgb(255, 150, 89)'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!!!
    img.src = 'IMG/Dia.Radio.Png.png'
    document.body.style.background = 'rgb(140, 177, 246)'
  } else {
    //BOA NOITE!!!
    img.src = 'IMG/Noite.Radio.Png.png'
    document.body.style.background = 'rgb(16, 56, 129)'
  }
}