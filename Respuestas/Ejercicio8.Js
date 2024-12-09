function Res_Ejerc8 (){
   let numero = +prompt("Ingrese un número (no mayor de 50)")

   if (numero>50 || numero<=0 || isNaN(numero)){
      alert("Por favor, ingrese un número valido entre 1 y 50")
      return;
   } 

   
   for (let i = 1; i <= numero; i++) {
      let piramide =""
      for (let j = 1; j <=i; j++){
         piramide+=j
      }
      document.write(piramide + "<br>")
   }

}

document.getElementById("btn8").addEventListener ("click",Res_Ejerc8)