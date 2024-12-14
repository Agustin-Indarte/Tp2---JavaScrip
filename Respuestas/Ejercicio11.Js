 function Res_Ejerc11 (){
 
   let nombre1 = prompt("Ingresa tu nombre: ")
   let edad1 = +prompt ("Ingresa tu edad: ")

   let nombre2 = prompt("Ingresa el nombre de tu amigo: ")
   let edad2 = +prompt ("Ingresa su edad: ")
   
   let nombre3 = prompt("Ingresa el nombre de tu amiga: ")
   let edad3 = +prompt ("Ingresa su edad: ")

   const Mayor = Math.max(edad1,edad2,edad3)

   switch (Mayor) {
      case edad1:
         document.write(`El mayor es: ${nombre1}`)
         break;

      case edad2:
         document.write(`El mayor es: ${nombre2}`)
         break;
   
      default:
         document.write(`El mayor es: ${nombre3}`)
         break;
   }
}
   


document.getElementById("btn11").addEventListener ("click",Res_Ejerc11)