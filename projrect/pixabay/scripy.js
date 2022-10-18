let xml = new XMLHttpRequest()
let url = "pixa.json"
let divFOrData ="";
let divFOrDTATransfer = document.querySelector(".content");

    const xhr= new XMLHttpRequest();
    xhr.open("GET",url,true);
    // xhr.onreadystatechange=function() {
    //     if(this.status==200){
    //         let data= JSON.parse(this.responseText)
    //         console.log(data)
    //     }
    // }
    xhr.onload=function(){
       let data= JSON.parse(this.responseText)
       console.log(data.hits.length)
       for(let i=0;i<data.hits.length;i++){
           divFOrData +=`
           <div class="obj">
           <div class="img"><img src="${data.hits[i].largeImageURL}" alt=""></div>
           <div class="details">
               <h4>${data.hits[i].tags}</h4>
               <h4>${data.hits[i].user}</h4>
           </div>

       </div>
           `
           divFOrDTATransfer.innerHTML=divFOrData;
           
         }

    }
    
    xhr.send()

    let images =document.getElementsByTagName("img")
    for(let i=0;i<images.length;i++){
        images[i].addEventListener("click",()=>{
            console.log("clicked")
        })
    }
    
