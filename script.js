const btn1 = document.querySelector(".decrease")
const btn2 = document.querySelector(".increase")
const count = document.querySelector(".one")


for( let i = 1 ; i <= 9 ; i++){


    let counter = 0

   btn1.addEventListener("click" , ()=>{
        counter--;
        count.textContent = counter ;
        if(count.textContent >= 9){
            count.textContent = 9
        } else if (count.textContent <=0 ){
            count.textContent = 1
        }
    })
    btn2.addEventListener("click" , () =>{
        counter++;
        count.textContent = counter ;
        if(count.textContent >= 9){
            count.textContent = 9
        } else if (count.textContent <=0 ){
            count.textContent = 1
        }
    })
}
