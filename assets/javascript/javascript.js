function formShow(){
    setTimeout(() => {
        if(window.location.href.includes("#reg")){
            document.getElementById("login").style.display = "none";
            document.getElementById("register").style.display = "block";
            console.log(window.location.href.includes("#reg"))
        }
    }, 1000);
}


document.querySelectorAll("[idoI]").forEach((ele)=>{
    ele.addEventListener('change', (e)=>{
        ind = ele.getAttribute("idoI")
        document.querySelector(`[ido = "${ind}"]`).classList.remove("hide")
        
    })
})



// Nav Bar JS Code For Mobile
function navshow(){
    if (document.getElementById('navbarBasicExample').style.display == 'block'){
        document.getElementById('navbarBasicExample').style.display = 'none';
    }

    else{
        document.getElementById('navbarBasicExample').style.display = 'block';
    }
}

