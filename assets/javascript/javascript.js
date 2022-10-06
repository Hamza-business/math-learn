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
    try{
        document.querySelector('.trans').classList.remove("showNot");
    }catch{
        return ""
    }
    
}
setTimeout(() => {
    try{
        document.getElementById('pops-conatainer').style.display = 'none';
        document.querySelector('.trans').classList.remove("showNot");
    }catch{
        return ""
    }
    
}, 10000);


function payWayShow(){
    let clicko = document.getElementById("selectedShow");
    clicko.classList.toggle("active");
    let iconro = document.getElementById("iconro");
    iconro.classList.toggle("active");
    let paySection = document.getElementById("section");
    paySection.classList.toggle("active");
}

function payouts(){
    try{
        let clicko = document.getElementById("selectedShow");
        let payo = document.getElementById("payWay");
        let ta = document.getElementById("taxs");
        let elese = document.querySelectorAll(".paywayo");
        elese.forEach((ele)=>{
            ele.addEventListener("click",()=>{
                let pa1 = ele.querySelectorAll(".togeto")[0];
                let ta1 = ele.querySelectorAll(".togeto")[1];
                payo.innerHTML = pa1.textContent
                ta.innerHTML = ta1.textContent
                elese.forEach((el)=>{
                    el.classList.remove("active")
                })
                ele.classList.add("active")
            })
        })
    }catch(e){

    }
}
payouts()



function questionChecker(){
    try{
        let ques =  document.querySelectorAll(".quistion");
        ques.forEach((ele)=>{
            ele.addEventListener("click",(e)=>{
                ques.forEach((es)=>{
                    es.classList.remove("activeQ")
                })
                ele.classList.add("activeQ")
            })
        })
    }catch(res){
        return res
    }
}
questionChecker()


function answerActive(){
    try{
        let asnes =  document.querySelectorAll(".ans");
        asnes.forEach((ele)=>{
            ele.addEventListener("click",(e)=>{
                asnes.forEach((es)=>{
                    es.classList.remove("active")
                })
                ele.classList.add("active")
            })
        })
    }catch(res){
        return res
    }
}
answerActive()



function persentCheck(){
    let perVal = document.getElementById("persent").textContent;
    let perNu = document.getElementById("persent")
    document.getElementById("pNum").classList.add(`p${perVal.replace("%","")}`)
    let athc = document.getElementById("atchiv") 
    let r = document.querySelector(':root');
    if(+perVal.replace("%","") <= 100 && +perVal.replace("%","") >=70){
        perNu.classList.add("isgT");
    }
    else if(+perVal.replace("%","") < 70 && +perVal.replace("%","") >=30){
        perNu.classList.add("iswT");
        r.style.setProperty('--coloredit', '#ecbd00');
    }
    else{
        perNu.classList.add("isrT");
        r.style.setProperty('--coloredit', '#ff3333');
    }
}




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



function timer(){
    let timer = document.getElementById("timer");
    setInterval(() => {
        try{
            if(timer.textContent == "0"){
                window.location = "/";
            }else{
                timer.textContent = +timer.textContent - 1
            }
        }catch{} 
    }, 1000);
}
timer()






// Nav Bar JS Code For Mobile
function navshow(){
    if (document.getElementById('navbarBasicExample').style.display == 'block'){
        document.getElementById('navbarBasicExample').style.display = 'none';
    }

    else{
        document.getElementById('navbarBasicExample').style.display = 'block';
    }
}

