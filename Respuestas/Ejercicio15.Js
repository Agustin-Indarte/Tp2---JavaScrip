 function Res_Ejerc15 (){
  let texto = prompt ("Por favor, ingrese un texto: ")
  const vocales= "AEIOUÁÉÍÓÚaeiouáéíóú"
  let contador = 0

    for (const letra of texto) {
      if (vocales.includes(letra)){
        contador+=1
      }
    } document.write(`Se encontraron ${contador} vocales en ${texto}`)
    
  }

   

document.getElementById("btn15").addEventListener ("click",Res_Ejerc15)