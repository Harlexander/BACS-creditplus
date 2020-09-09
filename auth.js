{
    auth.onAuthStateChanged(user => {
        if(user){
            console.log("you are online");
        }else{
            console.log("u are offline")
        }
    })
}
{
        const register = document.querySelector("#register");
       register.addEventListener('submit', (e)=>{
           e.preventDefault();

           const email = register['email'].value;
           const password = register['password'].value;

           auth.createUserWithEmailAndPassword(email, password).then(()=>{
               location.href = "home.html";
           });
       });
}
// auth for registration
    //auth to login user
  