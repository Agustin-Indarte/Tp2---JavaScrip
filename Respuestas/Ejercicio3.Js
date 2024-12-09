function Res_Ejerc3 (){
   let continuar;
   let texto=""
   do {
        let entrada = prompt("Ingrese una cadena de texto")
        
        texto+=entrada + " - "

        continuar =confirm("¿Desea continuar?")
   } while (continuar);
   
   document.write (texto)
   
}

document.getElementById("btn3").addEventListener ("click",Res_Ejerc3)