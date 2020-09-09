{
    const login = document.querySelector("#sign-in");
    login.addEventListener('submit', (e)=>{
        e.preventDefault();

        const email = login['username'].value;
        const password = login['password'].value;

        auth.signInWithEmailAndPassword(email, password).then(()=>{
            location.href = "home.html";
            console.log("login successful")
        })
    })  
    } 