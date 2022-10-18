console.log("hii js project");
const colors = ["green", "red", "rgb(133,222,200)", "#f15085", "rgb(77,99,92)"];
const btn = document.getElementById("btn1");
const span1 = document.querySelector(".span1");
let randomNumber = () => Math.floor(Math.random() * colors.length);
const value=document.querySelector("#span2")
let count=0
const bfr = document.querySelectorAll(".btn")
console.log(bfr);

btn.addEventListener("click", () => {
    console.log(randomNumber());
    document.body.style.backgroundColor = colors[randomNumber()];
    span1.textContent = colors[randomNumber()];
});
btn.addEventListener("click",function(){
    let hrex = "a";
    console.log("clcicked")
})

bfr.forEach(function (element){
    element.addEventListener("click",(e)=>{
        const style= e.currentTarget.classList;
    if(style.contains("decs")){
        count--;
        console.log(count);
        value.textContent=count
    }else if(style.contains("increase")){
        count++;
        console.log(count);
        value.textContent=count
    }else if(style.contains("reset")){
        count=0;
        console.log(count)
        value.textContent=count
        
    }
    }
)})