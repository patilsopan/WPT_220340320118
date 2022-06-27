window.addEventListener("DOMContentLoaded",()=>{

    const num1 = document.querySelector("#num1");
    const num2 = document.querySelector("#num2");
    const multiply= document.querySelector("#multiply");
    const subtract= document.querySelector("#subtract");
    const msg = document.querySelector("#msg");

    multiply.addEventListener('click',()=>{
        let result = num1.value * num2.value;
        msg.innerHTML = result;
        
    });
    
    subtract.addEventListener('click',()=>{
        let result = num1.value - num2.value;
        msg.innerHTML = result;

    });


    

});