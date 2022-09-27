document.body.querySelector(".navbar").innerHTML +=`
<div class="navbar-brand">
    <a class="navbar-item logo" href="/">
        <img src="/assets/images/logo.png">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onclick="navshow()" wfd-invisible="true">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</div>

<div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <a class="navbar-item" href="/"><i class="fas fa-home"></i> الرئيسية</a>
        
        <a class="navbar-item" href="/lect"><i class="fas fa-tv"></i> المحاضرات</a>
    </div>

    <div class="navbar-end">
        <div class="navbar-item">
            <a class="navbar-item" href="/account"><i class="fas fa-user-circle"></i> حسابي</a>
            <div class="buttons">
                <a class="button is-red is-outlined" href="/login">تسجيل دخول</a>
                <a class="button is-primary is-outlined" href="/login/#reg" onclick="formShow()">حساب جديد</a>
            </div>
        </div>
    </div>
</div>`

try{
    document.body.querySelector(".footer").innerHTML +=`
    <div class="container has-text-right">
        <div class="columns">
            <div class="column is-7">
                <img src="/assets/images/logo.png">
                <p class="has-text-right">ذاكر لي رياضيات مع مستر احمد الفراخري
                نظام متابعه متكامل لشرح وتبسيط ماده الرياضيات للمرحله الثانوية
                لا تيأس فالطريق طويل والوصول اليه حلم جميل </p>
                <div class="location">
                    <a class="locationLink" href="">
                        <i class="fas fa-map-marker-alt"></i><label>الموقع</label></a>
                </div>
                <div class="is-flex">
                    <a class="social1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="social1" href="https://www.youtube.com/channel/UCwosrv5OsO8ex3wHlpuh76Q/about"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            
            <div class="column is-5"> 
                <div>  
                    <p class="subtitle is-5">روابط هامة</p>
                    <div class="is-flex is-justify-content-space-between">    
                        <li><a href="/privacyPolicy/">سياسة الخصوصية</a></li>
                        <li><a href="/terms/">الشروط والاحكام</a></li>
                        <li><a href="/login/#reg" onclick="formShow()">إنشاء حساب</a></li>
                        <li><a href="/login/">تسجيل الدخول</a></li>
                    </div>
                    <hr>
                    <p class="subtitle is-5">تواصل معنا</p>
                    <div>
                        <li><a href="tel:01280474106"><i class="fas fa-phone-alt"></i>01280474106</a></li>
                        <li><a href="mailto:"><i class="fas fa-envelope"></i>contact@math.com</a></li>
                    </div>
                </div>
            </div>
            
        </div>
    </div>`
    
    
    document.body.querySelector(".licens").innerHTML +=`
    <div class="container is-fluid">
    <div class="has-text-centered">
        <p class="subtitle is-6">
            تم تصميم المنصة والشعار بواسطة <a href="https://www.facebook.com/hamza.elkotp.1/">حمزة القطب</a>
            والتطوير بواسطة <a href="https://www.linkedin.com/in/mmostafa261">محمد مصطفى</a> <br>
            جميع الحقوق محفوظة &copy;
        </p>
    </div>
    </div>`
}catch(re){
    re
}



