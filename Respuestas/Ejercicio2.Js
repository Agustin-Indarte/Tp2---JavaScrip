function Res_Ejerc2 (){
   let continuar;
   do {
        let entrada = prompt("Ingrese una nota(número) de 0 a 10")

        if (entrada === null || entrada ==""){
            alert("No se ingresó ninguna nota. Saliendo...")
            break
            }

        let nota = Number(entrada)


        if (!isNaN(nota) && nota>=0 && nota<=10){
            switch (true) {
                case nota<=2:
                    document.write ("Muy deficiente >:/")
                    break;
                case nota<=4:
                    document.write ("Insuficiente :(")
                    break;
                case nota<=6:
                    document.write ("Suficiente... :/")
                    break;
                case nota===7:
                    document.write ("Bien :|")
                    break;
                case nota<=9:
                    document.write ("Notable :)")
                    break;
                case nota===10:
                    document.write ("Sobresaliente! xD")
                    break;
            }
        } else {
            document.write("número erróneo, introduce un número valido")
        }

        continuar =confirm("¿Desea continuar?")
   } while (continuar); 
   
   
}

document.getElementById("btn2").addEventListener ("click",Res_Ejerc2)