 function Res_Ejerc13 (){
   let string = prompt ("Por favor, escribe un texto")
   return document.write(string.toUpperCase().trim)
}
   

document.getElementById("btn13").addEventListener ("click",Res_Ejerc13)