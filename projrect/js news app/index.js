console.log("this is new app from cwh");
let newsCard = document.getElementById("news");
let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6ea36a932fed4b7f890c403e81b36077"
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml="";
        articles.forEach(element => {
            let news = `
        <div class="col my-4" >
            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
            <div class="card-body">
                    <h5 class="card-title">${element["author"]}</h5>
                    <p class="card-text">${element["content"]}</p><br>
                    <p class="card-text">${element["description"]}</p>
                    <a href="${element["url"]}" target=”_blank” class="btn btn-primary">Read news</a>
            </div>
        </div>
        `
        newsHtml+=news;});
        newsCard.innerHTML=newsHtml;
    }
};
xhr.send();

// let newsCard = document.getElementById("news");
// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open("GET", "https://alpha-vantage.p.rapidapi.com/query?function=FX_INTRADAY&interval=5min&to_symbol=USD&from_symbol=EUR&datatype=json&outputsize=compact");
// xhr.setRequestHeader("x-rapidapi-host", "alpha-vantage.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "04c470cd01msh831f8996477f72cp13a215jsnf4d62775aab8");

// xhr.send();








        //let json = JSON.parse(this.responseText);
        // let articles = json.articles;
        // let newsHtml="";
        // articles.forEach(element => {
        //     let news = `
        // <div class="col my-4" >
        //     <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //             <h5 class="card-title">${element["author"]}</h5>
        //             <p class="card-text">${element["content"]}</p><br>
        //             <p class="card-text">${element["description"]}</p>
        //             <a href="${element["url"]}" target=”_blank” class="btn btn-primary">Read news</a>
        //     </div>
        // </div>
        // `
        // newsHtml+=news;});
        // newsCard.innerHTML=newsHtml;