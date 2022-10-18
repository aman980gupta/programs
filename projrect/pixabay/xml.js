const url = 'https://jsonplaceholder.typicode.com/comments'

let myAxios = (method, url, body = null) => {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();


        xhr.open(method, url);

        xhr.responseType = "json";

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
            console.log("Error..!!!!!!!!!");
        }

        xhr.send(JSON.stringify(body));

    })


}

// myAxios("GET",url);

myAxios("POST", url, {
    name: "Aman",
    job: "learning"
}).then(res => {
    console.log("Masseage from then res", res);
}).catch(err => {
    console.log("Masseage from catch error", err);
})