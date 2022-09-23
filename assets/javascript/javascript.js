function formShow(){
    setTimeout(() => {
        if(window.location.href.includes("#reg")){
            document.getElementById("login").style.display = "none";
            document.getElementById("register").style.display = "block";
            console.log(window.location.href.includes("#reg"))
        }
    }, 1000);
}


// Nav Bar JS Code For Mobile
function navshow(){
    if (document.getElementById('navbarBasicExample').style.display == 'block'){
        document.getElementById('navbarBasicExample').style.display = 'none';
    }

    else{
        document.getElementById('navbarBasicExample').style.display = 'block';
    }
}

