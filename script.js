const register = document.querySelector(".register");
register.addEventListener('click', ()=>{
    document.getElementById('form').style.display = "block";
})

let logout = document.getElementById("sign-out");
logout.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("it is working")
})