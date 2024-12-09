function Res_Ejerc4 (){
   let continuar;
   let suma=0
   do {
        let entrada = +prompt("Ingrese un número")
        
        if (!isNaN(entrada)){
         suma+=(entrada)
        } else alert("No es un número")

        continuar =confirm("¿Desea continuar?")
   } while (continuar);
   
   document.write (suma)
   
}

document.getElementById("btn4").addEventListener ("click",Res_Ejerc4)