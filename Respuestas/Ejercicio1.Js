function Res_Ejerc1 (){
    let Edad = +prompt("Por favor, ingrese una edad")

    if (Edad>18) {
        document.write("Ya puede conducir")
    } else document.write("No puede conducir")
}

document.getElementById("btn1").addEventListener ("click",Res_Ejerc1)