function Res_Ejerc10 (){
 let fila = +prompt("Por favor, ingrese un número de fila: ")
 let columna = +prompt("Por favor, ingrese un número columna: ")
   
   if (isNaN(fila)|| fila<0 || isNaN(columna)|| columna<0  ) {
      alert("Ingrese un número valido mayot que 0")
   } else {
      let total =fila*columna
      
      document.write('<table border="1" style="border-collapse; text-align:center";>')

         for (let indicefila = 0; indicefila < fila; indicefila++) {
            document.write('<tr>');
            for (let indicecolumna = 0; indicecolumna < columna; indicecolumna++) {
               document.write('<td>' + total + '</td>');
               total--;
               
            }
            document.write('</tr>');
         }

      document.write('</table>')

   }

}
   


document.getElementById("btn10").addEventListener ("click",Res_Ejerc10)