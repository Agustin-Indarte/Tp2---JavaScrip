 function Res_Ejerc16 (){
  let texto = prompt ("Por favor, ingrese un texto: ")
  textoInvertido = texto.split("").reverse().join("")
  document.write(textoInvertido)
  }

   

document.getElementById("btn16").addEventListener ("click",Res_Ejerc16)