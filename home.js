    // auth for logout
    const signOut = document.querySelector("#sign-out");
    signOut.addEventListener('click', (e)=>{
        e.preventDefault();
        auth.signOut().then(()=>{
            location.href = "FrontPage.html"
        })
    });
    