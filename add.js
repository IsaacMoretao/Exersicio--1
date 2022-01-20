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

    if(l.indexOf(Number(n)) != -1) {
      return true
    } else{
      return false
    }
    
  }
   


   if (num.value <= 0) {
     // alerta com valor do campo
     window.alert(`[ERRO] O numero ${num.value} não é válido [ERRO]`);

   } else if (num.value > 100) {
     // alerta com valor do campo
     window.alert(`[ERRO] O numero ${num.value} não é válido [ERRO]`);

   }  else if (isNumero(num.value) && !inlista(num.value, valores)) {
     window.alert(`O numero ${num.value} já está na lista`)

    } else {
     // alerta com valor do campo
     window.alert("tudo certo!");

   }


 }