function Res_Ejerc6 (){
  
   for (let i = 1; i <= 30; i++) {
      document.write (i.toString().repeat(i));
      document.write('<br>')
   }

}

document.getElementById("btn6").addEventListener ("click",Res_Ejerc6)