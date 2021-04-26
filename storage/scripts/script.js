let button = document.getElementById('button');

// localStorage.setItem("counter", 1)

button.onclick = () =>{
    if(!localStorage.getItem("counter")){
        localStorage.setItem("counter", 1)
    }else{
        localStorage.setItem("counter", parseInt(localStorage.getItem("counter")) + 1)
        let local = document.getElementById("local")
        local.innerHTML = localStorage.getItem("counter")
    }

    if(!sessionStorage.getItem("counter")){
        sessionStorage.setItem("counter", 1)
    }else{
        sessionStorage.setItem("counter", parseInt(sessionStorage.getItem("counter")) + 1)
        let session = document.getElementById("session")
        session.innerHTML = sessionStorage.getItem("counter")
    }
}