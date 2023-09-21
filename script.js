const btn1 = document.querySelectorAll(".decrease")
const btn2 = document.querySelectorAll(".increase")

btn2.forEach( btn => {
    btn.addEventListener("click" , function(){
        const currentamount = this.closest(".add").querySelector(".one")
        const amountvalue = parseInt(currentamount.textContent)
        
          if (amountvalue <= 1 ){
            currentamount.textContent = amountvalue
        }
        currentamount.textContent = amountvalue + 1
        if(amountvalue >= 9){
            currentamount.textContent = amountvalue
    
        }



    })
})


btn1.forEach( btn => {
    btn.addEventListener("click" , function(){
        const currentamount = this.closest(".add").querySelector(".one")
        const amountvalue = parseInt(currentamount.textContent)
        
        if(amountvalue >= 9){
            currentamount.textContent = amountvalue
    
        } 
        currentamount.textContent = amountvalue - 1

        

         if (amountvalue <= 1 ){
            currentamount.textContent = amountvalue
        }



    })
})













    

 

