function Res_Ejerc5 (){
  
  let continuar;
  const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
   do {
      let dni = prompt("Por favor, ingrese su DNI(Sin puntos,guiones ni coma, ej: 444760983)")

      if (dni===null || dni==""){
         alert ("Ingrese un número valido entre 0 y 99999999")
      }


      if (!isNaN(dni) && dni>=0 && dni <=99999999){
         let resto = dni%23
         const letra= letras[resto]

         alert ("El número de DNI: " + (dni) + " tiene como letra: "+ (letra))
         break
      } else alert ("Ingrese un número valido entre 0 y 99999999")


        continuar =confirm("¿Desea continuar?")
   } while (continuar);
   
}

document.getElementById("btn5").addEventListener ("click",Res_Ejerc5)