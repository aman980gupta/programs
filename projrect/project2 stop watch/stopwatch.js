let hr=min=sec=ms=0;
let startTimer;

const strtBtn =document.querySelector(".start");
const stopBtn =document.querySelector(".pause");
const resetBtn =document.querySelector(".reset");

start=()=>{
strtBtn.classList. add("active");
strtBtn.classList.remove("stopActive");
stopBtn.classList.remove("stopActive");
function putValue(){
    document.querySelector(".milisec").innerText=ms;
    document.querySelector(".second").innerText=sec;
    document.querySelector(".minute").innerText=min;
    document.querySelector(".hour").innerText=hr ;
}
startTimer= setInterval(()=>{
    ms++;
    ms=ms<10?"0"+ms:ms;
    if(ms==100){
        sec++;
        ms=0;
    }
    if(sec==60){
        min++;
        sec=0;
    }
    if(min==60){
        hr++;
        min=0;

    }
    putValue();
    },10);

}
stopp=()=>{
    strtBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}
reset=()=>{
    
    strtBtn.classList.remove("active");
    stopBtn.classList. remove("stopActive");
    clearInterval(startTimer);
    hr=min=sec=ms=0
}



strtBtn.addEventListener("click",start);
stopBtn.addEventListener("click",stopp);
resetBtn.addEventListener("click",reset);

