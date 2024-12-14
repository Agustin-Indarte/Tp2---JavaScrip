 function Res_Ejerc14 (){
   let texto = prompt("Por favor, ingrese un texto: ")
   textocortado=""
   for (const letra of texto) {
    textocortado+=letra + "-"
   
   } 
   textocortado = textocortado.slice(0, -1);
   document.write(textocortado)
}
   

document.getElementById("btn14").addEventListener ("click",Res_Ejerc14)