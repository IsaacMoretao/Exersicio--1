 function verificar() {
   let add = document.getElementById('add')
   let tab = document.getElementById('tab')
   let valores = []


   console.log("add", add.value)
   if (add.value <= 0) {
     window.alert(`[ERRO] O numero ${add.value} não é valido[ERRO]`)

   } else if (add.value > 100) {
     window.alert(`[ERRO] O numero ${add.value} não é valido[ERRO]`)

   } 

  if(isNumero(num.value) && !inlista(num.value, valores)){
     valores.push(Number(add.value))
   let item = document.crieateElement('option')
   item.text = `valor${add.value} adicionado`
   tab.appendChild(item)
  }else{
    window.alert('esse numero já existe')
  }
  
 }