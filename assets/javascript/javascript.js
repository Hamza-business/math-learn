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


document.querySelectorAll(".clocker").forEach((els, index)=>{
    els.addEventListener('click', (e)=>{
        els.nextSibling.nextSibling.classList.toggle("shower");
        document.querySelectorAll(".toy")[index].classList.toggle("rotat");
    })
})



function preload(){
    setTimeout(() => {
        document.getElementById('pops-conatainer').style.display = 'block';
        document.querySelector('.trans').classList.add("showNot");
    }, 500);
}
document.onclick = function(){
    document.querySelector('.trans').classList.remove("showNot");
}
setTimeout(() => {
    document.getElementById('pops-conatainer').style.display = 'none';
    document.querySelector('.trans').classList.remove("showNot");
}, 20000);



function sortShow(){
    if (document.getElementById('ul2').style.display == 'none'){
        document.getElementById('ul2').style.display = 'block';
        document.getElementById('angleD2').style.display = 'inline';
        document.getElementById('angleL2').style.display = 'none';
    }

    else{
        document.getElementById('ul2').style.display = 'none';
        document.getElementById('angleL2').style.display = 'inline';
        document.getElementById('angleD2').style.display = 'none';
    }
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

