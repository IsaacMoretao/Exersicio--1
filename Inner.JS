function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementsByClassName('Imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas:)`
  if (hora >= 5 && hora < 11) {
    //BOM DIA!!!
    img.src = 'IMG/Manhã.Radio.Png.png'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!!!
    img.src = 'IMG/Dia.Radio.Png.png'
  } else {
    //BOA NOITE!!!
    img.src = 'IMG/Noite.Radio.Png.png'
  }
}
