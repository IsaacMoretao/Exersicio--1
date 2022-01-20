 function adicionar() {

   let num = document.getElementById('num')
   let lista = document.getElementById('flista')
   let valores = []

 
   function isNumero(n){
     if(Number(n) >= 1 && Number(n) <= 100){
      return true

     } else {
      return false

     }
   }

   function inlista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
      return true
    } else{
      return false
    }
    
  }
   
   if (num.value <= 0) {
     window.alert(`[ERRO] O numero ${num.value} não é válido [ERRO]`);

   } else if (num.value > 100) {
     window.alert(`[ERRO] O numero ${num.value} não é válido [ERRO]`);

   }
   
   if (isNumero(num.value) || !inlista (num.value, valores)) {

    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `valor ${num.value} adicionado`
    lista.appendChild(item)
    
    } else {
     window.alert(`O valor ${num.value} Já está na lista`);

   }

 }