console.log("hello work");
let lists = document.querySelectorAll(".list");
let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");

// let ul = document.querySelectorAll("#ul li")
// ul.forEach(element => {
//         element.addEventListener("click", e => {
//             //console.log("clicked")
//             // if(e.currentTarget.classList.contains("green")){
//             //     e.target.classList.remove("green")
//             //     console.log("not clicked")

//             // }
//             if (!e.currentTarget.classList.contains("green")) {
//                 element.classList.add("green")
//                 console.log("clicked")}
//             // }else if(e.target.classList.contains("green")){
//             //     element.classList.remove("green")
//             // }
//             else{ul.classList.remove("green")}
            
//         })
//     }
// )
// console.log(ul)
// // btn.addEventListener("click",e=>{
// //     lists.forEach(element=>{
// //         element.classList.toggle("red")
// //     })
// // })
btn.addEventListener("click", e => {
    for (const list of lists) {
        if (list.classList.contains("red")) {
            list.classList.remove("red")
        } else { list.classList.add("red") }
        //list.classList.toggle("red")
    }
})
btn1.addEventListener("click", () => {
    for (const list of lists) {
        list.classList.remove("green")
    }
})
ul.addEventListener("click", e => {
    console.log("clicked")
    lists.forEach(element => {
        if (element.classList.contains("green")) {

            element.classList.remove("green");
            element.classList.add("red")
        }
        e.target.classList.remove("red")
        e.target.classList.add("green")
    })
})
