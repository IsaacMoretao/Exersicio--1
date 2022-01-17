function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.Document.GetElementByID('Imagem')
 // var data = new Date()
// var hora = data.getHours()
  var hora = 13

  msg.InnerHTML = `Agora são ${hora} horas:)`
  if (hora >= 12 && hora < 18) {
    //BOM DIA!!!
    img.src = 'IMG/Manhã.Radio.Png.png'
    console.log(`tarde`)
  } else if (hora >= 12 && hora < 18){
    //BOA TARDE!!!
    img.src = 'IMG/Dia.Radio.Png.png'
    console.log(`tarde`)
  } else  {
    //BOA NOITE!!!
    img.src = 'IMG/Noite.Radio.Png.png'
    console.log(`tarde`)
  } 
}

console.log(`Tá fununciando?`)