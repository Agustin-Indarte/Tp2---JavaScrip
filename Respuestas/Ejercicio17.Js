 function Res_Ejerc17 (){
  let texto = prompt ("Por favor, ingrese un texto: ")
  const vocales= "AEIOUÁÉÍÓÚaeiouáéíóú"

  for (let i = 0; i < texto.length; i++) {
    
    if (vocales.includes(texto[i])){
      document.write(`La primera vocal de ${texto} esta en la posición ${i+1} `)
      break
    }
  }

  }

   

document.getElementById("btn17").addEventListener ("click",Res_Ejerc17)