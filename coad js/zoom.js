let z =document.getElementById("img");
 let interalid =0;
 let width=100;
let d=50;
// z.style.width=width;
function oe(){
 interalid= setInterval(ope,200);
//  clearInterval(interalid)

    
}
function ope(){
    if(width<600){
        width=width+d;
        document.getElementById("img").style.width =width;
        console.log(width)
    }else{clearInterval(interalid);}
}

function ou(){
    console.log("aman")
}
