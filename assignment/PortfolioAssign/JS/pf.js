//hi-스크롤 효과
const content = "안녕하세요!\n제 이름은 유하린 입니다.\n자기소개 페이지에 오신걸 환영합니다!"

const text = document.getElementById("typing");
let index = 0;
let txt = "";

function typing(){
    if(index < content.length){
    txt += content[index];
    text.innerText = txt;
    index++
    }
}
setInterval(typing,330);

//클릭 시 관련된 페이지 부분으로 이동
let hiBtn = document.getElementById("hi");
    portBtn = document.getElementById("portfolio");
    infBtn = document.getElementById("information");
    interBtn = document.getElementById("interest");
    contBtn = document.getElementById("contact");

    hiBtn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('hi-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    infBtn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('information-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    portBtn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('portfolio-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    interBtn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('interest-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    contBtn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('contact-page').scrollIntoView({behavior: "smooth", block: "start"})
    });


    let hi2Btn = document.getElementById("hi-2");
        port2Btn = document.getElementById("portfolio-2");
        inf2Btn = document.getElementById("information-2");
        inter2Btn = document.getElementById("interest-2");
        cont2Btn = document.getElementById("contact-2");

    hi2Btn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('hi-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    inf2Btn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('information-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    port2Btn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('portfolio-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    inter2Btn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('interest-page').scrollIntoView({behavior: "smooth", block: "start"})
    });

    cont2Btn.addEventListener('click',function(ev){
        ev.preventDefault();
        document.getElementById('contact-page').scrollIntoView({behavior: "smooth", block: "start"})
    });