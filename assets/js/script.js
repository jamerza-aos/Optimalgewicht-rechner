function Submit(){

    event.preventDefault();

    let input1 =document.getElementById("körper").value ;
    let input2 =document.getElementById("alter").value
    let breite = document.getElementById("briete")
    let schmale =document.getElementById("schmale")
    let res =" "

     if (schmale.checked){
         res = [(input1 - 100) + (input2 / 10)] * 0.9 * 1.1
         
     document.getElementById("result").innerHTML =` <h1>Deine idealgewicht ist</h1> ${res}  KG.`
    }  
    else {
        res = (input1 - 100) + (input2/ 10)*0.9 * 0.9
       document.getElementById("result").innerHTML = ` <h1>Deine idealgewicht ist</h1>  ${res}  KG. `
   }  
        
    
    
} 
