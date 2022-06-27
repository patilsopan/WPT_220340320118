window.addEventListener("DOMContentLoaded",()=>{

    const register = document.querySelector("#register");
    const login = document.querySelector("#login");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const location = document.querySelector("#location");
    const msg = document.querySelector("#msg");

    register.addEventListener('click',()=>{
        console.log("register button clicked!");

            if(email.value=='a' && password.value=='b' && location.value=='c'){
                msg.innerHTML = "Registraion Failed";
            }else{
                msg.innerHTML = "Registraion Succeeded";
            }

    });

    login.addEventListener('click',()=>{
            console.log("login button clicked!");

    });


    

});