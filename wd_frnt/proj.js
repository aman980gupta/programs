// let sum=0;
// for(let i=0;i<=20;i++){
//     console.log("value of i "+i);
//     sum+=i;
//     console.log("value of sum every time"+ sum);

// }
window.addEventListener("scroll",()=>{
    let header=document.querySelector(".navBar");
    header.classList.toggle("sticky",window.scrollY>0);
    let topBar=document.querySelector("body");
    
})
let topBar=(document.querySelector("body")).scrollHeight;
console.log(topBar)