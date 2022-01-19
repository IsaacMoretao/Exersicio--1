 function verificar() {
   let add = document.getElementById('add')
   let tab = document.getElementById('tab')


   if (add.value == 0 || add >= 0) {
     window.alert(`[ERRO] O numero ${add.value} não é valido[ERRO]`)

   } else if (add.value < 100) {
     window.alert(`[ERRO] O numero ${add.value} não é valido[ERRO]`)

   } else {
     window.alert('tudo certo :)')
     
   }

 }