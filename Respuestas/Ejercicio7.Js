function Res_Ejerc7 (){
   let edad = +prompt("Ingrese su edad")
   for (let i = edad; i >= 1; i--) {
      document.write (i.toString().repeat(i));
      document.write('<br>')
   }

}

document.getElementById("btn7").addEventListener ("click",Res_Ejerc7)