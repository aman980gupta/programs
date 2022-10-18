console.log("Hello");
let x = [];


// let ancorTags = 
// document.getElementsByClassName("changeColour")={}
document.getElementById("a1").addEventListener("click", () => {
    // console.log("yes")
});
let cnacolo = Array.from(document.getElementsByClassName("changeColour"));
// console.log(cnacolo)
// cnacolo.addEventListener("clcik",()=>{
//     cnacolo.tar
// })


// Array.from(document.getElementsByClassName("changeColour")).forEach((element) => {
//     element.addEventListener("click", (e) => {
//         e.target.classList.add("changeColourq");
//         console.log("clciked");
//         x.push(e.target.classList);




//     });
    // element.addEventListener("mouseleave",(e)=>{
    //     e.target.classList.remove("changeColourq");
    //     console.log("mou")
    // })

// });

// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
Array.from(document.getElementsByClassName("forToggel")).forEach((element) => {
    element.addEventListener("click", (e) => {
        // if (e.target.classList === undefined) {

        //     e.target.classList.add("changeColourq");
        //     x.push(e.target.classList);
        // } else {
        //     e.target.classList.remove("changeColourq");
        //     x=[];
        // }
        x.push(e.target.classList);
    })
})
// console.log(Array.from(document.getElementsByClassName("forToggel")));



