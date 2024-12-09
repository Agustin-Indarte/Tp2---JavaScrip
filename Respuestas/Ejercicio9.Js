function Res_Ejerc9 (){
  
   for (let i = 1; i <=500; i++) {
      document.write(i)
         if (i%4===0){
            document.write(" es multiplo de 4")
         }

         if (i%9===0){
            document.write(" es multiplo de 9")
         }
         document.write('<br>')
         if (i%5===0){
            document.write('<hr>')
         }


      }
      
   }


document.getElementById("btn9").addEventListener ("click",Res_Ejerc9)