console.log("This is for news");
const key ="6ea36a932fed4b7f890c403e81b36077";
const xhr = new XMLHttpRequest();

let cards = document.querySelector(".news_section")



const categorys = document.querySelectorAll(".category")
categorys.forEach(elm=>{
    elm.addEventListener("click",(e)=>{
        let html = "";
        const category = elm.innerHTML;
        const urls = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
        const open = xhr.open("GET",urls,true);
        xhr.onload = function() {
            let res =this.responseText;
            if(this.status == 200){
                let x =(JSON.parse(res)).articles;
                for(let i = 0; i< x.length;i++){
                    html +=`
                    <div class="card">
                        <img src="${x[i].urlToImage}" class="card-img-top" alt="No Image">
                        <div class="card-body">
                            <h3 class="card-author">${x[i].author}</h3>
                            <h5 class="card-title">${x[i].title}</h5>
                            <h5 class="card-publishedAt">${x[i].publishedAt}</h5>
                            <h5 class="card-content">${x[i].content}</h5>
                            <p class="card-description">${x[i].description}</p>
                            <button><a href="${x[i].url}" target="_blank" class="btn btn-primary">Read More</a></button>
                        </div>
                    </div>
                    `
                }
                cards.innerHTML = html;
            }
        }
        xhr.send();
    })
})


