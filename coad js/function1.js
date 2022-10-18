// console.log("aman")
let uname = document.getElementById("img");
let pass = document.getElementById("in");
let email = document.getElementById("out");
let paa = document.getElementById("paa");
let opacity = 0;
let intervalId1 = 0;
let usename = intervalId1;

// function a1(){

//     if(uname.value= usename){
//         alert("yes");
//     }else { alert("jkl");}

// }
function ino() {
    // if(uname.style.display==="none"){
    //     uname.style.display="block";
    // }else{uname.style.display="none";}
    let opacity = Number(window.getComputedStyle(paa).getPropertyValue("opacity"));
    if(opacity>0){
    opacity=opacity-0.1;
    paa.style.opacity=opacity;
    }else{clearInterval(intervalId1)}
    


}
function ade() {
       intervalId1=setInterval(ino,200)
    
}
function adeout() {
    
        intervalId1=setInterval(out,200);
    }
function out(){
    let opacity=Number(window.getComputedStyle(paa).getPropertyValue("opacity"));
    if (opacity<1){
        opacity=opacity+0.1;
        paa.style.opacity=opacity;
    }else{clearInterval(intervalId1)}
}