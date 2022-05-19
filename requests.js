
function getARandomQuote () {


   let answer = prompt("Who said this: 'When you play the game of thrones, you win or you die. There is no middle ground.'")

   while ( (answer == "") || (answer == " ")){ 
        answer = prompt("Who said this: 'When you play the game of thrones, you win or you die. There is no middle ground.'")
   }

   if(!answer) {
       alert("Saliendo del juego")
       return
   }
   

   if( (answer != "Cersei Lannister") && (answer != "cersei lannister") && (answer != "Cersei Lannister") && (answer != "CERSEI LANNISTER")) {
       alert("Respuesta incorrecta")
   } else {
        alert("Respuesta correcta, sumaste un punto")
   }
}